/* eslint-disable camelcase */

import OptionType from './OptionType';

type FunctionTemplate = {
  id: number;
  instruction: string;
  name: string;
  category: string;
  units: string | null;
  inputType: string | null;
  description: string;
  devices: Array<OptionType>;
};

export default FunctionTemplate;
