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
  instruction: string;
  param: number | string | null;
  category: string;
  device: string | null;
  blockId: number;
  block: string;
  ordering: number;
};

export default InstructionType;
