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
import { ReviewData } from '@/data/reviews';

interface Pros {
  image: any;
  buyerName: string;
  review: string;
}

const ReviewCard: React.FC<Pros> = ({ image, buyerName, review }) => {
  return (
    <div className=" review px-5 py-5">
      <div className=" flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image className="avatar-buyer" src={image} alt="buyer" />
          <span className=" text-base uppercase">{buyerName}</span>
        </div>
        <div>
          <SmileEmoji />
        </div>
      </div>
      <p className=" pt-3 font-normal text-base leading-5 text-white">
        {review}
      </p>
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

const Reviews = () => (
  <div>
    <Tabs value="all_reviews">
      <div className=" flex gap-4  flex-col lg:flex-row justify-between items-center">
        <h4 className=" text-xl italic font-bold">
          SWELLGUY34’S REVIEWS <span className=" opacity-50">(37)</span>
          <span className=" block ">
            {' '}
            <span className=" text-green">95% </span> TRUST
          </span>
        </h4>
        <TabsHeader className="  bg-transparent  border border-tabs min-w-[380px] p-2">
          {data.map(({ label, value }) => (
            <Tab
              className=" font-bold text-white py-2   !text-base"
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
