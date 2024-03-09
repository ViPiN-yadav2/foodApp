import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import Modal from "../Model";
import Cart from "../screen/Cart";

const Navbar = () => {
  const navigate = useNavigate();
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);
  const [cartView, setCartView] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };
  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Home", to: "/" },
    { id: 2, text: "Signup", to: "/creatuser" },
    { id: 3, text: "Login", to: "/login" },
  ];

  return (
    <div className="bg-black flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      {/* Logo */}
      <h1 className="w-full text-3xl font-bold text-[#00df9a] mr-10">FOo.d.</h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        <li
          key={1}
          className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
        >
          <Link to="/">Home</Link>
        </li>
        {/* {localStorage.getItem("authToken") ? (
          <li
            key={2}
            className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
          >
            <Link to="/">Myorder</Link>
          </li>
        ) : (
          ""
        )} */}
        {!localStorage.getItem("authToken") ? (
          <>
            <li
              key={3}
              className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
            >
              <Link to="/creatuser">singup</Link>
            </li>
            <li
              key={4}
              className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
            >
              <Link to="/login">Login</Link>
            </li>
          </>
        ) : (
          <>
            <li
              key={5}
              className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
            >
              <div onClick={() => setCartView(true)}>Mycart</div>
            </li>
            <li
              key={6}
              className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
            >
              <div onClick={handleLogout}>logout</div>
            </li>
          </>
        )}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Logo */}
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>

        {/* Mobile Navigation Items */}
        <li
          key={1}
          className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
        >
          <Link to="/">Home</Link>
        </li>
        {/* {localStorage.getItem("authToken") ? (
          <li
            key={2}
            className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
          >
            <Link to="/">Myorder</Link>
          </li>
        ) : (
          ""
        )} */}
        {!localStorage.getItem("authToken") ? (
          <>
            <li
              key={3}
              className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
            >
              <Link to="/creatuser">singup</Link>
            </li>
            <li
              key={4}
              className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
            >
              <Link to="/login">Login</Link>
            </li>
          </>
        ) : (
          <>
            <li
              key={5}
              className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
            >
              <div onClick={() => setCartView(true)}>
                Mycart <FaReact style={{ marginRight: "0.5rem" }} />
              </div>
              {cartView ? (
                <Modal onClose={() => setCartView(false)}>
                  <Cart />
                </Modal>
              ) : null}
            </li>
            <li
              key={6}
              className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
            >
              <div>logout</div>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
