import React from 'react';
import UnitsMap from '../../helpers/UnitsMap';
import ItemInfo from '../../types/ItemInfo';

// bolo by treba namapovat ale pravdepodobne sa bude prerabat tak zatial len takto
const Item: React.FC<ItemInfo> = ({
  name,
  itemValue,
  codeName,
  itemLayout,
}: ItemInfo) => {
  const unit = new UnitsMap().getUnit(codeName);
  const itemLayoutStyle = itemLayout || 'flex-col';

  return (
    <div
      className={`chamber content-center rounded-3xl flex ${itemLayoutStyle}`}
    >
      <p>{name}</p>
      <p className="font-bold">
        {itemValue} {unit}
      </p>
    </div>
  );
};

export default Item;
