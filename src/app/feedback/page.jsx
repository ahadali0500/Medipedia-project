import React from 'react'
import Link from 'next/link'
import Data from './Data'

export const metadata = {
    title: "Feedback - Medipedia",
  };

export default function page() {
    return (
        <section className="sign-up-section ptb-50">
            <h1 className="text-center">Feedback</h1>
            <br />
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3 ps-0" />
                    <div className="col-lg-6 col-md-6 ps-0">
                        <div className="sign-up-form">
                            <p>Your valueable feedback help us to improve!</p>
                            <Data></Data>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 ps-0" />
                </div>

            </div>
        </section>

    )
}
