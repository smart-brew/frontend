type InstructionForBackendType = {
  templateId: number;
  blockId: number;
  param: number | string | null;
  device: string;
  ordering: number;
};

export default InstructionForBackendType;
