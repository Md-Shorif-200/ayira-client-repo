import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { MdClose } from "react-icons/md";

const Register = ({ isOpen, setIsOpen, openLogin }) => {
  const { register, handleSubmit, reset } = useForm();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isOpen) setTimeout(() => setShow(true), 10);
    else setShow(false);
  }, [isOpen]);

  if (!isOpen) return null;

  const onSubmit = (data) => {
    console.log("Register Data:", data);
    reset();
    handleClose();
  };

  const handleClose = () => {
    setShow(false);
    setTimeout(() => setIsOpen(false), 300);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 pt-4 xl:pt-16">
      <div
        className={`bg-white shadow-xl w-[90%] sm:w-[80%] mx-auto lg:w-full max-w-3xl lg:flex overflow-hidden transition-all duration-300 ease-in-out 
        max-h-[95vh] overflow-y-auto 
        ${show ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-2xl lg:text-3xl text-black z-10"
        >
          <MdClose />
        </button>

        {/* Left Side */}
        <div className="w-full lg:w-[40%] bg-[#D6D6D6] flex justify-center items-center text-center p-4 lg:p-8">
          <div className="w-full">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-3 text-white">
              Welcome Back!
            </h2>
            <p className="text-white mb-8">
              To keep connected with us please login with your personal info.
            </p>
            <button
              onClick={() => {
                handleClose();
                openLogin();
              }}
              className="px-8 py-2 bg-black text-white font-semibold hover:bg-white hover:text-black transition-all"
            >
              Log In
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-[60%] p-5 sm:p-10 md:p-16 lg:px-20 lg:py-16">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 capitalize">
            Create an account
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <input
                type="text"
                {...register("username", { required: true })}
                className="w-full px-3 py-2 border border-gray-300 capitalize focus:outline-none"
                placeholder="User name"
              />
            </div>

            <div>
              <input
                type="text"
                {...register("email", { required: true })}
                className="w-full px-3 py-2 border border-gray-300 capitalize focus:outline-none"
                placeholder="Email Address"
              />
            </div>

            <div>
              <input
                type="password"
                {...register("password", { required: true })}
                className="w-full px-3 py-2 border border-gray-300 focus:outline-none"
                placeholder="Password"
              />
            </div>

            <p className="text-black my-2 text-[14px] font-light">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our{" "}
              <span className="underline">privacy policy</span>.
            </p>

            <div className="flex items-center justify-between mt-6">
              <button
                type="submit"
                className="px-8 py-2 bg-black text-white hover:bg-[#ffbb42] transition-all"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
