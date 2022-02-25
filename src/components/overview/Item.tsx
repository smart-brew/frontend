import React from 'react';
import UnitsMap from '../../helpers/UnitsMap';
import ItemInfo from '../../types/ItemInfo';

// bolo by treba namapovat ale pravdepodobne sa bude prerabat tak zatial len takto
const Item: React.FC<ItemInfo> = ({ name, itemValue, codeName }: ItemInfo) => {
  const unit = new UnitsMap().getUnit(codeName);

  return (
    <div className="chamber w-1/2 content-center shadow rounded-3xl">
      <p>{name}</p>
      <p className="font-bold">
        {itemValue} {unit}
      </p>
    </div>
  );
};

export default Item;
