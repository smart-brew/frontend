import { Status } from './SystemData';

type ItemInfo = {
  name?: string;
  itemValue: string | number | Status;
  device?: string;
  itemLayout?: string;
};

export default ItemInfo;
