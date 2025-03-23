'use client'
import React, { useEffect, useState } from 'react'


export default function FAQ() {

    return (
        <section className="banner-section overflow-hidden">
            <div className="container mw-1470">
                <div className="pt-2 px-2">
                    <h1 className='text-center'>
                        <span>Frequently Asked Questions</span>
                    </h1>
                    <div className="accordion w-auto mt-5" id="accordionExample">
                        <div className="accordion-item mb-3 px-3" style={{ borderRadius: '0px' }}>
                            <h2 className="accordion-header shadow-faq" id="headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                    <strong className='fs-5'> How can Medipedia help me in my medical studies and exam preparation? </strong>
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body border" style={{ lineHeight: '30px', textAlign: 'left' }}>
                                    This app provides a comprehensive collection of medical books, studies, and mock tests tailored for students and professionals. It serves as an all-in-one resource for in-depth learning and exam preparation. The books cover various specialties, ensuring you have access to essential reference material. The mock tests simulate real exam conditions, helping you assess your knowledge and identify areas needing improvement. Additionally, the app may offer personalized study plans, progress tracking, and regular updates to ensure you're always learning the most current information in the medical field.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mb-3 px-3 " style={{ borderRadius: '0px' }}>
                            <h2 className="accordion-header shadow-faq" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <strong className="fs-5">Can I access Medipedia's content offline? </strong>
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body border" style={{ lineHeight: '30px', textAlign: 'left' }}>
                                    Yes, the app allows you to download medical books, studies, and mock tests for offline use. This feature ensures that you can continue your studies and exam preparation even when you don't have internet access. Once downloaded, the content is stored on your device, so you can read, study, or take tests anytime, anywhere. This is especially useful for students and professionals with busy schedules or those who may not always have reliable internet access. Simply download the necessary materials in advance, and you'll have them at your fingertips whenever needed.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mb-3 px-3  " style={{ borderRadius: '0px' }}>
                            <h2 className="accordion-header shadow-faq" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    <strong className="fs-5">How frequently is the content updated?</strong>
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body border" style={{ lineHeight: '30px', textAlign: 'left' }}>
                                    The content in the app is regularly updated to ensure that you have access to the most current and relevant medical information. This includes updates to books, studies, and mock test questions to reflect the latest advancements in the medical field. Regular updates ensure that the app stays aligned with current medical standards, exam patterns, and guidelines. By providing up-to-date content, the app helps you stay informed about new research, treatment protocols, and changes in medical practice, ensuring that your knowledge remains current and relevant in an ever-evolving field.
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
