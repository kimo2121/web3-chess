import Image from "next/image";
import React from "react";
import pawn from "../public/assets/pawn.png";
const Navbar = () => {
  return (
    <div className="box-border px-24 py-12 flex justify-between items-center sm:flex-row flex-col">
      <div className="flex justify-start items-center ">
        <p className="text-lg font-bold">CHESS</p>
        <Image className="mx-1" width="32" height="32" src={pawn} alt="" />
        <p className="text-lg font-bold">GMAES</p>
      </div>
      <div className="sm:mt-0 mt-5">
        <button
          style={{ backgroundColor: "#438FFE" }}
          className="font-semibold text-sm text-white sm:h-12 sm:w-20 rounded-tl rounded-bl h-8 w-16"
        >
          0.04 ETH
        </button>
        <button className="font-semibold text-sm text-black bg-white sm:h-12 sm:w-44 h-8 w-24 rounded-tr rounded-br">
          0xa41...91214
        </button>
      </div>
    </div>
  );
};

export default Navbar;
