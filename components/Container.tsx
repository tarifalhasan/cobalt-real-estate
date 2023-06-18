import React from 'react';

interface containerProps {
  children: React.ReactNode;
}

const Container: React.FC<containerProps> = ({ children }) => {
  return (
    <div className={`max-w-[1600px] md:px-5 lg:px-5 xl:px-10  px-4 mx-auto `}>
      {children}
    </div>
  );
};

export default Container;
