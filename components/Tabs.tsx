"use client";
import "@/styles/globals.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineLink } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

export const Tabs = () => {
  const router = useRouter();
  const [selectedTab, setSelected] = useState("links");

  return (
    <nav className="container mx-auto flex flex-row items-center">
      <div
        onClick={() => {
          router.push("/links");
          setSelected("links");
        }}
      >
        <a
          className={`flex items-center space-x-2 mr-4  sm:mr-16 
          ${selectedTab === "links" ? "selected-link" : ""}
           hover:bg-gray-200 p-4 hover:rounded-md`}
        >
          <AiOutlineLink size={20} />
          <span className="hidden sm:block">Links</span>
        </a>
      </div>
      <div
        onClick={() => {
          router.push("/profile");
          setSelected("profile");
        }}
      >
        <a
          className={`flex items-center space-x-2   ${
            selectedTab === "profile" ? "selected-link" : ""
          } hover:bg-gray-200 p-4 hover:rounded-md `}
        >
          <CgProfile size={20} />
          <span className="hidden sm:block">Profile Details</span>
        </a>
      </div>
    </nav>
  );
};
