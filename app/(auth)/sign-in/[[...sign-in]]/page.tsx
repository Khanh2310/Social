import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import iconInstagram from '../../../../public/assets/icons8-instagram-96.svg';
import iconNext from '../../../../public/assets/next.svg';
const Page = () => {
  return (
    <>
      <section className="max-w-[400px] mx-auto text-center 2xl:absolute">
        <p className="text-base-semibold text-center text-light-1 px-10 mb-4">
          Log in with your Instagram account
        </p>
        <div className="flex flex-col w-full mb-5">
          <Input
            name="email"
            placeholder="Username, phone or email"
            className="authen-login_input"
          />
          <Input
            name="Password"
            placeholder="Password"
            className="authen-login_input"
          />
          <Button asChild className="w-full bg-white py-6 ">
            <Link href="/login" className="text-[#9f9f9f]">
              Log in
            </Link>
          </Button>
        </div>
        <p className="text-[#777777] text-[15px] mb-4">Forgot password?</p>
        <div className="flex items-center text-[#323333] justify-center mb-5">
          <p className="after:content-[''] flex-1 border border-b-0 border-[#323333]"></p>
          <p className="text-center text-[#777777] mx-4">or</p>
          <p className="before:content-[''] flex-1 border border-b-0 border-[#323333]"></p>
        </div>

        <div className="flex items-center justify-between border border-[#323333] rounded-2xl p-3">
          <Image
            src={iconInstagram}
            width={60}
            height={60}
            alt="icon_instagram"
          />
          <p className="text-base-semibold text-center text-light-1 ">
            Continue with Instagram
          </p>
          <span className="text-[#777777]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
        </div>
      </section>
    </>
  );
};

export default Page;
