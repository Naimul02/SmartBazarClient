import { BiRefresh } from "react-icons/bi";
import {
  FaFacebookF,
  FaHeadphones,
  FaInstagram,
  FaTruckMoving,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMailOpenSharp } from "react-icons/io5";
import { TbCoinTakaFilled } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="bg-amber-50 pt-10 text-gray-700">
      {/* Top Icons Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:max-w-screen-2xl lg:mx-auto px-1">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center">
            <div className="rounded-full border-2 border-orange-400 w-[100px] h-[100px] flex items-center justify-center">
              <div className="w-[80px] h-[80px] rounded-full bg-orange-400 flex items-center justify-center transition hover:origin-center hover:-rotate-45 duration-300 hover:w-[75px] hover:h-[90px] hover:rounded-s-full">
                <FaTruckMoving className="text-white text-4xl" />
              </div>
            </div>
          </div>
          <p className="font-medium text-sm">Free delivery</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center">
            <div className="rounded-full border-2 border-orange-400 w-[100px] h-[100px] flex items-center justify-center">
              <div className="w-[80px] h-[80px] rounded-full bg-orange-400 flex items-center justify-center transition hover:origin-center hover:-rotate-45 duration-300 hover:w-[75px] hover:h-[90px] hover:rounded-s-full">
                <TbCoinTakaFilled className="text-white text-5xl" />
              </div>
            </div>
          </div>
          <p className="font-medium text-sm">Cash On delivery</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center">
            <div className="rounded-full border-2 border-orange-400 w-[100px] h-[100px] flex items-center justify-center">
              <div className="w-[80px] h-[80px] rounded-full bg-orange-400 flex items-center justify-center transition hover:origin-center hover:-rotate-45 duration-300 hover:w-[75px] hover:h-[90px] hover:rounded-s-full">
                <BiRefresh className="text-white text-5xl" />
              </div>
            </div>
          </div>
          <p className="font-medium text-sm">30 days returns</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center">
            <div className="rounded-full border-2 border-orange-400 w-[100px] h-[100px] flex items-center justify-center">
              <div className="w-[80px] h-[80px] rounded-full bg-orange-400 flex items-center justify-center transition hover:origin-center hover:-rotate-45 duration-300 hover:w-[75px] hover:h-[90px] hover:rounded-s-full">
                <FaHeadphones className="text-white text-[32px]" />
              </div>
            </div>
          </div>
          <p className="font-medium text-sm">Online Support</p>
        </div>
      </div>

      {/* Middle Section */}
      <div className="lg:max-w-screen-2xl lg:mx-auto grid lg:grid-cols-3 grid-cols-1 lg:gap-8 gap-2 mt-8 border-y border-gray-200 py-9 px-2">
        <div>
          <h2 className="text-4xl font-bold text-orange-400 mb-2">
            SmartBazar
          </h2>
          <p className="text-base text-gray-700 font-medium">
            Lorem ipsum isads simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        {/* Address Section */}
        <div className="mt-3 flex items-center gap-2">
          <FaLocationDot className="text-4xl text-orange-400 " />
          <div>
            <h3 className="font-bold text-orange-400 text-lg mb-1">Address</h3>
            <p>38 block street, area licard</p>
            <p>Hamonia road, Sydney, Australia</p>
          </div>
        </div>
        {/* Get In Touch Section */}
        <div className="mt-3 flex items-center gap-2">
          <IoMailOpenSharp className="text-4xl text-orange-400 " />
          <div>
            <h3 className="font-bold text-orange-400 text-lg mb-1">
              Get in touch
            </h3>
            <p className="hover:text-orange-400 cursor-pointer">+8801844556677</p>
            <p className="hover:text-orange-400 cursor-pointer">smartBazar60@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 md:gap-8 gap-2 text-base text-gray-800 max-w-screen-2xl mx-auto my-9 px-2">
        {/* Top Categories Section */}
        <div>
          <h3 className="font-bold text-orange-400 mb-2 text-lg">
            Top categories
          </h3>
          <ul>
            <li>Fresh fruits</li>
            <li className="my-2 py-2 border-y border-dashed border-gray-600">
              Organic wine
            </li>
            <li>Organic juice</li>
            <li className="my-2 py-2 border-y border-dashed border-gray-600">
              Dairy & cheese
            </li>
            <li>Fresh meat</li>
          </ul>
        </div>
        {/* Services Section */}
        <div>
          <h3 className="font-bold text-orange-400 mb-2 text-lg">Services</h3>
          <ul>
            <li>Fresh fruits</li>
            <li className="my-2 py-2 border-y border-dashed border-gray-700">
              Organic wine
            </li>
            <li>Organic juice</li>
            <li className="my-2 py-2 border-y border-dashed border-gray-700">
              Dairy & cheese
            </li>
            <li>Fresh meat</li>
          </ul>
        </div>

        {/* Privacy & Terms Section */}
        <div>
          <h3 className="font-bold text-orange-400 mb-2 text-lg">
            Privacy & terms
          </h3>
          <ul>
            <li>Payment policy</li>
            <li className="my-2 py-2 border-y border-dashed border-gray-700">
              Privacy policy
            </li>
            <li>Return policy</li>
            <li className="my-2 py-2 border-y border-dashed border-gray-700">
              Shipping policy
            </li>
            <li>Terms & conditions</li>
          </ul>
        </div>

        {/* My Account Section */}
        <div>
          <h3 className="font-bold text-orange-400 mb-2 text-lg">My account</h3>
          <ul>
            <li>My account</li>
            <li className="my-2 py-2 border-y border-dashed border-gray-700">
              My cart
            </li>
            <li>Order history</li>
            <li className="my-2 py-2 border-y border-dashed border-gray-700">
              My wishlist
            </li>
            <li>My address</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-orange-400">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-2 py-4 mt-8 md:max-w-screen-2xl md:mx-auto items-center">
          <div>
            <p className="text-base text-white md:text-start text-center">
              Copyright © 2024 by spacingtech
            </p>
          </div>
          <div className="grid grid-cols-5 gap-3 mx-auto">
            <div className="bg-white rounded-full w-9 h-9 flex justify-center items-center">
              <a href="#" className="">
                <FaWhatsapp className="text-orange-400 text-xl" />
              </a>
            </div>
            <div className="bg-white rounded-full w-9 h-9 flex justify-center items-center">
              <a href="#" className="">
                <FaFacebookF className="text-orange-400 text-base" />
              </a>
            </div>
            <div className="bg-white rounded-full w-9 h-9 flex justify-center items-center">
              <a href="#" className="">
                <FaTwitter className="text-orange-400 text-base" />
              </a>
            </div>
            <div className="bg-white rounded-full w-9 h-9 flex justify-center items-center">
              <a href="#" className="">
                <FaInstagram className="text-orange-400 text-lg" />
              </a>
            </div>
            <div className="bg-white rounded-full w-9 h-9 flex justify-center items-center">
              <a href="#" className="">
                <FaYoutube className="text-orange-400 text-xl" />
              </a>
            </div>
          </div>
          <div className="grid md:grid-cols-6 grid-cols-4 px-2 bg-white">
            <div className="pl-1 pr-2 py-[9px]">
              <img
                src="https://i.ibb.co.com/q7ZknLj/png-clipart-visa-logo-credit-card-visa-logo-payment-visa-blue-text-thumbnail1-removebg-preview.png"
                alt=""
                className="h-6"
              />
            </div>
            <div className="py-[2px] pl-4">
              <img
                src="https://i.ibb.co.com/SBcy9nX/brandhistory-mc-vrt-120-2x1.png"
                alt=""
                className="h-10"
              />
            </div>
            <div className="pr-4 py-[2px] col-span-2">
              <img
                src="https://sslcommerz.com/wp-content/uploads/2021/11/logo.png"
                alt=""
                className="h-10"
              />
            </div>
            {/* <div className=">
                            <img src="https://i.ibb.co.com/MCXMXvM/image-removebg-preview.png" alt="" className=""/>
                            <p className="text-2xl font-extrabold text-black text-center my-1">stripe</p>
                        </div> */}
            <div className="pl-2 md:pl-0 pr-2">
              <img
                src="https://i.ibb.co.com/ZKxXfKD/Bkash-Customer-Care2.png"
                alt=""
                className="h-10"
              />
            </div>
            <div className="pl-2">
              <img
                src="https://i.ibb.co.com/6Z11whB/Nagad-Logo-wine1.png"
                alt=""
                className="h-10"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
