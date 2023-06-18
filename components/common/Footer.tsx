import React from 'react';
import Container from '../Container';
import Link from 'next/link';

import FacebookIcon from '@/assets/icons/facebook.svg';
import TiktokIcon from '@/assets/icons/tiktok.svg';
import Instagramicon from '@/assets/icons/instagram.svg';
import Image from 'next/image';
const Footer = () => {
  return (
    <footer className=" py-24 bg-[#0A0A0A]">
      <Container>
        <div className=" grid space-y-7 place-items-center">
          <div className=" flex items-center gap-4">
            <Link target="_blank" href="/">
              <Image width={34} height={34} src={FacebookIcon} alt="tiktok" />
            </Link>
            <Link target="_blank" href="/">
              <Image width={34} height={34} src={TiktokIcon} alt="tiktok" />
            </Link>
            <Link target="_blank" href="/">
              <Image
                width={34}
                height={34}
                src={Instagramicon}
                alt="Instagramicon"
              />
            </Link>
          </div>
          <p className=" text-base  font-normal text-center w-full max-w-[920px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            aliquam erat vel ligula interdum, id tristique ipsum accumsan. Ut ut
            orci semper, tempus justo eu, tempus ipsum.
          </p>
          <ul className="flex flex-col md:flex-row list-disc gap-10 md:items-center">
            <li>
              <Link className=" text-base font-normal uppercase " href={'/'}>
                Home
              </Link>
            </li>
            <li>
              <Link className=" text-base font-normal uppercase " href={'/'}>
                BROWSE BASES
              </Link>
            </li>
            <li>
              <Link className=" text-base font-normal uppercase " href={'/'}>
                CREATE A LISTING
              </Link>
            </li>
            <li>
              <Link className=" text-base font-normal uppercase " href={'/'}>
                HOW IT WORKS
              </Link>
            </li>
            <li>
              <Link className=" text-base font-normal uppercase " href={'/'}>
                FAQ
              </Link>
            </li>
          </ul>
          <div className=" text-base uppercase text-white">
            © COBALTREALTY 2023
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
