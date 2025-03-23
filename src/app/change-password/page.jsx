import React from 'react'
import Link from 'next/link'
import ProfileSideNav from '../components/ProfileSideNav'
import Form from './Form'

export const metadata = {
    title: "Change Password - Medipedia",
};

export default function page() {
    return (
        <div className="container pt-50">
            <h1 className="text-center">Profile</h1>
            <div className="row">
                <ProfileSideNav></ProfileSideNav>
                <div className="col-lg-8">
                    <div className="ms-lg-3">
                        <div className="pt-50" id="terms">
                            <div className="">
                                <div className="sign-up-form">
                                    <h2>Change Password</h2>
                                    <Form></Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
