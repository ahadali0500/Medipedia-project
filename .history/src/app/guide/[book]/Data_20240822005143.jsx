'use client'
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { apiUrl } from '../../config/constant';
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Data(props) {

   

    const { data: session, status, update } = useSession();
    const [isLoading, setIsLoading] = useState(true);
    const [openIndex, setOpenIndex] = useState(-1); // State to track which item's modal is open
    const router = useRouter();


    const [code, setcode] = useState("");
    const [loading, setLoading] = useState(false);
    const [codeError, setcodeError] = useState("");
    const [error, setError] = useState("");
    const inputRef = useRef(null);


    useEffect(() => {
        setIsLoading(false);
    }, []);

    const handleOpenModal = (index) => {
        setOpenIndex(index);
    };

    const handleCloseModal = () => {
        setOpenIndex(-1);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const inputValue = inputRef.current.value;

        setError("");
        setcodeError("");

        let isValid = true;

        if (!code.trim()) {
            setcodeError("Book code is required");
            isValid = false;
        }

        if (isValid) {
            setLoading(true);
            try {
                const formData = new FormData();
                formData.append("book_id", inputValue);
                formData.append("code", code);
                formData.append("user_id", session.user.id);

                const response = await fetch(`${apiUrl}/code-verify.php`, {
                    method: 'POST',
                    body: formData,
                });
                const data = await response.json();
                console.log(formData)
                if (data.Success == "true") {
                    toast.success('code verified successfuly!');
                    handleCloseModal();
                    router.push(`/guide/${props.preparams}`);

                } else if (data.Success == "false") {
                    toast.success('code already verified successfuly!');
                    handleCloseModal();
                    router.push(`/guide/${props.preparams}`);
                } else {
                    toast.error('Invalid code!');
                }
            } catch (error) {
                //setError('Something went wrong');
                console.log(error)
            }
            setLoading(false);

        }
    };

    if (status === "loading") {
        return (
            <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
        )
    }

    return (
        <>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                props.value && props.value.length === 0 ? (
                    <div>No data available</div>
                ) : (
                    props.value.map((object, i) => (
                        <div key={i} className="col-lg-4">
                        <div className='box-shadow'>
                            {object.bcs === null ? (
                                <>
                                    <div className="courses-category-single-item text-center">
                                        <h3
                                            onClick={() => handleOpenModal(i)}
                                            style={{ cursor: 'pointer' }}>
                                            {object.book_name}
                                        </h3>
                                    </div>
                                </>
                            ) : object.bcs === "0" ? (
                                <>
                                    <div className="courses-category-single-item text-center">
                                        <h3
                                            onClick={() => handleOpenModal(i)}
                                            style={{ cursor: 'pointer' }}>
                                            {object.book_name}
                                        </h3>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <Link href={`/guide/${props.preparams}/${object.slug}`} className="courses-category-single-item text-center">
                                        <h3
                                            style={{ cursor: 'pointer' }}>
                                            {object.book_name}
                                        </h3>
                                    </Link>
                                </>
                            )}
                            {props.type === 'all-books' || props.type === 'all-mock' ? (
                                <></>
                            ) : (
                                <Modal open={openIndex === i} onClose={handleCloseModal} center>
                                    <div style={{ background: 'transparent', boxShadow: 'none' }} className="sign-up-form">
                                        <h2>Enter Book code to Continue</h2>
                                        <br />
                                        <form className="form-wrap" onSubmit={handleSubmit}>
                                            <div className={`form-floating form-group ${codeError ? 'has-error' : ''}`}>
                                                <input style={{ display: 'none' }} type='text' ref={inputRef} value={object.id} />
                                                <input
                                                    type="number"
                                                    className={`form-control ${codeError ? 'is-invalid' : ''}`}
                                                    id="Code"
                                                    placeholder="Code"
                                                    value={code}
                                                    onChange={(e) => setcode(e.target.value)}
                                                />
                                                <label htmlFor="nameAddress" className="form-label">
                                                    Code
                                                </label>
                                                {codeError && <div className="error text-danger">{codeError}</div>}
                                            </div>
                                            <div className="submit-btn">
                                                <button type="submit" className="main-btn border-0" disabled={loading}>
                                                    <span>
                                                        {loading ? (
                                                            <div className="spinner-border" role="status">
                                                                <span className="sr-only">Loading...</span>
                                                            </div>

                                                        ) : (
                                                            "Submit"
                                                        )}
                                                    </span>
                                                </button><br></br>
                                                <button type="submit" onClick={applyforcode} className="main-btn border-0"> Apply For Code</button>
                                            </div>
                                        </form>
                                    </div>
                                </Modal>
                            )}
                        </div>
                        </div>
                    ))
                )
            )}
        </>
    );
}
