"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setEmailError("");
        setPasswordError("");

        let isValid = true;

        if (!email.trim()) {
            setEmailError("Email is required");
            isValid = false;
        }
        if (!password.trim()) {
            setPasswordError("Password is required");
            isValid = false;
        }

        if (isValid) {
            try {
                setLoading(true);
                const signInResponse = await signIn("credentials", {
                    email: email,
                    password: password,
                    redirect: false,
                });
                 console.log("okkkkkkkkkkk"+signInResponse);

                if (!signInResponse.error) {
                    toast.success("You have login successfully");
                    router.push("/");
                } else {
                    toast.error("Invalid email or password");
                }

            } catch (error) {
                setError("Something went wrong");
                console.error(error); // Log the error for debugging
                // Show an error toast if login fails
                toast.error("Login failed. Please check your credentials.");
            } finally {
                setLoading(false); // Make sure to stop loading whether success or error
            }
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <form className="form-wrap" onSubmit={handleSubmit}>
            <div className={`form-floating form-group ${emailError ? 'has-error' : ''}`}>
                <input
                    type="email"
                    className={`form-control ${emailError ? 'is-invalid' : ''} mb-1` }
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
            <div className={`form-floating form-group ${passwordError ? "has-error" : ""}`}>
                <input
                    type={showPassword ? 'text' : 'password'}
                    className={`form-control ${passwordError ? 'is-invalid' : ''} mb-1`}
                    id="password-field1"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="password-field1" className="form-label">
                    Password
                </label>
                {passwordError && <div className="error text-danger">{passwordError}</div>}
                {/* <span style={{ position: 'absolute', right: '29px' }} onClick={togglePasswordVisibility} className={`icofont-eye${showPassword ? '' : '-alt'} field-icon toggle-password`} /> */}
                <span style={{ position: 'absolute', right: '29px' }} onClick={togglePasswordVisibility} field-icon toggle-password className="fs-6 me-2"><strong>{showPassword ? "Hide":"Show"}</strong></span>
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
            <p className="already">
                <Link href="/forgot-password" className="text-decoration-none">
                    Forgot Password? <br />
                </Link>
                Don't have an account?
                <Link href="/register" className="text-decoration-none ms-1">
                    Click here!
                </Link>
            </p>
        </form>
    );
}
