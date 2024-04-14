import React from "react";
import Image from "next/image";

type BoxProps = {
  type: "post" | "project" | "service";
  image: string;
  title?: string;
  description?: string;
  category?: string;
  authur?: string;
  date?: string;
};

const Box = (props: BoxProps) => {
  const { type, title, image, description, category, authur, date } = props;
  if (type === "service") {
    return (
      <div className='group z-30'>
        <div className='relative box2 w-full h-[500px] z-10 backdrop-blur-md bg-[#dddddd1c] transition-all duration-300 group-hover:bg-yellow-600  peer'>
          <div className='border-2 border-b-0 h-64 w-full rounded-t-[37px] border-gray-400'>
            <h2 className='text-4xl pt-12 pb-8 pl-10 border-b border-gray-400'>
              {title}
            </h2>
          </div>
          <Image
            src={image}
            alt=''
            width={0}
            height={0}
            sizes='100vw'
            className='w-full h-full object-contain mt-[-170px] transition-all duration-300 group-hover:scale-110 '
          />
        </div>
        <button className='absolute bottom-0 right-[-10px] text-4xl z-40 bg-[#1D2939] p-5 rounded-full transition-all duration-300 group-hover:bg-yellow-600'>
          <Image
            className=''
            src='/images/up-right-arrow.svg'
            alt=''
            width={80}
            height={80}
          />
        </button>
      </div>
    );
  }
  if (type === "project") {
    return (
      <div className='relative z-30 h-[400px] flex items-end group text-white '>
        <div className=' absolute w-full h-full z-30 shadow-[inset_7px_-200px_34px_0px_#00000024] rounded-2xl'></div>
        <div className=' group-hover:backdrop-blur-xl transition-all duration-300 group-hover:bg-[#0000004b] group-hover:p-5 w-full m-5 rounded-xl z-40 '>
          <h2 className='text-6xl font-bold pb-5 z-40 translate-y-10 group-hover:translate-y-0 transition-all duration-300'>
            {title}
          </h2>
          <p className=' text-sm invisible group-hover:visible transition-all duration-200'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus
            nunc, posuere in justo vulputate, bibendum sodales
          </p>
        </div>
        <Image
          src={image}
          alt=''
          width={0}
          height={0}
          sizes='100vw'
          className='absolute top-0 w-full h-full object-cover rounded-2xl -z-10'
        />
        <button className='absolute top-[20px] right-[20px] z-40 border-2 border-yellow-600  p-5 rounded-full transition-all duration-300 group-hover:bg-yellow-600'>
          <Image
            className=''
            src='/images/light.svg'
            alt=''
            width={40}
            height={40}
          />
        </button>
      </div>
    );
  }
  if (type === "post") {
    return (
      <div className='group relative z-30 w-[350px] '>
        <div className='relative box2 h-[400px] w-full z-10 peer'>
          <Image
            src={image}
            alt=''
            width={0}
            height={0}
            sizes='100vw'
            className='w-full h-full object-cover '
          />
        </div>
        <button className='absolute mt-[-85px] right-[-4px] text-4xl z-40 bg-[#1D2939] p-5 rounded-full transition-all duration-300 group-hover:bg-yellow-600'>
          <Image
            className=''
            src='/images/up-right-arrow.svg'
            alt=''
            width={50}
            height={50}
          />
        </button>
        <div>
          <span className='text-xl text-black bg-gray-300 px-8 py-3 rounded-full inline-block mt-5'>
            {category}
          </span>
          <div className='flex gap-5 mt-5 text-xl font-light'>
            <li className=' text-red-600'>
              {" "}
              <span className='text-black text-lg inline-block'>{authur}</span>
            </li>
            <li className=' text-red-600'>
              {" "}
              <span className='text-black text-lg inline-block'>{date}</span>
            </li>
          </div>
          <p className='text-2xl font-semibold text-black mt-5'>{description}</p>
        </div>
      </div>
    );
  }
};

export default Box;
