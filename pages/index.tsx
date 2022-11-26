import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-5xl font-bold">Welcome to Chess Games</h1>
      <small className="font-normal text-gray-700/[.8]  text-current text-xs mt-1.5">
        Sign in with your wallet to be able to authenticate and play games
      </small>
      <div className="mt-16 flex flex-col">
        <button
          style={{ backgroundColor: "#438FFE", borderRadius: "30px" }}
          className="text-white h-16 py-4  font-semibold  w-96 text-lg"
        >
          Sign in with metamask
        </button>
        <button
          style={{
            backgroundColor: "transparent",
            border: "1px solid gray",
            borderRadius: "30px",
          }}
          className="h-16  py-4  font-semibold mt-6 text-lg"
        >
          Sign in with Coinbase Wallet
        </button>
      </div>
      <p className="mt-9 font-semibold underline text-lg">Show more options</p>
    </div>
  );
};

export default Home;
