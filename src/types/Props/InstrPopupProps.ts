import FunctionListType from '../FunctionData/FunctionListType';
import FunctionType from '../FunctionData/FunctionType';

interface InstrPopupProps {
  functions: FunctionListType;
  callback: (arg: FunctionType) => undefined;
}

export default InstrPopupProps;
