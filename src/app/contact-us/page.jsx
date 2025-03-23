import React from 'react'
import Data from './Data';

export const metadata = {
    title: "Contact us - Medipedia",
};

export default function page() {
    return (
        <section className="sign-up-section ptb-50">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3 ps-0" />
                    <div className="col-lg-6 col-md-6 ps-0">
                         <div className="sign-up-form">
                          <h1>Contact us</h1>
                            <Data></Data>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 ps-0" />
                </div>
            </div>
        </section>
    )
}
