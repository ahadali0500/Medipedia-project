"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from 'next/router';

export function Authentication() {
    const { data: session, status } = useSession();
    const router = useRouter();

    if (status === "loading") {
        // If session status is still loading, return null or a loading indicator
        return null;
    }

    if (!session) {
        // If user is not authenticated, redirect to the login page
        router.push("/login");
    }
}

