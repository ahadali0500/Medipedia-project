// This example assumes you're using the new Middleware (file-based routing) in Next.js 14.
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

// This is your secret from NextAuth configuration. Ensure it matches.
const secret = process.env.NEXTAUTH_SECRET;
console.log(process.env.NEXTAUTH_SECRET,"oookcc")
export async function middleware(req) {
    const session = await getToken({ req, secret });
    const authenticatedRoutes = ['/login', '/register', '/forgot-password'];
    const nonAuthRoutesPatterns = [
        '/apply-code',
        '/book-code',
        '/book-price',
        '/change-email',
        '/change-password',
        '/change-phone-number',
        '/change-profile-name',
        '/guide',
        '/hints',
        '/profile',
        '/quiz',
        '/saved-quiz',
        '/search',
        '/success',
    ];
    // Use nextUrl.pathname for Next.js versions that support it
    const pathname = req.nextUrl.pathname;

    // Logic for determining if the pathname matches authenticated or non-authenticated routes
    const basePath = pathname.split('/')[1]; // Gets the first segment of the path

    const isNonAuthRoute = nonAuthRoutesPatterns.some(route => `/${basePath}`.startsWith(route));
    const isAuthRoute = authenticatedRoutes.some(route => `/${basePath}`.startsWith(route));

    if (session && isAuthRoute) {
        return NextResponse.redirect(new URL('/', req.nextUrl));
    } else if (!session && isNonAuthRoute) {
        return NextResponse.redirect(new URL('/login', req.nextUrl));
    }

    // Continue to the requested page if session exists or if it's a public path
    return NextResponse.next();
}