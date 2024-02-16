import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
function Footer() {
  return (
    <>
      <footer className="bg-gradient-to-r from-slate-500 to-yellow-100 text-white p-4 mt-60">
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
            <div>
              <h3 className="text=x1 font-bold mb-4">Our Socials</h3>
              <div className="flex justify-between">
                <a href="#">
                  <FaFacebook />
                </a>

                <a href="#">
                  <FaTwitter />
                </a>

                <a href="#">
                  <FaInstagram />
                </a>

                <a href="#">
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
