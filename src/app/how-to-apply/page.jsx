import React from "react";
import CustomerSupport from '../customer-support/page'
import Steps from "./steps";

export const metadata = {
    title: "How to apply - Medipedia",
  };

export default function page() {

    return <>
        <CustomerSupport />
        <div className="how-to-apply box-shadow mt-4 py-1 mb-5">

            <h2 className="text-center mt-5">How to apply for code</h2>
            <Steps description="Step 1: Choose the book you want to get" imgUrl="/assets/onboard/Step1.png" />
            <Steps description="Step 2: Click on Apply for Code" imgUrl="/assets/onboard/Step2.png" />
            <Steps description="Step 3: Fill necessary details and click on Submit button" imgUrl="/assets/onboard/Step3.png" />
            <Steps description="Step 4: Perform Step 5 for code to be approved." imgUrl="/assets/onboard/Step4.png" />

            <div className="container mt-5">
                <p><strong>Step 5: Do the following steps:</strong></p>
                <ul style={{ lineHeight: '25px' }}>
                    <li>Firstly, make required payment to the given account number.</li>
                    <li>Secondly, send the paid reciept screenshot to the IT team contact number.</li>
                    <li>Thirdly, contact the IT team to get the required book code.</li>
                </ul>
                <div className="row ">
                    <div className="col-md-11">
                        <img src="/assets/onboard/Step5.png" ></img>
                    </div>
                </div>
            </div>
            <br />

            <Steps description="Step 6: After verification from the IT team, your code will be shown here." imgUrl="/assets/onboard/Step6.png" />
            <Steps description="Step 7: Enter the assigned book code." imgUrl="/assets/onboard/Step7.png" />
            <Steps description="Step 8: Once code has been assigned, you can easily perform any quiz from that book." imgUrl="/assets/onboard/Step8.png" />

            
        </div>
    </>

}