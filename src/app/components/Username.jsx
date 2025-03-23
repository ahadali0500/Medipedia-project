"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { apiUrl, profiledata } from '../config/constant';

export default function Username() {
    const { data: session, status } = useSession();
    const [name, setname] = useState("");

    useEffect(() => {
        if (session && session.user) {
            // Fetch profile data when the component mounts
            const fetchData = async () => {
                try {
                    const data = await profiledata(session.user.id);
                    setname(data.user_name); // Set the email obtained from profile data into state
                } catch (error) {
                    console.error('Error fetching profile data:', error);
                }
            };
            fetchData();
        }
    }, [session]);

    if (status === "loading") {

        return (
            <>
                Loading...
            </>
        )

    } else {
        return (
            <>
                {name}
            </>
        )
    }
}
