'use client';
import Container from '@/components/Container';
import AfterLoginNavbar from '@/components/navbar/AfterLoginNavbar';

import React from 'react';
import Image from 'next/image';
import image1 from '@/assets/images/image2.png';

import smallImage from '@/assets/images/9.png';

import SimilarListings from '@/components/SIMILAR LISTINGS/SimilarListings';
import ProfileImage from '@/assets/profile.png';
import { DaysIcon, DeathLine, SNOW } from '@/components/svg';
import assets from '@/assets/images/Asset1.png';
import assets1 from '@/assets/images/Asset 3 .png';
import Reviews from '@/components/Review/Review';

const Page3 = () => {
  return (
    <Container>
      {/* navbar */}
      <AfterLoginNavbar />
      <div className=" pt-36 gap-10 grid sm:grid-cols-2 ">
        <div>
          <div className="">
            <Image
              src={image1}
              alt="sdsdsds"
              className=" sm:max-w-[780px] h-[493px] w-full rounded-2xl"
            />
          </div>
          <div className=" py-7 gap-4 grid grid-cols-4">
            <div>
              <Image
                className="w-full h-full max-h-[142px] rounded-2xl"
                src={smallImage}
                alt="small s"
              />
            </div>
            <div>
              <Image
                className="w-full h-full max-h-[142px] rounded-2xl"
                src={smallImage}
                alt="small s"
              />
            </div>
            <div>
              <Image
                className="w-full h-full max-h-[142px] rounded-2xl"
                src={smallImage}
                alt="small s"
              />
            </div>
            <div>
              <Image
                className="w-full h-full max-h-[142px] rounded-2xl"
                src={smallImage}
                alt="small s"
              />
            </div>
          </div>
          {/* Reviews */}
          <Reviews />
        </div>

        {/* CHAD STYLE TRIO BUNKER BASE */}
        <div>
          <div className=" pb-6 flex items-center justify-between">
            <h3 className=" font-bold italic">CHAD STYLE TRIO BUNKER BASE</h3>
            <h3 className=" font-bold italic text-green">34.99$</h3>
          </div>
          <div className="chad  space-y-4 ">
            <div className="border-b   py-5 border-dark-70">
              <div className=" w-full px-4  flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Image
                    className=" w-9 h-9 rounded-full"
                    src={ProfileImage}
                    alt="profile_image"
                  />
                  <span className=" text-base uppercase">SWELLGUY34</span>
                </div>
                <h5 className=" text-base font-semibold uppercase">
                  <span className=" text-green">95% </span>TRUST{' '}
                  <span className=" opacity-50">(37 REVIEWS)</span>
                </h5>
              </div>
            </div>
            <ul className=" flex px-4   pb-5 items-center gap-3">
              <li className=" flex gap-2 items-center">
                <DaysIcon />
                <span className=" text-base">RUSTY MOOSE |EU| MINI</span>
              </li>
              <li className=" flex gap-2 items-center">
                <DeathLine />

                <span className=" text-base">LAST WIPED 34HRS AGO</span>
              </li>
              <li className=" flex gap-2 items-center">
                <SNOW />

                <span className=" text-base">SNOW</span>
              </li>
            </ul>
            {/* NEARBY POINTS OF INTEREST */}
            <div className=" px-4">
              <p className=" text-base font-bold">NEARBY POINTS OF INTEREST</p>
              <ul className=" flex py-3 items-center gap-2">
                <li>
                  <button className=" rounded-lg text-sm uppercase bg-primary px-3 py-1">
                    demo
                  </button>
                </li>
                <li>
                  <button className=" rounded-lg text-sm uppercase bg-primary px-3 py-1">
                    demo
                  </button>
                </li>
                <li>
                  <button className=" rounded-lg text-sm uppercase bg-primary px-3 py-1">
                    demo
                  </button>
                </li>
                <li>
                  <button className=" rounded-lg text-sm uppercase bg-primary px-3 py-1">
                    RIVER
                  </button>
                </li>
              </ul>
            </div>
            {/*INCLUDED ITEMS*/}
            <div className=" px-4">
              <p className=" text-base font-bold">INCLUDED ITEMS</p>
              <ul className=" flex py-3 items-center gap-2">
                <li>
                  <button className=" rounded-lg text-xs sm:text-sm uppercase bg-primary px-3 py-1">
                    500 SCRAP
                  </button>
                </li>
                <li>
                  <button className=" rounded-lg text-xs sm:text-sm uppercase bg-primary px-3 py-1">
                    WORKBENCH LEVEL 3
                  </button>
                </li>
                <li>
                  <button className=" rounded-lg text-xs sm:text-sm uppercase bg-primary px-3 py-1">
                    5000 WOOD
                  </button>
                </li>
              </ul>
            </div>
            {/* DESCRIPTION */}
            <div className=" pb-5 ">
              <div className="px-4">
                <p className=" text-base font-bold">DESCRIPTION</p>
                <p className=" text-base font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  efficitur elementum ligula, eu lacinia quam tempor vitae.
                  Maecenas lectus nisi, ultrices nec nibh nec, porta tincidunt
                  ex.
                </p>
              </div>
            </div>
            {/* PURCHASE */}
            <div className=" border-t border-dark-70 bg-light-dark ">
              <div className=" px-4 py-7 gap-5 flex flex-col sm:flex-row items-center">
                <p className="  text-center sm:text-left text-base uppercase font-normal">
                  Purchase to unlock base location and codes. Blah black, safety
                  guaranteed, view our TOS.
                </p>
                <div>
                  <button className=" bg-[#689F38] text-base uppercase px-7 py-2.5 rounded-2xl">
                    PURCHASE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Image className=" ml-[50%] sm:ml-[70%]" src={assets} alt="assets" />
      </div>
      {/* SIMILAR LISTINGS */}
      <SimilarListings />
      <div className=" flex justify-end pb-11 sm:pb-32">
        <Image src={assets1} alt="assets" />
      </div>
    </Container>
  );
};

export default Page3;
