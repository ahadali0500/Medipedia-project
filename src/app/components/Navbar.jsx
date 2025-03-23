"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import toast from "react-hot-toast";
import Username from "./Username";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'



export default function Navbar() {
    const { data: session, status } = useSession();
    const { push } = useRouter();

    // useEffect(() => {
    //     const handleBackButton = (event) => {
    //         if (event.type === 'popstate') {
    //             if (session) {
    //                 push('/');
    //             }
    //         }
    //     };

    //     // Add event listener for popstate event
    //     window.addEventListener('popstate', handleBackButton);

    //     // Clean up function to remove the event listener when the component unmounts
    //     return () => {
    //         window.removeEventListener('popstate', handleBackButton);
    //     };
    // }, [session, push]);


    const handleLogout = async () => {
        console.log("Logging out...");

        try {
            await signOut({ redirect: false }).then(() => {
                toast.success("Logout successfully!");
                push("/login"); // Redirect to the dashboard page after signing out
            });
        } catch (error) {
            console.error("Error during logout:", error);
        }
    };

    // Loading state while session status is being fetched
    if (status === "loading") {

        return (
            <>
                <div className='main'>
                    <Skeleton className="loading1" />
                    <Skeleton className="loading2" />
                    <Skeleton className="loading3" />

                </div>
            </>
        )

    } else {

        return (
            <nav className="navbar navbar-section navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/">
                        <img
                            style={{ width: 60 }}
                            src="/assets/images/logo/logo.png"
                            alt="Logo"
                        />
                    </Link>
                    <div
                        className=""
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarText"
                        aria-controls="navbarText"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fa fa-bars icons"></i>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link href="/" className="nav-link autoo  active">
                                 Home
                                </Link>
                            </li>
                            {!session && (
                                <>
                                    <li className="nav-item">
                                        <Link href="/about-us" className="nav-link autoo">
                                            About us
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/contact-us" className="nav-link autoo">
                                            Contact us
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/privacy-policy" className="nav-link autoo">
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/dmca-policy" className="nav-link autoo">
                                            DMCA Policy
                                        </Link>
                                    </li>
                                </>
                            )}

                            {session && (
                                <>
                                    <li className="nav-item ali">
                                        <Link href="/guide" className="nav-link autoo ">
                                            Medipedia Guide
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/saved-quiz" className="nav-link autoo ">
                                            Saved Quiz
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/history" className="nav-link autoo ">
                                            History
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/book-price" className="nav-link autoo ">
                                            Books Price
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/book-code" className="nav-link autoo ">
                                            Books Code
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/profile" className="nav-link autoo ">
                                            Profile
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/how-to-apply" className="nav-link autoo ">
                                            How to Apply
                                        </Link>
                                    </li>
                                    <li className="nav-item" onClick={handleLogout} >
                                    <Link href="/" className="nav-link autoo">
                                            Logout
                                        </Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                    <div className="nav-right-options">
                        <ul>
                            {!session ? (
                                <li style={{ borderRadius: '5px' }}>
                                    <Link href="/login" className="main-btn">
                                        <span className="d-none d-xl-block">LOGIN / REGISTER</span>
                                        <div className="d-xl-none" >LOGIN / REGISTER</div>
                                    </Link>
                                </li>
                            ) : (
                                <>
                                    {/* <li>
                                        <div className="main-btn">
                                            <span className="d-none d-xl-block">Welcome, <Username></Username></span>
                                            <div className=" d-xl-none" >Welcome, <Username></Username></div>
                                            
                                        </div>
                                    </li> */}
                                    <li style={{ borderRadius: '5px' }} className="me-2">
                                        <Link href="/guide" className="main-btn">
                                            <span className="d-none d-xl-block">Medipedia Guide</span>
                                            <div className="d-xl-none" >Medipedia Guide</div>
                                        </Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }

}