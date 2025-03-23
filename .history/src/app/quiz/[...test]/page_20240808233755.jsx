import React from 'react'
import Link from 'next/link'
import { SlugToTitle, apiUrl } from '../../config/constant';
import Data from './Data';
import Saved from './Saved';
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";

export default async function page({ params }) {
    const datas = await getServerSession(authOptions);
    const data = await getData(params.test[3], datas.user.id)
    console.log(data);
    
    return (
        <section className="sign-up-section ptb-50">
            <h1 class="text-center">{data.type == "new" ? (<></>) : (<>Saved: </>)}{data.heading}  <Link href={`/search/${params.test[3]}`} ><i style={{marginLeft:'55px',color:'#0c7399'}} class="fa fa-search"></i></Link></h1>
            <br />
            <div className="container">
                <div className="row">
                    <div className="col-lg-1 col-md-1 ps-0" />
                    {data.type == "new" ? (
                        <Data testId={data.testId} param0={params.test[0]} param1={params.test[1]} param2={params.test[2]} param3={params.test[3]} data={data.data}  ></Data>
                    ) : (
                        <Saved testId={data.testId} param0={params.test[0]} param1={params.test[1]} param2={params.test[2]} param3={params.test[3]} data={data.mergedData} skiparr={data.skiparr} marks={data.marks} index={data.index} shuuflephase={data.shuuflephase}></Saved>
                    )}

                    <div className="col-lg-1 col-md-1 ps-0" />
                </div>
            </div>
        </section>
    )
}



async function getData(params, user_id) {
    const formData = new FormData();
    formData.append("slug", params);
    formData.append("user_id", user_id);
    const res = await fetch(`${apiUrl}/question.php`, {
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
  
    const datas = await getServerSession(authOptions);
    const data = await getData(params.test[3], datas.user.id)
  
   
    return {
      title: "Quiz - " + data.heading,
    }
  }