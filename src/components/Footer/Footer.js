/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="flex py-7 px-10 flex-col md:flex-row space-y-5 bg-gray-800 text-gray-400 md:space-x-12 lg:space-x-20">
        <div className="about py-5">
          <h1 className="font-bold text-2xl py-3 text-gray-400">About Fylo</h1>
          <p className="pb-3 leading-relaxed text-sm ms:text-base text-gray-400">
            All your files in one secure location, accessable anywhere. Fylo
            stores your most important files in one secure location. Access them
            wherever you need, share and collaborate with friends, family, and
            co-workers.
          </p>
          <div className="socialIcons space-x-4">
            <a
              target="_blank"
              href="https://web.facebook.com/sushanta.webDev/"
              rel="noreferrer"
            >
              <i className="fab fa-facebook text-2xl md:text-lg sm:text-lg lg:text-2xl text-gray-500 hover:text-gray-300 duration-500"></i>
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/susanto_chandra_das/"
              rel="noreferrer"
            >
              <i className="fab fa-instagram text-2xl md:text-lg sm:text-lg lg:text-2xl text-gray-500 hover:text-gray-300 duration-500"></i>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/susanto-chandra/"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin text-2xl md:text-lg sm:text-lg lg:text-2xl text-gray-500 hover:text-gray-300 duration-500"></i>
            </a>
          </div>
        </div>
        <div className="quickLinks">
          <h1 className="text-2xl pb-5 font-bold">Links</h1>
          <ul className="space-y-2">
            <li className="md:text-sm hover:underline hover:text-gray-300">
              <a href="#">Home</a>
            </li>
            <li className="md:text-sm hover:underline hover:text-gray-300">
              <a href="#">Features</a>
            </li>
            <li className="md:text-sm hover:underline hover:text-gray-300">
              <a href="#">Services</a>
            </li>
            <li className="md:text-sm hover:underline hover:text-gray-300">
              <a href="#">Team</a>
            </li>
          </ul>
        </div>
        <div className="address">
          <h1 className="font-bold text-2xl w-72 pb-2">Contact Us</h1>
          <p className="pb-5 md:text-sm text-gray-400">
            For any help or issue You con contact with us 24/7.
          </p>
          <div className="sub-address space-y-2">
            <p className="text-gray-400 md:text-sm">
              <i className="pr-3 fas fa-phone"></i>+8801923260216
            </p>
            <p className="text-gray-400 md:text-sm">
              <i className="pr-3 fas fa-envelope"></i>
              susanto.chandra001@gmail.com
            </p>
            <p className="text-gray-400 md:text-sm">
              <i className="pr-3 fas fa-map-marker-alt"></i>Gazipur, Dhaka,
              Bnagladesh
            </p>
          </div>
        </div>
      </footer>
      <div className="bg-gray-800 border-t-2 border-gray-600 text-gray-400 text-center md:text-sm capitalize py-2">
        &copy; All right reserved of fylo{" "}
        <a
          className="hover:underline hover:text-gray-300 hidden sm:inline-block"
          href="https://www.linkedin.com/in/susanto-chandra/"
          title="Click for go to my LinkedIn Profile"
          target="_blank"
          rel="noreferrer"
        >
          (Designed by Susanto Chandra Das)
        </a>
      </div>
    </div>
  );
};

export default Footer;
