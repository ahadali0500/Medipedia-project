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
                    <Data allbooks={data.allbooks} allbooksPrice={data.allbooksPrices} allmockPrice={data.allmockPrices}  books={data.books} allmocks={data.allmocks}></Data>
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
