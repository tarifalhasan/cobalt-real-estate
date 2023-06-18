'use client';

import { Select, Option } from '@material-tailwind/react';

export default function Filter() {
  return (
    <div className=" hidden sm:flex !text-white  items-center gap-3">
      <div className="w-auto">
        <Select
          label="Bio me"
          className="text-white border-2"
          animate={{
            mount: { y: 0 },
            unmount: { y: 25 },
          }}
        >
          <Option>price acceding</Option>
          <Option>price descending</Option>
          <Option>most recent</Option>
          <Option>wipe acceding</Option>
          <Option>wipe descending</Option>
        </Select>
      </div>
      <div className="w-auto">
        <Select
          label="Nearby Points of Interest"
          className="text-white border-2"
          animate={{
            mount: { y: 0 },
            unmount: { y: 25 },
          }}
        >
          <Option>price acceding</Option>
          <Option>price descending</Option>
          <Option>most recent</Option>
          <Option>wipe acceding</Option>
          <Option>wipe descending</Option>
        </Select>
      </div>
      <div className="w-auto">
        <Select
          label="Server Location"
          className="text-white border-2"
          animate={{
            mount: { y: 0 },
            unmount: { y: 25 },
          }}
        >
          <Option>price acceding</Option>
          <Option>price descending</Option>
          <Option>most recent</Option>
          <Option>wipe acceding</Option>
          <Option>wipe descending</Option>
        </Select>
      </div>
      <div className="w-auto">
        <Select
          label="Server Location"
          className="text-white border-2"
          animate={{
            mount: { y: 0 },
            unmount: { y: 25 },
          }}
        >
          <Option>price acceding</Option>
          <Option>price descending</Option>
          <Option>most recent</Option>
          <Option>wipe acceding</Option>
          <Option>wipe descending</Option>
        </Select>
      </div>
    </div>
  );
}
