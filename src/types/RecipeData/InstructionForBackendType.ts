type InstructionForBackendType = {
  templateId: number;
  blockId: number;
  param: number | string | null;
  device: string | null;
  ordering: number;
};

export default InstructionForBackendType;
