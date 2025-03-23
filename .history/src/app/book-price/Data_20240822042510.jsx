import React from 'react'

export default function Data(props) {
    return (
        <div className="row">


             
            <div className="col-xl-6 mb-5">
                <div className="event-details-content">
                    <ul className="mb-0 list-unstyled event-list">
                        <h2 className="text-center">Book Bundle 2</h2>
                        {props.bookBundle2.map((item, index) => (
                            <li className="d-flex">
                                <div className="flex-shrink-0 pr-b-4">
                                    <img src="/assets/images/icon/check-2.svg" alt="check-2" />
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <span>{item.book_name}</span>
                                </div>
                            </li>
                        ))}
                        {/* <h4 className="fee">Fee: {props.allbooksPrice}</h4> */}
                    </ul>
                </div>
            </div>
            <div className="col-xl-6 mb-5">
                <div className="event-details-content">
                    <ul className="mb-0 list-unstyled event-list">
                        <h2 className="text-center">Book Bundle 1</h2>
                        {props.bookBundle1.map((item, index) => (
                            <li className="d-flex">
                                <div className="flex-shrink-0 pr-b-4">
                                    <img src="/assets/images/icon/check-2.svg" alt="check-2" />
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <span>{item.book_name}</span>
                                </div>
                            </li>
                        ))}
                        {/* <h4 className="fee">Fee: {props.allbooksPrice}</h4> */}
                    </ul>
                </div>
            </div>
            <div className="col-xl-6 mb-5">
                <div className="event-details-content">
                    <ul className="mb-0 list-unstyled event-list">
                        <h2 className="text-center">Mock Bundle 2</h2>
                        {props.mockBundle2.map((item, index) => (
                            <li className="d-flex">
                                <div className="flex-shrink-0 pr-b-4">
                                    <img src="/assets/images/icon/check-2.svg" alt="check-2" />
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <span>{item.book_name}</span>
                                </div>
                            </li>
                        ))}
                        {/* <h4 className="fee">Fee:  {props.allmockPrice}</h4> */}
                    </ul>
                </div>
            </div>
            <div className="col-xl-6 mb-5">
                <div className="event-details-content">
                    <ul className="mb-0 list-unstyled event-list">
                        <h2 className="text-center">Mock Bundle 1</h2>
                        {props.mockBundle1.map((item, index) => (
                            <li className="d-flex">
                                <div className="flex-shrink-0 pr-b-4">
                                    <img src="/assets/images/icon/check-2.svg" alt="check-2" />
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <span>{item.book_name}</span>
                                </div>
                            </li>
                        ))}
                        {/* <h4 className="fee">Fee:  {props.allmockPrice}</h4> */}
                    </ul>
                </div>
            </div>
         
            <div className="col-xl-6">
                <div className="event-details-content">
                    <ul className="mb-0 list-unstyled event-list">
                        <h2 className="text-center">Seprate Book prices</h2>
                        {props.books.map((item, index) => (
                            <li className="d-flex">
                                <div className="flex-shrink-0 pr-b-4">
                                    <img src="/assets/images/icon/check-2.svg" alt="check-2" />
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <span>
                                        {item.book_name}
                                        <span className="fees-a" style={{ marginLeft: '5px' }}>
                                            <div style={{ float: 'right' }}>
                                                <b>{item.book_price}</b>
                                            </div>
                                        </span>
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
