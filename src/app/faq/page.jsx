'use client'
import React, { useEffect, useState } from 'react'
import { profiledata } from '../config/constant';
import { useSession } from "next-auth/react";
import FAQ from '../components/FAQ';

export default function page() {

    return (
       <FAQ></FAQ>
    )
}
