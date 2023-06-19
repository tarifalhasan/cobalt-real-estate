'use client';
import Container from '@/components/Container';
import { Select, Option } from '@material-tailwind/react';
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from '@material-tailwind/react';

import Filter from '@/components/Filter/Filter';
import SearchBar from '@/components/SearchBar/SearchBar';
import AfterLoginNavbar from '@/components/navbar/AfterLoginNavbar';
import sideImage from '@/assets/images/stonedape_Real_estate_agent.png';
import React from 'react';
import Image from 'next/image';
import ListingPreview from '@/components/common/ListingPreview';
import { AllList, RecentlyListingData } from '@/data';

const Listing = () => {
  return (
    <section className=" ">
      <AfterLoginNavbar />
      <div className="bg-[#4D6587] ">
        {/* hero */}
        <Container>
          <div className="hero_content  gap-10 relative pt-24 w-full justify-between flex-col xl:flex-row flex sm:pt-36  ">
            <div className=" sm:basis-[70%]">
              <h4 className=" text-xl md:text-5xl italic">
                BROWSE OUR PROPERTIES
              </h4>
              <div className="py-10">
                <SearchBar />
              </div>
              <div className=" ">
                <Filter />
              </div>
            </div>
            <div>
              <Image src={sideImage} alt="dfd" />
            </div>
          </div>
        </Container>
      </div>
      {/* Result */}
      <Container>
        <div className=" py-8 flex items-center justify-between">
          <h2 className=" text-xl italic font-bold">33 LISTINGS FOUND</h2>
          <div>
            <Menu
              animate={{
                mount: { y: 0 },
                unmount: { y: 25 },
              }}
            >
              <MenuHandler>
                <button className=" text-base font-normal flex items-center gap-2">
                  <span>Most Recent</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>
              </MenuHandler>
              <MenuList>
                <MenuItem>points of interest</MenuItem>
                <MenuItem>biome</MenuItem>
                <MenuItem>server name</MenuItem>
                <MenuItem>listing name</MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>
        {/* Found Listing */}
        <div className=" grid md:grid-cols-2 gap-10 xl:grid-cols-4">
          {AllList.map((data, key) => (
            <ListingPreview
              userName={data.userName}
              image={data.featuresImage}
              key={key}
              trustScore={data.trustScore}
              wipped={data.wipped}
              bunkerBase={data.bunkerBase}
              rusty={data.rusty}
              tags={data.tags}
            />
          ))}
        </div>
        {/* RECENTLY LISTED BASES */}
        <div className="pt-16 pb-16 sm:pb-36">
          <div className=" flex items-center justify-between">
            <h3>RECENTLY LISTED BASES</h3>
            <button className="btn-main uppercase">view more</button>
          </div>
          {/* Recent Listed Data found */}
          <div className=" pt-7 grid md:grid-cols-2 gap-10 xl:grid-cols-4">
            {RecentlyListingData.map((data, key) => (
              <ListingPreview
                userName={data.userName}
                image={data.featuresImage}
                key={key}
                trustScore={data.trustScore}
                wipped={data.wipped}
                bunkerBase={data.bunkerBase}
                rusty={data.rusty}
                tags={data.tags}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Listing;
