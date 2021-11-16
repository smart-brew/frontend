type InstructionFromBackendType = {
  id: number;
  recipeId: number;
  templateId: number;
  codeName: string;
  param: string | number | null;
  category: string;
  device: string;
  blockId: number;
  block: string;
  ordering: number;
};

export default InstructionFromBackendType;
