import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import pawn from "../public/assets/pawn.png";

const Navbar = () => {
  const router = useRouter();
  const pathname = router.pathname;
  const pathname1 = "/games/joined-game";
  const pathname2 = "/games/spectate";
  return (
    <div
      style={{
        borderBottom:
          pathname === pathname1 || pathname === pathname2
            ? "1px solid #5B5953"
            : "1px solid #EBEBEB",
      }}
      className="mb-6 box-border  py-6 flex justify-between items-center sm:flex-row flex-col mx-auto w-10/12 "
    >
      <div className="flex justify-start items-center ">
        <p
          className={
            pathname === pathname1 || pathname === pathname2
              ? "text-white text-lg font-bold"
              : "text-black text-lg font-bold"
          }
        >
          CHESS
        </p>
        <Image className="mx-1" width="32" height="32" src={pawn} alt="" />
        <p
          className={
            pathname === pathname1 || pathname === pathname2
              ? "text-white text-lg font-bold"
              : "text-black text-lg font-bold"
          }
        >
          GMAES
        </p>
      </div>
      {pathname === "/" ? (
        <div></div>
      ) : (
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
      )}
    </div>
  );
};

export default Navbar;
