import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
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

      <div className="bg-green-400 w-[300px] m-auto mt-10">
        <h1 className="text-center text-3xl pt-4 pb-2 font-bold">Sign Up</h1>
        <div className="w-16 h-1 bg-white m-auto mb-4 rounded-lg"></div>

        <form className="flex flex-col w-[200px] pl-10 pb-6">
          <label>First Name</label>
          <input className="input" type="text" />

          <label>Last Name</label>
          <input className="input" type="text" />

          <label>Username</label>
          <input className="input" type="text" />

          <label>Email</label>
          <input className="input" type="email" />

          <label>Password</label>
          <input className="input" type="password" />
        </form>

        <div className="flex justify-center pb-6">
          <button className="bg-green-900 text-white px-4 py-2 rounded-lg">
            Sign Up
          </button>
        </div>
      </div>
      <footer className="text-center text-white bg-gradient-to-br from-[#0F0F0F] via-[#1A1A1A] to-[#2A2A2A] p-3 h-full">
        techlyCoded &copy; 2026
      </footer>
    </>
  );
};

export default SignUp;
