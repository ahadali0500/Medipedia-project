'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { SlugToTitle } from '../../config/constant';
import toast from "react-hot-toast";
import { useRouter, usePathname } from "next/navigation";
import { apiUrl } from '../../config/constant';
import { useSession } from "next-auth/react";
import { revalidatePath } from 'next/cache'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Reprt from '@/app/components/Reprt';
import GoogleGpt from './GoogleGpt';

export default function Saved(props) {
    console.log(props);
    
    const [isLoading, setIsLoading] = useState(true); // State variable for loading

    useEffect(() => {
        setIsLoading(false); // Set loading to false once component is mounted
    }, []);
    const { data: session, status } = useSession();
    const MySwal = withReactContent(Swal)
    const [predata, setpredata] = useState([]);
    const router = useRouter();
    const pathname = usePathname();


    const [actualDataLength, setActualDataLength] = useState(props.data.length);
    useEffect(() => {
        setActualDataLength(props.data.length);
    }, [props.data]);

    const [index, setIndex] = useState(props.index);
    const [indexskip, setIndexskip] = useState(0);
    const [refresh, setrefresh] = useState(false);  // It is for option disabled when one  option is selected
    const [total, settotal] = useState(props.index + 1);          // total use mcqs from data
    const [totaldata, settotaldata] = useState(props.data.length);  // total record in actual data
    const [marks, setmarks] = useState(props.marks);
    const [skiparr, setskiparr] = useState(props.skiparr);
    //const [duration, setDuration] = useState({ hours: 0, minutes: 0, seconds: 0 });
    const [shuuflephase, setshuuflephase] = useState(props.shuuflephase);
    const [duration, setDuration] = useState({ hours: props.data[0].hour, minutes: props.data[0].mint, seconds: props.data[0].sec });



    useEffect(() => {
        if (skiparr.length > 0) {
            if (skiparr[indexskip].skipstatus == 0) {
                setIndexskip(indexskip + 1)
                // 

            }
        }

    }, []);

    useEffect(() => {
        if (shuuflephase) {
            settotal(indexskip + 1)
        }
    }, [indexskip]);


    function calculateTimeDifference(actualDuration, usedTime) {
        // Helper function to convert duration object to total seconds
        const toTotalSeconds = ({ hours, minutes, seconds }) => hours * 3600 + minutes * 60 + seconds;

        // Calculate total seconds for both durations
        const actualTotalSeconds = toTotalSeconds(actualDuration);
        const usedTotalSeconds = toTotalSeconds(usedTime);

        // Calculate the difference in seconds
        const remainingSeconds = actualTotalSeconds - usedTotalSeconds;

        // Convert the remaining seconds back to hours, minutes, and seconds
        const hours = Math.floor(remainingSeconds / 3600);
        const minutes = Math.floor((remainingSeconds % 3600) / 60);
        const seconds = remainingSeconds % 60;

        // Return the result as an object
        return {
            hours: hours,
            minutes: minutes,
            seconds: seconds
        };
    }

    const sendDataToPHP = async (dataArray, skiparr, alertstatus) => {
        try {
            const response = await fetch(`${apiUrl}/save-quiz.php`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    data: dataArray,
                    skiparr: skiparr,
                    user_id: session.user.id,
                    duration: duration
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to send data to PHP');
            }

            const responseData = await response.json();
            if (responseData.success) {
                if (alertstatus) {
                    toast.success("Quiz saved successfully!")
                }
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };










    const [showExplanation, setShowExplanation] = useState(false);
    const handleNext = () => {
        if (!shuuflephase) {
            if (props.data[index].setoptans == null) {
                toast.error("If you want to proceed next then skip this first!")
            } else {
                setrefresh(false);
                if (index < props.data.length - 1) {
                    setIndex(index + 1);
                    settotal(total + 1)
                }
            }

        } else {
            if (skiparr[indexskip].setoptans == null) {
                toast.error("If you want to proceed next then skip this first!")
            } else {
                //setrefresh(false);

                console.log(skiparr[indexskip])
                console.log(indexskip)

                if (indexskip <= skiparr.length - 1) {
                    setIndexskip(indexskip + 1);
                    settotal(total + 1);
                    console.log(skiparr[indexskip])
                    console.log(indexskip)
                }
            }

        }


        if (props.data.length - 1 === index) {

            if (skiparr.length - 1 != 0) {
                settotal(1);
                setIndex(999)
                setshuuflephase(true);
                settotaldata(skiparr.length)
            }
        }

    };

    const handlePrevious = () => {
        if (index > 0) {
            setIndex(index - 1);
            settotal(total - 1)
        }
    };

    const toggleExplanation = () => {
        setShowExplanation(!showExplanation);
    };

    const option = async (val, ans, curr) => {
        if (!shuuflephase) {
            setrefresh(true);
            props.data[index].sel_ans = curr;
            props.data[index].setoptans = ans;

            if (curr == ans) {
                setmarks(marks + 1);
            }

            if (props.data.length - 1 == index && skiparr.length <= 0) {
                await sendDataToPHP(props.data, skiparr, false);
                await MySwal.fire({
                    title: "Quiz Completed",
                    text: "Can you want to see results !",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "yes",
                    cancelButtonText: "No",
                }).then((result) => {
                    if (result.isConfirmed) {

                        router.push(`/success/${props.data[index].test_id}`)
                    } else {
                        router.push('/')
                    }
                })
            }
        } else {
            setrefresh(true);
            skiparr[indexskip].sel_ans = curr;
            skiparr[indexskip].setoptans = ans;

            if (curr == ans) {
                setmarks(marks + 1);
            }
            if (skiparr.length - 1 == indexskip) {
                await sendDataToPHP(props.data, skiparr, false);
                await MySwal.fire({
                    title: "Quiz Completed",
                    text: "Can you want to see results !",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "yes",
                    cancelButtonText: "No",
                }).then((result) => {
                    if (result.isConfirmed) {

                        router.push(`/success/${props.data[indexskip].test_id}`)
                    } else {
                        router.push('/')
                    }
                })
            }
        }
    };

    const reset = () => {
        MySwal.fire({
            title: "Reset Quiz",
            text: "Are you sure to Reset Quiz!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes",
            cancelButtonText: "No",
        }).then((result) => {
            if (result.isConfirmed) {
                resetdone()
            }
        })
    }

    const resetdone = async () => {

        try {
            const formData = new FormData();
            formData.append("test_id", props.data[0].test_id);
            formData.append("user_id", session.user.id);

            // Log form data before sending the request

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
                router.push(`/quiz/${props.param0}/${props.param1}/${props.param2}/${props.param3}?refresh=true`)
            }
        } catch (error) {
            console.error('Error:', error);
        }


        // toast.success("Quiz Reset successfully!")
    }

    const skip = () => {
        skiparr.push({
            "id": props.data[index].id,
            "test_id": props.data[index].test_id,
            "ques": props.data[index].ques,
            "op1": props.data[index].op1,
            "op2": props.data[index].op2,
            "op3": props.data[index].op3,
            "op4": props.data[index].op4,
            "op5": props.data[index].op5,
            "ans": props.data[index].ans,
            "reason": props.data[index].reason,
            "status": props.data[index].status,
            "sel_ans": "",
            "setoptans": "",
            "skip": true
        });

        settotaldata(props.data.length - 1);
        props.data.splice(index, 1);

        if (props.data.length === index) {
            settotal(total - 1);
            if (skiparr.length != 0) {
                settotal(1);
                setIndex(999)
                setshuuflephase(true);
                settotaldata(skiparr.length)
            }
        }

    }

    useEffect(() => {
        if (shuuflephase) {
            settotal(1)
            settotaldata(props.skiparr.length)
        }
    }, []);




    useEffect(() => {
        const timer = setInterval(() => {

            if (Number(duration.hours) === 0 && Number(duration.minutes) === 0 && Number(duration.seconds) === 0) {
                clearInterval(timer);
                // Timer has reached 0
                MySwal.fire({
                    title: "Time Ended",
                    text: "Your time has ended!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Restart",
                    cancelButtonText: "Save",
                }).then((result) => {
                    if (result.isConfirmed) {
                        resetdone();
                    } else {
                        sendDataToPHP(props.data, skiparr, true);
                    }
                });
                console.log("Timer has ended!");
            } else {
                setDuration(prevDuration => {
                    let updatedHours = prevDuration.hours;
                    let updatedMinutes = prevDuration.minutes;
                    let updatedSeconds = prevDuration.seconds;

                    // Decrement seconds
                    if (updatedSeconds === 0) {
                        // Check if minutes need to be decremented
                        if (updatedMinutes === 0) {
                            // Check if hours need to be decremented
                            if (updatedHours === 0) {
                                // If all values are 0, return previous duration
                                return prevDuration;
                            } else {
                                // Decrement hours and set minutes and seconds to maximum
                                updatedHours -= 1;
                                updatedMinutes = 59;
                                updatedSeconds = 59;
                            }
                        } else {
                            // Decrement minutes and set seconds to maximum
                            updatedMinutes -= 1;
                            updatedSeconds = 59;
                        }
                    } else {
                        // Decrement seconds
                        updatedSeconds -= 1;
                    }

                    return { hours: updatedHours, minutes: updatedMinutes, seconds: updatedSeconds };
                });
            }
        }, 1000);

        return () => clearInterval(timer); // Cleanup timer on unmount
    }, [duration]); // Include duration in the dependency array


    const save = () => {
        MySwal.fire({
            title: "Save Quiz",
            text: "Are you sure to save Quiz!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes",
            cancelButtonText: "No",
        }).then((result) => {
            if (result.isConfirmed) {
                sendDataToPHP(props.data, skiparr, true);
            }
        })
    }





    return (
        <>
            {isLoading ? (
                <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            ) : (
                <div className="col-lg-10 col-md-10 ps-0">
                    <div style={{ paddingTop: '21px', paddingBottom: '21px' }} className="sign-up-form">
                        <div className="timr">
                            <div>{duration.hours.toString().padStart(2, '0')}</div>
                            <div>{duration.minutes.toString().padStart(2, '0')}</div>
                            <div>{duration.seconds.toString().padStart(2, '0')}</div>
                        </div>
                        <div style={{ marginTop: '-20px' }} className="quiz-lay-2">
                            <div>Marks : {marks}</div>
                            <div>Q : {total}/{totaldata}</div>
                        </div>

                        <div className="quiz-lay-thr mt-4">
                            <div>
                                {!shuuflephase ? (
                                    props.data[index].setoptans == null ? (
                                        <></>
                                    ) : (
                                        <GoogleGpt Ques={props.data[index].ques}    ></GoogleGpt>
                                    )
                                ) : (
                                    skiparr[indexskip].setoptans == null ? (
                                        <></>
                                    ) : (
                                        <GoogleGpt Ques={skiparr[indexskip].ques}   ></GoogleGpt>
                                    )
                                )}
                            </div>
                            <div className='pdd-10'>
                                <button style={{ marginRight: '5px' }} onClick={save} className="btn btn-cus btn-md">
                                    Save  <i className="fa fa-save" />
                                </button>
                                <button style={{ marginRight: '5px' }} onClick={reset} className="btn btn-cus btn-md">
                                    Reset <i className="fa fa-refresh" />
                                </button>
                                {!shuuflephase ? (
                                    <Reprt test_id={props.testId} question_id={props.data[index].id} ></Reprt>
                                ) : (
                                    <Reprt test_id={props.testId} question_id={skiparr[indexskip].id} ></Reprt>

                                )}
                            </div>
                        </div>

                        {!shuuflephase ? (
                            <>
                                <h3 className="mt-4 fs-20">
                                    {props.data[index].ques}
                                </h3>

                                <div className="row">

                                    {props.data[index].op1 &&

                                        <div
                                            style={props.data[index].setoptans == "A" ? { backgroundColor: 'green', color: 'white' } : (props.data[index].sel_ans == "A" ? { backgroundColor: 'red', color: 'white' } : {})}
                                            onClick={props.data[index].setoptans == null ? () => option(props.data[index].op1, props.data[index].ans, "A") : undefined}
                                            className="col-lg-6 col-md-12 mcq-opt">
                                            A: {props.data[index].op1}
                                        </div>

                                    }

                                    {props.data[index].op2 &&

                                        <div
                                            style={props.data[index].setoptans == "B" ? { backgroundColor: 'green', color: 'white' } : (props.data[index].sel_ans == "B" ? { backgroundColor: 'red', color: 'white' } : {})}
                                            onClick={props.data[index].setoptans == null ? () => option(props.data[index].op2, props.data[index].ans, "B") : undefined}
                                            className="col-lg-6 col-md-12 mcq-opt">
                                            B: {props.data[index].op2}
                                        </div>

                                    }

                                    {props.data[index].op3 &&

                                        <div
                                            style={props.data[index].setoptans == "C" ? { backgroundColor: 'green', color: 'white' } : (props.data[index].sel_ans == "C" ? { backgroundColor: 'red', color: 'white' } : {})}
                                            onClick={props.data[index].setoptans == null ? () => option(props.data[index].op3, props.data[index].ans, "C") : undefined}
                                            className="col-lg-6 col-md-12 mcq-opt">
                                            C: {props.data[index].op3}
                                        </div>

                                    }

                                    {props.data[index].op4 &&

                                        <div
                                            style={props.data[index].setoptans == "D" ? { backgroundColor: 'green', color: 'white' } : (props.data[index].sel_ans == "D" ? { backgroundColor: 'red', color: 'white' } : {})}
                                            onClick={props.data[index].setoptans == null ? () => option(props.data[index].op4, props.data[index].ans, "D") : undefined}
                                            className="col-lg-6 col-md-12 mcq-opt">
                                            D: {props.data[index].op4}
                                        </div>

                                    }

                                    {props.data[index].op5 &&

                                        <div
                                            style={props.data[index].setoptans == "E" ? { backgroundColor: 'green', color: 'white' } : (props.data[index].sel_ans == "E" ? { backgroundColor: 'red', color: 'white' } : {})}
                                            onClick={props.data[index].setoptans == null ? () => option(props.data[index].op5, props.data[index].ans, "E") : undefined}
                                            className="col-lg-6 col-md-12 mcq-opt">
                                            E: {props.data[index].op5}
                                        </div>

                                    }

                                </div>

                                {props.data[index].reason && props.data[index].setoptans != null &&
                                    <>
                                        <div className="quiz-lay-2 mt-4">
                                            <div className="la">
                                                <button onClick={toggleExplanation} className="btn btn-cus btn-md">Explanation <i className="fa fa-info-circle" /></button>
                                            </div>
                                        </div>
                                        {showExplanation && <p>{props.data[index].reason}</p>}
                                    </>
                                }
                                <div className="quiz-lay-2 mt-4">
                                    <div>
                                        <button onClick={() => props.data[index].setoptans == null ? skip() : undefined} className="btn btn-primary btn-md">Skip ({skiparr.length})</button>
                                    </div>
                                    <div className="la">
                                        <button style={{ marginRight: '5px' }} onClick={handlePrevious} disabled={index === 0} className="btn btn-primary btn-md">Previous</button>
                                        <button onClick={handleNext} disabled={index === props.data.length - 1 && skiparr.length == 0} className="btn btn-primary btn-md">Next</button>
                                    </div>
                                </div>
                            </>
                        ) : (

                            <>
                                <h3 className="mt-4 fs-20">
                                    {skiparr[indexskip].ques}
                                </h3>

                                <div className="row">

                                    {skiparr[indexskip].op1 &&

                                        <div
                                            style={skiparr[indexskip].setoptans == "A" ? { backgroundColor: 'green', color: 'white' } : (skiparr[indexskip].sel_ans == "A" ? { backgroundColor: 'red', color: 'white' } : {})}
                                            onClick={skiparr[indexskip].setoptans == null ? () => option(skiparr[indexskip].op1, skiparr[indexskip].ans, "A") : undefined}
                                            className="col-lg-6 col-md-12 mcq-opt">
                                            A: {skiparr[indexskip].op1}
                                        </div>

                                    }

                                    {skiparr[indexskip].op2 &&

                                        <div
                                            style={skiparr[indexskip].setoptans == "B" ? { backgroundColor: 'green', color: 'white' } : (skiparr[indexskip].sel_ans == "B" ? { backgroundColor: 'red', color: 'white' } : {})}
                                            onClick={skiparr[indexskip].setoptans == null ? () => option(skiparr[indexskip].op2, skiparr[indexskip].ans, "B") : undefined}
                                            className="col-lg-6 col-md-12 mcq-opt">
                                            B: {skiparr[indexskip].op2}
                                        </div>

                                    }

                                    {skiparr[indexskip].op3 &&

                                        <div
                                            style={skiparr[indexskip].setoptans == "C" ? { backgroundColor: 'green', color: 'white' } : (skiparr[indexskip].sel_ans == "C" ? { backgroundColor: 'red', color: 'white' } : {})}
                                            onClick={skiparr[indexskip].setoptans == null ? () => option(skiparr[indexskip].op3, skiparr[indexskip].ans, "C") : undefined}
                                            className="col-lg-6 col-md-12 mcq-opt">
                                            C: {skiparr[indexskip].op3}
                                        </div>

                                    }

                                    {skiparr[indexskip].op4 &&

                                        <div
                                            style={skiparr[indexskip].setoptans == "D" ? { backgroundColor: 'green', color: 'white' } : (skiparr[indexskip].sel_ans == "D" ? { backgroundColor: 'red', color: 'white' } : {})}
                                            onClick={skiparr[indexskip].setoptans == null ? () => option(skiparr[indexskip].op4, skiparr[indexskip].ans, "D") : undefined}
                                            className="col-lg-6 col-md-12 mcq-opt">
                                            D: {skiparr[indexskip].op4}
                                        </div>

                                    }

                                    {skiparr[indexskip].op5 &&

                                        <div
                                            style={skiparr[indexskip].setoptans == "E" ? { backgroundColor: 'green', color: 'white' } : (skiparr[indexskip].sel_ans == "E" ? { backgroundColor: 'red', color: 'white' } : {})}
                                            onClick={skiparr[indexskip].setoptans == null ? () => option(skiparr[indexskip].op5, skiparr[indexskip].ans, "E") : undefined}
                                            className="col-lg-6 col-md-12 mcq-opt">
                                            E: {skiparr[indexskip].op5}
                                        </div>

                                    }

                                </div>

                                {skiparr[indexskip].reason && skiparr[indexskip].setoptans &&
                                    <>
                                        <div className="quiz-lay-2 mt-4">
                                            <div className="la">
                                                <button onClick={toggleExplanation} className="btn btn-cus btn-md">Explanation <i className="fa fa-info-circle" /></button>
                                            </div>
                                        </div>
                                        {showExplanation && <p>{skiparr[indexskip].reason}</p>}
                                    </>
                                }
                                <div className="quiz-lay-2 mt-4">
                                    {/* <div>
                                    <button onClick={() => skiparr[indexskip].setoptans ==="" ? skip() : undefined} className="btn btn-primary btn-md">Skip ({skiparr.length})</button>
                                </div> */}
                                    <div className="la">
                                        {/* <button style={{ marginRight: '5px' }} onClick={handlePrevious} disabled={indexskip === 0} className="btn btn-primary btn-md">Previous</button> */}
                                        <button onClick={handleNext} disabled={indexskip === skiparr.length - 1} className="btn btn-primary btn-md">Next</button>
                                    </div>
                                </div>
                            </>

                        )}
                    </div>
                    <div className="col-lg-1 col-md-1 ps-0" />
                </div>
            )}

        </>
    );
}



