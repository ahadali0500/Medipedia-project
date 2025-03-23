import React from 'react';

export const metadata = {
    title: "Privacy Policy - Medipedia",
};

export default function page() {
    return (
        <section className="sign-up-section ptb-50">
            <div className="container">
                        <h1>Privacy Policy</h1>
                        <p>We care about keeping your information safe! This is our promise about how we use the things you tell us.</p>
                        
                        <h4>What We Collect:</h4>
                        <ul>
                            <li><p><strong>Your Name and Email:</strong> This helps us create your account so you can save your favorite books and practice tests.</p></li>
                            <li><p><strong>Things You Do on Our Site:</strong> We keep track of the books you read and the questions you answer. This helps us make suggestions so you can keep learning!</p></li>
                        </ul>
                        
                        <h4>How We Use Your Information:</h4>
                        <ul>
                            <li><p><strong>Make the Website Work Better:</strong> We use your information to make sure everything runs smoothly.</p></li>
                            <li><p><strong>Help You Learn:</strong> We might suggest new books or practice questions based on the stuff you like.</p></li>
                            <li><p><strong>Keep Your Account Safe:</strong> We use your info to make sure no one else can pretend to be you.</p></li>
                        </ul>

                        <h4>We NEVER:</h4>
                        <ul>
                            <li><p><strong>Sell Your Information:</strong> We won't give your name, email, or anything else to other companies to make money.</p></li>
                            <li><p><strong>Show You Ads We Don't Like:</strong> We might have some ads on our site, but we'll try to make sure they're about things that might help you learn.</p></li>
                        </ul>

                        <h4>Your Rights:</h4>
                        <ul>
                            <li><p><strong>Ask Your Parents:</strong> If you have questions, ask your parents or a grown-up you trust to help you understand.</p></li>
                            <li><p><strong>Contact Us:</strong> You (or your parents) can always email us if you want to know more or need help. <em>[Email address removed for privacy.]</em></p></li>
                        </ul>
            </div>
        </section>
    );
}
