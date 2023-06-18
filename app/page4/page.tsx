'use client';
import Container from '@/components/Container';
import Reviews from '@/components/Review/Review';
import ListingPreview from '@/components/common/ListingPreview';
import AfterLoginNavbar from '@/components/navbar/AfterLoginNavbar';
import React from 'react';
import image from '@/assets/swellguy.png';
import Image from 'next/image';
import { CameraIcon, ClanderIcon, HomeIcon } from '@/components/svg';
const ProfilePage = () => {
  const dummyRecentListedData = [{}, {}, {}];
  return (
    <section>
      <Container>
        {/* Navbar */}
        <AfterLoginNavbar />
        {/* Content */}
        <div className=" pt-40 flex flex-col md:flex-row  gap-9">
          <div className="  basis-[30%]">
            <div className=" px-4  py-5 profile_card">
              <div className="avatar">
                <Image
                  className=" w-full  mx-auto h-full max-w-[207px] max-h-[207px] rounded-full"
                  src={image}
                  alt="Sdsdsd"
                />
              </div>
              <div className=" py-5 flex items-center justify-between">
                <div>
                  <h4 className=" text-base font-bold uppercase italic">
                    SWELLGUY34
                  </h4>
                  <h4 className=" text-rust-red text-base font-bold uppercase italic">
                    GIGACHAD
                  </h4>
                </div>
                <div>
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 6.66666C22.8242 6.66745 23.6394 6.83805 24.3948 7.16782C25.1502 7.49758 25.8295 7.97945 26.3904 8.58335C26.9514 9.18726 27.3818 9.90026 27.655 10.6779C27.9282 11.4555 28.0383 12.2811 27.9783 13.1031C27.9184 13.9251 27.6897 14.726 27.3066 15.4558C26.9234 16.1855 26.394 16.8285 25.7514 17.3446C25.1088 17.8608 24.3667 18.239 23.5715 18.4556C22.7763 18.6723 21.9449 18.7228 21.1293 18.604L15.3333 22.616V22.6667C15.3334 23.6869 14.9436 24.6687 14.2436 25.411C13.5437 26.1533 12.5865 26.6001 11.568 26.66L11.3333 26.6667C10.4108 26.6667 9.51667 26.3479 8.80229 25.7643C8.08791 25.1806 7.59722 24.368 7.41333 23.464L4 22V17.3333L8.68 19.6733C9.18593 19.2226 9.79841 18.9083 10.4596 18.7602C11.1208 18.6121 11.8088 18.6349 12.4587 18.8267L16.0947 13.736C15.9381 12.8714 15.9733 11.9831 16.1978 11.1336C16.4223 10.2842 16.8306 9.49439 17.3938 8.82009C17.9571 8.14579 18.6616 7.60342 19.4575 7.23132C20.2535 6.85921 21.1214 6.66645 22 6.66666Z"
                      stroke="#CD422C"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22.0003 14C22.7367 14 23.3337 13.4031 23.3337 12.6667C23.3337 11.9303 22.7367 11.3333 22.0003 11.3333C21.2639 11.3333 20.667 11.9303 20.667 12.6667C20.667 13.4031 21.2639 14 22.0003 14Z"
                      fill="black"
                      stroke="#CD422C"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <p className=" text-base text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                aliquam erat vel ligula interdum, id tristique ipsum accumsan.
                Ut ut orci semper, tempus justo eu, tempus ipsum.
              </p>
              <ul className=" pt-4 space-y-2">
                <li className=" flex items-center gap-2">
                  <ClanderIcon />
                  <span className=" text-base uppercase">
                    MEMBER SINCE 01/01/1998
                  </span>
                </li>
                <li className=" flex items-center gap-2">
                  <HomeIcon />
                  <span className=" text-base uppercase">SOLD 43 BASES</span>
                </li>
                <li className=" flex items-center gap-2">
                  <CameraIcon />
                  <span className=" text-base uppercase">MADE $450 TOTAL</span>
                </li>
              </ul>
              <button className=" mt-4 w-full bg-rust-red font-bold py-4 text-base uppercase rounded-2xl">
                REPORT
              </button>
            </div>
          </div>
          <div className=" space-y-4 basis-[70%]">
            {/* Reviews */}
            <Reviews />
            {/* ACTIVE LISTINGS */}

            <div>
              <h3 className=" italic">ACTIVE LISTINGS</h3>
              <div className=" pt-7 grid md:grid-cols-2 gap-5 xl:grid-cols-3">
                {dummyRecentListedData.map((data, key) => (
                  <ListingPreview key={key} />
                ))}
              </div>
            </div>
            {/* SOLD LISTINGS */}
            <div className=" pt-6 pb-24">
              <h3 className=" italic">SOLD LISTINGS</h3>
              <div className=" pt-7 grid md:grid-cols-2 gap-5 xl:grid-cols-3">
                {dummyRecentListedData.map((data, key) => (
                  <ListingPreview key={key} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProfilePage;
