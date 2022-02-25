import { Status } from './SystemData';

type ItemInfo = {
  name?: string;
  itemValue: string | number | Status;
  codeName: string;
};

export default ItemInfo;
