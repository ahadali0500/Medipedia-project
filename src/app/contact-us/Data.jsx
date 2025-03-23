"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { apiUrl, profiledata } from '../config/constant';

export default function Form() {
    const router = useRouter();
    const [name, setname] = useState("");
    const [email, setEmail] = useState("");
    const [feedback, setfeedback] = useState("");
    const [loading, setLoading] = useState(false);
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [feedbackError, setfeedbackError] = useState("");
    const [error, setError] = useState("");

    const validateEmail = (email) => {
        return email.match(
            // Simple regex for email validation
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setNameError("");
        setEmailError("");
        setfeedbackError("");

        let isValid = true;

        if (!name.trim()) {
            setNameError("Name is required");
            isValid = false;
        }

        if (!email.trim() || !validateEmail(email)) {
            setEmailError("Valid email is required");
            isValid = false;
        }

        if (!feedback.trim()) {
            setfeedbackError("Feedback is required");
            isValid = false;
        }

        if (isValid) {
            setLoading(true);
            try {
                const formData = new FormData();
                formData.append("name", name);
                formData.append("email", email);
                formData.append("feed", feedback);
                
                const response = await fetch(`${apiUrl}/contact.php`, {
                    method: 'POST',
                    body: formData,
                });
                const data = await response.json();
                if (data.message) {
                    setError("");
                    setNameError("");
                    setEmailError("");
                    setfeedbackError("");
                    setname("");
                    setEmail("");
                    setfeedback("");
                    toast.success('Thanks for contacting us!');
                } else {
                    setError('Updation failed');
                }
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        }
    };

    return (
        <form className="form-wrap" onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className={`form-floating form-group ${nameError ? 'has-error' : ''}`}>
                <input
                    type="text" // Corrected type for name
                    className={`form-control ${nameError ? 'is-invalid' : ''} mb-1`}
                    id="nameAddress"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                />
                <label htmlFor="nameAddress" className="form-label">
                    Name
                </label>
                {nameError && <div className="error text-danger">{nameError}</div>}
            </div>
            {/* Email Input */}
            <div className={`form-floating form-group ${emailError ? 'has-error' : ''}`}>
                <input
                    type="email"
                    className={`form-control ${emailError ? 'is-invalid' : ''} mb-1 `}
                    id="emailAddress"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="emailAddress" className="form-label">
                    Email
                </label>
                {emailError && <div className="error text-danger">{emailError}</div>}
            </div>
            {/* Feedback Input */}
            <div className={`form-floating form-group ${feedbackError ? 'has-error' : ''}`}>
                <textarea
                    className={`form-control ${feedbackError ? 'is-invalid' : ''} mb-1`}
                    id="feedbackAddress"
                    placeholder="Feedback"
                    value={feedback}
                    onChange={(e) => setfeedback(e.target.value)}
                ></textarea>
                <label htmlFor="feedbackAddress" className="form-label">
                    Feedback
                </label>
                {feedbackError && <div className="error text-danger">{feedbackError}</div>}
            </div>
            {/* Submit Button */}
            <div className="submit-btn">
                <button type="submit" className="main-btn border-0" disabled={loading}>
                    {loading ? (
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    ) : (
                        "Submit"
                    )}
                </button>
            </div>
        </form>
    );
}
