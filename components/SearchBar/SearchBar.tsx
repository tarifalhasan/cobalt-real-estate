import React from 'react';

const SearchBar = () => {
  return (
    <div className=" px-4 md:gap-3 w-full rounded-2xl md:h-[64px] bg-dark-900 lg:max-w-[80%] flex flex-col md:flex-row bg">
      <input
        type="text"
        placeholder="Search by listing name"
        className=" basis-1/2  text-dark-50 outline-none bg-transparent border-b md:border-b-0 md:border-r  border-dark-50 py-4 md:my-3 "
      />
      <input
        type="text"
        placeholder="Search by server name"
        className=" basis-1/2 pb-4 md:pb-0  text-dark-50 outline-none bg-transparent 50 my-3 "
      />
    </div>
  );
};

export default SearchBar;
