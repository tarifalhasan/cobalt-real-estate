'use client';
import HowItWork from '@/components/HOW_IT_WORKS/HowItWork';
import Hero from '@/components/Hero/Hero';

import Image from 'next/image';
import assets1 from '@/assets/images/Asset1.png';

import RecentListedBase from '@/components/RECENT LYLISTED BASES/RecentListedBase';
import LoginNavbar from '@/components/navbar/LoginNavbar';

export default function Home() {
  return (
    <div className=" ">
      <LoginNavbar />
      <div className=" pt-9">
        <Hero />
        <HowItWork />

        <div className=" relative py-8 ">
          <Image className=" ml-[50%] md:ml-[65%]" src={assets1} alt="assets" />
        </div>
        <RecentListedBase />
      </div>
    </div>
  );
}
