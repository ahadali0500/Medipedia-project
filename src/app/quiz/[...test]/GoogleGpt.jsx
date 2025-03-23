'use client'
import { useState, useEffect } from 'react';
//  import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import '../../components/modal.css';
import Ai from '../../components/Ai';
import Link from 'next/link';

export default function GoogleGpt(props) {
    console.log(props);
    const [gpt, setGpt] = useState(false);
    const [google, setGoogle] = useState(false);
    const [frame, setframe] = useState(false);
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [framelink, setframelink] = useState('');


    const onGptModal = () => {

        fetchResponse()

    }

    const onGoogleModal = () => {

        fetchData();
    }


    function openFrames(link) {
        // setframe(true)
         setframelink(link)
        // setGoogle(false);
        window.open(framelink, '_blank'); // Open the link in a new tab
        console.log(link);
    }

    const onCloseGpt = () => setGpt(false);
    const onCloseGoogle = () => setGoogle(false);
    const onCloseframe = () => {
        setframe(false)
        setframelink('')
        setGoogle(true);
    }
    const fetchData = async () => {
        try {
            setLoading(true)
            const apiKey = 'AIzaSyBL4c8q63-Tuq0f5JWgXVRZEkD0iIRX9H4';
            const searchEngineId = '74ef92dbf72f04cfd';
            const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&q=${encodeURIComponent(props.Ques.ques)}`;

            const response = await fetch(url);
            const data = await response.json();

            if (data.items) {
                setResults(data.items);
            } else {
                setResults([]);
            }
            setLoading(false);
            setGoogle(true);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    };


    useEffect(() => {
        // fetchData();
    }, []);


    const fetchResponse = async () => {
        setIsLoading(true);
        var query = `${props.Ques.ques} Options are ${"A:" + props.Ques.op1}, ${"B:" + props.Ques.op2}, ${"C:" + props.Ques.op3}, ${"D:" + props.Ques.op4}, ${props.Ques.op5 == '' ? '' : "E:" + props.Ques.op5 } Give the right answer and explain in detail`;
        const requestBody = {
            "prompt": {
                "messages": [{ "content": query }]
            },
            "temperature": 0.25,
            "candidateCount": 1,
            "topP": 1,
            "topK": 1
        }

        try {
            const response = await fetch('https://generativelanguage.googleapis.com/v1beta2/models/chat-bison-001:generateMessage?key=AIzaSyAO8MAGludzlMvzk8X6NCum0z8K7PoZvcg', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            //console.log(data.candidates[0].content)
            setResponse(data.candidates[0].content); // Adjust according to the actual response structure
            setGpt(true);
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            setResponse('Failed to fetch data.');
        } finally {
            setIsLoading(false);
        }
    };




    return (
        <>
            <div style={{ display: 'flex', }} >
                <div>
                    <button onClick={onGoogleModal} style={{ marginRight: '5px' }} className="btn btn-cus btn-md">
                        <img data-bs-toggle="tooltip" title="Generate Answer with Google" style={{ width: '23px', cursor: 'pointer' }} src='/assets/images/google-logo.png' alt="Google Logo"></img>  {loading ? "Searching..." : "Search"}
                    </button>
                </div>
                <div style={{ float: 'left' }}>
                    <button onClick={onGptModal} style={{ marginRight: '5px' }} className="btn btn-cus btn-md">
                        <img data-bs-toggle="tooltip" title="Generate Answer with AI" style={{ width: '23px', cursor: 'pointer' }} src='/assets/images/chatgpt-logo.png' alt="ChatGPT Logo"></img> {isLoading ? "Generating....." : "AI Explanation"}
                    </button>
                </div>

                <Modal open={gpt} onClose={onCloseGpt} center>
                    <div style={{ padding: '15px' }} >
                        <br></br>
                        {!isLoading ? (
                            <div style={{ padding: '15px' }} >
                                <b>AI Generated Answer:</b>
                                <br></br>
                                <div style={{lineHeight: '25px',textAlign: 'justify', marginTop: '20px'}} dangerouslySetInnerHTML={{ __html: response }} />
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                </Modal>
                <Modal open={google} onClose={onCloseGoogle} center>
                    <div style={{ padding: '20px' }} className="search-results">
                        <b>Google base answer:</b>
                        {results.map((item, index) => (
                            <div key={index} className="search-result">
                                <div style={{cursor:'pointer'}} onClick={() => openFrames(item.link)} className="result-title">{item.title}</div>
                                <p className="result-snippet">{item.snippet}</p>
                            </div>
                        ))}
                    </div>
                </Modal>
                <Modal open={frame} onClose={onCloseframe} center>
                    <iframe src={framelink} height="800" width="100%"></iframe>
                </Modal>
            </div>
        </>
    );
}
