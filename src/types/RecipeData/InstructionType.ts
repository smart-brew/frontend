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
  recipe_id: number;
  block_id: number;
  function_template_id: number;
  function_option_id: number | null;
  ordering: number;
  param: Parameters | null;
  Blocks: BlockInfo;
};

export default InstructionType;
