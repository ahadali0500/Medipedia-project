"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import  { apiUrl } from '../config/constant';

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [emailError, setEmailError] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setEmailError("");

        let isValid = true;

        if (!email.trim()) {
            setEmailError("Email is required");
            isValid = false;
        }

        if (isValid) {
            setLoading(true);
            try {
                const formData = new FormData();
                formData.append("email", email);
                const response = await fetch(`${apiUrl}/forgot-password.php`, {
                    method: 'POST',
                    body: formData,
                });
                const data = await response.json();
                console.log(formData)
                if (data.code == 200) {
                    setEmail('')
                    toast.success(data.message);
                } else if(data.code == 400) {
                    toast.error(data.message);
                }
            } catch (error) {
                //setError('Something went wrong');
                console.log(error)
            }

            setLoading(false); // Make sure to stop loading whether success or error

        }
    };

    return (
        <form className="form-wrap" onSubmit={handleSubmit}>
            <div className={`form-floating form-group ${emailError ? 'has-error' : ''}`}>
                <input
                    type="email"
                    className={`form-control ${emailError ? 'is-invalid' : ''}`}
                    id="emailAddress"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="emailAddress" className="form-label">
                    Email
                </label>
                {emailError && <div className="error text-danger">{emailError}</div>}
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
