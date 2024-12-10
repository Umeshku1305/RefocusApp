import React from "react";
import { BsArrowReturnRight } from "react-icons/bs";

const Buttons = () => {
  return (
    <div>
      <div className="min-w-40 px-3 py-2 bg-zinc-400 rounded-full flex items-center justify-between gap-5 ">
        <span className="font-medium text-sm">Get Started</span>
        <BsArrowReturnRight />
      </div>
    </div>
  );
};

export default Buttons;
