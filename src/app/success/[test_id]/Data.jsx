'use client'
import React, { useState, useEffect } from 'react'

export default function Data(props){
    const [percentage, setPercentage] = useState(0);
    const [remarks, setRemarks] = useState('');

    useEffect(() => {
        const calculatedPercentage = props.data.marks / props.data.total * 100;
        setPercentage(calculatedPercentage);

        if (calculatedPercentage >= 90) {
            setRemarks("Outstanding");
        } else if (calculatedPercentage >= 80) {
            setRemarks("Excellent");
        } else if (calculatedPercentage >= 70) {
            setRemarks("Very Good");
        } else if (calculatedPercentage >= 60) {
            setRemarks("Good Effort");
        } else if (calculatedPercentage >= 50) {
            setRemarks("Good Try");
        } else {
            setRemarks("Need Improvement");
        }
    }, [props.data.marks, props.data.total]);

    return (
        <div className="terms-conditions-section pt-50">
            <h1 className="text-center">Result: {Math.round(percentage)}%</h1>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <br></br>
                        Attempted Questions: {props.data.total}
                        <br></br>
                        Your Marks: {props.data.marks}
                        <br></br><br></br>
                        <h3>{remarks}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
