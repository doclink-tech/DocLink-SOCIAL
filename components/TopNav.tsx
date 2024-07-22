
import React from "react";
import { AiFillMessage } from "react-icons/ai";

const TopNav = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center top-0 sticky z-10">
      <div className=" font-bold text-xl">MU</div>
      <div className="flex space-x-4">
        <span className="text-gray-600 font-medium">TOP</span>
        <span className="text-gray-600 font-medium">HOT</span>
        <span className="text-blue-600 font-semibold ">NEW</span>
      </div>
      <AiFillMessage className="h-6 w-6" />
    </nav>
  );
};

export default TopNav;
