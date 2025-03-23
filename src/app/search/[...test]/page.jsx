import React from 'react'
import { apiUrl } from '../../config/constant';
import Data from './Data';
import Search from './Search';


export default async function page({ params }) {
  if (params.test[1]) {
    var search = params.test[1];
  } else {
    var search = "";
  }
  const data = await getData(params.test[0], search)
  console.log(data)

  return (
    <div className="terms-conditions-section pt-50">
      <h1 className="text-center">{data.heading}</h1>
      <div className="container">
        <Search search={search}></Search>
        <div className="row">
          <div className="col-lg-12">
            <div className="pt-50" id="terms">
              {data.data.length!=0 ? (
                <Data data={data.data} ></Data>
              ) : (
                <div>No Result found</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

async function getData(params, search) {
  const formData = new FormData();
  formData.append("slug", params);
  formData.append("search", search);

  const res = await fetch(`${apiUrl}/search.php`, {
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


export async function generateMetadata({ params }) {
  if (params.test[1]) {
    var search = params.test[1];
  } else {
    var search = "";
  }

  return {
    title: "Search  " + search,
  }
}

