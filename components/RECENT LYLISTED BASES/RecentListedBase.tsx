'use client';
import { Avatar } from '@material-tailwind/react';

import Container from '@/components/Container';
import React from 'react';
import featuresImage from '@/assets/images/cardimage.png';
import profileImage from '@/assets/profile.png';
import Image from 'next/image';
import { DaysIcon, DeathLine, SNOW } from '../svg';
import assets2 from '@/assets/images/Asset2.png';
import ListingPreview from '../common/ListingPreview';
import { RecentlyListingData } from '@/data';
const RecentListedBase = () => {
  return (
    <Container>
      <div id="BROWSE_BASES" className=" pb-7">
        <div className=" flex items-center justify-between">
          <h3>RECENTLY LISTED BASES</h3>
          <button className=" btn-main">VIEW MORE</button>
        </div>
        <div className="grid pt-6 lg:pt-8 gap-6 md:grid-cols-2  xl:grid-cols-4">
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
        <div className=" flex justify-end pt-2 pb-16">
          <Image src={assets2} alt="sdsds" />
        </div>
      </div>
    </Container>
  );
};

export default RecentListedBase;
