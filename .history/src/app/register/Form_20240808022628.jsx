'use client'
import React, { useState } from 'react';
import { apiUrl } from '../config/constant';
import Link from 'next/link';
import toast from 'react-hot-toast';

export default function Form() {
    const [username, setUsername] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        // Validation
        let isValid = true;
        if (!username.trim()) {
            setUsernameError('Username is required');
            isValid = false;
        }
        if (!email.trim()) {
            setEmailError('Email is required');
            isValid = false;
        }
        if (!password.trim()) {
            setPasswordError('Password is required');
            isValid = false;
        }
        if (!phoneNumber.trim()) {
            setPhoneNumberError('Phone number is required');
            isValid = false;
        }

        if (isValid) {
            setLoading(true);

            try {
                const formData = new FormData();
                formData.append("user_name", username);
                formData.append("user_email", email);
                formData.append("user_pass", password);
                formData.append("user_no", phoneNumber);

                const response = await fetch(`${apiUrl}/register.php`, {
                    method: 'POST',
                    body: formData,
                });
                const data = await response.json();

                if (data.Success === "true") {
                    // Registration successful
                    toast.success('Your Account created successfully!');
                    // Clear form after successful submission
                    setUsername('');
                    setEmail('');
                    setPassword('');
                    setPhoneNumber('');
                } else {
                    // Registration failed
                    setError(data.Message);
                }
            } catch (error) {
                // Error occurred during registration
                setError('Something went wrong');
            }
            setLoading(false);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <form className="form-wrap" onSubmit={handleSubmit}>
            {/* Username Field */}
            <div className={`form-floating form-group ${usernameError ? 'has-error' : ''}`}>
                <input
                    type="text"
                    className={`form-control ${usernameError ? 'is-invalid' : ''}`}
                    id="username"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => {
                        setUsername(e.target.value);
                        setUsernameError('');
                    }}
                />
                <label htmlFor="username" className="form-label">
                    Username
                </label>
                {usernameError && <div className="invalid-feedback">{usernameError}</div>}
            </div>
            {/* Email Field */}
            <div className={`form-floating form-group ${emailError ? 'has-error' : ''}`}>
                <input
                    type="email"
                    className={`form-control ${emailError ? 'is-invalid' : ''}`}
                    id="emailAddress"
                    placeholder="Your Email Address"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        setEmailError('');
                    }}
                />
                <label htmlFor="emailAddress" className="form-label">
                    Email
                </label>
                {emailError && <div className="invalid-feedback">{emailError}</div>}
            </div>
            {/* Password Field */}
            <div className={`form-floating form-group ${passwordError ? 'has-error' : ''}`}>
                <input
                    type={showPassword ? 'text' : 'password'}
                    className={`form-control ${passwordError ? 'is-invalid' : ''}`}
                    id="password-field1"
                    placeholder="Your Password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                        setPasswordError('');
                    }}
                />
                <label htmlFor="password-field1" className="form-label">
                    Password
                </label>
                {passwordError && <div className="invalid-feedback">{passwordError}</div>}
                <span style={{ position: 'absolute', right: '29px' }} onClick={togglePasswordVisibility} field-icon toggle-password className="fs-6 me-2"><strong>{showPassword ? "Hide":"Show"}</strong></span>
           </div>
            {/* Phone Number Field */}
            <div className={`form-floating form-group ${phoneNumberError ? 'has-error' : ''}`}>
                <input
                    type="number"
                    className={`form-control ${phoneNumberError ? 'is-invalid' : ''}`}
                    id="phoneNumber"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => {
                        setPhoneNumber(e.target.value);
                        setPhoneNumberError('');
                    }}
                />
                <label htmlFor="phoneNumber" className="form-label">
                    Phone Number
                </label>
                {phoneNumberError && <div className="invalid-feedback">{phoneNumberError}</div>}
            </div>
            {/* Submit Button */}
            <div className="submit-btn">
                <button type="submit" className="main-btn border-0" disabled={loading}>
                    <span>{loading ? <div className="spinner-border" role="status"><span className="sr-only">Loading...</span></div> : 'Submit'}</span>
                </button>
            </div>
            {/* Error Message */}
            {error && <p style={{color:'red'}} className="error-message">{error}</p>}
            {/* Already have an account */}
            <p className="already">
                Already have an account?{' '}
                <Link href="/login" className="text-decoration-none">
                    Login
                </Link>
            </p>
        </form>
    );
}
