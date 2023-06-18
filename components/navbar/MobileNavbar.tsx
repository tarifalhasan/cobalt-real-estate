'use client';

import React, { useState } from 'react';

import Link from 'next/link';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openNavbar = () => {
    setIsOpen(!isOpen);
  };
  const navLinks = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'HOW IT WORKS',
      href: '#how_it_work',
    },
    {
      label: 'BROWSE BASES',
      href: '#browse_base',
    },
  ];
  return (
    <div className="navbar  z-50 bg-dark-900 fixed left-0 py-5 right-0 md:hidden px-4">
      <div className="flex justify-between">
        <h4 className=" text-xl italic">COBALT REALTY</h4>

        <button onClick={() => openNavbar()}>
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
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <div
        className={` fixed bg-[#2D5199]   mobile_navbar 2xl:px-0 px-4 pt-6 w-full h-full   ${
          isOpen ? 'right-0' : 'right-full'
        }  z-50 top-0 `}
      >
        <div className=" flex  items-center justify-between">
          <h4 className=" text-xl italic">COBALT REALTY</h4>
          <button onClick={() => openNavbar()}>
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col items-center pt-7 md:flex-row gap-6">
          {navLinks.map(link => (
            <li key={link.href} onClick={openNavbar}>
              <Link
                href={link.href}
                className="block py-2 pl-3 pr-4 text-white text-base leading-[19px] font-bold font-segoe"
                aria-current="page"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
