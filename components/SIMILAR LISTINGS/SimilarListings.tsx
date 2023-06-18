import React from 'react';
import ListingPreview from '../common/ListingPreview';

const SimilarListings = () => {
  const dummyRecentListedData = [{}, {}, {}, {}];

  return (
    <div className=" pb-11 ">
      <div className=" flex items-center justify-between">
        <h3>SIMILAR LISTINGS</h3>
        <button className="btn-main uppercase">view more</button>
      </div>
      <div className=" pt-7 grid md:grid-cols-2 gap-10 xl:grid-cols-4">
        {dummyRecentListedData.map((data, key) => (
          <ListingPreview key={key} />
        ))}
      </div>
    </div>
  );
};

export default SimilarListings;
