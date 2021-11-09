import { Status } from './SystemData';

type ChamberInfo = {
  device: string;
  temp: number;
  rpm: number;
  heating: Status;
};

export default ChamberInfo;
