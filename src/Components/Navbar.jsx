import React from "react";
import Buttons from "./Buttons";

const Navbar = () => {
  return (
    <div className="max-w-screen-xl p-5  mx-auto text-white border-b-[.7px] border-zinc-700">
      <div className="flex items-center justify-between">
        <div className=" flex items-center gap-20 text-sm">
          <div className="flex gap-3">
            <img
              className="w-[19px] "
              src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/6669a1a4bcfb20e56e7cdd97_refokus_keyvisual_purple_animation_alpha_2800x1680_00.webp"
              alt=""
            />
            <h1>Refocus</h1>
          </div>
          <a href="#">Home</a>
          <a href="#">Work</a>
          <a href="#">Culture</a>
          <div className="w-[2px] h-[15px] bg-white"></div>
          <h3>News</h3>
        </div>
        <Buttons />
      </div>
    </div>
  );
};

export default Navbar;
