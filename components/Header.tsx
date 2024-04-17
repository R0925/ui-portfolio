"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";

import { navigationLinks } from "@/constants";
import { useState } from "react";
const Header = () => {
  const pathname = usePathname();
  const [active, setActive] = useState(false);

  function manageMenu() {
    setActive((prevValue) => !prevValue);
  }

  return (
    <header>
      <div
        className={` fixed top-[30px] right-[40px] cursor-pointer lg:hidden z-50 group ${
          !active && "is-active"
        }`}
        id="hamburger-1"
        onClick={manageMenu}
      >
        <span className=" w-[50px] h-[5px] bg-black block my-[8px] transition-all duration-300 ease-in-out group-[.is-active]:translate-y-[13px] group-[.is-active]:rotate-[45deg] group-[.is-active]:bg-white"></span>
        <span className="w-[50px] h-[5px] bg-black block my-[8px] transition-all duration-300 ease-in-out group-[.is-active]:opacity-0 group-[.is-active]:bg-white"></span>
        <span className="w-[50px] h-[5px] bg-black block my-[8px] transition-all duration-300 ease-in-out group-[.is-active]:translate-y-[-13px] group-[.is-active]:rotate-[-45deg] group-[.is-active]:bg-white"></span>
      </div>
      <nav
        className={`lg:mt-8 max-lg:fixed max-lg:h-screen top-0 right-0 left-0 bottom-0 z-40 max-lg:bg-black max-lg:flex max-lg:items-center ${active && 'max-lg:hidden'}`}
      >
        <ul
          className={`flex m-auto bg-black text-white lg:relative lg:h-auto lg:flex-row lg:gap-0 lg:rounded-full p-2  flex-col items-center justify-center gap-10`}
        >
          {navigationLinks.map((item) =>
            item.type == "link" ? (
              <li key={item.url} className="flex-none w-32 text-center mx-1 ">
                <a
                  className={`${
                    pathname === item.url && "bg-secondary hover:bg-secondary"
                  } inline-block py-5 px-10  hover:bg-[#ffffff1a] rounded-full transition-colors w-full`}
                  href={item.url}
                >
                  {item.label}
                </a>
              </li>
            ) : (
              <li
                key={item.url}
                className="grow text-center flex items-center justify-center max-lg:hidden"
              >
                <a
                  href={item.url}
                  className="flex justify-center items-center gap-1 font-bold text-xl"
                >
                  <Image
                    src="/images/logo-icon.svg"
                    alt="logo"
                    width={40}
                    height={40}
                  />
                  <span>{item.label}</span>
                </a>
              </li>
            )
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
