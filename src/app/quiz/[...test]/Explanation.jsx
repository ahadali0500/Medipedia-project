import React, { useState } from 'react'
import { Modal } from 'react-responsive-modal';
import '../../components/modal.css';

export default function Explanation(props) {
    const [exp, setexp] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const onexpModal = () => {
        setexp(true);
    }
    const onCloseexp = () => setexp(false);


    if (props.reason == "") {
        <></>
    } else {
        return (
            <>
                <div style={{ float: 'left' }}>
                    <button onClick={onexpModal}  className="btn btn-cus btn-md">Author Explanation <i className="fa fa-info-circle" /></button>
                </div>
                <Modal open={exp} onClose={onCloseexp} center>
                    <div style={{ padding: '15px' }} >
                        <br></br>
                        {!isLoading ? (
                            <div style={{ padding: '15px' }} >
                                <b>Author Explanation:</b>
                                <p style={{ textAlign: 'justify' }} >{props.reason}</p>
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                </Modal>
            </>
        )
    }
}
