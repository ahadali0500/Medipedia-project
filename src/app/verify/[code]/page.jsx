import React from "react";
import { apiUrl } from '@/app/config/constant';

export default async function Page({ params }) {
  const data = await getData(params.code)
    return (
      <>
        <center><h2 style={{ marginTop: '80px' }} >{data.message}</h2></center>
        <br></br><br></br>
       
      </>
    );
}


async function getData(params) {
  const res = await fetch(`${apiUrl}/verify.php?code=${params}`, {
    method: 'GET',
    cache: 'no-store'
  })
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

