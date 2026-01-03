import "./App.css";
import { useState } from "react";
// import "./index.css";

function App() {
  const [increase, setIncrease] = useState(0);
  const [displayLogIn, setDisplayLogIn] = useState(false);

  const handleIncrease = () => {
    setIncrease(increase + 1);
  };
  const handleDecrease = () => {
    setIncrease(increase - 1);
  };
  return (
    <>
      {/* <header className="flex justify-between bg-green-900 w-[100%] h-14 px-4 py-4 ">
        <div>
          <a className="text-white hover:text-green-500" href="#">
            Home
          </a>
        </div>
        <div>
          <ul className="flex [&>li>a]:text-white [&>li>a]:pr-6 text-base">
            <li>
              <a className="hover:text-green-400" href="#">
                Did you know?
              </a>
            </li>
            <li>
              <a className="hover:text-green-500" href="#">
                Weird Facts in Football
              </a>
            </li>
            <li>
              <a className="hover:text-green-500" href="#">
                About Us
              </a>
            </li>
            <li>
              <a className="hover:text-green-500" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </header> */}

      <header className="bg-green-900 w-full px-20 py-3">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Logo / Home */}
          <a
            href="#"
            className="text-white font-semibold text-lg hover:text-green-400 text-center md:text-left"
          >
            Home
          </a>

          {/* Navigation */}
          <ul
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
      </header>

      <section className="relative h-[85vh] w-full">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('./assets/footbal_legends.jpg')] bg-cover bg-center bg-no-repeat"></div>

        {/* Overlay for fade effect */}
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h1 className="text-white font-bold text-center px-4 lg:text-6xl md:text-4xl text-xl">
            Welcome to Soccer Quiz Game
          </h1>
          <h2 className="text-white italic text-center px-4 pt-2 lg:text-3xl md:text-2xl text-md">
            Test Your Knowledge About The Game of Soccer
          </h2>

          {/* SIGN IN */}
          <h3 className="text-white pt-6 pb-3">
            Don't have an account?
            <button className="bg-white text-green-900 font-semibold px-2 py-1 ml-2 rounded-lg hover:bg-green-900 hover:text-white hover:border-2 border-white">
              Sign Up
            </button>
          </h3>

          {/* LOG IN */}
          <h3 className="text-white">
            Already have an account?
            <button className="bg-white text-green-900 font-semibold px-2 py-1 ml-2 rounded-lg hover:bg-green-900 hover:text-white hover:border-2 border-white">
              Log In
            </button>
          </h3>
        </div>
      </section>
      {/* SIGN UP FORM */}
      <div className="bg-green-400 w-[400px] m-auto mt-4">
        <h1 className="text-center text-3xl pt-4 pb-2 font-bold">Sign Up</h1>
        <div className="w-16 h-1 bg-white m-auto mb-4 rounded-lg"></div>
        <form
          className="flex flex-col items-left w-[200px] pl-10 pb-6"
          action=""
        >
          <label className="" htmlFor="">
            First Name
          </label>
          <input
            className="w-[250px] rounded-md p-1 pl-4 mt-2 mb-4"
            type="text"
            placeholder="First Name"
          />
          <label htmlFor="">Last Name</label>
          <input
            className="w-[250px] rounded-md p-1 pl-4 mt-2 mb-4"
            type="text"
            placeholder="Last Name"
          />
          <label htmlFor="">Username</label>
          <input
            className="w-[250px] rounded-md p-1 pl-4 mt-2 mb-4"
            type="text"
            placeholder="Username"
          />
          <label htmlFor="">Email</label>
          <input
            className="w-[250px] rounded-md p-1 pl-4 mt-2 mb-4"
            type="email"
            placeholder="Email"
          />
          <label htmlFor="">Preferred Password</label>
          <input
            className="w-[250px] rounded-md p-1 pl-4 mt-2 mb-4"
            type="password"
            placeholder="Preferred Password"
          />
        </form>
        <div className="w-[400px] flex justify-center">
          <button
            className="bg-green-900 text-white p-2 rounded-lg hover:text-green-800 hover:bg-white mb-6 font-semibold pl-4 pr-4"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* LOG IN FORM */}

      <div className="bg-green-400 w-[400px] m-auto mt-4">
        <h1 className="text-center text-3xl pt-4 pb-2 font-bold">Log In</h1>
        <div className="w-16 h-1 bg-white m-auto mb-4 rounded-lg"></div>
        <form
          className="flex flex-col items-left w-[200px] pl-10 pb-6"
          action=""
        >
          <label htmlFor="">Username</label>
          <input
            className="w-[250px] rounded-md p-1 pl-4 mt-2 mb-4"
            type="text"
            placeholder="Username"
          />
          <label htmlFor="">Password</label>
          <input
            className="w-[250px] rounded-md p-1 pl-4 mt-2 mb-4"
            type="password"
            placeholder="Password"
          />
        </form>
        <div className="w-[400px] flex justify-center">
          <button
            className="bg-green-900 text-white p-2 pl-4 pr-4 rounded-lg hover:text-green-800 hover:bg-white mb-6 font-semibold"
            type="submit"
          >
            Log In
          </button>
        </div>
      </div>

      {/* UseState */}
      <button onClick={handleIncrease}>Increase</button>
      <p>Number:{increase} </p>
      <button onClick={handleDecrease}>Decrease</button>

      <footer className="text-center bg-green-200 p-3 h-full">
        techlyCoded &copy; 2026
      </footer>
    </>
  );
}

export default App;
