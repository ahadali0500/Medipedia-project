import Link from "next/link";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { apiUrl } from '../../../config/constant';
import Data from "./Data";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import Apply from "@/app/components/Apply";

export default async function Page({ params }) {
  const { applyForCode, loading, error } = Apply();

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
    data = await getData(params, datas.user.id);
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
        {params.param == 1  ? (
          <>
            <p style={{ textAlign: 'center', backgroundColor: '#ecf2fc', color: '#19b2ee', padding: '4px' }}>
              To get all books code at once just pay {data.price} <span onClick={() => applyForCode('all-books')} > Get All Code</span>
            </p>
            <br />
          </>

        ) : params.param == 2 ? (
          <>
            <p style={{ textAlign: 'center', backgroundColor: '#ecf2fc', color: '#19b2ee', padding: '4px' }}>
              To get all books code at once just pay {data.price} <Link href={`/apply-code/all-mock`} > Get All Code</Link>
            </p>
          </>
        ) : (
          <>
          </>
        )}
        <br />
        <div className="container mw-1470">
            <div className="col col-lg-12 row">
            <Data preparams={params.book} type={data.type} value={data.data}></Data>
            </div>
        </div>
      </section>
    </>
  );
}

async function getData(params, user_id) {
  try {
    var bookBundle;
    if (params.param==1) {
        bookBundle="book-bundle-1";
    }else if(params.param==2){
        bookBundle="book-bundle-2";
    }
    console.log(bookBundle);
    
    const formData = new FormData();
    formData.append("slug", "book-packages");
    formData.append("bookBundle", bookBundle);
    formData.append("user_id", user_id);
    console.log(formData);
    
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

// export async function generateMetadata({ params }) {
//   let datas;
//   try {
//     datas = await getServerSession(authOptions);
//   } catch (error) {
//     console.error('Error fetching session data:', error);
//     return {
//       title: "Error - Medipedia Guide",
//     };
//   }

  

//   let data;
//   try {
//     data = await getData(params.book, datas.user.id);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     return {
//       title: "Something went wrong",
//     };
//   }

//   return {
//     title: "Book - " + data.heading,
//   };
// }
