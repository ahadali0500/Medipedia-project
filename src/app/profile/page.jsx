import React from 'react'
import Link from 'next/link'
import ProfileSideNav from '../components/ProfileSideNav'
import Username from '../components/Username';

export const metadata = {
    title: "Dashboard - Medipedia",
};

export default function page() {
    return (
        <>
        
            <div className="terms-conditions-section pt-50">

                <h1 className="text-center">Profile</h1>

                <div className="container">
                    <div className="row">
                        <ProfileSideNav></ProfileSideNav>
                        <div className="col-lg-8">
                            <div className="ms-lg-3">
                                <div className="pt-50" id="terms">
                                    <div className="privacy-and-conditions-item">
                                        <h3>
                                            Welcome, <Username></Username> 
                                            <span style={{ fontSize: 15, color: "black",marginLeft:'6px' }}>
                                                 (If not your account then logout!)
                                            </span>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
