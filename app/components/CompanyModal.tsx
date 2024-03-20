"use client";
import buildingAlt from "@/public/images/buildings-alt.svg";
import closeIcon from "@/public/images/close.svg";
import companyModalLogo from "@/public/images/companyModalLogo.svg";
import messageIcon from "@/public/images/messageIcon.svg";
import profileIcon from "@/public/images/profileIcon.svg";
import Image from "next/image";
import React, { useState } from "react";
import Modal from "react-modal";
import { modalStyles } from "../utils/modalStyles";
import mutations from "../lib/mutation";

const CompanyModal = () => {
  const [fullName, setFullName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [haveDEI, setHaveDEI] = useState(true);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleSubmit = async () => {
    if (contactEmail.includes("@")) {
      const result = await mutations.CREATE_COMPANY({
        name: fullName,
        email: contactEmail,
        isDei: haveDEI,
      });

      if (result === "Company created successfully.") {
        setIsOpen(false);
        setFullName("");
        setContactEmail("");
        setHaveDEI(true);
        alert(result);
      } else {
        alert(result);
      }
    } else {
      alert("Please enter a valid email");
    }
  };
  return (
    <div>
      <button
        className="bg-[#4E2296] md:px-4 md:py-3 px-3 py-2 border-[0.99px] border-[#E4DAF3] text-white flex items-center space-x-2 drop-shadow-[6px_6px_0px_rgba(0,0,0,1)]"
        onClick={openModal}
      >
        <Image src={buildingAlt} alt="buildings" />
        <span>I’m a company</span>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyles}
      >
        <div className="rounded-2xl w-full max-w-[504.97px] min-h-[519px]">
          <div className="relative w-full h-full p-10 pt-[60px]">
            <button
              className="cursor-pointer absolute top-[24px] right-[24px]"
              onClick={closeModal}
            >
              <Image src={closeIcon} alt="close" />
            </button>
            <div className="border-[1px] border-[#F2F1F6] w-full min-h-[141px] relative">
              <div className="bg-white w-[59px] h-[59px] absolute top-[-30px] left-1/2 transform -translate-x-1/2 shadow-xl rounded-full flex justify-center items-center">
                <Image src={companyModalLogo} alt="logo img" />
              </div>
              <p className=" text-black font-bold text-lg leading-[25.2px] pt-[50px] md:px-20 px-6 text-center">
                Does your company have a DEI program?
              </p>
              <div className="flex space-x-4 w-full items-center justify-center absolute bottom-[-23px] left-1/2 transform -translate-x-1/2">
                <button
                  className={`w-1/2 max-w-[121px] border-[0.99px] border-[#C4BCCF] flex items-center space-x-2 flex-grow p-3 text-[14.35px] font-bold ${
                    !haveDEI
                      ? "bg-[#4E2296] text-white drop-shadow-[6px_6px_0px_rgba(0,0,0,1)]"
                      : "text-[#4E2296] shadow-[6px_6px_0px_#E9E5F1]"
                  }`}
                  onClick={() => {
                    setHaveDEI(false);
                  }}
                >
                  No, we don’t
                </button>
                <button
                  className={`w-1/2 max-w-[121px] border-[0.99px] border-[#C4BCCF] flex items-center space-x-2 flex-grow p-3 text-[14.35px] font-bold ${
                    haveDEI
                      ? "bg-[#4E2296] text-white drop-shadow-[6px_6px_0px_rgba(0,0,0,1)]"
                      : "text-[#4E2296] shadow-[6px_6px_0px_#E9E5F1]"
                  }`}
                  onClick={() => {
                    setHaveDEI(true);
                  }}
                >
                  <span className="text-center w-full font-bold">
                    Yes, we do
                  </span>
                </button>
              </div>
            </div>
            <div className="flex flex-col space-y-4 mt-[60px]">
              <div className="lg:w-auto w-full border-[0.99px] border-[#C4BCCF] flex items-center space-x-2 flex-grow p-3 shadow-[6px_6px_0px_#E9E5F1]">
                <Image src={messageIcon} alt="Message Icon" />
                <div className="h-[24px] w-[0.99px] bg-[#DACAF3]"></div>
                <input
                  value={contactEmail}
                  className="text-[#4E2296] w-full md:text-left text-center placeholder:text-[#CEBFE8] border-none outline-none text-[15.8px]"
                  type="email"
                  placeholder="Enter contact e-mail"
                  onChange={(e) => setContactEmail(e.target.value)}
                />
              </div>
              <div className="lg:w-auto w-full border-[0.99px] border-[#C4BCCF] flex items-center space-x-2 flex-grow p-3 shadow-[6px_6px_0px_#E9E5F1]">
                <Image src={profileIcon} alt="Message Icon" />
                <div className="h-[24px] w-[0.99px] bg-[#DACAF3]"></div>
                <input
                  value={fullName}
                  className="text-[#4E2296] w-full md:text-left text-center placeholder:text-[#CEBFE8] border-none outline-none text-[15.8px]"
                  type="text"
                  placeholder="Full Name"
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
            </div>
            <button
              className="bg-[#4E2296] w-full mx-auto max-w-[130px] mt-[50px] px-4 py-3 border-[0.99px] border-[#E4DAF3] text-white flex items-center space-x-3 drop-shadow-[6px_6px_0px_rgba(0,0,0,1)]"
              onClick={() => {
                handleSubmit();
              }}
            >
              <span className="text-center w-full mx-auto text-[14.35px] font-bold">
                Complete
              </span>
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CompanyModal;
