import Link from 'next/link'
import React from 'react'
import Form from './Form'

export const metadata = {
    title: "Forgot Password - Medipedia",
  };

export default function page() {
    return (
        <section className="sign-up-section ptb-50">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3 ps-0" />
                    <div className="col-lg-6 col-md-6 ps-0">
                        <div className="sign-up-form">
                            <h2>Forgot Password  </h2>
                            <p>Enter your Email below, we will send you password reset mail.</p>
                            <Form></Form>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 ps-0" />
                </div>
            </div>
        </section>

    )
}
