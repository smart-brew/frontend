import React from 'react';
import ItemInfo from '../../types/ItemInfo';

const BoxPump: React.FC<ItemInfo> = ({
  name,
  itemValue,
  codeName,
}: ItemInfo) => {
  const backgroundColour =
    itemValue === 'false' ? 'bg-gray-200' : 'bg-green-200';

  return (
    <div
      className={`chamber w-1/6 content-center rounded-3xl brewery-pump p-2 ${backgroundColour} border-2 border-black`}
    >
      <p className="font-bold text-lg">{name}</p>
      <p className="">{itemValue === 'false' ? 'OFF' : 'ON'}</p>
    </div>
  );
};

export default BoxPump;
