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
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [emailError, setEmailError] = useState("");
    const [error, setError] = useState("");
    console.log(session)
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setEmailError("");

        let isValid = true;

        if (!email.trim()) {
            setEmailError("Email is required");
            isValid = false; 
        }
        const pd=profiledata(session.user.id);
        console.log("okk",pd.user_email)
        if (isValid) {
            
            setLoading(true);
            try {
                const formData = new FormData();
                formData.append("user_email", email);
                formData.append("user_id", session.user.id);
                
                const response = await fetch(`${apiUrl}/profile-update.php`, {
                    method: 'POST',
                    body: formData,
                });
                const data = await response.json();
                console.log(formData)
                if (data.Success !== "false") {
                   // if(session) session.user.email=email;
                   
                    toast.success('Email updated successfuly!');
                
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

    useEffect(() => {
        if (session && session.user) {
            // Fetch profile data when the component mounts
            const fetchData = async () => {
                try {
                    const data = await profiledata(session.user.id);
                    setEmail(data.user_email); // Set the email obtained from profile data into state
                } catch (error) {
                    console.error('Error fetching profile data:', error);
                }
            };
            fetchData();
        }
    }, [session]);
 
    


    if (status === "loading") {

        return (
            <>
                Loading...
            </>
        )


    }
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
