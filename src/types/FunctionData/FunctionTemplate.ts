/* eslint-disable camelcase */

import OptionType from './OptionType';

type FunctionTemplate = {
  id: number;
  codeName: string;
  name: string;
  category: string;
  units: string | null;
  inputType: string | null;
  description: string;
  options: Array<OptionType>;
};

export default FunctionTemplate;
