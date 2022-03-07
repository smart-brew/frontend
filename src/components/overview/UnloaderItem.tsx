import React from 'react';
import ItemInfo from '../../types/ItemInfo';

// bolo by treba namapovat ale pravdepodobne sa bude prerabat tak zatial len takto
const UnloaderItem: React.FC<ItemInfo> = ({
  name,
  itemValue,
  itemLayout,
}: ItemInfo) => {
  const itemLayoutStyle = itemLayout || 'flex-col';

  return (
    <div
      className={`chamber rounded-3xl flex ${itemLayoutStyle} justify-between px-6 py-1`}
    >
      <p>{name}</p>
      <p className="font-bold">{itemValue}</p>
    </div>
  );
};

export default UnloaderItem;
