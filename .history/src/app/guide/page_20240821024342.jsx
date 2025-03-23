import React from 'react';
import Link from 'next/link';
import { apiUrl } from '../config/constant';
import Data from './book-bundle/[param]/Data';

export const metadata = {
  title: "Medipedia Guide",
};

export default async function page() {

  let data;
  try{
    data= await getData();
  } catch (error) {
    console.error('Error fetching data:', error);
    return (
      <section className="courses-category-area ptb-50">
        <h1 className="text-center">Something went wrong. Please try again</h1>
        <br />
        <div className="container mw-1470">
          <div className="col col-lg-12 row">
            Oops, there was an issue fetching the data.
          </div>
        </div>
      </section>
    );
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
    <section className="courses-category-area ptb-50">
      <h1 className="text-center">Medipedia Guide</h1>
      <br />
      <div className="container mw-1470">
        <div className="col col-lg-12 row">
          <Data value={data} />
        </div>
      </div>
    </section>
  );
}

async function getData() {
  try {
    const res = await fetch(`${apiUrl}/speclization.php`, {
      cache: 'no-store'
    });
    const jsonData = await res.json();
    // Additional checks can be added here to ensure valid data structure
    return jsonData;
  } catch (error) {
    return{
      title: "Something went wrong"
    }     
  }
}
