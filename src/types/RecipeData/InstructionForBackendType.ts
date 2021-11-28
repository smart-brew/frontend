type InstructionForBackendType = {
  templateId: number;
  blockId: number;
  blockName: string;
  param: number | string | null;
  device: string | null;
  ordering: number;
};

export default InstructionForBackendType;
