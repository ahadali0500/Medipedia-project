import React from 'react'
import Link from 'next/link'
import { apiUrl } from '../config/constant';
import Data from './Data';
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";

export const metadata = {
  title: 'Book Code - Medipedia',
}

export default async function page() {
    const datas = await getServerSession (authOptions);
    return (
        <section className="event-details-section">
            <div className="container mw-1470">
                <div className="ptb-50">
                    <h1 className="text-center">Books Code</h1>
                    <br />
                    <Data user_id={datas.user.id} />
                </div>
            </div>
        </section>
    )
}
