import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode"; // Correct import

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userInitial, setUserInitial] = useState(null);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      try {
        const decoded = jwtDecode(token); // Correct usage
        if (decoded.name) {
          setUserInitial(decoded.name.charAt(0).toUpperCase());
        }
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section>
      <nav className="flex items-center justify-between flex-wrap bg-white-900 p-4">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img
            src="/img/logo.png"
            alt="GoRide Rentals Logo"
            className="h-10 w-10 w-auto rounded-[36px] mr-2"
          />
          <span className="font-semibold text-xl tracking-tight ml-2">
            GoRide Rentals
          </span>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="flex items-center px-3 py-2 border rounded text-gray-300 border-gray-300 hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full ${
            isOpen ? "block" : "hidden"
          } lg:flex lg:items-center lg:w-auto`}
        >
          <div className="text-sm text-lg lg:flex-grow ">
            <Link
              to="/"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-[55px]"
            >
              Home
            </Link>
            <Link
              to="/cars"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-[55px]"
            >
              Cars
            </Link>
            <Link
              to="/about"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-[55px]"
            >
              About
            </Link>
            <Link
              to="/services"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-[55px]"
            >
              Services
            </Link>

            {userInitial ? (
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full text-lg font-semibold">
                  {userInitial}
                </div>
              </div>
            ) : (
              <Link
                to="/register"
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-[55px]"
              >
                SignIn
              </Link>
            )}
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Header;
