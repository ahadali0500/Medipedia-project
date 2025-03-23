'use client'
import React, { useEffect, useState } from "react";
import { apiUrl } from '../config/constant';
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

export default function Data({ user_id }) {
    const [dataCode, setDataCode] = useState([])
    const [dataBookCode1, setDataBookCode1] = useState([])
    const [dataMockCode1, setDataMockCode1] = useState([])
    const [dataBookCode2, setDataBookCode2] = useState([])
    const [dataMockCode2, setDataMockCode2] = useState([])
    const [loading, setLoading] = useState(false)

    // console.log(dataCode)
    // console.log(dataBookCode)
    // console.log(dataMockCode)
    async function getData() {
        setLoading(true)
        try {
            const formData = new FormData();
            formData.append("user_id", user_id);
            const responce = await fetch(`${apiUrl}/book-code.php`, {
                method: 'POST',
                body: formData,
                cache: 'no-store'
            })
            const data = await responce.json();
            setDataCode(data.code)
            setDataBookCode1(data.bookcode1)
            setDataMockCode1(data.mockcode1)
            setDataBookCode2(data.bookcode2)
            setDataMockCode2(data.mockcode2)
            setLoading(false)
        }
        catch (error) {
            console.log("Error", error)
        }

    }

    useEffect(() => {
        getData()
    }, [])



    return (
        <>
            {!loading && <div>
                <div className="row">
        {dataCode.length === 0 && dataBookCode1.length===0 && dataMockCode1.length===0 && dataBookCode2.length===0 && dataMockCode2.length===0 ?<h4 className="text-center mt-5">No Book Code applied yet</h4>:''}
                {dataCode.length > 0 && (
                    <div className="col-xl-4">
                        <div className="event-details-content">
                            <ul className="mb-0 list-unstyled event-list">
                                <h2 className="text-center">Seprate Book Code</h2>
                                {dataCode
                                    .filter(item => item.user_code !== 0) // Filter items where user_code is not 0
                                    .map((item, index) => (
                                        <li className="d-flex" key={index}>
                                            <div className="flex-shrink-0 pr-b-4">
                                                <img src="/assets/images/icon/check-2.svg" alt="check-2" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <span>
                                                    {item.book_name} <span className="ms-1">({item.book_price})</span>
                                                    <span className="fees-a" style={{ marginLeft: '5px' }}>
                                                        <div style={{ float: 'right' }}>
                                                            {item.user_code == 0 ? (
                                                                <><b>pending</b></>
                                                            ) : (
                                                                <><b>{item.user_code}</b></>
                                                            )}
                                                        </div>
                                                    </span>
                                                </span>
                                            </div>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    </div>
                )}


                {dataBookCode1.length > 0 && (
                    <div className="col-xl-4">
                        <div className="event-details-content">
                            <ul className="mb-0 list-unstyled event-list">
                                <h2 className="text-center">Book Bundle 1</h2>
                                {dataBookCode1.map((item, index) => (
                                    <li key={index} className="d-flex">
                                        <div className="flex-shrink-0 pr-b-4">
                                            <img src="/assets/images/icon/check-2.svg" alt="check-2" />
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <span>{item.book_name}<span className="fees-a" style={{ marginLeft: '5px' }}>
                                                <div style={{ float: 'right' }}>
                                                    {item.user_code == 0 ? (
                                                        <><b>pending</b></>
                                                    ) : (
                                                        <><b>{item.user_code}</b></>
                                                    )}
                                                </div>
                                            </span></span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
                   {dataBookCode2.length > 0 && (
                    <div className="col-xl-4">
                        <div className="event-details-content">
                            <ul className="mb-0 list-unstyled event-list">
                                <h2 className="text-center">Book Bundle 2</h2>
                                {dataBookCode2.map((item, index) => (
                                    <li key={index} className="d-flex">
                                        <div className="flex-shrink-0 pr-b-4">
                                            <img src="/assets/images/icon/check-2.svg" alt="check-2" />
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <span>{item.book_name}<span className="fees-a" style={{ marginLeft: '5px' }}>
                                                <div style={{ float: 'right' }}>
                                                    {item.user_code == 0 ? (
                                                        <><b>pending</b></>
                                                    ) : (
                                                        <><b>{item.user_code}</b></>
                                                    )}
                                                </div>
                                            </span></span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
                {dataMockCode1.length > 0 && (
                    <div className="col-xl-4">
                        <div className="event-details-content">
                            <ul className="mb-0 list-unstyled event-list">
                                <h2 className="text-center">Mock Bundle 1</h2>
                                {dataMockCode.map((item, index) => (
                                    <li key={index} className="d-flex">
                                        <div className="flex-shrink-0 pr-b-4">
                                            <img src="/assets/images/icon/check-2.svg" alt="check-2" />
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <span>{item.book_name}<span className="fees-a" style={{ marginLeft: '5px' }}>
                                                <div style={{ float: 'right' }}>
                                                    {item.user_code == 0 ? (
                                                        <><b>pending</b></>
                                                    ) : (
                                                        <><b>{item.user_code}</b></>
                                                    )}
                                                </div>
                                            </span></span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
                {dataMockCode2.length > 0 && (
                    <div className="col-xl-4">
                        <div className="event-details-content">
                            <ul className="mb-0 list-unstyled event-list">
                                <h2 className="text-center">Mock Bundle 2</h2>
                                {dataMockCode.map((item, index) => (
                                    <li key={index} className="d-flex">
                                        <div className="flex-shrink-0 pr-b-4">
                                            <img src="/assets/images/icon/check-2.svg" alt="check-2" />
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <span>{item.book_name}<span className="fees-a" style={{ marginLeft: '5px' }}>
                                                <div style={{ float: 'right' }}>
                                                    {item.user_code == 0 ? (
                                                        <><b>pending</b></>
                                                    ) : (
                                                        <><b>{item.user_code}</b></>
                                                    )}
                                                </div>
                                            </span></span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
                </div>
            </div>}

            {loading &&
                <div className="d-flex flex-wrap">
                    <Skeleton className="loading-table-book me-5" />
                    <Skeleton className="loading-table-book me-5" />
                    <Skeleton className="loading-table-book" />
                </div>}
        </>
    )
}
