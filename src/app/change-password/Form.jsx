"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import  { apiUrl } from '../config/constant';
import { useSession } from "next-auth/react";

export default function Login() {
    const router = useRouter();
    const { data: session, status,update  } = useSession();
    const [oldpassword, setoldpassword] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [oldpasswordError, setoldpasswordError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showoldPassword, setShowoldPassword] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setoldpasswordError("");
        setPasswordError("");

        let isValid = true;

        // if (!oldpassword.trim()) {
        //     setoldpasswordError("Old password is required");
        //     isValid = false;
        // }
        if (!password.trim()) {
            setPasswordError("Password is required");
            isValid = false;
        }

        if (isValid) {
            setLoading(true);
            try {
                const formData = new FormData();
                formData.append("user_pass", password);
                formData.append("user_id", session.user.id);
                
                const response = await fetch(`${apiUrl}/profile-update.php`, {
                    method: 'POST',
                    body: formData,
                });
                const data = await response.json();
                console.log(formData)
                if (data.Success !== "false") {
                    toast.success('Password updated successfuly!');
                
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

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleoldPasswordVisibility = () => {
        setShowoldPassword(!showoldPassword);
    };
    

    return (
        <form className="form-wrap" onSubmit={handleSubmit}>
            {/* <div className={`form-floating form-group ${oldpasswordError ? "has-error" : ""}`}>
                <input
                    type={showoldPassword ? 'text' : 'password'}
                    className={`form-control ${oldpasswordError ? 'is-invalid' : ''}`}
                    id="password-field1"
                    placeholder="Password" 
                    value={oldpassword}
                    onChange={(e) => setoldpassword(e.target.value)}
                />
                <label htmlFor="password-field1" className="form-label">
                    Old password
                </label>
                {oldpasswordError && <div className="error text-danger">{oldpasswordError}</div>}
                <span style={{ position:'absolute',right:'29px' }}  onClick={toggleoldPasswordVisibility} className={`icofont-eye${showoldPassword ? '' : '-alt'} field-icon toggle-password`} />
            </div> */}
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
                    New Password
                </label>
                {passwordError && <div className="error text-danger">{passwordError}</div>}
                <span  style={{ position:'absolute',right:'29px' }}  onClick={togglePasswordVisibility} className={`icofont-eye${showPassword ? '' : '-alt'} field-icon toggle-password`} />
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
