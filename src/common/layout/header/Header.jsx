import React from "react";
import cupicon from "../../../../public/assets/cupicon.png";
function Header() {
  return (
    <>
      <div className="h-[80px] text-white drop-shadow-[0_8px_8px_rgba(0,0,0,0.25)] flex sm:flex flex-col lg:flex-row  lg:justify-between px-3  lg:items-center bg-primary">
        <div className="flex gap-x-3  lg:pl-5 items-center">
          <img src={cupicon} alt="" />
          <div className=" max-w-[10px] space-y-3">
            <h1>Perambra Leage</h1>
          
          </div>
        </div>
        <div className="flex gap-x-3 sm:pl-5 lg:items-center sm:pr-5">
          <h1>Home</h1>
          <h1>Home</h1>
          <h1>Home</h1>
          <h1>Home</h1>
          <h1>Home</h1>
          <h1>Home</h1>
        </div>
      </div>
    </>
  );
}

export default Header;
