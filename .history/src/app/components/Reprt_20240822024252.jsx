"use client";
import Link from "next/link";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { useState } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { apiUrl } from '../config/constant';
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";

export default function Reprt(props) {

    const MySwal = withReactContent(Swal)
    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    const modal = () => {
        MySwal.fire({
            title: "Report Question",
            text: "Do you want to report question!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes",
            cancelButtonText: "No",
        }).then((result) => {
            if (result.isConfirmed) {
                onOpenModal()
            }
        })
    }

    const { data: session, status, update } = useSession();
    const [feedback, setfeedback] = useState("");
    const [loading, setLoading] = useState(false);
    const [feedbackError, setfeedbackError] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setfeedbackError("");

        let isValid = true;

        if (!feedback.trim()) {
            setfeedbackError("feedback is required");
            isValid = false;
        }


        if (isValid) {

            setLoading(true);
            try {
                const formData = new FormData();
                formData.append("test_id", props.test_id);
                formData.append("report", feedback);
                formData.append("qes_id", props.question_id);
                formData.append("user_id", session.user.id);

                const response = await fetch(`${apiUrl}/report.php`, {
                    method: 'POST',
                    body: formData,
                });
                const data = await response.json();
                console.log(formData)
                if (data.Success !== "false") {
                    // if(session) session.user.feedback=feedback;
                    setError("");
                    setfeedbackError("");
                    setfeedback("")
                    onCloseModal()
                    toast.success('Report submitted successfully!');

                } else {
                    setError('updation failed');
                }
            } catch (error) {
                //setError('Something went wrong');
                console.log(error)
            }
            setLoading(false);

        }


    };





    return (
        <>
            <button onClick={() => modal()} className="btn btn-cus btn-md">
                Report <i className="fas fa-exclamation-circle" />
            </button>
            <Modal open={open} onClose={onCloseModal} center classNames={{
                overlay: 'customOverlay',
                modal: 'customModal',
            }}>
                <div style={{ background: 'transparent', boxShadow: 'none' }} className="sign-up-form">
                    <h2>Report Question</h2>
                    <p>Let us know what you find wrong in this Question</p>
                    <br />
                    <form className="form-wrap" onSubmit={handleSubmit}>
                        <div className={`form-floating form-group ${feedbackError ? 'has-error' : ''}`}>
                            <textarea
                                type="report"
                                className={`form-control ${feedbackError ? 'is-invalid' : ''}`}
                                id="feedbackAddress"
                                placeholder="Report"
                                value={feedback}
                                onChange={(e) => setfeedback(e.target.value)}
                            ></textarea>
                            <label htmlFor="feedback" className="form-label">
                                Report
                            </label>
                            {feedbackError && <div className="error text-danger">{feedbackError}</div>}
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
                            </button>
                        </div>
                    </form>
                </div>
            </Modal>

        </>
    )
}
