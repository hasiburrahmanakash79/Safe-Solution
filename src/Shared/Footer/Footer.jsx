// import React from 'react';

import { FaFacebook } from "react-icons/fa";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-black text-white mt-10">
      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-1 md:pr-10">
            <h2 className="text-2xl font-bold mb-4">
                Safe solution International
            </h2>
            <p className="mb-4 text-sm text-gray-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem,
              corrupti. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
            </p>
            <p className="mb-4">Follow us on social media:</p>
            <div className="flex space-x-4">
              <a href="">
                <FaInstagram />
              </a>
              <a href="">
                <FaFacebook />
              </a>
              <a href="">
                <FaYoutube />
              </a>
              <a href="">
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className="col-span-2">
            <div className="md:grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="col-span-1 grid md:block grid-cols-2 gap-4 ">
                <div className="mb-4">
                  <h2 className="text-lg font-semibold mb-4">Products</h2>
                  <ul className="space-y-2 text-gray-400 ">
                    <li>
                      <a href="#" className="hover:text-green-600">
                        Wrench
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-green-600">
                        Hammer
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-green-600">
                        Axe
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-green-600">
                        Pliers
                      </a>
                    </li>
                  </ul>
                </div>
                
              </div>
              <div className="col-span-2">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h2 className="text-lg font-semibold mb-4">Collections</h2>
                    <ul className="space-y-2 text-gray-400">
                      <li>
                        <a href="#" className="hover:text-green-600">
                          Tools
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-green-600">
                          Electronics
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-green-600">
                          Home & Garden
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-green-600">
                          Fashion
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="mb-4">
                      <h2 className="text-lg font-semibold mb-4">Legal</h2>
                      <ul className="space-y-2 text-gray-400">
                        <li>
                          <a href="#" className="hover:text-green-600">
                            Shipping & Returns
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-green-600">
                            Privacy Policy
                          </a>
                        </li>
                        <li>
                          <a href="#" className="hover:text-green-600">
                            Terms of Service
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 mt-10 text-center border-t border-gray-700">
        <p>Copyright @ Safe Solution International 2025-2030</p>
      </div>
    </div>
  );
};

export default Footer;
