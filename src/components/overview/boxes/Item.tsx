import React from 'react';
import UnitsMap from '../../../helpers/UnitsMap';
import ItemInfo from '../../../types/ItemInfo';

// bolo by treba namapovat ale pravdepodobne sa bude prerabat tak zatial len takto
const Item: React.FC<ItemInfo> = ({
  name,
  value,
  device = '',
  itemLayout,
}: ItemInfo) => {
  const unit = new UnitsMap().getUnit(device);
  const itemLayoutStyle = itemLayout || 'flex-col';

  return (
    <div
      className={`chamber content-center rounded-3xl flex ${itemLayoutStyle}`}
    >
      <p>{name}</p>
      <p className="font-bold">
        {value} {unit}
      </p>
    </div>
  );
};

export default Item;
