import Link from "next/link";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { apiUrl } from '../../config/constant';
import Data from "./Data";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";

export default async function Page({ params }) {
  let datas;
  try {
    datas = await getServerSession(authOptions);
  } catch (error) {
    console.error('Error fetching session data:', error);
    return (
      <section className="courses-category-area ptb-50">
        <h1 className="text-center"> Something Went wrong. Please try again</h1>
        <br />
        <div className="container mw-1470">
          <div className="col col-lg-12 row">

          </div>
        </div>
      </section>
    );
  }

  let data;
  try {
    data = await getData(params.book, datas.user.id);
    console.log(data);

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
        <h1 className="text-center">Something went wrong. Please try again.</h1>
        <br />
        <div className="container mw-1470">
          <div className="col col-lg-12 row">
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
        {data.type === "all-books" && data.msgbar != "" ? (
          <>
            <div className="container mw-1470">
              <div className="col col-lg-12 row">
                <div className="col-lg-6">
                  <Link href={`/guide/book-bundle/1`} className="courses-category-single-item text-center box-shadow">
                    <h3 style={{ cursor: 'pointer' }}>
                      Book Bundle 1
                    </h3>
                  </Link>
                </div>
                <div className="col-lg-6">
                  <Link href={`/guide/book-bundle/2`} className="courses-category-single-item text-center box-shadow">
                    <h3 style={{ cursor: 'pointer' }}>
                      Book Bundle 2
                    </h3>
                  </Link>
                </div>
              </div>
            </div>
          </>

        ) : data.type === "all-mock" && data.msgbar != "" ? (
          <>
            <p style={{ textAlign: 'center', backgroundColor: '#ecf2fc', color: '#19b2ee', padding: '4px' }}>
              To get all books code at once just pay {data.price} <Link href={`/apply-code/all-mock`} > Get All Code</Link>
            </p>
          </>
        ) : data.type === "indiviuals" && data.msgbar != "" ? (
          <>
            <br />
            <div className="container mw-1470">
              <div className="col col-lg-12 row">
                <Data preparams={params.book} type={data.type} value={data.data}></Data>
              </div>
            </div>
          </>
        ) : (
          <>
            <br />
            <div className="container mw-1470">
                <div className="col col-lg-12 row">
                <Data preparams={params.book} type={data.type} value={data.data}></Data>
                </div>
            </div>
          </>
        )}
        


      </section>
    </>
  );
}

async function getData(params, user_id) {
  try {
    const formData = new FormData();
    formData.append("slug", params);
    formData.append("user_id", user_id);
    const res = await fetch(`${apiUrl}/books.php`, {
      method: 'POST',
      body: formData,
      cache: 'no-store'
    });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Re-throw error to be handled in the calling function
  }
}

export async function generateMetadata({ params }) {
  let datas;
  try {
    datas = await getServerSession(authOptions);
  } catch (error) {
    console.error('Error fetching session data:', error);
    return {
      title: "Error - Medipedia Guide",
    };
  }

  let data;
  try {
    data = await getData(params.book, datas.user.id);
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      title: "Something went wrong",
    };
  }

  return {
    title: "Book - " + data.heading,
  };
}
