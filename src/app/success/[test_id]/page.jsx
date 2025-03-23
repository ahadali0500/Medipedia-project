import React from 'react'
import Data from './Data'
import { apiUrl } from '../../config/constant';
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";

export const metadata = {
  title: "Quiz Result  - Medipedia",
};


export default async function page({ params }) {
  const datas = await getServerSession(authOptions);
  const data = await getData(params.test_id, datas.user.id)
  return (
    <>
      <Data data={data} ></Data>
    </>
  )
}

async function getData(test_id, user_id) {
  const formData = new FormData();
  formData.append("test_id", test_id);
  formData.append("user_id", user_id);
  const res = await fetch(`${apiUrl}/result.php`, {
    method: 'POST',
    body: formData,
    cache: 'no-store'
  })
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}