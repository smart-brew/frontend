/* eslint-disable camelcase */

export type Parameters = {
  temp?: string;
  speed?: string;
  unloaded?: boolean;
  enabled?: boolean;
  duration?: string; // time to wait
  manual?: string;
};

export type BlockInfo = {
  name?: string;
};

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
