/* eslint-disable camelcase */

import OptionType from './OptionType';

type FunctionType = {
  id: number;
  code_name: string;
  name: string;
  category: string;
  units: string;
  input_type: string;
  description: string;
  Function_options?: Array<OptionType>;
};

export default FunctionType;
