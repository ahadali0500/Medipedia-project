'use client'
import React, { useState,useEffect  } from 'react';
import { apiUrl,profiledata} from '../../config/constant';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { useSession } from "next-auth/react";

export default function Form(props) {
    const { data: session, status } = useSession();
    const [username, setUsername] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
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
                formData.append("user_no", phoneNumber);
                formData.append("user_id", session.user.id);
                formData.append("slug", props.param);

                const response = await fetch(`${apiUrl}/apply-for-code.php`, {
                    method: 'POST',
                    body: formData,
                });
                const data = await response.json();
                console.log(data)
                if (data.Success == "true") {
                    toast.success('You have applied  successfully!');
                    // Clear form after successful submission
                    setUsername('');
                    setEmail('');
                    setPhoneNumber('');
                }else if(data.Success == "Already"){
                    toast.error('You have already applied!');
                }else {
                    setError('applying for code is  failed');
                }
            } catch (error) {
                console.log(error)
                setError('Something went wrong');
            }
            setLoading(false);
        }
    };

    useEffect(() => {
        if (session && session.user) {
            // Fetch profile data when the component mounts
            const fetchData = async () => {
                try {
                    const data = await profiledata(session.user.id);
                    setUsername(data.user_name); // Set the email obtained from profile data into state
                    setEmail(data.user_email); // Set the email obtained from profile data into state
                    setPhoneNumber(data.user_no); // Set the email obtained from profile data into state
                } catch (error) {
                    console.error('Error fetching profile data:', error);
                }
            };
            fetchData();
        }
    }, [session]);

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
            {error && <p className="error-message">{error}</p>}
            {/* Already have an account */}
        </form >
    );
}
