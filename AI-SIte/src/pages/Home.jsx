import React from "react";
import { RiHeartFill, RiArrowRightLine } from "@remixicon/react";

function Home() {
  return (
    <>
      <div className="flex justify-center items-center mt-20 text-center ">
        <div className=" mr-5 text-[#ebe9fc] grid space-y-4">
          <h1 className="font-bold text-5xl">Galaxy✨</h1>
          <p className="text-2xl font-bold">Creating Images from Text Prompt</p>
          <p className="text-1xl  ">
            Galaxy✨ is an AI Model that can create <br /> stunning and
            Realistic Images <br /> from text instructions
          </p>

          <button className=" ease-in-out flex    duration-300 bg-[#3a31d8] text-white rounded-3xl px-8 py-3 h-15 w-48 font-bold m-auto hover:bg-[#262453]">
            {" "}
            Join WaitList <RiArrowRightLine />
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
