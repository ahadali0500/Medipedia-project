import Link from 'next/link'
import React from 'react'
import Form from '../login/Form'
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { redirect } from 'next/navigation';

export const metadata = {
    title: "Login to Medipedia",
};


export default async function page() {

    const data = await getServerSession(authOptions);
    if (data) {
        return (
            <section className="sign-up-section ptb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 ps-0" />
                        <div className="col-lg-6 col-md-6 ps-0">
                             
                            <h2>You cannot access this page!</h2>
                            <br></br>
                            {/* <p>Fill your email and password to login.</p> */}
                        </div>
                        <div className="col-lg-3 col-md-3 ps-0" />
                    </div>
                </div>
            </section>

        )
    } else {
        return (
            <section className="sign-up-section ptb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 ps-0" />
                        <div className="col-lg-6 col-md-6 ps-0">
                            <div className="sign-up-form">
                                <h2>Welcome Back </h2>
                                <p>Fill your email and password to login.</p>
                                <Form></Form>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 ps-0" />
                    </div>
                </div>
            </section>

        )

    }



}





