import React from "react";
import { BsPersonFill } from "react-icons/bs";

const Player = ({ player }: any) => {
  return (
    <div className="flex items-center ">
      <div
        style={{ backgroundColor: "#383531" }}
        className="w-11 h-11 flex items-end justify-center mr-2"
      >
        <BsPersonFill size="33" color="#BDBDBD" />
      </div>{" "}
      <p className="text-md font-semibold" style={{ color: "#BDBDBD" }}>
        {player}
      </p>
    </div>
  );
};

export default Player;
