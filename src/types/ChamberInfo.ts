import { Status } from "./Data";

type ChamberInfo = {
    device: String,
    temp: number,
    rpm : number,
    heating: Status,
};

export default  ChamberInfo;