"use client";

import bg from "@/public/images/bg.svg";
import closeIcon from "@/public/images/close.svg";
import congratzIcon from "@/public/images/congrat.svg";
import instagramIcon from "@/public/images/insta.svg";
import joinUsHere from "@/public/images/join-us-here.svg";
import linkIcon from "@/public/images/link.svg";
import linkedInIcon from "@/public/images/linkedin.svg";
import sendIcon from "@/public/images/sendIcon.svg";
import slackIcon from "@/public/images/slack2.svg";
import xIcon from "@/public/images/x.svg";
import Image from "next/image";
import React, { useState } from "react";
import Modal from "react-modal";

import Link from "next/link";
import { modalStyles } from "../utils/modalStyles";
import mutations from "../lib/mutation";

const CopyLinkModal = ({
  isValidEmail,
  userEmail,
}: {
  isValidEmail: boolean;
  userEmail: string;
}) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [url, setUrls] = useState("");

  const openModal = async () => {
    isValidEmail && setIsOpen(true);

    const result = await mutations.CREATE_OR_UPDATE_WAIT_LIST(userEmail);

    if (result.success) {
      setUrls(result.waitList.url);
    }
  };

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <button
        className={`bg-[#4E2296] lg:w-auto w-full px-4 py-3 border-[0.99px] border-[#E4DAF3] text-white flex items-center space-x-3 drop-shadow-[6px_6px_0px_rgba(0,0,0,1)] ${
          isValidEmail ? "cursor-pointer" : "cursor-not-allowed"
        }`}
        onClick={openModal}
      >
        <Image className="w-6 h-6" src={sendIcon} alt="sendIcon" />
        <span className="md:text-left text-center w-full">
          Join the Hello Alvie waitlist
        </span>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyles}
      >
        <div className="flex flex-col items-center backdrop-filter backdrop-blur-sm md:max-w-[504px] w-full p-10 py-8 bg-[#FDFEFE] rounded-lg text-center overflow-hidden relative">
          <Image
            src={bg}
            alt=""
            className="absolute -top-[50px] left-1/2 transform -translate-x-1/2"
          />
          <button
            className="cursor-pointer absolute top-[24px] right-[24px]"
            onClick={closeModal}
          >
            <Image src={closeIcon} alt="close" />
          </button>
          <div className="size-[67px] bg-white rounded-full shadow-md flex items-center justify-center">
            <Image src={congratzIcon} alt="congratz" />
          </div>
          <h3 className="font-bold text-[28px]">Congratiuationz!</h3>
          <h4 className="mt-2 font-bold text-[14px] text-[#8778A1] courier-font">
            You’re on our waitlist now!
          </h4>
          <div className="mt-6 p-6 bg-[#F7F6F9]">
            <p className="text-[#4E2296] font-bold text-[14.35px]">
              Would you network be interested in joining Hello Alvie? Feel free
              to share your unique link!
            </p>
            <form
              className="mt-[22px] flex flex-row space-x-2 items-center justify-between"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="group relative inline-block font-medium flex-grow md:w-[62%] w-[48%]">
                <span className="absolute inset-0 h-full w-full translate-x-1 translate-y-1 transform bg-[#e9e5f1] transition duration-200 ease-out group-hover:-translate-x-0 group-hover:-translate-y-0" />
                <span className="absolute inset-0 h-full w-full border border-[#E4DAF3] bg-[#4e2296] group-hover:bg-[#2d1456]" />
                <span className="relative font-bold text-white group-hover:text-white">
                  <input
                    type="text"
                    value={url}
                    readOnly
                    className="w-full h-full px-[17px] py-[10px] font-bold text-[#CEBFE8] border border-[#C4BCCF] outline-none"
                  />
                </span>
              </div>
              <button
                className="whitespace-nowrap"
                onClick={() => {
                  // Copy the text inside the text field
                  navigator.clipboard.writeText(url);
                  alert("Link copied to clipboard");
                }}
              >
                <div className="flex items-center justify-center">
                  <div className="relative inline-block px-4 py-2 font-medium group">
                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#2d1456] group-hover:-translate-x-0 group-hover:-translate-y-0" />
                    <span className="absolute inset-0 w-full h-full bg-[#4e2296] border border-[#E4DAF3] group-hover:bg-[#2d1456]" />
                    <span className="relative text-white font-bold group-hover:text-white">
                      <span className="flex gap-x-2">
                        <Image src={linkIcon} alt="copy link" />
                        <span>Copy Link</span>
                      </span>
                    </span>
                  </div>
                </div>
              </button>
            </form>
          </div>
          <div className="mt-9 flex items-center justify-center gap-x-4">
            <div className="group relative">
              <Image
                src={joinUsHere}
                alt=""
                className="absolute z-10 -top-[25px] left-10 scale-[3] hidden group-hover:block"
              />
              <Link
                href={"https://www.instagram.com/helloalvie.co/"}
                target="_blank"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white drop-shadow-lg group-hover:border group-hover:border-[#7840D4]"
              >
                <Image src={instagramIcon} alt="Share on Instagram" />
              </Link>
            </div>
            <div className="group relative">
              <Image
                src={joinUsHere}
                alt=""
                className="absolute z-10 -top-[25px] left-10 scale-[3] hidden group-hover:block"
              />
              <Link
                href={
                  "https://www.linkedin.com/company/hello-alvie/?viewAsMember=true"
                }
                target="_blank"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white drop-shadow-lg group-hover:border group-hover:border-[#7840D4]"
              >
                <Image src={linkedInIcon} alt="Share on LinkedIn" />
              </Link>
            </div>
            <div className="group relative">
              <Image
                src={joinUsHere}
                alt=""
                className="absolute z-10 -top-[25px] left-10 scale-[3] hidden group-hover:block"
              />
              <Link
                href={
                  "https://join.slack.com/share/enQtNjg0MDc1NDI1NzY4MC05NGU2ZmY2MDdhY2EzMjAyZjU4NWE5NTZiN2YyODVhMGI1Y2ZhOTI2MTJkOTg1MzFjNjA0ZmU5ZDMxNTlkMjFl"
                }
                target="_blank"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white drop-shadow-lg group-hover:border group-hover:border-[#7840D4]"
              >
                <Image src={slackIcon} alt="Share on Slack" />
              </Link>
            </div>
            <div className="group relative">
              <Image
                src={joinUsHere}
                alt=""
                className="absolute z-10 -top-[25px] left-10 scale-[3] hidden group-hover:block"
              />
              <Link
                href={"https://twitter.com/helloalvie"}
                target="_blank"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white drop-shadow-lg group-hover:border group-hover:border-[#7840D4]"
              >
                <Image src={xIcon} alt="Share on X" />
              </Link>
            </div>
          </div>
          <div className="mt-9">
            <button onClick={closeModal}>
              <div className="w-full flex items-center justify-center">
                <div className="relative inline-block px-4 py-2 font-medium group">
                  <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#2d1456] group-hover:-translate-x-0 group-hover:-translate-y-0" />
                  <span className="absolute inset-0 w-full h-full bg-[#4e2296] border border-[#E4DAF3] group-hover:bg-[#2d1456]" />
                  <span className="relative text-white font-bold group-hover:text-white">
                    Amazing!
                  </span>
                </div>
              </div>
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CopyLinkModal;
