"use client";
import Header from "@/components/Header";
import GroupButton from "@/components/GroupButton";
import Image from "next/image";
import { useState } from "react";
import Box from "@/components/Box";
import ServicesSlider from "@/components/ServicesSlider";

export default function Home() {
  const [isWomanHover, seteIsWomanHover] = useState(false);

  function womanHover() {
    seteIsWomanHover(true);
  }
  function womanUnHover() {
    seteIsWomanHover(false);
  }

  return (
    <main>
      <section className="w-[1244px] m-auto  px-5">
        <Header />

        <section className=" mt-20">
          <div
            className={`transition-all  duration-500 ${
              isWomanHover && "translate-y-[300px] opacity-0"
            }`}
          >
            <div className="relative border border-black font-bold rounded-full px-7 py-2 m-auto w-24">
              Hello
              <Image
                className="absolute top-[-20px] right-[-22px]"
                src="/images/text-effect-1.png"
                alt=""
                width={30}
                height={30}
              />
            </div>
            <h1 className="relative text-8xl font-semibold max-w-[800px] m-auto text-center">
              I’m <span className="text-yellow-600">Jenny</span>,<br />
              Product Designer
              <Image
                className="absolute bottom-[-60px] left-[-35px]"
                src="/images/text-effect-2.png"
                alt=""
                width={80}
                height={80}
              />
            </h1>
          </div>

          <div
            className={`${
              isWomanHover && "-translate-y-[200px]"
            } transition-all duration-500 flex justify-between mt-10  `}
          >
            <div>
              <Image
                className=""
                src="/images/quote-up.svg"
                alt=""
                width={40}
                height={40}
              />
              <p className="font-semibold text-lg mt-5">
                Jenny’s Exceptional product design <br /> ensure our website’s
                success. <br /> Highly Recommended
              </p>
            </div>
            <div className="">
              <div className="flex justify-center">
                <Image
                  className=""
                  src="/images/Star.svg"
                  alt=""
                  width={30}
                  height={30}
                />
                <Image
                  className=""
                  src="/images/Star.svg"
                  alt=""
                  width={30}
                  height={30}
                />
                <Image
                  className=""
                  src="/images/Star.svg"
                  alt=""
                  width={30}
                  height={30}
                />
                <Image
                  className=""
                  src="/images/Star.svg"
                  alt=""
                  width={30}
                  height={30}
                />
                <Image
                  className=""
                  src="/images/Star.svg"
                  alt=""
                  width={30}
                  height={30}
                />
              </div>
              <div className=" flex flex-col items-end mt-3">
                <h3 className="text-5xl font-semibold"> 10 Years</h3>
                <p className="text-lg font-semibold">Experince</p>
              </div>
            </div>
          </div>

          <div
            onMouseEnter={womanHover}
            onMouseLeave={womanUnHover}
            className=" relative bg-ellipse bg-no-repeat bg-center flex justify-center items-end h-[410px] -mt-2 group"
          >
            <Image
              className=" absolute  bottom-0 z-10"
              src="/images/woman.png"
              alt=""
              width={1000}
              height={1000}
            />
            <Image
              className=" absolute -top-[350px] bottom-0 z-0 transition-all duration-500 opacity-0 group-hover:scale-125 group-hover:opacity-100"
              src="/images/happy-bg.svg"
              alt=""
              width={1000}
              height={1000}
            />
            <GroupButton />
          </div>
        </section>
      </section>

      <section className=" relative h-[]  rounded-[50px] py-20 text-white">

        <div className="w-[1244px] m-auto ">
          <div className="flex justify-between">
            <h1 className="text-6xl font-semibold ">
              My <span className="text-yellow-600">Services</span>
            </h1>
            <p className="w-1/3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              lacus nunc, posuere in justo vulputate, bibendum sodales
            </p>
          </div>
          <Image src="/images/bg.jfif" className="absolute top-0  left-0 right-0 bottom-0 w-full h-full rounded-[50px]" alt="" width={0} height={0} sizes="100vw" />
          <div className="w-full h-full absolute top-0  left-0 right-0 bottom-0 bg-[#0000007a] rounded-[50px] "></div>


          <Image src="/images/small-element.png" className="absolute top-0  left-[30%] z-[1] animate-smallElement" alt="" width={300} height={300} />
          <Image src="/images/big-element.png" className="absolute top-0 right-0 z-[1] animate-bigElement" alt="" width={600} height={600} />
          <Image src="/images/big-element.png" className="absolute top-[200px] left-0 z-[1] rotate-180 animate-mediumElement" alt="" width={400} height={400} />

          <ServicesSlider />
        </div>
      </section>

      <section className="w-[1244px] m-auto pt-32">
        <h2 className="text-6xl font-bold text-center"> My <span className="text-yellow-600">Work Experince</span></h2>
      </section>
    </main>
  );
}
