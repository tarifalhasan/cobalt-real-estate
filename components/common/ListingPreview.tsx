import React from 'react';
import Image from 'next/image';
import featuresImage from '@/assets/images/cardimage.png';
import profileImage from '@/assets/profile.png';
import { DaysIcon, DeathLine, SNOW } from '../svg';

interface Props {
  key: any;
  // featuresImage: any;
  // profileImage: any;
  // Here you need to create props require your data
}

const ListingPreview: React.FC<Props> = ({ key }) => {
  return (
    <div className="listing-preview-card ">
      <div>
        {' '}
        <Image
          className=" max-w-[370px] max-h-[212px] w-full rounded-t-[16px] h-full object-cover"
          src={featuresImage}
          alt="dfd"
        />
      </div>
      <div className=" border-b-2    border-border-b-50 ">
        <div className="px-5  py-5">
          <div className="profile_info  flex items-center justify-between">
            <Image
              className=" w-[28px] h-[28px] object-cover"
              src={profileImage}
              alt="sddfdfd"
            />
            <h5 className=" text-base">
              {' '}
              <span className=" text-green">95% </span> TRUST SCORE
            </h5>
          </div>
          <p className=" text-base pt-2 font-bold">
            CHAD STYLE TRIO BUNKER BASE
          </p>
          <span className=" text-base font-bold text-green">15.99</span>
        </div>
      </div>
      <div className=" px-5 py-6">
        <ul className=" space-y-3">
          <li className=" flex items-center gap-2">
            <DaysIcon />
            <span className=" text-base uppercase text-white">
              RUSTY MOOSE EU MONDAYS
            </span>
          </li>
          <li className=" flex items-center gap-2">
            <SNOW />
            <span className=" text-base uppercase text-white">SNOW</span>
          </li>
          <li className=" flex items-center gap-2">
            <DeathLine />
            <span className=" text-base uppercase text-white">
              LAST WIPED 16HRS AGO
            </span>
          </li>
        </ul>
      </div>
      <div className=" pb-6 px-5 overflow-hidden">
        <p className=" text-base font-bold uppercase">POINTS OF INTEREST</p>
        <div className=" pt-2  flex items-center gap-1 justify-evenly">
          <button className="btn-main !py-1.5  block  px-5 lg:px-2 2xl:px-3  text-xs font-normal uppercase">
            demo
          </button>
          <button className="btn-main !py-1.5  px-5 lg:px-2 2xl:px-3  block text-xs font-normal uppercase">
            demo
          </button>
          <button className="btn-main !py-1.5 block px-5 lg:px-2 2xl:px-3  text-xs font-normal uppercase">
            demo
          </button>
          <button className="btn-main !py-1.5 block px-5 lg:px-2 2xl:px-3 text-xs font-normal uppercase">
            RIVER
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListingPreview;
