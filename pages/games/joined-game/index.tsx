import Link from "next/link";
import React from "react";
import ChessBoard from "../../../components/ChessBoard";
import { SlArrowLeft } from "react-icons/sl";

const index = () => {
  return (
    <div className="flex  items-start justify-between pb-10 mx-auto w-10/12">
      <div className="flex justify-center items-center mt-2 ">
        <SlArrowLeft className="text-white mr-3" size="10" />
        <Link className="font-bold text-white text-sm" href="/games">
          Go Back
        </Link>
      </div>
      <ChessBoard />;
    </div>
  );
};

export default index;
