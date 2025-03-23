'use client'
import React, { useState } from 'react';

export default function Data(props) {
    const [index, setIndex] = useState(0);

    const handleNext = () => {
        if (index < props.data.length - 1) {
            setIndex(index + 1);
        }
    };

    const handlePrevious = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    };

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button onClick={handlePrevious} disabled={index === 0} className="btn btn-primary btn-md">Previous</button>
                <button onClick={handleNext} disabled={index === props.data.length - 1} className="btn btn-primary btn-md">Next</button>
            </div>
            <br></br>
            <h2>{props.data[index].hint_heading}</h2>
            <p>{props.data[index].description}</p>
        </>
    )
}
