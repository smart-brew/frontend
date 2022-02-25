import React from 'react';
import Item from './Item';
import { Unloaders } from './Brewery';

// bolo by treba namapovat ale pravdepodobne sa bude prerabat tak zatial len takto
const BoxUnloader: React.FC<Unloaders> = ({
  unloadDevices,
  name,
}: Unloaders) => {
  // const heatingN = new UnitsMap().getUnit(heating);

  return (
    <div className="chamber w-1/2 content-center shadow rounded-3xl">
      <div>{name}</div>
      {unloadDevices.map((unl) => (
        <Item itemValue={unl.STATE} name={unl.DEVICE} codeName={unl.CODENAME} />
      ))}
    </div>
  );
};

export default BoxUnloader;
