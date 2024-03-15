"use client";

import bookingIcon from "@/public/images/Booking.svg";
import safariImage from "@/public/images/Group1.svg";
import messageIcon from "@/public/images/MessageIcon.svg";
import airbnbIcon from "@/public/images/airbnb.svg";
import buildingAlt from "@/public/images/buildings-alt.svg";
import ibmIcon from "@/public/images/ibm.svg";
import instagramIcon from "@/public/images/instagram.svg";
import companyLogo from "@/public/images/logo.svg";
import mondayIcon from "@/public/images/monday.svg";
import notionIcon from "@/public/images/notion.svg";
import slackIcon from "@/public/images/slack.svg";
import stripeIcon from "@/public/images/stripe.svg";
import twitterIcon from "@/public/images/twitter.svg";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import CopyLinkModal from "./components/CopyLinkModal";

export default function Home() {
  const [isValidEmail, setIsValidEmail] = useState(false);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(email));
  };

  return (
    <main className="flex flex-col relative">
      <div className="flex md:justify-between justify-center items-center p-6 md:pt-6 pt-14 md:pb-6 pb-0">
        <Image
          className="md:w-[132px] md:h-[31px] w-[161px] h-[37px]"
          src={companyLogo}
          alt="company logo"
        />
        <button className="bg-[#4E2296] px-4 py-3 border-[0.99px] border-[#E4DAF3] text-white md:flex hidden items-center space-x-2 drop-shadow-[6px_6px_0px_rgba(0,0,0,1)]">
          <Image src={buildingAlt} alt="buildings" />
          <span>I’m a company</span>
        </button>
      </div>
      <div className="lg:w-[42%] lg:px-0 px-6 w-full max-w-[627.188px] mx-auto mt-10">
        <h1 className="md:text-[44.43px] text-[32px] text-[#000000] font-bold text-center leading-[48.47px]">
          We connect unique minds with their ideal careers
        </h1>
        <p
          className={`mt-5 text-[20px] leading-[27.65px] text-center font-bold text-black courier-font`}
        >
          Be among the first to join top European companies embracing
          neurodiversity.
        </p>
      </div>
      <div className="w-[90%] mx-auto flex items-center justify-center md:space-x-8 mt-10">
        <div className="bg-[#E4DAF3] h-[0.99px] w-[20%] md:block hidden" />
        <div className="flex-grow">
          <div className="flex md:space-x-4 lg:space-y-0 space-y-4 items-center lg:flex-row flex-col">
            <div className="lg:w-auto w-full border-[0.99px] border-[#C4BCCF] flex items-center space-x-2 flex-grow p-3 shadow-[6px_6px_0px_#E9E5F1]">
              <Image src={messageIcon} alt="Message Icon" />
              <div className="h-[24px] w-[0.99px] bg-[#DACAF3]" />
              <input
                className="text-[#4E2296] w-full md:text-left text-center placeholder:text-[#CEBFE8] border-none outline-none text-[15.8px] pla"
                type="email"
                placeholder="Enter your mail here"
                onChange={handleEmailChange}
              />
            </div>
            <CopyLinkModal isValidEmail={isValidEmail} />
          </div>
        </div>
        <div className="bg-[#E4DAF3] h-[0.99px] w-[20%] md:block hidden" />
      </div>
      <div className="w-full">
        <div className="w-full flex md:justify-center justify-start items-center space-x-10 md:mt-24 mt-16 px-6 overflow-x-auto scrollbar-hide">
          <Image className="w-[44px]" src={ibmIcon} alt="ibm icon" />
          <Image className="w-[94px]" src={bookingIcon} alt="booking icon" />
          <Image className="w-[134px]" src={mondayIcon} alt="monday icon" />
          <Image className="w-[104px]" src={airbnbIcon} alt="airbnb icon" />
          <Image className="w-[74px]" src={stripeIcon} alt="stripe icon" />
          <Image className="w-[104px]" src={notionIcon} alt="notion icon" />
        </div>
      </div>
      <div className="w-full h-full flex justify-center items-center space-x-10 mt-4 md:mt-0 md:px-6 px-3 flex-grow">
        <Image
          className="w-full h-full"
          src={safariImage}
          alt="Safari ImageImage"
        />
      </div>
      <div className="w-full md:flex hidden justify-between items-center space-x-2 fixed bottom-0 md:px-6 px-4">
        <p className="text-black text-[9.86px]">
          @ 2024 Hello Alvie. All rights reserved.
        </p>
        <div className="flex">
          <Image src={instagramIcon} alt="instagram" />
          <Image src={slackIcon} alt="slack" />
          <Image src={twitterIcon} alt="twitter" />
        </div>
      </div>
      <div className="fixed top-0 left-0 h-screen w-full bg-[#000000] blur-sm opacity-[0.85] hidden" />
    </main>
  );
}
