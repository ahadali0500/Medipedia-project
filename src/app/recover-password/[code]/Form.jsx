"use client";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { apiUrl } from '../../config/constant';

export default function Form({params}) {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        setShowPassword(false);
        setShowConfirmPassword(false);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setPasswordError("");
        setConfirmPasswordError("");

        let isValid = true;

        if (!password.trim()) {
            setPasswordError("Password is required");
            isValid = false;
        }
        if (!confirmPassword.trim()) {
            setConfirmPasswordError("Confirm Password is required");
            isValid = false;
        } else if (password !== confirmPassword) {
            setConfirmPasswordError("Passwords do not match");
            isValid = false;
        }

        if (isValid) {
            setLoading(true);
            try {
                const formData = new FormData();
                formData.append("code", params);
                formData.append("password", password);

                const response = await fetch(`https://desired-techs.com/docapp/recoverpassword.php`, {
                    method: 'POST',
                    body: formData,
                });
                const data = await response.json();
                if (data.Success !== "false") {
                    setPassword('');
                    setConfirmPassword('');
                    toast.success('Password Recovered successfully!');
                } else {
                    setError('Password recovery failed');
                }
            } catch (error) {
                console.log(error);
                setError('Something went wrong');
            }
            setLoading(false); 
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <form className="form-wrap" onSubmit={handleSubmit}>
            <div className={`form-floating form-group ${passwordError ? "has-error" : ""}`}>
                <input
                    type={showPassword ? 'text' : 'password'}
                    className={`form-control ${passwordError ? 'is-invalid' : ''}`}
                    id="password-field1"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="password-field1" className="form-label"> 
                    Password
                </label>
                {passwordError && <div className="error text-danger">{passwordError}</div>}
                <span style={{ position: 'absolute', right: '29px', cursor: 'pointer' }} onClick={togglePasswordVisibility} className={`icofont-eye${showPassword ? '' : '-alt'} field-icon toggle-password`} />
            </div>
            <div className={`form-floating form-group ${confirmPasswordError ? "has-error" : ""}`}>
                <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    className={`form-control ${confirmPasswordError ? 'is-invalid' : ''}`}
                    id="password-field2"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <label htmlFor="password-field2" className="form-label">
                    Confirm Password
                </label>
                {confirmPasswordError && <div className="error text-danger">{confirmPasswordError}</div>}
                <span style={{ position: 'absolute', right: '29px', cursor: 'pointer' }} onClick={toggleConfirmPasswordVisibility} className={`icofont-eye${showConfirmPassword ? '' : '-alt'} field-icon toggle-password`} />
            </div>
            {error && <div className="error text-danger">{error}</div>}
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
