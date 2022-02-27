import React from 'react';
import UnitsMap from '../../helpers/UnitsMap';
import ItemInfo from '../../types/ItemInfo';
import { formatNumToDefinedNumOfDecimal } from '../../helpers/DataFormatter';

// bolo by treba namapovat ale pravdepodobne sa bude prerabat tak zatial len takto
const UnloaderItem: React.FC<ItemInfo> = ({
  name,
  itemValue,
  codeName,
  itemLayout,
}: ItemInfo) => {
  const unit = new UnitsMap().getUnit(codeName);
  const itemLayoutStyle = itemLayout || 'flex-col';

  return (
    <div
      className={`chamber rounded-3xl flex ${itemLayoutStyle} justify-between px-6 py-1`}
    >
      <p>{name}</p>
      <p className="font-bold">
        {itemValue} {unit}
      </p>
    </div>
  );
};

export default UnloaderItem;
