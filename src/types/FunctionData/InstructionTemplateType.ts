import DeviceType from './DeviceType';

type InstructionTemplateType = {
  id: number;
  codeName: string;
  name: string;
  category: string;
  units: string | null;
  inputType: string | null;
  description: string;
  devices: Array<DeviceType> | null;
};

export default InstructionTemplateType;
