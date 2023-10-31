import Image from 'next/image';
import React from 'react';
import logo from '../public/assets/header_logo.png';
const Page = () => {
  return (
    <div className="bg-black min-h-screen relative overflow-x-hidden">
      <Image
        src={logo}
        alt=""
        className="w-full min-w-[800px] block mx-auto absolute"
      />
    </div>
  );
};

export default Page;
