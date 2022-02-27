import React from 'react';
import Item from './Item';
import { Unloaders } from './Brewery';
import UnloaderItem from './UnloaderItem';

// bolo by treba namapovat ale pravdepodobne sa bude prerabat tak zatial len takto
const BoxUnloader: React.FC<Unloaders> = ({
  unloadDevices,
  name,
}: Unloaders) => {
  // const heatingN = new UnitsMap().getUnit(heating);

  return (
    <div className="chamber w-64 content-center shadow rounded-3xl absolute -top-3 left-5 bg-gray-200 border-2 border-black">
      <div className="font-bold text-lg">{name}</div>
      {unloadDevices.map((unl) => (
        <UnloaderItem
          itemValue={unl.STATE}
          name={unl.DEVICE}
          codeName={unl.CODENAME}
          itemLayout="flex-row"
        />
      ))}
    </div>
  );
};

export default BoxUnloader;
