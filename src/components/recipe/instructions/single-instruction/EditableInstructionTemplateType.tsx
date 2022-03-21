import OptionType from '../../../../types/FunctionData/OptionType';

type EditableInstructionTemplateType = {
  templateId: number;
  codeName: string;
  name: string;
  category: string;
  param: string | number | null;
  units: string | null;
  inputType: string | null;
  description: string;
  optionCodeName: string | null;
  options: Array<OptionType>;
  blockId: number;
  blockName: string;
  ordering: number;
};

export default EditableInstructionTemplateType;
