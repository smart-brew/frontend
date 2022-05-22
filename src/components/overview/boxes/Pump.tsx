import React from 'react';
import ItemInfo from '../../../types/ItemInfo';

const Pump: React.FC<ItemInfo> = ({ name, value: isEnabled }: ItemInfo) => {
  const backgroundColour = isEnabled ? 'bg-green-200' : 'bg-gray-200';

  return (
    <div
      className={`chamber w-1/6 content-center rounded-3xl brewery-pump p-2 ${backgroundColour} border-2 border-black`}
    >
      <p className="font-bold text-lg">{name}</p>
      <p className="">{isEnabled ? 'ON' : 'OFF'}</p>
    </div>
  );
};

export default Pump;
