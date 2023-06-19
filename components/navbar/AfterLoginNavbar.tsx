import React from 'react';
import Link from 'next/link';

import Container from '../Container';
import { Dollar, NewList } from '../svg';
import ProfileMenu from '@/components/navbar/ProfileMenu';

const AfterLoginNavbar = () => {
  return (
    <Container>
      <header className="  hidden md:flex py-6 z-50 px-10 max-w-[1600px]  mx-auto  w-full fixed left-0  right-0 justify-between items-center">
        <div className="brand">
          <Link href={'/'}>
            <span className=" text-xl italic font-bold">COBALT REALTY</span>{' '}
          </Link>
        </div>
        <nav className=" list-none flex items-center gap-10">
          <li className=" flex items-center gap-1">
            <NewList />

            <Link className="text-base font-bold" href={'#new_list'}>
              New List
            </Link>
          </li>
          <li className=" flex items-center gap-1">
            <Dollar />

            <Link className="text-base font-bold" href={'#new_list'}>
              $30
            </Link>
          </li>
          <li>
            <ProfileMenu name={'SWELLGUY34'} image={'/profile.svg'} />
          </li>
        </nav>
      </header>
    </Container>
  );
};

export default AfterLoginNavbar;
