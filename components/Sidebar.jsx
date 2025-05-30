"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaUser,
  FaClipboardList,
  FaQuestionCircle,
  FaCog,
  FaSignOutAlt,
  FaStamp,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Sidebar = () => {
  const [open, setOpen] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {!open && (
        <button
          className="fixed top-4 left-4 xl:hidden z-50 text-2xl text-gray-800"
          onClick={() => setOpen(true)}
        >
          <FaBars />
        </button>
      )}

      {open && (
        <aside className="fixed xl:static z-40 top-0 left-0 h-full w-64 bg-[#FDEDE5]   pt-6 flex flex-col items-center transition-transform duration-300">
          <button
            className="xl:hidden absolute top-4 right-4 text-xl"
            onClick={() => setOpen(false)}
          >
            <FaTimes />
          </button>

          <div className="mt-10 xl:mt-20">
            <Image
              src="/profile1.png"
              alt="Profile"
              width={80}
              height={80}
              className="rounded-full object-cover"
            />
          </div>

          <div
            className="h-42 w-full mt-6"
            style={{
              background: "linear-gradient(to right, #FF8D2F, #FFD3B0)",
            }}
          ></div>

          <div className="w-full px-4 pt-4 h-full bg-white">
            <h2 className="mt-4 text-center font-semibold">Mark Jecno</h2>
            <p className="text-sm text-gray-500 text-center mb-6">
              mark-jecno@gmail.com
            </p>

            <nav className="w-full px-2 space-y-4 text-sm mt-8">
              <Link
                href="#"
                className="flex items-center text-orange-500 font-semibold"
              >
                <FaUser className="mr-2" /> Profile
              </Link>
              <Link
                href="#"
                className="flex items-center text-gray-600 hover:text-orange-500"
              >
                <FaClipboardList className="mr-2" /> Order
              </Link>
              <Link
                href="#"
                className="flex items-center text-gray-600 hover:text-orange-500"
              >
                <FaStamp className="mr-2" /> StampCard
              </Link>
              <Link
                href="#"
                className="flex items-center text-gray-600 hover:text-orange-500"
              >
                <FaQuestionCircle className="mr-2" /> Help
              </Link>
              <Link
                href="#"
                className="flex items-center text-gray-600 hover:text-orange-500"
              >
                <FaCog className="mr-2" /> Setting
              </Link>
              <Link
                href="#"
                className="flex items-center text-gray-600 hover:text-orange-500"
              >
                <FaSignOutAlt className="mr-2" /> Log Out
              </Link>
            </nav>
          </div>
        </aside>
      )}
    </>
  );
};

export default Sidebar;
