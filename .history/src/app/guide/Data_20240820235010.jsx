'use client'
import React, { useState, useEffect, CSSProperties } from 'react'
import Link from 'next/link'
import ClipLoader from "react-spinners/ClipLoader";

export default function Data(props) {
    const [isLoading, setIsLoading] = useState(true); // State variable for loading

    useEffect(() => {
        setIsLoading(false); // Set loading to false once component is mounted
    }, []); // Empty dependency array ensures this effect runs only once

    console.log(props.value);

    return (
        <>
            {isLoading ? (
                <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            ) : (
                props.value.map(function (object, i) {

                    return (
                        <div key={i} className="col-lg-4 ">
                        <div className="box-shadow"  >
                            <Link
                                href={`/guide/${object.slug}`} className="courses-category-single-item text-center"
                            >
                                <h3>{object.spec_name}
                                    {object.spec_session ? (
                                        <span> ({object.spec_session}) </span>
                                    ) : null}
                                </h3>
                            </Link>
                        </div>
                        </div>
                    );
                })
            )}
        </>
    )
}
