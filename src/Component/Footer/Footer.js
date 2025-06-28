import React from "react";
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="py-10 bg-pink-400 h-[50vh] max-md:h-auto max-md:pb-10 text-white text-center relative">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-60" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* First Row */}
        <div className="flex flex-col md:flex-row md:space-x-6 border-b border-white pb-5 mb-5">
          {/* Email Subscription Section */}
          <div className="flex-1 pb-5 md:pb-0">
            <label className="block font-bold text-lg mb-2">
              Sign Up For Email Offers & Updates
            </label>
            <div className="flex max-md:flex-col gap-4">
              <input
                type="text"
                placeholder="Enter Email"
                className="flex-grow p-2 text-black rounded-l-md"
              />
              <button className="bg-pink-500 hover:bg-black text-white font-bold px-4 py-2 rounded-r-md">
                SUBMIT
              </button>
            </div>
          </div>

          {/* Social Icons Section */}
          <div className="flex-1 mt-5 md:mt-0 text-center">
            <h5 className="text-lg font-semibold mb-2">Connect With Us</h5>
            <div className="flex justify-center space-x-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white text-xl">
                <FaFacebookF />
              </span>
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-400 text-white text-xl">
                <FaTwitter />
              </span>
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-red-600 text-white text-xl">
                <FaPinterestP />
              </span>
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-500 text-white text-xl">
                <FaInstagram />
              </span>
            </div>
          </div>

          {/* Payment Icons Section */}
          <div className="flex-1 mt-5 md:mt-0 text-center">
            <h6 className="text-lg font-semibold mb-2">
              SECURE ORDERING & TRANSACTIONS
            </h6>
            <div className="flex justify-center space-x-6">
              <span className="text-orange-300 font-bold text-xl max-md:text-sm">Visa</span>
              <span className="text-orange-300 font-bold text-xl max-md:text-sm">MasterCard</span>
              <span className="text-orange-300 font-bold text-xl max-md:text-sm">RuPay</span>
              <span className="text-orange-300 font-bold text-xl max-md:text-sm">PayPal</span>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="text-sm text-white mb-4">
          About us | Skymates Team | Careers | Contact Us | Testimonials | Terms & Conditions | Disclaimer | Terms Of Use | Privacy Policy | FAQ | Retails Store | Franchise | Blog | Affiliate Program | Bag | Astrology | News | Room | Download App
        </div>

        {/* Footer Bottom */}
        <div className="text-sm text-white">
          &copy; 2020 www.hallstein.com. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;

