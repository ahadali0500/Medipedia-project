'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSession } from "next-auth/react";

export default function Data(props) {
    const { data: session, status, update } = useSession();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false);
    }, []);



    if (status === "loading") {
        return (
            <>
                <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                props.value && props.value.length === 0 ? (
                    <div>No data available</div>
                ) : (
                    props.value.map((object, i) => {


                        return (
                            <div key={i} className="col-lg-4">

                                <div className="box-shadow"  >
                                    <Link style={{ cursor: 'pointer' }}

                                        // onClick={() => onOpenModal(i)} // Pass the index to identify which modal to open
                                        href={`/guide/${props.preparama}/${props.preparamb}/${object.slug}`}
                                        className="courses-category-single-item text-center"
                                    >
                                        <h3>{object.paper_name}</h3>
                                    </Link>

                                </div>
                            </div>

                        );
                    })
                )
            )}
        </>
    );
}


