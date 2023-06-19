import React from 'react';
import Image, { StaticImageData } from 'next/image';
import featuresImage from '@/assets/images/cardimage.png';
import profileImage from '@/assets/profile.png';
import { DaysIcon, DeathLine, SNOW } from '../svg';

interface Props {
  key: number;
  userName: string;
  trustScore: number;
  bunkerBase: number;
  wipped: string;
  rusty: string;
  image: StaticImageData;
  tags: string[];
  // Here you need to create props require your data
}

const ListingPreview: React.FC<Props> = ({
  key,
  image,
  userName,
  trustScore,
  wipped,
  rusty,
  tags,
}) => {
  return (
    <div key={key} className="listing-preview-card ">
      <div>
        <Image
          className="  w-full max-h-[212px]  rounded-t-[16px] h-full object-cover"
          src={image}
          alt="dfd"
        />
      </div>
      <div className=" border-b-2    border-border-b-50 ">
        <div className="px-5  py-5">
          <div className="profile_info  flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                className=" w-[28px] h-[28px] object-cover"
                src={profileImage}
                alt="sddfdfd"
              />
              <span className=" text-sm">{userName}</span>
            </div>
            <h5 className=" text-sm">
              <span className=" text-green">{trustScore} </span> TRUST SCORE
            </h5>
          </div>
          <p className=" text-sm pt-3 font-bold">CHAD STYLE TRIO BUNKER BASE</p>
          <span className=" text-base font-bold text-green">15.99</span>
        </div>
      </div>
      <div className=" px-5 py-6">
        <ul className=" space-y-3">
          <li className=" flex items-center gap-2">
            <DaysIcon />
            <span className=" text-sm uppercase text-white">
              RUSTY MOOSE EU {rusty}
            </span>
          </li>
          <li className=" flex items-center gap-2">
            <SNOW />
            <span className=" text-sm uppercase text-white">SNOW</span>
          </li>
          <li className=" flex items-center gap-2">
            <DeathLine />
            <span className=" text-sm uppercase text-white">
              LAST WIPED {wipped}
            </span>
          </li>
        </ul>
      </div>
      <div className=" pb-6 px-5 overflow-hidden">
        <p className=" text-sm font-bold uppercase">POINTS OF INTEREST</p>
        <div className=" pt-2  grid gap-2 grid-cols-4">
          {tags.map((tag, index) => (
            <button
              key={index}
              className="btn-main !py-1.5  block  px-5 lg:px-2 2xl:px-3  text-xs font-normal uppercase"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListingPreview;
