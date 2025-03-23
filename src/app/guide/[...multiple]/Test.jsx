'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSession } from "next-auth/react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useRouter } from "next/navigation";
import { apiUrl } from '../../config/constant';
import toast from "react-hot-toast";


export default function Data(props) {
    const { data: session, status, update } = useSession();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const MySwal = withReactContent(Swal)


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

    const promptConfirmation = (redirect, save) => {
        {

            save == "ok" ? (
                MySwal.fire({
                    title: "Saved Quiz",
                    text: "You saved this Quiz Last time",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Restart",
                    cancelButtonText: "Continue",
                }).then((result) => {
                    if (result.isConfirmed) {
                        resetdone(redirect);
                    } else {
                        router.push(`/quiz/${redirect}`)
                    }
                })
            ) : (
                router.push(`/quiz/${redirect}`)

            )
        }

    }


    const resetdone = async (redirect) => {

        try {
            const formData = new FormData();
            formData.append("test_id", props.value[0].id);
            formData.append("user_id", session.user.id);

            // Log form data before sending the request
            console.log("Form Data:", formData);

            const response = await fetch(`${apiUrl}/reset.php`, {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Failed to send data to PHP');
            }

            const responseData = await response.json();
            if (responseData.success) {
                toast.success("Quiz Reset successfully!")
                router.push(`/quiz/${redirect}?refresh=true`);
            }
        } catch (error) {
            console.error('Error:', error);
        }


        // toast.success("Quiz Reset successfully!")
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
                            <div key={i} className="col-lg-6" style={{ marginBottom: '15px' }}>
                                <div style={{ cursor: 'pointer' }}
                                    className="courses-category-single-item text-center"
                                >
                                    <h3 onClick={() => promptConfirmation(`${props.preparama}/${props.preparamb}/${props.preparamc}/${object.slug}`, object.quiz_save ? "ok" : "no")}
                                    >{object.test_name}</h3>
                                    <div style={{ display: 'flex', justifyContent: 'center', }}>
                                        {object.hints ? (
                                            <>
                                                <div style={{ padding: '0px 17px 0px 5px' }}><Link href={`/hints/${object.slug}`} style={{ textDecoration: 'none' }} >View Hints</Link></div>
                                                <div onClick={() => promptConfirmation(`${props.preparama}/${props.preparamb}/${props.preparamc}/${object.slug}`, object.quiz_save ? "ok" : "no")}>Start Test</div>
                                            </>
                                        ) : (
                                            <></>
                                        )}


                                    </div>

                                </div>

                            </div>
                        );
                    })
                )
            )}
        </>
    );
}


