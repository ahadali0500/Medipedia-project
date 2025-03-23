"use client";
import React, { useState,useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";
import { signIn } from "next-auth/react";
import  { apiUrl,profiledata } from '../config/constant';

export default function Form() {
    const { data: session, status,update  } = useSession();
    const router = useRouter();
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
        const pd=profiledata(session.user.id);
        console.log("okk",pd.user_feedback)
        if (isValid) {
            
            setLoading(true);
            try {
                const formData = new FormData();
                formData.append("feed", feedback);
                formData.append("user_id", session.user.id);
                
                const response = await fetch(`${apiUrl}/feedback.php`, {
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
                    toast.success('Thanks for your feedback!');
                
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
        <form className="form-wrap" onSubmit={handleSubmit}>
            <div className={`form-floating form-group ${feedbackError ? 'has-error' : ''}`}>
                <textarea
                    type="feedback"
                    className={`form-control ${feedbackError ? 'is-invalid' : ''}`}
                    id="feedbackAddress"
                    placeholder="feedback"
                    value={feedback}
                    onChange={(e) => setfeedback(e.target.value)}
                ></textarea>
                <label htmlFor="feedback" className="form-label">
                    feedback
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
    );

}
