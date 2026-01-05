import "./App.css";
import { useState } from "react";
// import "./index.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [displayLogIn, setDisplayLogIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <>
      {/* <header className="bg-green-900 w-full px-20 py-3">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"> */}
      {/* Logo / Home */}
      {/* <a
            href="#"
            className="text-white font-semibold text-lg hover:text-green-400 text-center md:text-left"
          >
            Home
          </a> */}

      {/* Navigation */}
      {/* <ul
            className="
              flex flex-col
              md:flex-row
              gap-3 text-center md:gap-6
              text-base
              [&>li>a]:text-white
              [&>li>a]:transition-colors
              [&>li>a]:duration-200
              [&>li>a:hover]:text-green-400"
          >
            <li>
              <a href="#">Did you know?</a>
            </li>
            <li>
              <a href="#">Weird Facts in Football</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </header> */}

      <header className="bg-gradient-to-br from-[#0F0F0F] via-[#1A1A1A] to-[#2A2A2A] w-full px-6 md:px-20 py-4 relative">
        {/* Top bar */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-white font-semibold text-lg">
            Home
          </a>

          {/* Desktop & Tablet Menu */}
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

          {/* Hamburger / Close Button (Mobile only) */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
          md:hidden
          overflow-hidden
          transition-all duration-300 ease-in-out
          ${menuOpen ? "max-h-64 opacity-100 mt-4" : "max-h-0 opacity-0"}
        `}
        >
          <ul className="flex flex-col items-center gap-4 py-4 bg-gray-700 rounded-lg ">
            <li>
              <a
                href="#"
                className="text-white text-lg hover:text-gray-400"
                onClick={() => setMenuOpen(false)}
              >
                Did you know?
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
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('./assets/footbal_legends.jpg')]     bg-cover bg-center bg-no-repeat"></div>

        {/* Overlay for fade effect */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h1 className="text-white font-bold text-center px-4 lg:text-6xl md:text-4xl text-xl font-serif">
            Welcome to Soccer Quiz Game
          </h1>
          <h2 className="text-white italic text-center px-4 pt-2 lg:text-3xl md:text-2xl text-md">
            Test Your Knowledge About The Game of Soccer
          </h2>

          {/* SIGN IN */}
          <h3 className="text-white pt-6 pb-3">
            Don't have an account?
            <button
              onClick={() => setShowSignUp(true)}
              className="bg-white text-green-900 font-semibold px-2 py-1 ml-2 rounded-lg hover:bg-green-900 hover:text-white hover:border-2 border-white"
            >
              Sign Up
            </button>
          </h3>

          {/* LOG IN */}
          <h3 className="text-white">
            Already have an account?
            <button
              onClick={() => setDisplayLogIn(true)}
              className="bg-white text-green-900 font-semibold px-2 py-1 ml-2 rounded-lg hover:bg-green-900 hover:text-white hover:border-2 border-white"
            >
              Log In
            </button>
          </h3>

          {/* SIGN UP FORM */}
          {showSignUp && (
            <div className="bg-green-400 w-[300px] m-auto mt-4">
              <h1 className="text-center text-3xl pt-4 pb-2 font-bold">
                Sign Up
              </h1>
              <div className="w-16 h-1 bg-white m-auto mb-4 rounded-lg"></div>
              <form
                className="flex flex-col items-left w-[200px] pl-10 pb-6"
                action=""
              >
                <label className="" htmlFor="">
                  First Name
                </label>
                <input
                  className="w-[200px] rounded-md p-1 pl-4 mt-2 mb-4"
                  type="text"
                  placeholder="First Name"
                />
                <label htmlFor="">Last Name</label>
                <input
                  className="w-[200px] rounded-md p-1 pl-4 mt-2 mb-4"
                  type="text"
                  placeholder="Last Name"
                />
                <label htmlFor="">Username</label>
                <input
                  className="w-[200px] rounded-md p-1 pl-4 mt-2 mb-4"
                  type="text"
                  placeholder="Username"
                />
                <label htmlFor="">Email</label>
                <input
                  className="w-[200px] rounded-md p-1 pl-4 mt-2 mb-4"
                  type="email"
                  placeholder="Email"
                />
                <label htmlFor="">Preferred Password</label>
                <input
                  className="w-[200px] rounded-md p-1 pl-4 mt-2 mb-1"
                  type="password"
                  placeholder="Preferred Password"
                />
              </form>
              <div className="w-[300px] flex justify-center">
                <button
                  className="bg-green-900 text-white p-2 rounded-lg hover:text-green-800 hover:bg-white mb-6 font-semibold pl-4 pr-4"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
            </div>
          )}

          {/* LOG IN FORM */}
          {displayLogIn && (
            <div className="bg-green-400 w-[300px] m-auto mt-4">
              <h1 className="text-center text-3xl pt-4 pb-2 font-bold">
                Log In
              </h1>
              <div className="w-16 h-1 bg-white m-auto mb-4 rounded-lg"></div>
              <form
                className="flex flex-col items-left w-[200px] pl-10 pb-6"
                action=""
              >
                <label htmlFor="">Username</label>
                <input
                  className="w-[200px] rounded-md p-1 pl-4 mt-2 mb-4"
                  type="text"
                  placeholder="Username"
                />
                <label htmlFor="">Password</label>
                <input
                  className="w-[200px] rounded-md p-1 pl-4 mt-2 mb-1"
                  type="password"
                  placeholder="Password"
                />
              </form>

              <div className="w-[300px] flex justify-center">
                <button
                  className="bg-green-900 text-white p-2 pl-4 pr-4 rounded-lg hover:text-green-800 hover:bg-white mb-6 font-semibold"
                  type="submit"
                >
                  Log In
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      <footer className="text-center text-white bg-gradient-to-br from-[#0F0F0F] via-[#1A1A1A] to-[#2A2A2A] p-3 h-full">
        techlyCoded &copy; 2026
      </footer>
    </>
  );
}

export default App;
