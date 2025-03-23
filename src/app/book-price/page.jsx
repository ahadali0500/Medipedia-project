import React from 'react'
import Link from 'next/link'
import { apiUrl } from '../config/constant';
import Data from './Data';

export const metadata = {
    title: 'Book Prices - Medipedia',
}


export default async function page() {
    const data = await getData()

    return (
        <section className="event-details-section">
            <div className="container mw-1470">
                <div className="ptb-50">
                    <h1 className="text-center">Books Prices</h1>
                    <br />
                    <Data bookcode1Price={data.bookcode1Price} bookcode2Price={data.bookcode2Price} mockcode3Price={data.mockcode3Price} mockcode4Price={data.mockcode4Price} bookBundle2={data.bookBundle2} bookBundle1={data.bookBundle1}  books={data.books} mockBundle1={data.mockBundle1}  mockBundle2={data.mockBundle2}  ></Data>
                </div>
            </div>
        </section>

    )
}


async function getData() {
    const res = await fetch(`${apiUrl}/book-prices.php`, {
        cache: 'no-store'
    })
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}
