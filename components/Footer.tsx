"use client";
import Image from "next/image";
import { footer } from "@/constants";
const Footer = () => {
  return (
    <footer className="bg-[#272727] text-white pt-20 rounded-t-3xl">
      <article className="w-[1244px] m-auto">
        <div className="flex justify-between items-center border-b pb-16">
          <h1 className="text-7xl font-bold">Lets Connect there</h1>
          <a
            className=" inline-block py-2 px-5 bg-secondary text-white rounded-full"
            href=""
          >
            Hire me
            <Image
              className="inline-block"
              src="/images/up-right-arrow.svg"
              alt=""
              width={30}
              height={30}
            />
          </a>
        </div>
        <div className="flex border-b">
          <div className=" w-1/2 mt-10">
            <h3>
              <a
                href="/"
                className="flex mb-10 items-center gap-1 font-bold text-xl"
              >
                <Image
                  src="/images/logo-icon.svg"
                  alt="logo"
                  width={40}
                  height={40}
                />
                <span>JCREA</span>
              </a>
            </h3>
            <p className="leading-8 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              congue interdum ligula a dignissim. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed lobortis orci elementum egestas
              lobortis.
            </p>
          </div>
          <div className="flex-1 mt-10">
            <h4 className="text-xl font-bold text-secondary">Navigation</h4>
            <ul>
              {footer.map((item) => (
                <li key={item.id} className="my-5">
                  <a
                    href=""
                    className="hover:text-secondary transition-colors"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 mt-10">
            <h4 className="text-xl font-bold text-secondary">Contact</h4>
            <ul>
              <li className="my-5"> +91 7738443636 </li>
              <li className="my-5">Jaycrea36@gmail.com</li>
              <li className="my-5">Portfolio-jcrea.com</li>
            </ul>
          </div>
          <div className="flex-1 mt-10">
            <h4 className="text-xl font-bold text-secondary">
              Get the latest information
            </h4>
            <div className="flex items-center w-full mt-10">
              <input type="text" placeholder="Enter Adress" className="h-10 text-black px-2 outline-none rounded-tl-xl rounded-bl-xl" />
              <button className=" w-12 h-10 flex items-center justify-center bg-secondary text-white rounded-tr-xl rounded-br-xl">
                <Image
                  src="/images/Subtract.svg"
                  alt=""
                  width={20}
                  height={20}
                />
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-10 pb-5">
            <h6>Copyright© 2023 Jayesh. All Rights Reserved.</h6>
            <h6>User Terms & Conditions | Privacy Policy</h6>
        </div>
      </article>
    </footer>
  );
};  

export default Footer;
