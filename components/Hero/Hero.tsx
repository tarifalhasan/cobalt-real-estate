import React from 'react';
import Container from '../Container';
import Image from 'next/image';
import heroImage from '@/assets/images/hero.png';
import assets from '@/assets/images/Asset.png';
const Hero = () => {
  return (
    <Container>
      <section className="">
        <div className="  gap-y-10  mx-auto flex  py-24 sm:py-36 md:flex-row flex-col items-center">
          <div className="lg:flex-grow order-last  sm:order-first md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className=" italic  leading-[1.5] lg:leading-[92px] text-3xl lg:text-6xl  mb-4 font-medium ">
              JUMPSTART YOUR RUST
              <br className="hidden lg:inline-block" />
              SNOWBALL
            </h1>
            <p className="mb-8 leading-relaxed">
              Buy fully loaded bases. Save time. Control the server.
            </p>
            <div className="flex justify-center items-center">
              <button className="btn-primary">BROWSE BASES</button>
              <button className="ml-4  inline-flex text-xs lg:text-base font-semibold lg:font-bold">
                CREATE A LISTING
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src={heroImage}
            />
          </div>
        </div>
        <div className="   pb-24  ml-[20%]">
          <Image src={assets} alt="assets" />
        </div>
      </section>
    </Container>
  );
};

export default Hero;
