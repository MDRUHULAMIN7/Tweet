"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="h-40 bg-white relative">
      {/* Top Banner */}
      <div className="bg-[#ed6923] h-12 flex justify-center items-center">
        <h1 className="sm:text-xl text-white">
          Free Delivery on Your First Order – Order Now!
        </h1>
      </div>

      {/* Main Navbar */}
      <div className="flex items-center justify-between px-16 h-28 relative">
        {/* Logo */}
        <Link href="/">
          <Image
            height={50}
            width={60}
            className="w-26 h-14"
            src="/logo.png"
            alt="logo"
          />
        </Link>

        {/* Profile Section */}
        <div className="relative" ref={dropdownRef}>
          {/* Profile Image Button */}
          <button
            onClick={() => setIsDropdownOpen((prev) => !prev)}
            className="focus:outline-none"
          >
            <Image
              height={48}
              width={48}
              className="h-12 w-12 rounded-full cursor-pointer"
              src="/profile.png"
              alt="profile"
            />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 bg-white shadow-md rounded-md py-2 w-36 z-10 ">
              <div>
                <Link
                  href="/"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Home
                </Link>{" "}
                <Link
                  href="/profile"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Profile
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
