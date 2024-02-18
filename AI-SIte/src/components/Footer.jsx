import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
function Footer() {
  return (
    <>
      <footer className="bg-[#020024]  text-white px-20 py-10 mt-60">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            {/* left section */}
            <div>
              <h3>Contact us</h3>
              <p>Email: brad@gmail.com</p>
              <p>Phone: +2341234</p>
              <p>Address: 3 kanta road</p>
            </div>

            {/* right section */}
            <div className="grid justify-center items-center">
              <h3 className="text=x1 font-bold mb-4 ">Our Socials</h3>
              <div className="flex justify-between space-x-5 text-2xl">
                <a
                  href="#"
                  className="ease-in-out  duration-300 hover:text-[#3a31d8]"
                >
                  <FaFacebook />
                </a>

                <a
                  href="#"
                  className="ease-in-out  duration-300 hover:text-[#3a31d8]"
                >
                  <FaTwitter />
                </a>

                <a
                  href="#"
                  className="ease-in-out  duration-300 hover:text-[#3a31d8]"
                >
                  <FaInstagram />
                </a>

                <a
                  href="#"
                  className="ease-in-out  duration-300 hover:text-[#3a31d8]"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
