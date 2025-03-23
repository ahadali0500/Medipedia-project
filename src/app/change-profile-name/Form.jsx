"use client";
import React, { useState,useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import  { apiUrl,profiledata } from '../config/constant';
import { useSession } from "next-auth/react";

export default function Form() {
    const router = useRouter();
    const { data: session, status,update  } = useSession();
    const [name, setname] = useState("");
    const [loading, setLoading] = useState(false);
    const [nameError, setnameError] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setnameError("");

        let isValid = true;

        if (!name.trim()) {
            setnameError("Profile name is required");
            isValid = false;
        }

        if (isValid) {
            setLoading(true);
            try {
                const formData = new FormData();
                formData.append("user_name", name);
                formData.append("user_id", session.user.id);
                
                const response = await fetch(`${apiUrl}/profile-update.php`, {
                    method: 'POST',
                    body: formData,
                });
                const data = await response.json();
                console.log(formData)
                if (data.Success !== "false") {
                    toast.success('Username updated successfuly!');
                
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
                    setname(data.user_name); // Set the email obtained from profile data into state
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
            <div className={`form-floating form-group ${nameError ? 'has-error' : ''}`}>
                <input
                    type="name"
                    className={`form-control ${nameError ? 'is-invalid' : ''}`}
                    id="nameAddress"
                    placeholder="name Address"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                />
                <label htmlFor="nameAddress" className="form-label">
                    Profile name
                </label>
                {nameError && <div className="error text-danger">{nameError}</div>}
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
