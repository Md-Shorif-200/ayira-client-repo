import React, { useState } from "react";
import LogIn from "../Authentication/LogIn";
import Register from "../Authentication/Register";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const handleLoginOpen = () => {
    setIsLoginOpen(true);
    setIsRegisterOpen(false);
  };

  const handleRegisterOpen = () => {
    setIsRegisterOpen(true);
    setIsLoginOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">MyApp</a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1  flex ">
            <li>
              <Link to="/product-compare"> compare </Link>
            </li>
            <li>
              <Link to="/blog"> blog </Link>
            </li>
            <li>
              <Link to="/colours"> colours </Link>
            </li>
            <li>
              <Link to="/resource"> resource </Link>
            </li>
            <li>
              <Link to="/admin/all-products"> all Products </Link>
            </li>
            <li>
              <Link to="admin/add-products">add  product </Link>
            </li>
            <li>
              <Link to="admin/product-management">add  product </Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <button
            onClick={handleLoginOpen}
            className="btn bg-blue-600 text-white hover:bg-blue-700"
          >
            Log In
          </button>
        </div>
      </div>

      {/* Modals */}
      <LogIn
        isOpen={isLoginOpen}
        setIsOpen={setIsLoginOpen}
        openRegister={handleRegisterOpen}
      />
      <Register
        isOpen={isRegisterOpen}
        setIsOpen={setIsRegisterOpen}
        openLogin={handleLoginOpen}
      />
    </>
  );
};

export default Navbar;
