'use client'
import React, { useEffect, useState } from 'react';

function Ai(props) {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');
    const [isLoading, setIsLoading] = useState(false);

  

    return (
        <div>
            {isLoading ? <div style={{ textAlign: "center" }}>AI Answer is Generating....:</div> : null}
            {!isLoading ? (
                <div style={{ padding: '5px' }} >
                    <b>AI Generated Answer:</b>
                    <p style={{ textAlign: 'justify' }} >{response}</p>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
}

export default Ai;
