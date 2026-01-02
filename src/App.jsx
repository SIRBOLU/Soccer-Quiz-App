import "./App.css";
// import "./index.css";

function App() {
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
          <h1 className="text-white font-bold text-center px-4 lg:text-6xl md:text-4xl text-3xl">
            Welcome to Soccer Quiz Game
          </h1>
          <h2 className="text-white italic text-center px-4 pt-2 lg:text-3xl md:text-2xl sm:text-md">
            Test Your Knowledge About This Game of Soccer
          </h2>
          <h3 className="text-white pt-6 pb-3">
            Don't have an account?
            <button className="bg-white text-green-900 font-semibold px-2 py-1 ml-2 rounded-lg hover:bg-green-900 hover:text-white hover:border-2 border-white">
              Sign Up
            </button>
          </h3>
          <h3 className="text-white">
            Already have an account?
            <button className="bg-white text-green-900 font-semibold px-2 py-1 ml-2 rounded-lg hover:bg-green-900 hover:text-white hover:border-2 border-white">
              Log In
            </button>
          </h3>
        </div>
      </section>

      <footer className="text-center bg-green-200 p-3 h-full">
        techlyCoded &copy; 2026
      </footer>
    </>
  );
}

export default App;
