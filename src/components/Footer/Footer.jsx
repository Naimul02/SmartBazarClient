
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
import { IoMdCall, IoMdMail } from "react-icons/io";
import { IoMailOpenSharp } from "react-icons/io5";
import { TbCoinTakaFilled } from "react-icons/tb";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-amber-50 pt-10 text-gray-700">
      {/* Top Icons Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:max-w-screen-2xl lg:mx-auto pl-2">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center">
            <div className="rounded-full border-2 border-orange-400 w-[100px] h-[100px] flex items-center justify-center">
              <div className="w-[80px] h-[80px] rounded-full bg-orange-400 flex items-center justify-center transition hover:rounded-tr-[140%] hover:rounded-bl-[140%]  hover:rounded-tl-[100%] hover:rounded-br-[100%]">
                <FaTruckMoving className="text-white text-4xl" />
              </div>
            </div>
          </div>
          <p className="font-medium text-sm">Free delivery</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center">
            <div className="rounded-full border-2 border-orange-400 w-[100px] h-[100px] flex items-center justify-center">
              <div className="w-[80px] h-[80px] rounded-full bg-orange-400 flex items-center justify-center transition hover:rounded-tr-[140%] hover:rounded-bl-[140%]  hover:rounded-tl-[100%] hover:rounded-br-[100%]">
                <TbCoinTakaFilled className="text-white text-5xl" />
              </div>
            </div>
          </div>
          <p className="font-medium text-sm">Cash On delivery</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center">
            <div className="rounded-full border-2 border-orange-400 w-[100px] h-[100px] flex items-center justify-center">
              <div className="w-[80px] h-[80px] rounded-full bg-orange-400 flex items-center justify-center transition hover:rounded-tr-[140%] hover:rounded-bl-[140%]  hover:rounded-tl-[100%] hover:rounded-br-[100%]">
                <BiRefresh className="text-white text-5xl" />
              </div>
            </div>
          </div>
          <p className="font-medium text-sm">30 days returns</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center">
            <div className="rounded-full border-2 border-orange-400 w-[100px] h-[100px] flex items-center justify-center">
              <div className="w-[80px] h-[80px] rounded-full bg-orange-400 flex items-center justify-center transition hover:rounded-tr-[140%] hover:rounded-bl-[140%]  hover:rounded-tl-[100%] hover:rounded-br-[100%]">
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
          <p className="text-gray-700 font-medium">
            Smart Bazar, established in 2024, is one of the newest retail
            supermarket chains in Bangladesh, currently operates in Dhaka &
            Chattogram.
          </p>
        </div>
        {/* Address Section */}
        <div className="mt-3 flex items-center gap-2">
          <FaLocationDot className="text-4xl text-orange-400 " />
          <div>
            <h3 className="font-bold text-orange-400 text-lg mb-1">Address</h3>
            <p>House: 49, Road: 16 (27 Old),</p>
            <p>Dhanmondi, Dhaka - 1209, Bangladesh</p>
          </div>
        </div>
        {/* Get In Touch Section */}
        <div className="mt-3 flex items-center gap-2">
          <IoMailOpenSharp className="text-4xl text-orange-400 " />
          <div>
            <h3 className="font-bold text-orange-400 text-lg mb-1">
              Get in touch
            </h3>
            <a href="tel:+8801844556677" className="hover:text-orange-400 cursor-pointer flex gap-1 items-center">
              <IoMdCall />
              +8801844556677
            </a>
            <a href="mailto:smartBazar60@gmail.com" className="hover:text-orange-400 cursor-pointer flex items-center gap-2">
              <IoMdMail />
              smartBazar60@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 md:gap-8 gap-2 text-base text-gray-800 max-w-screen-2xl mx-auto my-9 pl-3 pr-0">
        {/* Top Categories Section */}
        <div>
          <h3 className="font-bold text-orange-400 mb-2 text-lg">
            Top categories
          </h3>
          <ul className="text-sm">
            <li className="hover:text-orange-400 cursor-pointer">
              Fresh fruits
            </li>
            <li className="my-2 py-2 border-y border-dashed border-gray-600 hover:text-orange-400 cursor-pointer">
              Organic wine
            </li>
            <li className="hover:text-orange-400 cursor-pointer">
              Organic juice
            </li>
            <li className="my-2 py-2 border-y border-dashed border-gray-600 hover:text-orange-400 cursor-pointer">
              Dairy & cheese
            </li>
            <li className="hover:text-orange-400 cursor-pointer">Fresh meat</li>
          </ul>
        </div>
        {/* Services Section */}
        <div>
          <h3 className="font-bold text-orange-400 mb-2 text-lg">Services</h3>
          <ul className="text-sm">
            <li className="hover:text-orange-400 cursor-pointer">
              Fresh fruits
            </li>
            <li className="my-2 py-2 border-y border-dashed border-gray-700 hover:text-orange-400 cursor-pointer">
              Organic wine
            </li>
            <li className="hover:text-orange-400 cursor-pointer">
              Organic juice
            </li>
            <li className="my-2 py-2 border-y border-dashed border-gray-700 hover:text-orange-400 cursor-pointer">
              Dairy & cheese
            </li>
            <li className="hover:text-orange-400 cursor-pointer">Fresh meat</li>
          </ul>
        </div>

        {/* Privacy & Terms Section */}
        <div>
          <h3 className="font-bold text-orange-400 mb-2 text-lg">
            Privacy & terms
          </h3>
          <ul className="text-sm">
            <li className="hover:text-orange-400 cursor-pointer">
              Payment policy
            </li>
            <li className="my-2 py-2 border-y border-dashed border-gray-700 hover:text-orange-400 cursor-pointer">
              Privacy policy
            </li>
            <li className="hover:text-orange-400 cursor-pointer">
              Return policy
            </li>
            <li className="my-2 py-2 border-y border-dashed border-gray-700 hover:text-orange-400 cursor-pointer">
              Shipping policy
            </li>
            <li className="hover:text-orange-400 cursor-pointer">
              Terms & conditions
            </li>
          </ul>
        </div>

        {/* My Account Section */}
        <div>
          <h3 className="font-bold text-orange-400 mb-2 text-lg">My account</h3>
          <ul className="text-sm">
            <li className="hover:text-orange-400 cursor-pointer">My account</li>
            <li className="my-2 py-2 border-y border-dashed border-gray-700 hover:text-orange-400 cursor-pointer">
              My cart
            </li>
            <li className="hover:text-orange-400 cursor-pointer">
              Order history
            </li>
            <li className="my-2 py-2 border-y border-dashed border-gray-700 hover:text-orange-400 cursor-pointer">
              My wishlist
            </li>
            <li className="hover:text-orange-400 cursor-pointer">My address</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-orange-400">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-2 py-4 mt-8 md:max-w-screen-2xl md:mx-auto items-center">
          <div>
            <p className="text-base text-white md:text-start text-center">
            Copyright &copy; {currentYear} by <span className="font-bold">SmartBazar</span>
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
                src="https://res.cloudinary.com/dwtugdf8j/image/upload/v1732287034/png-clipart-visa-logo-credit-card-visa-logo-payment-visa-blue-text-thumbnail1-removebg-preview_d3wgmp.png"
                alt=""
                className="h-6"
              />
            </div>
            <div className="py-[2px] pl-4">
              <img
                src="https://res.cloudinary.com/dwtugdf8j/image/upload/v1732287033/brandhistory_mc_vrt_120_2x1_ylbwwd.png"
                alt=""
                className="h-10"
              />
            </div>
            <div className="pr-4 py-[2px] col-span-2">
              <img
                src="https://res.cloudinary.com/dwtugdf8j/image/upload/v1732287033/logo1_joyskr.png"
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
                src="https://res.cloudinary.com/dwtugdf8j/image/upload/v1732287034/Bkash-Customer-Care2_eayfal.png"
                alt=""
                className="h-10"
              />
            </div>
            <div className="pl-2">
              <img
                src="https://res.cloudinary.com/dwtugdf8j/image/upload/v1732287034/Nagad-Logo.wine1_mtf97k.png"
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
