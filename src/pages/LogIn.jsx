import React, { useState } from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-black">
      {/* HEADER */}
      <header className="relative bg-gradient-to-br from-[#0F0F0F] via-[#1A1A1A] to-[#2A2A2A] w-full px-6 md:px-20 py-4 z-20">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-white font-semibold text-lg">
            Home
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 text-white">
            <li>How it works</li>
            <li>Weird Facts in Football</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>

          {/* Hamburger */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
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

      {/* MAIN */}
      <main className="flex-1 relative flex items-center justify-center">
        {/* Background */}
        <div className="absolute inset-0 bg-[url('./assets/CR7_Messi_playing_chess.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/50" />

        {/* Login Form */}
        <div className="relative z-10 w-[420px] max-w-[90%] bg-gray-300 p-8 rounded-2xl opacity-80">
          <h1 className="text-center text-3xl font-semibold">
            Glad to have you back!
          </h1>

          <form className="flex flex-col w-full mt-8">
            <div className="flex flex-col mb-4">
              <label className="text-left mb-1">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full rounded-full p-4"
              />
            </div>

            <div className="flex flex-col mb-4">
              <div className="flex justify-between text-sm">
                <label>Password</label>
                <span className="font-light">Forgot Password?</span>
              </div>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full rounded-full p-4 mt-2"
              />
            </div>

            <button className="bg-black text-white px-6 py-3 rounded-full mt-4 w-fit m-auto hover:text-black hover:bg-white hover:border-black hover:border-2">
              Log In
            </button>
          </form>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="text-center bg-gradient-to-br from-[#0F0F0F] via-[#1A1A1A] to-[#2A2A2A] text-white p-4 text-xs font-thin">
        techlyCoded © 2026
      </footer>
    </div>
  );
};

export default LogIn;
