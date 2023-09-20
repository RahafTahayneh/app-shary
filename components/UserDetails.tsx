"use client";
import React, { useRef, useState } from "react";

const UserDetails: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);

  const inputFile = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
    }
  };

  const handleFileInputClick = () => {
    inputFile.current?.click();
  };

  return (
    <div className="p-8 border rounded-lg bg-white">
      <h2 className="text-2xl font-semibold">Profile Details</h2>
      <p className="text-gray-400 mt-2">
        Add your details to create a personal touch to your profile.
      </p>

      <div className="mt-8 flex items-center flex-row justify-between border bg-gray-100 rounded-md p-6">
        <div className="block text-sm font-medium text-gray-600">
          Profile Picture:
        </div>
        <div className="relative">
          {image ? (
            <img src={image} alt="Profile" className="w-36 h-48 rounded" />
          ) : (
            <div className="bg-gray-300 w-36 h-48 rounded"></div>
          )}
          <input
            type="file"
            ref={inputFile}
            accept="image/*"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            onChange={handleImageChange}
          />
          <div
            className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-75 bg-black bg-opacity-50 rounded"
            onClick={handleFileInputClick}
          >
            <span className="text-white">Change Image</span>
          </div>
        </div>
        <span className="text-gray-400 ml-4 text-sm ">
          Image must be below 1024x1024px
        </span>
      </div>

      {/* The rest remains the same as in the previous example */}

      <div className="mt-8 border rounded-lg  bg-gray-100 p-6">
        <div className="mb-4 flex flex-row items-center w-full justify-between ">
          <label
            htmlFor="first-name"
            className="block text-sm font-medium text-gray-600 whitespace-nowrap"
          >
            First Name*
          </label>
          <input
            required
            type="text"
            id="first-name"
            name="first-name"
            className="p-2 ml-36  border rounded-md w-full"
          />
        </div>
        <div className="mb-4 flex flex-row items-center w-full justify-between ">
          <label
            htmlFor="last-name"
            className="block text-sm font-medium text-gray-600 whitespace-nowrap"
          >
            Last Name*
          </label>
          <input
            type="text"
            id="last-name"
            name="last-name"
            required
            className="p-2 ml-36  border rounded-md w-full"
          />
        </div>
        <div className="mb-4 flex flex-row items-center w-full justify-between ">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600 whitespace-nowrap mr-8 pr-1"
          >
            Email*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="p-2 ml-36  border rounded-md w-full"
          />
        </div>
        <div className="flex flex-row justify-end">
          <button className="bg-[#F3CC76] text-gray-[700] px-6 py-3 mt-10 rounded font-semibold ">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
