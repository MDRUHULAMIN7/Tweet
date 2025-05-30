import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black text-white px-8 pt-10 pb-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo and Description */}
        <div>
          <Image height={50} width={60} src="/logo.png" alt="logo" className="h-14 w-24" />
          <p className="text-base mt-4 text-gray-400">
            Your go-to choice for fast and fresh delivery, bringing the best to your door in no time
          </p>
          <div className="flex space-x-3 mt-4 ">
            <a href="#"><FaFacebookF className="bg-gray-700 text-white rounded-full p-2 w-8 h-8" /></a>
            <a href="#"><FaTwitter className="bg-gray-700 text-white rounded-full p-2 w-8 h-8" /></a>
            <a href="#"><FaLinkedinIn className="bg-orange-500 text-white rounded-full p-2 w-8 h-8" /></a>
            <a href="#"><FaWhatsapp className="bg-gray-700 text-white rounded-full p-2 w-8 h-8" /></a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Quick Link</h3>
          <ul className="space-y-2 text-gray-400 text-sm mt-8">
            <li><a href="#">About Us</a></li>
            <li><a href="#">How We Works</a></li>
            <li><a href="#">Career</a></li>
          </ul>
        </div>

       
        <div>
          <h3 className="font-semibold mb-3">Quick Link</h3>
          <ul className="space-y-2 text-gray-400 text-sm mt-8">
            <li><a href="#">Privacy Policies</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Faq</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-3">Newsletter</h3>
          <p className="text-sm text-gray-400 mb-4 mt-8">Subscribe our newsletter to get our Latest Update & News</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter Email"
              className="p-2 text-sm w-full rounded-l bg-gray-800 text-white border-none outline-none"
            />
            <button className="bg-orange-500 px-4 py-2 rounded-r text-white">
            <Image height={50} width={60} src="/f-icon.png" alt="logo" className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

   
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-800 pt-4">
        © 2025 Tweet. All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
