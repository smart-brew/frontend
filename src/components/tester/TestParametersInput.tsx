import React from 'react';
import InstructionTemplate from '../../types/FunctionData/InstructionTemplate';
import InstructionConstants from '../../helpers/InstructionConstants';
import OptionType from '../../types/FunctionData/OptionType';

interface Props {
  selectedInstr: InstructionTemplate | null;
  selectOptionCallback: (selectedOption: OptionType | null | undefined) => void;
  paramValueEnteredCallback: (
    paramValue: number | string | null | undefined
  ) => void;
}

const TestParametersInput: React.FC<Props> = ({
  selectedInstr,
  selectOptionCallback,
  paramValueEnteredCallback,
}) => {
  const getInstructionParametersInput = (): JSX.Element | null => {
    if (selectedInstr != null) {
      if (selectedInstr.codeName == InstructionConstants.TEMPERATURE) {
        return (
          <div className="w-1/2 rounded-2xl p-5 space-y-3 text-left flex flex-col">
            <span className="text-xl font-bold px-8">Device:</span>
            <div className="flex flex-row flex-wrap justify-evenly radio-toolbar">
              {selectedInstr.options.map((value, index) => {
                return (
                  <div className="text-lg my-3">
                    <input
                      className=""
                      type="radio"
                      name="options"
                      id={`opt_${value.id.toString()}`}
                      onClick={() => {
                        selectOptionCallback(value);
                      }}
                    />
                    <label
                      className="border border-gray-300 rounded-xl px-6 py-3 w-full"
                      htmlFor={`opt_${value.id.toString()}`}
                    >
                      <span>{value.codeName}</span>
                    </label>
                  </div>
                );
              })}
            </div>
            <span className="text-xl font-bold px-8">Value:</span>
            <div className="flex flex-row flex-wrap justify-evenly items-center px-6 ">
              <input
                className="text-lg p-2 border border-gray-300 rounded-xl w-3/5"
                type="number"
                onChange={(e) => {
                  if (e.target.value === '') {
                    console.log(e.target.value);
                    paramValueEnteredCallback(undefined);
                  } else {
                    paramValueEnteredCallback(e.target.value);
                  }
                }}
              />
              <span className="text-lg w-1/5">°C</span>
            </div>
          </div>
        );
      }
    }
    return null;
  };

  return (
    <div className="w-1/2 border border-gray-300 shadow-md rounded-2xl p-5 space-y-4 justify-center">
      <span className="text-2xl font-bold m-8">Set parameters:</span>
      <div className="justify-center">{getInstructionParametersInput()}</div>
    </div>
  );
};
export default TestParametersInput;
