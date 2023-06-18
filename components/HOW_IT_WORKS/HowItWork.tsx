import React from 'react';
import Container from '../Container';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@material-tailwind/react';
import featuresImage1 from '@/assets/images/how it work/1.png';
import featuresImage2 from '@/assets/images/how it work/2.png';
import featuresImage3 from '@/assets/images/how it work/3.png';
import getStartedImg from '@/assets/images/how it work/getStart.png';
import Image from 'next/image';

const HowItWork = () => {
  const dummyCardData = [
    {
      name: 'BUILD A BASE',
      descrition:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam erat vel ligula interdum, id tristique ipsum accumsan.',
      featuresImage: featuresImage1,
    },
    {
      name: 'CREATE A LISTING',
      descrition:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam erat vel ligula interdum, id tristique ipsum accumsan.',
      featuresImage: featuresImage2,
    },
    {
      name: 'REPEAT',
      descrition:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam erat vel ligula interdum, id tristique ipsum accumsan. ',
      featuresImage: featuresImage3,
    },
  ];

  const SellBase = () => (
    <div className=" grid md:grid-cols-2 gap-10 lg:grid-cols-4">
      {dummyCardData.map((data, index) => (
        <div key={index} className="  space-y-3 py-4 px-5 how_to_work_card">
          <Image
            className=" w-[207px] h-[207px] object-cover block mx-auto rounded-full"
            src={data.featuresImage}
            alt={data.name}
          />
          <h4 className=" text-base font-bold italic text-center text-white">
            {data.name}
          </h4>
          <p className=" text-white ">{data.descrition}</p>
        </div>
      ))}
      <div>
        <Image
          src={getStartedImg}
          alt="getStartedImg"
          className="w-full rounded-2xl h-full object-cover"
        />
      </div>
    </div>
  );
  const data = [
    {
      label: 'SELLING A BASE',
      value: 'sell',
      component: <SellBase />,
    },
    {
      label: 'BUYING A BASE',
      value: 'buying_a_base',
      component: <SellBase />,
    },
  ];
  return (
    <Container>
      <section id="how_to_work">
        <Tabs value="sell">
          <div className=" flex gap-4  flex-col lg:flex-row justify-between items-center">
            <h3>HOW IT WORKS</h3>
            <TabsHeader className="  bg-transparent  border border-tabs min-w-[320px] p-2">
              {data.map(({ label, value }) => (
                <Tab
                  className=" text-white font-bold  py-2   !text-base"
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
      </section>
    </Container>
  );
};

export default HowItWork;
