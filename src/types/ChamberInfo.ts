import { Status } from './Data';

type ChamberInfo = {
  device: string;
  temp: number;
  rpm: number;
  heating: Status;
};

export default ChamberInfo;
