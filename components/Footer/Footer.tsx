'use client'
import React from "react";
import './Footer.css'; 
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Logo from "../Logo";

function Footer() {
  return (
    <>
      <div id="Footer" className=" flex h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-8" style={{ backgroundColor: "#0B1519" }}>
        <div className=" ">
          <ul>
            <p className="text-white font-bold text-2xl pb-4">Product</p>
            <li className="text-gray-400 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              All Products
            </li>
            <li className="text-gray-400 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Integrations
            </li>
 			<p className="text-white font-bold text-2xl pb-4">Solutions</p>

            <li className="text-gray-400 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              By Use Case
            </li>
            <li className="text-gray-400 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              By Industry
            </li>
          </ul>
        </div>
        <div className=" ">
          <ul>
            <p className="text-white font-bold text-2xl pb-4">Resources</p>
            <li className="text-gray-400 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Blog

            </li>
            <li className="text-gray-400 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Case Studies

            </li>
            <li className="text-gray-400 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Competitors

            </li>
            <li className="text-gray-400 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Data Sheets

            </li>
            <li className="text-gray-400  text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Glossary

            </li>
            <li className="text-gray-400  text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Infographics


            </li>
            <li className="text-gray-400  text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Podcast


            </li>
            <li className="text-gray-400  text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Videos


            </li>
            <li className="text-gray-400  text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Webinars


            </li>
            <li className="text-gray-400  text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Whitepapers


            </li>
          </ul>
        </div>
        <div className=" ">
          <ul>
            <p className="text-white font-bold text-2xl pb-4">Customers</p>
            <li className="text-gray-400 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Contact
            </li>
            <li className="text-gray-400 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Support Portals
            </li>
            <li className="text-gray-400 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              List Of Charges
            </li>
            <li className="text-gray-400 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Downloads & Resources
            </li>
           <p className="text-white font-bold text-2xl pb-4">Partners</p>

            <li className="text-gray-400 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Implementation Packages
            </li>
            <li className="text-gray-400 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Careers
            </li>
            <li className="text-gray-400 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Contact us
            </li>
            <li className="text-gray-400 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Lift Media
            </li>
          </ul>
        </div>
        {/* <div className="py-6 bg-white rounded-lg">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-xl">
                    <h3 className="text-3xl font-bold">
                    Stay in the loop with our newsletter!
                    </h3>
              <p className="text-gray-600 mt-3">

                Subscribe to our newsletter and unlock a world of exclusive benefits. Be the first to know about our latest products, special promotions, and exciting updates..
              </p>
                </div>
                <div className="mt-6">
                    <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-x-3">
                        <div className="relative">
                            <svg className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                            <input
                                type="email"
                                required
                                placeholder="Enter your email"
                                className="w-full pl-12 pr-3 py-2 text-gray-500 bg-white outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <button className="block w-auto py-3 px-4 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </div>  */}

<div className="py-8 bg-white rounded-lg">
  <div className="max-w-screen-sm mx-auto px-4 md:px-8">
    <div className="max-w-xl">
      <h3 className="text-2xl font-bold">
        Stay in the loop with our newsletter!
      </h3>
      <p className="text-gray-600 mt-3">
        Subscribe to our newsletter and unlock a world of exclusive benefits. Be the first to know about our latest products, special promotions, and exciting updates.
      </p>
    </div>
    <div className="mt-4">
      <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-x-3">
        <div className="relative">
          <svg className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="w-full pl-12 pr-3 py-2 text-gray-500 bg-white outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
          />
        </div>
        <button className="block w-auto py-3 px-4 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow">
          Subscribe
        </button>
      </form>
    </div>
  </div>
</div>

        
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center text-center p-5 bg-gray-50" style={{ borderTop: "1px solid #474017", backgroundColor: "#0B1519" }}>
  <h1 className="text-gray-400 font-semibold md:mr-auto">
    © 2023 All rights reserved{" "}
    <span className="hover:text-blue-600 font-semibold cursor-pointer">
      IRDL{" "}
    </span>
  </h1>
  <div className="flex flex-col items-center gap-6"> {/* Changed to flex-col and items-center */}
    <ul className="flex space-x-6 items-center">
      <li className="text-gray-800 font-bold text-3xl">
        <span className="text-blue-600 cursor-pointer p-6"><Logo /></span>
      </li>
      <li>
        <div className="flex justify-center items-center gap-6">
          <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
          <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
          <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
          <FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
        </div>
      </li>
    </ul>
  </div>
  <div className="text-white flex flex-col md:flex-row justify-center items-center px-10">
    <span className="hover-text-blue-600 font-semibold cursor-pointer px-5">
      Terms{" "}
    </span>
    <span className="hover-text-blue-600 font-semibold cursor-pointer px-5">
      Privacy{" "}
    </span>
    <span className="hover-text-blue-600 font-semibold cursor-pointer px-5">
      Cookies{" "}
    </span>
  </div>
</div>

    </>
    

  );
}

export default Footer;
