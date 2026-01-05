import React, { useState } from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <header className="bg-gradient-to-br from-[#0F0F0F] via-[#1A1A1A] to-[#2A2A2A] w-full px-6 md:px-20 py-4 relative">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="text-white font-semibold text-lg hover:text-gray-300"
            >
              Home
            </Link>

            <ul className="hidden md:flex gap-6 text-base">
              <li>
                <a href="#" className="text-white hover:text-gray-300">
                  How it works
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300">
                  Weird Facts in Football
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300">
                  Contact Us
                </a>
              </li>
            </ul>

            <button
              className="md:hidden text-white text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>

          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              menuOpen ? "max-h-64 opacity-100 mt-4" : "max-h-0 opacity-0"
            }`}
          >
            <ul className="flex flex-col items-center gap-4 py-4 bg-gray-700 rounded-lg">
              <li>
                <a
                  href="#"
                  className="text-white text-lg hover:text-gray-400"
                  onClick={() => setMenuOpen(false)}
                >
                  How it works?
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white text-lg hover:text-gray-400"
                  onClick={() => setMenuOpen(false)}
                >
                  Weird Facts in Football
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white text-lg hover:text-gray-400"
                  onClick={() => setMenuOpen(false)}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white text-lg hover:text-gray-400"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </header>

        {/* LOG IN FORM */}
        <section className="relative h-screen w-full">
          {/* Background Image */}
          <div className="absolute inset-0 bg-[url('./assets/CR7_Messi_playing_chess.jpg')] bg-cover bg-center bg-no-repeat"></div>

          {/* 50% opacity overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Content */}
          <div className="min-h-screen relative z-10 flex justify-center items-center">
            <div className="w-[420px] bg-gray-300 opacity-80 p-10 rounded-2xl">
              <h1 className="text-center text-3xl font-semibold">
                Glad to have you back!
              </h1>
              <form className="flex flex-col items-center w-full mt-8">
                <div className="flex flex-col w-full mb-4">
                  <label className="text-left mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full rounded-full p-4 mt-2 mb-4"
                  />
                </div>

                <div className="flex flex-col w-full mb-4">
                  <div className="flex justify-between">
                    <label className="text-left mb-1">Password</label>
                    <label className="text-left mb-1 font-light text-sm">
                      Forgot Password?
                    </label>
                  </div>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full rounded-full rounded-full p-4 mt-2 mb-4"
                  />
                </div>

                <button className="bg-black text-white px-6 py-3 rounded-full mt-4 hover:text-black hover:bg-white hover:border-black hover:border-2">
                  Log In
                </button>
              </form>
            </div>
          </div>
        </section>

        <footer className="text-center text-white bg-gradient-to-br from-[#0F0F0F] via-[#1A1A1A] to-[#2A2A2A] p-3 h-full text-xs font-thin">
          techlyCoded &copy; 2026
        </footer>
      </div>
    </>
  );
};

export default LogIn;
