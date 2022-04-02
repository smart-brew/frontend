import React, { useEffect } from 'react';
import TestInstructionSelector from './TestInstructionSelector';
import TestParametersInput from './TestParametersInput';
import Button from '../shared/Button';
import InstructionTemplate from '../../types/FunctionData/InstructionTemplate';
import OptionType from '../../types/FunctionData/OptionType';
import { sendInstructionTester } from '../../api/functions';

type ParamType = number | string | null;

const Tester: React.FC = () => {
  const [selectedInstruction, setSelectedInstruction] =
    React.useState<InstructionTemplate | null>(null);

  const [selectedOption, setSelectedOption] = React.useState<OptionType | null>(
    null
  );

  const [param, setParam] = React.useState<ParamType>(null);

  useEffect(() => {
    setSelectedOption(null);
    setParam(null);
  }, [selectedInstruction]);

  return (
    <div className="flex justify-center w-full">
      <div
        className="flex flex-col items-center justify-center space-y-3 w-1/2"
        style={{ minWidth: 'fit-content' }}
      >
        <TestInstructionSelector onInstrSelected={setSelectedInstruction} />
        <TestParametersInput
          selectedInstruction={selectedInstruction}
          onSelectOption={setSelectedOption}
          onParamChange={setParam}
        />
        <Button
          title="Submit"
          disabled={
            selectedInstruction === null ||
            selectedOption === null ||
            param === null
          }
          onClick={() => {
            if (
              selectedInstruction === null ||
              selectedOption === null ||
              param === null
            ) {
              return;
            }

            sendInstructionTester({
              type: 'instruction',
              category: selectedInstruction.category,
              instruction: selectedInstruction.codeName,
              moduleId: selectedOption.id,
              device: selectedOption.codeName,
              params: typeof param === 'number' ? param.toString() : param,
            })
              .then((response) => {
                console.log(response);
              })
              .catch((error) => {
                console.log(error);
              });
          }}
        />
      </div>
    </div>
  );
};

export default Tester;
