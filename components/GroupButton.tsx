import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const GroupButton = () => {
  const [isHover, seteIsHover] = useState(false);

  function hireBtnHover() {
    seteIsHover(true);
  }
  function hireBtnUnHover() {
    seteIsHover(false);
  }

  return (
    <div className="w-[350px] h-[80px] backdrop-blur-lg border-2 border-[#ffffff56] rounded-full mb-10 p-2 flex justify-between z-20">
      <a
        href=""
        className={`${
          isHover ? "ml-[30px]" : "bg-secondary px-8 "
        }  transition-all duration-300 inline-block h-full py-[14px] text-2xl text-white rounded-full`}
      >
        Portfolio
        <Image
          className={`${isHover ? "hidden" : "inline-block"}`}
          src="/images/up-right-arrow.svg"
          alt=""
          width={40}
          height={40}
        />
      </a>
      <a
        onMouseEnter={hireBtnHover}
        onMouseLeave={hireBtnUnHover}
        href=""
        className=" inline-block h-full py-[14px] pl-5 text-2xl text-white rounded-full hover:bg-secondary hover:px-8 transition-all duration-300 mr-[30px] hover:mr-0"
      >
        Hire me
        <Image
          className={`${isHover ? "inline-block" : "hidden"}`}
          src="/images/up-right-arrow.svg"
          alt=""
          width={40}
          height={40}
        />
      </a>
    </div>
  );
};

export default GroupButton;
