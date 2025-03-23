import Link from "next/link";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { SlugToTitle, apiUrl } from '../../config/constant';
import Data from "./Data";
import Test from "./Test";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";


export default async function Page({ params }) {
 
  try {
    const datas = await getServerSession(authOptions);
    if (params.multiple.length == 2) {
      const data = await getData(params.multiple[1])
      if (!data) {
        // Handle data fetching error or empty response
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
  
      return (
        <>
          <section className="courses-category-area ptb-50">
            <h1 className="text-center">
              Medipedia Guide <i className="fas fa-arrow-right"></i> {data.heading}
            </h1>
            <br />
            <div className="container mw-1470">
              <div className="col col-lg-12 row">
                <Data preparama={params.multiple[0]} preparamb={params.multiple[1]} preparamc={params.multiple[2]} value={data.data}></Data>
              </div>
            </div>
          </section>
  
        </>
      );
    } else {
      const data = await getData2(params.multiple[2], datas.user.id)
      if (!data) {
        // Handle data fetching error or empty response
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
      return (
        <>
          <section className="courses-category-area ptb-50">
            <h1 className="text-center">
              Medipedia Guide <i className="fas fa-arrow-right"></i> {data.heading}
            </h1>
            <br />
            <div className="container mw-1470">
              <div className="col col-lg-12 row">
                <Test preparama={params.multiple[0]} preparamb={params.multiple[1]} preparamc={params.multiple[2]} value={data.data}></Test>
              </div>
            </div>
          </section>
  
        </>
      );
  
  
  
    }
  
  } catch (error) {
    <section className="courses-category-area ptb-50">
    <h1 className="text-center">Medipedia Guide</h1>
    <br />
    <div className="container mw-1470">
      <div className="col col-lg-12 row">
        Something went wrong. Please try again.
      </div>
    </div>
  </section>
  }



}

async function getData(params) {
  try {
    const formData = new FormData();
    formData.append("slug", params);
    const res = await fetch(`${apiUrl}/papers.php`, {
      method: 'POST',
      body: formData,
      cache: 'no-store'
    })
    return res.json()
  } catch (error) {
    console.error('Error fetching data:', error);
    return null; // Indicate error without specific message
  }
}


async function getData2(params, user_id) {
  try {
    const formData = new FormData();
    formData.append("slug", params);
    formData.append("user_id", user_id);
    const res = await fetch(`${apiUrl}/test.php`, {
      method: 'POST',
      body: formData,
      cache: 'no-store'
    })
    return res.json()
  } catch (error) {
    console.error('Error fetching data:', error);
    return null; // Indicate error without specific message
  }
}



export async function generateMetadata({ params }) {

 try {
   const datas = await getServerSession(authOptions);
   if (params.multiple.length == 2) {
     const data = await getData(params.multiple[1])
     return {
       title: "Paper - " + data.heading,
 
     }
   } else {
     const data = await getData2(params.multiple[2], datas.user.id)
     return {
       title: "Test - " + data.heading,
     }
   }
 } catch (error) {
  return {
    title: "Something went wrong"

  }
 }
}