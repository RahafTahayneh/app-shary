"use client";
import "@/styles/globals.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineLink } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

export const Tabs = () => {
  const router = useRouter();
  const [selected, setSelected] = useState("links");

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
          ${selected === "links" ? "selected-link" : ""}
           hover:bg-yellow-200 p-4 hover:rounded-md`}
        >
          <AiOutlineLink size={20} />
          <span className="hidden sm:visible">Links</span>
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
            selected === "profile" ? "selected-link" : ""
          } hover:bg-yellow-200 p-4 hover:rounded-md `}
        >
          <CgProfile size={20} />
          <span className="hidden sm:visible">Profile Details</span>
        </a>
      </div>
    </nav>
  );
};
