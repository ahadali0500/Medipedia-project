import React from "react";
import { apiUrl } from '../config/constant';
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import Data from "./Data";

export const metadata = {
  title: "Saved Quiz - Medipedia",
};


export default async function page() {
  const datas = await getServerSession(authOptions);
  // const data = await getData(datas.user.id)
  
  return (
    <section className="shopping-cart-area ptb-50">
      <h1 className="text-center">Saved Quiz</h1>
      <br />
      <Data user_id={datas.user.id} ></Data>
    </section>
  );
}