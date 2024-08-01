import React from "react";

const Navbar = () => {
  return (
    <div className="navbar w-full flex flex-col gap-5">
      <div className="navContent flex flex-col gap-5 sm:flex-row sm:justify-between sm:px-5 ">
        <h1 className="heading text-purple-600 text-lg sm:text-2xl">Editable Add Banners</h1>
        <div className="navLinks flex gap-3 sm:gap-5">
          <a className="border-0" href="https://github.com/tanu-chahal/Editable-Ad-Banners" target="_blank">
            <img
              className="cursor-pointer h-5 sm:h-7 border-0"
              src="/assets/github-icon.svg"
              alt=""
            />
          </a>
          <a className="border-0" href="https://www.linkedin.com/in/tanuchahal" target="_blank">
            <img
              className="cursor-pointer h-5 sm:h-7 border-0"
              src="/assets/linked-in-icon.svg"
              alt=""
            />
          </a>
        </div>
      </div>
      <hr className="w-full h-0.5 bg-purple-600 border-none"/>
    </div>
  );
};

export default Navbar;
