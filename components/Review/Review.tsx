import React from 'react';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@material-tailwind/react';
import Image from 'next/image';
import { SmileEmoji } from '../svg';
import { ReviewData } from '@/data';

interface ReviewCardProps {
  image: any;
  buyerName: string;
  review: string;
}

interface ReviewProps {
  titleFontSize: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  image,
  buyerName,
  review,
}) => {
  return (
    <div className=" review px-5 py-5">
      <div className=" flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image className="avatar-buyer" src={image} alt="buyer" />
          <span className=" text-sm uppercase">{buyerName}</span>
        </div>
        <div>
          <SmileEmoji />
        </div>
      </div>
      <p className=" pt-3 font-normal text-sm leading-5 text-white">{review}</p>
    </div>
  );
};
const AllReviews = () => (
  <div className=" space-y-4">
    {ReviewData.allReviews.map((data, key) => (
      <ReviewCard
        key={key}
        image={data.image}
        buyerName={data.buyerName}
        review={data.review}
      />
    ))}
  </div>
);
const NegativeReviews = () => (
  <div className=" space-y-4">
    {ReviewData.NegativeReviews.map((data, key) => (
      <ReviewCard
        key={key}
        image={data.image}
        buyerName={data.buyerName}
        review={data.review}
      />
    ))}
  </div>
);
const PositiveReviews = () => (
  <div className=" space-y-4">
    {ReviewData.PositiveReviews.map((data, key) => (
      <ReviewCard
        key={key}
        image={data.image}
        buyerName={data.buyerName}
        review={data.review}
      />
    ))}
  </div>
);

const data = [
  {
    label: 'ALL REVIEWS',
    value: 'all_reviews',
    component: <AllReviews />,
  },
  {
    label: 'NEGATIVE',
    value: 'negative',
    component: <NegativeReviews />,
  },
  {
    label: 'POSITIVE',
    value: 'positive',
    component: <PositiveReviews />,
  },
];

const Reviews: React.FC<ReviewProps> = ({ titleFontSize }) => (
  <div>
    <Tabs value="all_reviews">
      <div className=" flex gap-5  flex-col lg:flex-row justify-between lg:items-center">
        <h4 className={`${titleFontSize} italic font-bold`}>
          <span>
            SWELLGUY34’S REVIEWS <span className=" opacity-50">(37)</span>
          </span>
          <span className=" pt-2 block text-base lg:text-xl">
            <span className="  text-green">95% </span> TRUST
          </span>
        </h4>
        <TabsHeader className="  rounded-xl bg-transparent w-full min-w-[340px] sm:min-w-[400px]  border border-tabs  p-2">
          {data.map(({ label, value }) => (
            <Tab
              className=" font-bold text-white py-2.5    !text-xs sm:!text-base"
              key={value}
              value={value}
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
      </div>
      <TabsBody className=" py-7 ">
        {data.map(({ value, component }) => (
          <TabPanel key={value} value={value}>
            {component}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  </div>
);

export default Reviews;
