'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import iconNext from '../../../../public/assets/next.svg';
import ButtonWithIcon from '@/components/molecules/ButtonWithIcon/ButtonWithIcon';
const Page = () => {
  return (
    <>
      <section className="max-w-[400px] mx-auto text-center 2xl:absolute">
        <p className="text-base-semibold text-center text-light-1 px-10 mb-4">
          Log in with your Instagram account
        </p>
        <div className="flex flex-col w-full mb-5">
          <form action="">
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
          </form>
        </div>
        <p className="text-[#777777] text-[15px] mb-4">Forgot password?</p>
        <div className="flex items-center text-[#323333] justify-center mb-5">
          <p className="after:content-[''] flex-1 border border-b-0 border-[#323333]"></p>
          <p className="text-center text-[#777777] mx-4">or</p>
          <p className="before:content-[''] flex-1 border border-b-0 border-[#323333]"></p>
        </div>
        <ButtonWithIcon />
      </section>
    </>
  );
};

export default Page;
