"use client";
import Header from "@/components/Header";
import GroupButton from "@/components/GroupButton";
import Image from "next/image";
import { useState } from "react";
import Box from "@/components/Box";
import {
  workExperince,
  services,
  portfolios,
  testimonials,
  skills,
  posts,
} from "@/constants";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import Footer from "@/components/Footer";

export default function Home() {
  const [isWomanHover, seteIsWomanHover] = useState(false);

  function womanHover() {
    seteIsWomanHover(true);
  }
  function womanUnHover() {
    seteIsWomanHover(false);
  }

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  };

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
              <Image src="/images/quote-up.svg" alt="" width={40} height={40} />
              <p className="font-semibold text-lg mt-5">
                Jenny’s Exceptional product design <br /> ensure our website’s
                success. <br /> Highly Recommended
              </p>
            </div>
            <div>
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

          <div className=" relative bg-ellipse bg-no-repeat bg-center flex justify-center items-end h-[410px] -mt-2 ">
            <Image
              onMouseEnter={womanHover}
              onMouseLeave={womanUnHover}
              className=" absolute  bottom-0 z-10 peer"
              src="/images/1x/Asset1.png"
              alt=""
              width={430}
              height={1000}
            />
            <Image
              className=" absolute -top-[250px] ml-[-50px] bottom-0 z-0 transition-all duration-500 opacity-0 peer-hover:scale-125 peer-hover:opacity-100"
              src="/images/happy-bg.svg"
              alt=""
              width={900}
              height={1000}
            />
            <GroupButton />
          </div>
        </section>
      </section>

      <section className=" services relative h-[]  rounded-[50px] py-20 text-white">
        <div className="w-[1244px] m-auto ">
          <div className="flex justify-between">
            <h1 className="text-6xl font-semibold z-10">
              My <span className="text-yellow-600">Services</span>
            </h1>
            <p className="w-1/3 z-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              lacus nunc, posuere in justo vulputate, bibendum sodales
            </p>
          </div>
          <div>
            <Image
              src="/images/bg.jfif"
              className="absolute top-0  left-0 right-0 bottom-0 w-full h-full rounded-[50px]"
              alt=""
              width={0}
              height={0}
              sizes="100vw"
            />
            <div className="w-full h-full absolute top-0  left-0 right-0 bottom-0 bg-[#0000007a] rounded-[50px] "></div>

            <Image
              src="/images/small-element.png"
              className="absolute top-0  left-[30%] z-[1] animate-smallElement"
              alt=""
              width={300}
              height={300}
            />
            <Image
              src="/images/big-element.png"
              className="absolute top-[100px] right-0 z-[1] animate-bigElement"
              alt=""
              width={600}
              height={600}
            />
            <Image
              src="/images/big-element.png"
              className="absolute top-[200px] left-0 z-[1] rotate-180 animate-mediumElement"
              alt=""
              width={400}
              height={400}
            />
          </div>

          <Swiper
            pagination={pagination}
            slidesPerView={3}
            spaceBetween={30}
            modules={[Pagination]}
            className="z-20"
          >
            {services.map((service) => (
              <SwiperSlide>
                <Box
                  type="service"
                  key={service.id}
                  title={service.title}
                  image={service.image}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="w-[1244px] m-auto pt-32">
        <h2 className="text-6xl font-bold text-center">
          My <span className="text-yellow-600">Work Experince</span>
        </h2>
        <div className="mt-20 w-[1244px] m-auto">
          {workExperince.map((item, index) => (
            <div className="flex justify-between min-h-[180px]" key={item.id}>
              <div className="flex-1">
                <h2 className=" text-3xl font-semibold">{item.title}</h2>
                <p className=" text-[15px] text-gray-400 mt-2">{item.date}</p>
              </div>
              <div className="flex-1 flex justify-start items-center gap-1 flex-col">
                {index % 2 ? (
                  <Image
                    className=""
                    src="/images/black-circle.svg"
                    alt=""
                    width={40}
                    height={40}
                  />
                ) : (
                  <Image
                    className=""
                    src="/images/orange-circle.svg"
                    alt=""
                    width={40}
                    height={40}
                  />
                )}
                {index < workExperince.length - 1 && (
                  <Image
                    className=""
                    src="/images/vertical-line.svg"
                    alt=""
                    width={30}
                    height={30}
                  />
                )}
              </div>
              <div className="flex-1">
                <h2 className=" text-3xl font-semibold">{item.role}</h2>
                <p className=" text-sm text-gray-400 mt-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F2F4F7] py-36 rounded-[50px]">
        <div className="flex justify-center gap-10 w-[1244px] m-auto">
          <div className="relative z-0">
            <Image
              src="/images/hire-me.png"
              className=" z-10 hover:translate-y-[10px] transition-all duration-200 peer"
              alt=""
              width={400}
              height={400}
            />
            <Image
              src="/images/Property.svg"
              className=" absolute top-[-50px] -z-10 opacity-0 peer-hover:opacity-100 transition-all duration-300"
              alt=""
              width={600}
              height={600}
            />
          </div>
          <div className="flex flex-col justify-center gap-10">
            <h2 className="text-6xl font-bold">
              Why <span className="text-yellow-600">Hire me</span>?
            </h2>
            <p className="text-[15px] text-gray-400 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              <br />
              lacus nunc, posuere in justo vulputate, bibendum sodales
            </p>
            <div className="flex justify-between">
              <div>
                <p className="text-3xl font-semibold"> 450+</p>
                <p className=" text-gray-400">Project Completed</p>
              </div>
              <div>
                <p className="text-3xl font-semibold"> 450+</p>
                <p className=" text-gray-400">Project Completed</p>
              </div>
            </div>
            <div>
              <button className="font-semibold text-3xl px-8 py-6 border border-black rounded-3xl transition-colors duration-300 hover:text-white hover:bg-black">
                Hire me
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className=" portolio w-[1244px] m-auto py-20">
        <div className="flex justify-between items-center">
          <h2 className="text-6xl font-bold">
            Lets have a look at <br /> my
            <span className=" text-yellow-600"> Portfolio</span>
          </h2>
          <a
            className=" inline-block py-2 px-5 bg-yellow-600 text-white rounded-full"
            href=""
          >
            See All
          </a>
        </div>

        <Swiper
          pagination={pagination}
          slidesPerView={2}
          spaceBetween={30}
          modules={[Pagination]}
          className="z-20"
        >
          {portfolios.map((portfolio) => (
            <SwiperSlide>
              <Box
                type="project"
                key={portfolio.id}
                title={portfolio.title}
                image={portfolio.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="relative">
        <Image
          src="/images/bg.jfif"
          className="absolute top-0 left-0 right-0 bottom-0 w-full h-full rounded-[50px] -z-10"
          alt=""
          width={0}
          height={0}
          sizes="100vw"
        />
        <div className="w-full h-full absolute top-0  left-0 right-0 bottom-0 bg-[#0000007a] rounded-[50px] -z-10"></div>
        <div className=" z-40 pt-36">
          <h2 className="text-6xl font-semibold text-white text-center">
            Testimonials That <br />
            Speak to <span className="text-yellow-600">My Results</span>
          </h2>
          <div className="relative w-1/2 m-auto mt-6">
            <p className="text-white text-lg text-center ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              congue interdum ligula a dignissim. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed lobortis orci elementum egestas
              lobortis.
            </p>
            <Image
              src="/images/star-2.svg"
              className="  w-[40px] h-[40px] inline-block absolute right-0 top-[-50px]"
              alt=""
              width={40}
              height={40}
            />
            <Image
              src="/images/star-2.svg"
              className="  w-[40px] h-[40px] inline-block absolute left-0 bottom-[-50px]"
              alt=""
              width={40}
              height={40}
            />
          </div>

          <Swiper
            centeredSlides={true}
            loop={true}
            slidesPerView={2}
            spaceBetween={30}
            modules={[]}
            className="z-20"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide>
                <div className="bg-[#5e5e5e7e] relative text-white h-[300px] rounded-3xl p-7">
                  <Image
                    src="/images/quote-down.png"
                    className="  w-[130px] h-[130px] inline-block absolute right-2 top-0"
                    alt=""
                    width={130}
                    height={130}
                  />
                  <div className="flex items-center gap-4 mb-3">
                    <Image
                      src={testimonial.image}
                      className=" rounded-full object-cover w-[60px] h-[60px] "
                      alt=""
                      width={60}
                      height={60}
                    />
                    <div>
                      <h5 className="text-xl font-bold ">{testimonial.name}</h5>
                      <span className=" text-gray-400">
                        {testimonial.role} , {testimonial.company}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    {Array.from(Array(testimonial.stars), (e, i) => {
                      return (
                        <Image
                          src="/images/star.svg"
                          className=" rounded-full object-cover w-[30px] h-[30px] inline-block "
                          alt=""
                          width={30}
                          height={30}
                        />
                      );
                    })}
                    {/* <span className="text-2xl ml-2">{testimonial.stars}</span> */}
                  </div>
                  <p className="mt-8">{testimonial.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section>
        <h2 className="text-6xl font-bold text-center mt-[80px]">
          Have an Awsome Project <br /> Idea?{" "}
          <span className="text-yellow-600">Let’s Discuss</span>
        </h2>
        <div className="w-[700px] m-auto mt-10">
          <div className="flex justify-between items-center gap-3 border border-gray-300 rounded-full w-full h-[60px]  p-2 ">
            <div className="bg-orange-200 py-2 px-3 rounded-full flex items-center justify-center">
              <Image
                src="/images/sms.svg"
                className=""
                alt=""
                width={40}
                height={40}
              />
            </div>
            <input type="text" className="outline-none w-full" />
            <button className=" py-3 px-5 bg-yellow-600 text-white rounded-full">
              Send
            </button>
          </div>
          <div className="flex justify-between mt-3">
            <div className="flex items-center gap-1">
              <Image
                src="/images/star-3.svg"
                className=""
                alt=""
                width={25}
                height={25}
              />
              <span className="font-semibold text-sm">
                4.9/5 Average Ratings
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Image
                src="/images/award.svg"
                className=""
                alt=""
                width={25}
                height={25}
              />
              <span className="font-semibold text-sm">
                4.9/5 Average Ratings
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Image
                src="/images/shield-tick.svg"
                className=""
                alt=""
                width={25}
                height={25}
              />
              <span className="font-semibold text-sm">
                4.9/5 Average Ratings
              </span>
            </div>
          </div>
        </div>

        <div className="bg-orange-500 mt-16 h-[165px] flex items-center rounded-tl-3xl rounded-br-3xl">
          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%) -rotate-3 bg-white py-2 ">
            <ul className="flex items-center justify-between [&_li]:w-[300px] animate-infinite-scroll">
              {skills.map((item) => (
                <li className="flex justify-around items-center">
                  <Image
                    src="/images/star-4.svg"
                    className="inline-block"
                    alt=""
                    width={50}
                    height={50}
                  />
                  <h3 className="text-4xl font-semibold">{item.name}</h3>
                </li>
              ))}
            </ul>
            <ul
              className="flex items-center justify-between [&_li]:w-[300px] animate-infinite-scroll"
              aria-hidden="true"
            >
              {skills.map((item) => (
                <li className="flex justify-around items-center">
                  <Image
                    src="/images/star-4.svg"
                    className="inline-block"
                    alt=""
                    width={50}
                    height={50}
                  />
                  <h3 className="text-4xl font-semibold">{item.name}</h3>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="w-[1244px] m-auto mt-20 mb-10">
        <div className="flex justify-between items-center">
          <h2 className="text-6xl font-bold">
            From my <br /> blog post
          </h2>
          <a
            className=" inline-block py-2 px-5 bg-yellow-600 text-white rounded-full"
            href=""
          >
            See All
          </a>
        </div>
        <div className="flex justify-between mt-20">
          {posts.map((post) => (
            <Box
              key={post.id}
              image={post.image}
              type="post"
              authur={post.author}
              category={post.tag}
              date={post.date}
              description={post.description}
            />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
