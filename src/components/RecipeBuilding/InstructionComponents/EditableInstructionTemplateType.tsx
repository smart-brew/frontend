import DeviceType from '../../../types/FunctionData/DeviceType';

type EditableInstructionTemplateType = {
  id: number;
  codeName: string;
  name: string;
  category: string;
  units: string | null;
  inputType: string | null;
  description: string;
  devices: Array<DeviceType> | null;
  blockId?: number;
};

export default EditableInstructionTemplateType;
