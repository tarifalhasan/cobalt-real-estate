import Link from 'next/link';
import React from 'react';
import Container from '../Container';

const LoginNavbar = () => {
  return (
    <Container>
      <header className="  hidden md:flex z-50 py-6 px-10 max-w-[1600px]  mx-auto  w-full fixed left-0  right-0 justify-between items-center">
        <div className="brand">
          <Link href={'/'}>
            <span className=" text-xl italic font-bold">COBALT REALTY</span>{' '}
          </Link>
        </div>
        <nav className=" flex items-center gap-7">
          <li className=" flex items-center gap-2">
            <Link className="text-base font-bold" href={'#how_to_work'}>
              HOW IT WORKS
            </Link>
          </li>
          <li className=" flex items-center gap-2">
            <Link className="text-base font-bold" href={'/browse_base'}>
              BROWSE BASES
            </Link>
          </li>
          <li className=" flex items-center gap-1">
            <svg
              width={32}
              height={32}
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 6.66667C22.8242 6.66746 23.6394 6.83806 24.3948 7.16783C25.1502 7.4976 25.8295 7.97946 26.3904 8.58337C26.9514 9.18727 27.3818 9.90027 27.655 10.6779C27.9282 11.4555 28.0383 12.2811 27.9783 13.1031C27.9184 13.9252 27.6897 14.726 27.3066 15.4558C26.9234 16.1855 26.394 16.8285 25.7514 17.3446C25.1088 17.8608 24.3667 18.239 23.5715 18.4556C22.7763 18.6723 21.9449 18.7228 21.1293 18.604L15.3333 22.616V22.6667C15.3334 23.687 14.9436 24.6687 14.2436 25.411C13.5437 26.1533 12.5865 26.6001 11.568 26.66L11.3333 26.6667C10.4108 26.6667 9.51667 26.3479 8.80229 25.7643C8.08791 25.1806 7.59722 24.368 7.41333 23.464L4 22V17.3333L8.68 19.6733C9.18593 19.2226 9.79841 18.9084 10.4596 18.7602C11.1208 18.6121 11.8088 18.6349 12.4587 18.8267L16.0947 13.736C15.9381 12.8715 15.9733 11.9831 16.1978 11.1336C16.4223 10.2842 16.8306 9.4944 17.3938 8.8201C17.9571 8.1458 18.6616 7.60343 19.4575 7.23133C20.2535 6.85923 21.1214 6.66647 22 6.66667Z"
                stroke="#CD422C"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22.0003 14C22.7367 14 23.3337 13.403 23.3337 12.6667C23.3337 11.9303 22.7367 11.3333 22.0003 11.3333C21.2639 11.3333 20.667 11.9303 20.667 12.6667C20.667 13.403 21.2639 14 22.0003 14Z"
                fill="black"
                stroke="#CD422C"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <Link className="text-base font-bold" href={'/how_to_work'}>
              LOGIN
            </Link>
          </li>
        </nav>
      </header>
    </Container>
  );
};

export default LoginNavbar;
