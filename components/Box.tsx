import React from "react";
import Image from "next/image";

const Box = () => {
  return (
    <div className="group z-30">
   
      <div className="relative box2 w-full h-[500px] z-10 backdrop-blur-md bg-[#dddddd1c] transition-all duration-300 group-hover:bg-yellow-600  peer">
        <div className="border-2 border-b-0 h-64 w-full rounded-t-[37px] border-gray-400">
          <h2 className="text-4xl pt-12 pb-8 pl-10 border-b border-gray-400">
            Web Design
          </h2>
        </div>
        <Image
          src="/images/service.png"
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full object-contain mt-[-170px] transition-all duration-300 group-hover:scale-110 "
        />
      </div>
      <button className="absolute bottom-0 right-[-10px] text-4xl z-40 bg-[#1D2939] p-5 rounded-full transition-all duration-300 group-hover:bg-yellow-600">
        <Image
          className=""
          src="/images/up-right-arrow.svg"
          alt=""
          width={80}
          height={80}
        />
      </button>
    </div>
  );
};

export default Box;
