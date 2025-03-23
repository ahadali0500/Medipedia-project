'use client'
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { apiUrl } from '../config/constant';
import { useRouter } from "next/navigation";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

export default function Data({user_id}) {
    const router = useRouter();
    const [datass,setData] = useState([])
    const [loading ,setLoading] = useState(true)
console.log(datass);

    async function getData() {
        setLoading(true)
        try{

            const formData = new FormData();
            formData.append("user_id", user_id);
            const response = await fetch(`${apiUrl}/history.php`, {
            method: 'POST',
            body: formData,
            cache: 'no-store'
        })
        const data = await response.json();
        setData(data)
    }catch(error){
        console.log(Error,error)
    }
        setLoading(false)
    }
    
    useEffect(()=>{
        getData()
    },[])


    const resetdone = async (redirect,test_id) => {

        try {
            const formData = new FormData();
            formData.append("test_id", test_id);
            formData.append("user_id", session.user.id);


            const response = await fetch(`${apiUrl}/reset.php`, {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Failed to send data to PHP');
            }

            const responseData = await response.json();
            if (responseData.success) {
                toast.success("Quiz Reset successfully!")
                router.push(`/quiz/${redirect}?refresh=true`);
            }
        } catch (error) {
            console.error('Error:', error);
        }


    }

    return (

        <div className="container">
        <div className="row">
            <div className="col-lg-12">
                    <form className="shopping-cart">
                       {!loading && <div className="text-center table-responsive">
                        {datass && datass.length > 0 ? (<table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col" />
                                        <th scope="col">Test Name</th>
                                        <th scope="col">Total Question</th>
                                        <th scope="col">Marks</th>
                                        <th scope="col">Percentage</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {datass.map((item, index) => (
                                        <tr key={index}>
                                            <td className="cart-price">
                                                <i className="fa fa-book color-custom" />
                                            </td>
                                            <td className="cart-price">
                                                <span className="amount">{item.test_name}</span>
                                            </td>
                                            <td className="cart-price">
                                                <span className="amount">{item.total_questions}</span>
                                            </td>
                                            <td className="cart-price">
                                                <span className="amount">{item.marks}</span>
                                            </td>
                                            <td className="cart-price">
                                                <span className="amount">{Math.round(item.marks / item.total_questions * 100)}%</span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            ) : (
                                <h4 className="text-center mt-5">No history found</h4>
                            )}
                            </div>}
                                {loading && <div>
                                    <Skeleton className="loading-table-head mb-2" />
                                    <Skeleton className="loading-table-body" />
                                </div>}
                    </form>

            </div>
        </div>
    </div>

    );
}
