type InstructionType = {
  id: number;
  recipeId: number;
  templateId: number;
  codeName: string;
  param: number | string | null;
  category: string;
  optionCodeName: string | null;
  blockId: number;
  blockName: string;
  ordering: number;
};

export default InstructionType;
