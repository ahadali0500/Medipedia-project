import { apiUrl } from '@/app/config/constant';
import React from 'react'
import Form from './Form';

export default async function page({ params }) {
  const data = await getData(params.code)
  console.log(data);
  if (data.code === 200) {
    return (
      <>
        <section className="sign-up-section ptb-50">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-3 ps-0" />
              <div className="col-lg-6 col-md-6 ps-0">
                <div className="sign-up-form">
                  <h2>Recover Password  </h2>
                  <p>Enter your Email below, we will send you password reset mail.</p>
                  <Form params={params.code} ></Form>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 ps-0" />
            </div>
          </div>
        </section>
      </>
    );
  } else {
    return (
      <>
        <center><h2 style={{ marginTop: '80px' }} >Link has been expired!</h2></center>
        <br></br><br></br>
      </>
    );
  }
}

async function getData(params) {
  const res = await fetch(`https://desired-techs.com/docapp/recoverpasswordverify.php?code=${params}`, {
    method: 'GET',
    cache: 'no-store'
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}
