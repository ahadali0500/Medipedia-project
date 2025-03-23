import Link from 'next/link'
import React from 'react'
import {  SlugToTitle } from '../../config/constant';
import  Form  from './Form';

export const metadata = {
    title: 'Apply Code - Medipedia',
}

export default function page({params}) {
    return (
        <section className="sign-up-section ptb-50">
            <div className="container">
            <h1 className="text-center">{ SlugToTitle(params.applycode) }</h1>
                <br></br>
                <div className="row">
                    <div className="col-lg-3 col-md-3 ps-0" />
                    <div className="col-lg-6 col-md-6 ps-0">
                        <div className="sign-up-form">
                            <h2>Apply For Code </h2>
                            <p>Provide your Information to get code</p>
                            <Form param={params.applycode} ></Form>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 ps-0" />
                </div>
            </div>
        </section>

    )
}
