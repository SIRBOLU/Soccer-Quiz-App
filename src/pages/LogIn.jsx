import React, { useState } from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-black">
      {/* HEADER */}
      <header className="bg-gradient-to-br from-[#0F0F0F] via-[#1A1A1A] to-[#2A2A2A] w-full px-6 md:px-20 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-white font-semibold text-lg">
            Home
          </Link>

          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>

      {/* MAIN (CENTERS FORM) */}
      <main className="flex-1 relative flex items-center justify-center">
        {/* Background image */}
        <div className="absolute inset-0 bg-[url('./assets/CR7_Messi_playing_chess.jpg')] bg-cover bg-center"></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Login form */}
        <div className="relative z-10 w-[420px] max-w-[90%] bg-gray-300 p-8 rounded-2xl">
          <h1 className="text-center text-3xl font-semibold">
            Glad to have you back!
          </h1>

          <form className="flex flex-col items-center w-full mt-8">
            <div className="flex flex-col w-full mb-4">
              <label className="text-left mb-1">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full rounded-full p-4"
              />
            </div>

            <div className="flex flex-col w-full mb-4">
              <div className="flex justify-between">
                <label>Password</label>
                <span className="text-sm font-light">Forgot Password?</span>
              </div>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full rounded-full p-4 mt-2"
              />
            </div>

            <button className="bg-black text-white px-6 py-3 rounded-full mt-4">
              Log In
            </button>
          </form>
        </div>
      </main>

      {/* FOOTER (STICKS TO BOTTOM) */}
      <footer className="text-center bg-gradient-to-br from-[#0F0F0F] via-[#1A1A1A] to-[#2A2A2A] text-white p-4 text-xs font-thin">
        techlyCoded © 2026
      </footer>
    </div>
  );
};

export default LogIn;
