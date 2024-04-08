"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";

import { navigationLinks } from "@/constants";
const Header = () => {
  const pathname = usePathname();

  return (
    <nav className="mt-8">
      <ul className="flex  m-auto bg-gray-800 text-white rounded-full p-2">
        {navigationLinks.map((item) =>
          item.type == "link" ? (
            <li key={item.url} className="flex-none w-32 text-center mx-1 ">
              <a
                className={`${
                  pathname === item.url && "bg-yellow-600"
                } inline-block py-5 px-10  hover:bg-gray-700 rounded-full transition-colors w-full`}
                href={item.url}
              >
                {item.label}
              </a>
            </li>
          ) : (
            <li key={item.url} className="grow text-center flex items-center justify-center">
              <a href={item.url} className="flex justify-center items-center gap-1 font-bold text-xl">
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
  );
};

export default Header;
