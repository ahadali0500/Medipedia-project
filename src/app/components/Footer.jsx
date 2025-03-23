import React from 'react'
import Link from 'next/link'
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


export default function Footer() {
    const { data: session, status } = useSession();
    const router = useRouter();

    return (
        <>
            {/*=== Start Footer Section ===*/}
            <section className="footer-section section-bg-color-08301f pt-100 pb-75">
                <div className="container mw-1470">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6">
                            <div className="footer-single-item">
                                <Link href="/" className="d-inline-block footer-logo">
                                    <img
                                        style={{ width: 60 }}
                                        src="/assets/images/logo/logo.png"
                                        alt="Logo"
                                    /><span  style={{color:'white',fontSize:'35px !important',textDecoration:'initial',position:'relative',top:'5px'}} >Medipedia</span>
                                </Link>
                                <br></br> <br></br>
                                <ul className="list-unstyled ps-0 mb-0 d-flex">
                                    <li>
                                        <Link href="https://play.google.com/store/apps/details?id=com.medical_guide.medipedia">
                                            <img src="/assets/images/play-store.svg" alt="play-store" />
                                        </Link>
                                    </li>
                                    <li className="ms-4">
                                        <Link href="#">
                                            <img src="/assets/images/app-store.svg" alt="app-store" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>


                        <div className="col-lg-2 col-sm-6">
                            {session ? (
                                <div className="footer-single-item">
                                    <h3>About</h3>
                                    <ul className="list-unstyled ps-0 mb-0 import-link">
                                        <li>
                                            <Link href="/saved-quiz">Saved Quiz</Link>
                                        </li>
                                        <li>
                                            <Link href="/history">History</Link>
                                        </li>
                                        <li>
                                            <Link href="/book-price">Books Price</Link>
                                        </li>
                                        <li>
                                            <Link href="/book-code">Books Code</Link>
                                        </li>
                                        <li>
                                            <Link href="/feedback">Feedback</Link>
                                        </li>
                                    </ul>
                                </div>
                            ) : (
                                <div className="footer-single-item">
                                    <h3>About</h3>
                                    <ul className="list-unstyled ps-0 mb-0 import-link">
                                        <li>
                                            <Link href="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link href="/login">Login</Link>
                                        </li>
                                        <li>
                                            <Link href="/register">Register</Link>
                                        </li>
                                        <li>
                                            <Link href="/forgot-password">Forgot password</Link>
                                        </li>
                                        <li>
                                            <Link href="/book-code">Books Code</Link>
                                        </li>
                                       
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="footer-single-item">
                                <h3>Useful Links</h3>
                                <ul className="list-unstyled ps-0 mb-0 import-link">
                                    <li>
                                        <Link href="/about-us">About us</Link>
                                    </li>
                                    <li>
                                        <Link href="/contact-us">Contact us</Link>
                                    </li>
                                    <li>
                                        <Link href="/privacy-policy">Privacy policy</Link>
                                    </li>
                                    <li>
                                        <Link href="/dmca-policy">DMCA policy</Link>
                                    </li>
                                    <li>
                                        <Link href="/faq">FAQ's</Link>
                                        </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="footer-single-item">
                                <h3>Sign Up for Our Newsletter</h3>
                                <form className="subscribe-form position-relative z-1">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Your e-mail"
                                    />
                                    <button
                                        type="submit"
                                        className="main-btn border-0 position-absolute top-50 end-0 translate-middle-y"
                                    >
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="help-icon" title="Help" onClick={()=> router.push("/how-to-apply") }>
                ?
            </div>
        </>

    )
}
