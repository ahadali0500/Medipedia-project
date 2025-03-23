import React from 'react'
import { apiUrl } from '../../config/constant';
import Data from './Data';

export default async function page({ params }) {
  let data;
  try {
    data = await getData(params.test_id)
  }
  catch (error) {
    <div className="terms-conditions-section pt-50">
      <h1 className="text-center">Something went wrong. Please try again</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="pt-50" id="terms">
              <Data data={data.data} ></Data>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
  if (!data) {
    // Handle data fetching error or empty response
    return (
      <section className="courses-category-area ptb-50">
        <h1 className="text-center">Something went wrong. Please try again</h1>
        <br />
        <div className="container mw-1470">
          <div className="col col-lg-12 row">

          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="terms-conditions-section pt-50">
      <h1 className="text-center">{data.heading}</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="pt-50" id="terms">
              <Data data={data.data} ></Data>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}




async function getData(params) {
  try {

    const formData = new FormData();
    formData.append("slug", params);
    const res = await fetch(`${apiUrl}/hints.php`, {
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
  catch (error) {
    return {
      title: "Something went wrong"
    }
  }
}



export async function generateMetadata({ params }) {
  let data;
  try {
    data = await getData(params.test_id)
  } catch (error) {
    return {
      title: "Something went wrong"
    }
  }
  return {
    title: "Hints - " + data.heading,
  }
}