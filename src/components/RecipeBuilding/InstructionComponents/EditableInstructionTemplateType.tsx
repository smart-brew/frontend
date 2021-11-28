import DeviceType from '../../../types/FunctionData/DeviceType';

type EditableInstructionTemplateType = {
  id: number;
  codeName: string;
  name: string;
  category: string;
  param: string | number | null;
  units: string | null;
  inputType: string | null;
  description: string;
  device: string | null;
  blockId: number;
  ordering: number;
};

export default EditableInstructionTemplateType;
