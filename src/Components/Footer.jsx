import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[rgb(5,11,32)] text-white py-12 px-6 sm:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pb-8 border-b border-gray-700 mb-8">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">Join CarHut</h2>
            <p className="text-gray-400">
              Receive pricing updates, shopping tips & more!
            </p>
          </div>
          <div className="relative w-full md:w-auto max-w-md">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full rounded-full border border-gray-600 px-6 py-3 pr-32 text-white bg-[#2A2E35] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#4871F8] text-white px-6 py-2 rounded-full hover:bg-[#3d63d9] font-medium transition-colors">
              Sign Up
            </button>
          </div>
        </div>

        {/* Main Navigation Section */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-8">
          {/* Company */}
          <div className="space-y-3">
            <h3 className="font-semibold text-white mb-2">Company</h3>
            <a
              href="#"
              className="block text-gray-400 hover:text-white transition-colors"
            >
              About Us
            </a>
            <a
              href="#"
              className="block text-gray-400 hover:text-white transition-colors"
            >
              Blog
            </a>
            <a
              href="#"
              className="block text-gray-400 hover:text-white transition-colors"
            >
              Services
            </a>
            <a
              href="#"
              className="block text-gray-400 hover:text-white transition-colors"
            >
              FAQs
            </a>
            <a
              href="#"
              className="block text-gray-400 hover:text-white transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="block text-gray-400 hover:text-white transition-colors"
            >
              Contact Us
            </a>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="font-semibold text-white mb-2">Quick Links</h3>
            <a
              href="#"
              className="block text-gray-400 hover:text-white transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="#"
              className="block text-gray-400 hover:text-white transition-colors"
            >
              Help center
            </a>
            <a
              href="#"
              className="block text-gray-400 hover:text-white transition-colors"
            >
              Live chat
            </a>
            <a
              href="#"
              className="block text-gray-400 hover:text-white transition-colors"
            >
              How it works
            </a>
          </div>

          {/* Our Brands */}
          <div className="space-y-3">
            <h3 className="font-semibold text-white mb-2">Our Brands</h3>
            <a
              href="#"
              className="block text-gray-400 hover:text-white transition-colors"
            >
              Toyota
            </a>
            <a
              href="#"
              className="block text-gray-400 hover:text-white transition-colors"
            >
              Porsche
            </a>
            <a
              href="#"
              className="block text-gray-400 hover:text-white transition-colors"
            >
              Audi
            </a>
            <a
              href="#"
              className="block text-gray-400 hover:text-white transition-colors"
            >
              BMW
            </a>
            <a
              href="#"
              className="block text-gray-400 hover:text-white transition-colors"
            >
              Ford
            </a>
            <a
              href="#"
              className="block text-gray-400 hover:text-white transition-colors"
            >
              Nissan
            </a>
            <a
              href="#"
              className="block text-gray-400 hover:text-white transition-colors"
            >
              Peugeot
            </a>
            <a
              href="#"
              className="block text-gray-400 hover:text-white transition-colors"
            >
              Volkswagen
            </a>
          </div>

          {/* Vehicles Type */}
          <div className="space-y-3">
            <h3 className="font-semibold text-white mb-2">Vehicles Type</h3>
            <a
              href="#"
              className="block text-gray-400 hover:text-white transition-colors"
            >
              Sedan
            </a>
            <a
              href="#"
              className="block text-gray-400 hover:text-white transition-colors"
            >
              Hatchback
            </a>
            <a
              href="#"
              className="block text-gray-400 hover:text-white transition-colors"
            >
              SUV
            </a>
            <a
              href="#"
              className="block text-gray-400 hover:text-white transition-colors"
            >
              Hybrid
            </a>
            <a
              href="#"
              className="block text-gray-400 hover:text-white transition-colors"
            >
              Electric
            </a>
            <a
              href="#"
              className="block text-gray-400 hover:text-white transition-colors"
            >
              Coupe
            </a>
            <a
              href="#"
              className="block text-gray-400 hover:text-white transition-colors"
            >
              Truck
            </a>
            <a
              href="#"
              className="block text-gray-400 hover:text-white transition-colors"
            >
              Convertible
            </a>
          </div>

          {/* Mobile App & Social */}
          <div>
            <div className="space-y-4">
              <h3 className="font-semibold text-white mb-2">Our Mobile App</h3>
              <a
                href="#"
                className="flex items-center space-x-2 bg-[#2A2E35] rounded-lg py-3 px-4 hover:bg-gray-700 transition-colors"
              >
                <img src="https://i.ibb.co.com/Xfwn0RjL/Symbol.png" alt="" />
                <div className=" w-[500.8px] h-[60px] rounded-3xl">
                  <div className="flex flex-col justify-center text-sm">
                    <span className="text-white">Download on the</span>
                    <span className="font-semibold">App Store</span>
                  </div>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2  bg-[#2A2E35] rounded-lg py-3 px-4 hover:bg-gray-700 transition-colors"
              >
                <img src="https://i.ibb.co.com/yBX71cdL/Symbol-1.png" alt="" />
                <div className="flex flex-col text-sm w-[198.8px] h-[60px] rounded-3xl">
                  <span className="text-white">Get it on</span>
                  <span className="font-semibold">Google Play</span>
                </div>
              </a>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold text-white mb-2">Connect With Us</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 8.52 8.419 9.329v-7.034h-2.54v-2.22l2.54-.001-.001-2.783c0-2.574 1.49-3.999 3.88-3.999 1.125 0 2.291.202 2.291.202v2.492h-1.265c-1.241 0-1.638.777-1.638 1.563v1.864h2.793l-.448 2.22h-2.345v7.034C18.343 20.52 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19.5 0h-15c-2.485 0-4.5 2.015-4.5 4.5v15c0 2.485 2.015 4.5 4.5 4.5h15c2.485 0 4.5-2.015 4.5-4.5v-15c0-2.485-2.015-4.5-4.5-4.5zm-5.631 16.353h-2.293v-7.143h2.293v7.143zm-1.143-8.24c-.752 0-1.36-.608-1.36-1.36s.608-1.36 1.36-1.36 1.36.608 1.36 1.36-.608 1.36-1.36 1.36zm10.774 8.24h-2.293v-4.143c0-1.071-.857-1.928-1.928-1.928s-1.928.857-1.928 1.928v4.143h-2.293v-7.143h2.293v1.071c.428-.714 1.143-1.214 2.071-1.214 1.285 0 2.293.928 2.293 2.293v6.071z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M23.104 5.864c-.651.288-1.35.482-2.083.568.751-.45 1.328-1.16 1.6-2.003-.701.417-1.478.718-2.297.882-.662-.705-1.606-1.147-2.656-1.147-2.008 0-3.639 1.63-3.639 3.638 0 .285.032.562.091.829-3.023-.152-5.698-1.6-7.518-3.792-.313.535-.492 1.157-.492 1.823 0 1.26.64 2.375 1.61 3.024-.595-.018-1.154-.183-1.643-.453v.045c0 1.764 1.258 3.238 2.924 3.57-.306.083-.63.126-.96.126-.234 0-.46-.022-.682-.065.464 1.45 1.81 2.508 3.411 2.539-1.248.978-2.822 1.564-4.523 1.564-.294 0-.58-.017-.864-.051 1.614 1.034 3.533 1.642 5.586 1.642 6.703 0 10.364-5.558 10.364-10.364 0-.158-.004-.316-.01-.472.716-.516 1.334-1.162 1.825-1.899z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm3.333 14h-6.666v-6.666h6.666v6.666zM12 6.833c-2.867 0-5.167 2.3-5.167 5.167s2.3 5.167 5.167 5.167 5.167-2.3 5.167-5.167-2.3-5.167-5.167-5.167z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-700">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            © 2025 example.com. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Notice
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
