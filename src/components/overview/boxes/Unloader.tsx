import React from 'react';
import { Unloaders } from '../Brewery';
import UnloaderItem from './UnloaderItem';

// bolo by treba namapovat ale pravdepodobne sa bude prerabat tak zatial len takto
const BoxUnloader: React.FC<Unloaders> = ({
  unloadDevices,
  name,
}: Unloaders) => {
  return (
    <div className="chamber w-64 content-center shadow rounded-3xl absolute -top-3 left-5 bg-gray-200 border-2 border-black">
      <div className="unloader-box-name font-bold text-lg">{name}</div>
      {unloadDevices.map((unl) => (
        <UnloaderItem
          key={unl.DEVICE}
          value={unl.STATE}
          name={unl.DEVICE}
          itemLayout="flex-row"
        />
      ))}
    </div>
  );
};

export default BoxUnloader;
