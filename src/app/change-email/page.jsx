import React from 'react'
import Link from 'next/link'
import ProfileSideNav from '../components/ProfileSideNav'
import Form from './Form';

export const metadata = {
    title: "Change Email - Medipedia",
};

export default function page() {
    return (
        <div className="terms-conditions-section pt-50">
            <h1 className="text-center">Profile</h1>
            <div className="container">
                <div className="row">
                    <ProfileSideNav></ProfileSideNav>
                    <div className="col-lg-8">
                        <div className="ms-lg-3">
                            <div className="pt-50" id="terms">
                                <div className="">
                                    <div className="sign-up-form">
                                        <h2>Change Email</h2>
                                        <Form></Form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
