import React from 'react';
import Data from '../contact-us/Data';

export const metadata = {
    title: "DMCA Policy - Medipedia",
};

export default function page() {
    return (
        <section className="sign-up-section ptb-50">
            <div className="container">
                <div className="row">

                        <h1>DMCA Policy</h1>
                        <p>Medipedia Guide respects the intellectual property of others. If you believe that your work has been copied or used on our website in a way that infringes your copyright, please follow these steps:</p>
                        
                        <h2>How to Report a Copyright Issue</h2>
                        <p><strong>Tell us what's wrong:</strong> Send an email to [Email address removed for privacy] with the following information:</p>
                        <ul>
                            <li><p>What is your copyrighted work (book title, specific text, an image, etc.)? Please be as detailed as possible.</p></li>
                            <li><p>Where on Medipedia Guide did you find the material you think is infringing? Give us a link if you can!</p></li>
                            <li><p>Your name, address, phone number, and email.</p></li>
                        </ul>
                        <p>We promise to look into it: We'll investigate your claim and take appropriate action. This might mean removing material or contacting the person who posted it.</p>
                        <p>Be truthful: Making false claims about copyright can have serious consequences. Only report things you honestly believe are infringing on your rights.</p>

                        <h2>What if MY work was removed by mistake?</h2>
                        <p>If you believe your content was removed from Medipedia Guide by mistake, you can send a counter-notice. Please include:</p>
                        <ul>
                            <li><p>What was removed and where it was located.</p></li>
                            <li><p>A statement that you believe in good faith the material was removed due to an error.</p></li>
                            <li><p>Your name, address, phone number, and email.</p></li>
                            <li><p>A statement saying you agree that a legal case may be filed against you if the information is false.</p></li>
                        </ul>
                        <p><strong>Important:</strong> The DMCA process is for copyright issues. If you have concerns about other types of content, please use the "Contact Us" form on our website.</p>
                        <div className="col-lg-3 col-md-3 ps-0">
                        </div>
                        <div className="col-lg-6 col-md-6 ps-0">
                        <div className="sign-up-form">
                        <h5>Please send the infringement notice via email via this Contact Form</h5>
                        <Data></Data>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-3 ps-0">
                        </div>
                    </div>
            </div>
        </section>
    );
}
