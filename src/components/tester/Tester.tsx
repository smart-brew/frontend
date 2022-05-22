import React, { useEffect } from 'react';
import TestInstructionSelector from './TestInstructionSelector';
import TestParametersInput from './TestParametersInput';
import Button from '../shared/Button';
import InstructionTemplate from '../../types/FunctionData/InstructionTemplate';
import OptionType from '../../types/FunctionData/OptionType';
import { sendInstructionTester } from '../../api/functions';
import InstructionConstants from '../../helpers/InstructionConstants';

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

  const verifyInputs = (): boolean => {
    if (selectedInstruction === null) {
      return false;
    }

    if (
      (selectedInstruction.codeName === InstructionConstants.PUMP ||
        selectedInstruction.codeName === InstructionConstants.UNLOADER) &&
      selectedOption === null
    ) {
      return false;
    }

    if (
      (selectedInstruction.codeName === InstructionConstants.MANUAL ||
        selectedInstruction.codeName === InstructionConstants.WAIT) &&
      param === null
    ) {
      return false;
    }

    if (
      (selectedInstruction.codeName === InstructionConstants.MOTOR ||
        selectedInstruction.codeName === InstructionConstants.RELAY ||
        selectedInstruction.codeName === InstructionConstants.TEMPERATURE) &&
      (param === null || selectedOption === null)
    ) {
      return false;
    }

    return true;
  };

  return (
    <div className="flex justify-center w-full">
      <div
        className="flex flex-col items-center justify-center space-y-3 w-1/2 mt-4"
        style={{ minWidth: 'fit-content' }}
      >
        <TestInstructionSelector onInstrSelected={setSelectedInstruction} />
        <TestParametersInput
          selectedInstruction={selectedInstruction}
          onSelectOption={setSelectedOption}
          onParamChange={setParam}
        />
        <Button
          title="Execute"
          disabled={!verifyInputs()}
          onClick={() => {
            sendInstructionTester({
              type: 'instruction',
              category: selectedInstruction?.category ?? '',
              instruction: selectedInstruction?.codeName ?? '',
              moduleId: selectedOption?.module ?? 1,
              device: selectedOption?.codeName ?? '',
              params:
                typeof param === 'number' ? param.toString() : param ?? '',
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
