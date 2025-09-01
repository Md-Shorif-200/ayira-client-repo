import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { MdClose } from "react-icons/md";

const LogIn = ({ isOpen, setIsOpen, openRegister }) => {
  const { register, handleSubmit, reset } = useForm();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isOpen) setTimeout(() => setShow(true), 10);
    else setShow(false);
  }, [isOpen]);

  if (!isOpen) return null;

  const onSubmit = (data) => {
    console.log("Login Data:", data);
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

        {/* Left Side: Login Form */}
        <div className="w-full lg:w-[60%] p-5 sm:p-10 md:p-16  lg:px-20 lg:py-24">
          <h2 className=" text-xl md:text-2xl lg:text-3xl font-semibold mb-6">
            Login
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <input
                type="text"
                {...register("email", { required: true })}
                className="w-full px-3 py-2 focus:outline-none border border-gray-300 capitalize"
                placeholder="email Address"
              />
            </div>
            <div>
              <input
                type="password"
                {...register("password", { required: true })}
                className="w-full px-3 py-2 focus:outline-none border border-gray-300"
                placeholder="Password"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="px-8 py-2 bg-black text-white hover:bg-[#ffbb42] transition-all"
              >
                Submit
              </button>
              <a href="#" className="text-sm text-black underline">
                Lost your password?
              </a>
            </div>
          </form>

          <div className="mt-10 text-center">
            <p className="text-gray-500 mb-4">Or login with</p>
            <div className="flex  gap-4">
              <button className="flex-1 py-2 px-4 border rounded bg-[#3b5998] text-white hover:bg-[#324b81]">
                Facebook
              </button>
              <button className="flex-1 py-2 px-4 border rounded bg-[#4285F4] text-white hover:bg-[#3574d6]">
                Google
              </button>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-[40%] bg-[#D6D6D6] flex justify-center items-center text-center p-4 lg:p-8">
          <div className="w-full">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-3 text-white">
              Not a member?
            </h2>
            <p className="text-white mb-8">
              To keep connected with us please login with your personal info.
            </p>
            <button
              onClick={() => {
                handleClose();
                openRegister();
              }}
              className="px-8 py-2 bg-black text-white font-semibold hover:bg-white hover:text-black transition-all"
            >
              Create an account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
