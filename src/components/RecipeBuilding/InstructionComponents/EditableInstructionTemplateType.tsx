type EditableInstructionTemplateType = {
  id: number;
  codeName: string;
  name: string;
  category: string;
  param: string | number | null;
  units: string | null;
  inputType: string | null;
  description: string;
  optionCodeName: string | null;
  blockId: number;
  blockName: string;
  ordering: number;
};

export default EditableInstructionTemplateType;
