'use client'
import React, { useEffect, useState } from 'react'
import Username from './Username'
import { apiUrl, profiledata } from '../config/constant';
import { useSession } from "next-auth/react";

export default function Header() {
    const { data: session, status } = useSession();
    const [name, setname] = useState("");
    const [load, setload] = useState(false);

    useEffect(() => {
        if (session && session.user) {
            setload(true)
            // Fetch profile data when the component mounts
            const fetchData = async () => {
                try {
                    const data = await profiledata(session.user.id);
                    setload(false)
                    setname(data.user_name); // Set the email obtained from profile data into state
                } catch (error) {
                    console.error('Error fetching profile data:', error);
                }
            };
            fetchData();
        }
    }, [session]);

    return (
        <section
            className="banner-section overflow-hidden bg-img"
            data-background="/assets/images/banner/banner-bg.jpg"
        >
            <div className="container mw-1470">
                <div className="d-flex row align-items-center">
                    <div className="col-lg-7 order-lg-1 order-sm-2 order-md-2 custom-order-text  ">
                        <div className="banner-content pt-2 px-2">
<h1>
                                    <span>Medical Guide</span>
                                </h1>
                            <p className='header-para' style={{lineHeight:'33px'}}>
                                Medipedia is an innovative online platform designed exclusively for medical students, providing a comprehensive repository of Multiple Choice Questions (MCQs) to enhance learning and preparation. Tailored to meet the unique needs of medical education, Medipedia offers a vast array of meticulously curated MCQs covering diverse medical specialties, enabling students to test their knowledge, assess their understanding, and reinforce key concepts. 
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-5 order-lg-2 order-sm-1 order.md-1 custom-order-img">
                        <div className="banner-img">
                            <img src="/assets/images/banner/banner-img.png" alt="banner-img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
