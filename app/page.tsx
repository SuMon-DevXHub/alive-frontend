"use client";

import safariImage from "@/public/images/Group1.svg";
import safariImageMobile from "@/public/images/Group1Mobile.svg";
import messageIcon from "@/public/images/messageIcon.svg";
import instagramIcon from "@/public/images/instagram.svg";
import companyLogo from "@/public/images/logo.svg";
import slackIcon from "@/public/images/slack.svg";
import twitterIcon from "@/public/images/twitter.svg";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import CompanyModal from "./components/CompanyModal";
import CopyLinkModal from "./components/CopyLinkModal";

export default function Home() {
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [email, setEmail] = useState("");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(email));
  };

  return (
    <main className="flex flex-col relative">
      <div className="flex justify-between items-center p-6 md:pt-6 pt-14 md:pb-6 pb-0">
        <Image
          className="md:w-[134px] md:h-[31px] w-[103px] h-[24px]"
          src={companyLogo}
          alt="company logo"
        />
        <CompanyModal />
      </div>
      <div className="lg:w-[56%] lg:px-0 px-6 w-full max-w-[735px] mx-auto mt-10">
        <h1 className="md:text-[44.43px] text-[32px] text-[#000000] font-bold text-center leading-[48.47px]">
          Hello Alvie connects unique minds with their ideal careers
        </h1>
        <p
          className={`mt-5 text-[20px] lg:w-[90%] leading-[27.65px] text-center font-bold text-black courier-font`}
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
            <CopyLinkModal isValidEmail={isValidEmail} userEmail={email} />
          </div>
        </div>
        <div className="bg-[#E4DAF3] h-[0.99px] w-[20%] md:block hidden" />
      </div>
      {/* <div className="w-full">
        <div className="w-full flex md:justify-center justify-start items-center space-x-10 md:mt-24 mt-16 px-6 overflow-x-auto scrollbar-hide">
          <Image className="w-[44px]" src={ibmIcon} alt="ibm icon" />
          <Image className="w-[94px]" src={bookingIcon} alt="booking icon" />
          <Image className="w-[134px]" src={mondayIcon} alt="monday icon" />
          <Image className="w-[104px]" src={airbnbIcon} alt="airbnb icon" />
          <Image className="w-[74px]" src={stripeIcon} alt="stripe icon" />
          <Image className="w-[104px]" src={notionIcon} alt="notion icon" />
        </div>
      </div> */}
      <div className="w-full h-full flex justify-center items-center mt-4 md:mt-0 md:px-6 flex-grow">
        <>
          <Image
            className="hidden md:block w-full h-full"
            src={safariImage}
            alt="Safari ImageImage"
          />
          <Image
            className="md:hidden w-full h-full"
            src={safariImageMobile}
            alt="Safari ImageImage"
          />
        </>
      </div>
      <div className="w-full md:flex hidden justify-between items-center space-x-2 fixed bottom-0 md:px-6 px-4">
        <p className="text-black text-[9.86px]">
          @ 2024 Hello Alvie. All rights reserved.
        </p>
        <div className="flex">
          <Link
            href={"https://www.instagram.com/helloalvie.co/"}
            target="_blank"
          >
            <Image src={instagramIcon} alt="instagram" />
          </Link>
          <Link
            href={
              "https://join.slack.com/share/enQtNjg0MDc1NDI1NzY4MC05NGU2ZmY2MDdhY2EzMjAyZjU4NWE5NTZiN2YyODVhMGI1Y2ZhOTI2MTJkOTg1MzFjNjA0ZmU5ZDMxNTlkMjFl"
            }
            target="_blank"
          >
            <Image src={slackIcon} alt="slack" />
          </Link>
          <Link href={"https://twitter.com/helloalvie"} target="_blank">
            <Image src={twitterIcon} alt="twitter" />
          </Link>
        </div>
      </div>
      <div className="fixed top-0 left-0 h-screen w-full bg-[#000000] blur-sm opacity-[0.85] hidden" />
    </main>
  );
}
