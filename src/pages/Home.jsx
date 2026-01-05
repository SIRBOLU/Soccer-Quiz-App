import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

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
              <Link to="/about" className="text-white hover:text-gray-300">
                About Us
              </Link>
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

      <section className="relative h-[85vh] w-full">
        <div className="absolute inset-0 bg-[url('./assets/footbal_legends.jpg')] bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h1 className="text-white font-bold text-center px-4 lg:text-6xl md:text-4xl text-xl font-serif">
            Welcome to Soccer Quiz Game
          </h1>
          <h2 className="text-white italic text-center px-4 pt-2 lg:text-3xl md:text-xl text-sm">
            Test Your Knowledge About The Game of Soccer
          </h2>

          <p className="text-white pt-6 pb-3 text-sm">
            Don't have an account?
            <button
              onClick={() => navigate("/signup")}
              className="bg-white text-green-900 font-semibold px-2 py-1 ml-2 rounded-lg hover:bg-green-900 hover:text-white hover:border-2 border-white"
            >
              Sign Up
            </button>
          </p>

          <p className="text-white text-sm">
            Already have an account?
            <button
              onClick={() => navigate("/login")}
              className="bg-white text-green-900 font-semibold px-2 py-1 ml-2 rounded-lg hover:bg-green-900 hover:text-white hover:border-2 border-white"
            >
              Log In
            </button>
          </p>
        </div>
      </section>

      <footer className="text-center text-white bg-gradient-to-br from-[#0F0F0F] via-[#1A1A1A] to-[#2A2A2A] p-3 h-full">
        techlyCoded &copy; 2026
      </footer>
    </>
  );
};

export default Home;
