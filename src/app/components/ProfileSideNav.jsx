'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname  } from 'next/navigation';

export default function ProfileSideNav() {
    const pathname  = usePathname();
     console.log(pathname)

    return (
        <div className="col-lg-4 pt-50">
            <div id="list-example" className="privacy-and-conditions-list me-lg-3">
                <Link className={`nav-link ${pathname === '/profile/' ? 'ProfileSideNav' : ''}`}
                    style={{ color: "black" }} href="/profile">
                    Dashboard
                </Link>
                <Link
                    className={`nav-link ${pathname === '/change-email/' ? 'ProfileSideNav' : ''}`}
                    style={{ color: "black" }}
                    href="/change-email"
                >
                    Change Email
                </Link>
                <Link
                    className={`nav-link ${pathname === '/change-password/' ? 'ProfileSideNav' : ''}`}
                    style={{ color: "black" }}
                    href="/change-password"
                >
                    Change Password
                </Link>
                <Link
                    className={`nav-link ${pathname === '/change-profile-name/' ? 'ProfileSideNav' : ''}`}
                    style={{ color: "black" }}
                    href="/change-profile-name"
                >
                    Change Profile Name
                </Link>
                <Link
                    className={`nav-link ${pathname === '/change-phone-number/' ? 'ProfileSideNav' : ''}`}
                    style={{ color: "black" }}
                    href="/change-phone-number"
                >
                    Change Phone Number
                </Link>
            </div>
        </div>
    )
}
