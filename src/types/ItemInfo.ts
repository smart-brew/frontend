import { Status } from './SystemData';

type ItemInfo = {
  name?: string;
  value: string | number | Status | undefined;
  device?: string;
  itemLayout?: string;
};

export default ItemInfo;
