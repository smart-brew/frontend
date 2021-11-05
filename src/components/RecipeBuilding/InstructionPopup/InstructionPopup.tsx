import React from 'react';
import FunctionListType from '../../../types/FunctionData/FunctionListType';
import FunctionType from '../../../types/FunctionData/FunctionType';
import SupportedFunctionHelper from '../../../helper_scripts/SupportedFunctionHelper';
import InstructionForSelection from './InstructionForSelection';

const InstructionPopup: React.FC<FunctionListType> = (
  functions: FunctionListType
) => {
  const { functionsArray } = functions;
  const instructions = functionsArray.map((func) => {
    return (
      <InstructionForSelection
        id={func.id}
        code_name={func.code_name}
        name={func.name}
        category={func.category}
        units={func.units}
        input_type={func.input_type}
        description={func.description}
      />
    );
  });
  return (
    <div className="w-3/5 h-2/3 rounded-2xl p-10 items-center justify-center content-center">
      <h2 className="font-bold text-2xl p-3 pb-10">Select instruction:</h2>
      <div className="grid grid-cols-2 justify-items-center">
        {instructions}
      </div>
      <button type="button" className="cancel-button">
        Cancel
      </button>
    </div>
  );
};

export default InstructionPopup;
