"use client";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HolyLoader from "holy-loader";
import { SessionProvider } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";
import dotenv from "dotenv"

dotenv.config({
  path: './.env'
})

export default function RootLayout({ children, session }) {

  return (
    <html lang="en">
      <head>
        <>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          {/*=== CSS Link ===*/}
          <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/assets/css/owl.theme.default.min.css" />
          <link rel="stylesheet" href="/assets/css/owl.carousel.min.css" />
          <link rel="stylesheet" href="/assets/css/icofont.min.css" />
          <link rel="stylesheet" href="/assets/css/font-awesome-pro.css" />
          <link rel="stylesheet" href="/assets/css/meanmenu.css" />
          <link rel="stylesheet" href="/assets/css/magnific-popup.min.css" />
          <link rel="stylesheet" href="/assets/css/scrollcue.css" />
          <link rel="stylesheet" href="/assets/css/style.css" />
          <link rel="stylesheet" href="/assets/css/responsive.css" />
          {/*=== Favicon ===*/}
          <link rel="icon" type="image/png" href="/assets/images/logo/logo.png" />
          <script src="/assets/js/jquery.min.js"></script>
          <script src="/assets/js/bootstrap.bundle.min.js"></script>
          <script src="/assets/js/jquery.meanmenu.js"></script>
          <script src="/assets/js/jquery.mixitup.min.js"></script>
          <script src="/assets/js/owl.carousel.min.js"></script>
          <script src="/assets/js/magnific-popup.min.js"></script>
          <script src="/assets/js/counterup.min.js"></script>
          <script src="/assets/js/waypoints.min.js"></script>
          <script src="/assets/js/scrollcue.js"></script>
          <script src="/assets/js/countdown.min.js"></script>
          <script src="/assets/js/custom.js"></script>
        </>
      </head>
      <body>
        <SessionProvider session={session}>
          <HolyLoader
            color="#19b2ee"
            height="5px"
            speed={250}
            easing="linear"
          />
          <Navbar></Navbar>
          {/* <div className="preloader">
            <div className="content">
              <div className="ball"></div>
              <div className="ball"></div>
              <div className="ball"></div>
              <div className="ball"></div>
              <div className="ball"></div>
              <div className="ball"></div>
              <div className="ball"></div>
              <div className="ball"></div>
              <div className="ball"></div>
              <div className="ball"></div>
            </div>
          </div> */}
          {children}
          <Footer></Footer>
          <Toaster reverseOrder={false}></Toaster>
        </SessionProvider>
      </body>
    </html>
  );
}
