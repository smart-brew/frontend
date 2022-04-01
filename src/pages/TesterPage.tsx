import React, { useEffect } from 'react';
import TestInstructionSelector from '../components/tester/TestInstructionSelector';
import TestParametersInput from '../components/tester/TestParametersInput';
import Button from '../components/shared/Button';
import InstructionTemplate from '../types/FunctionData/InstructionTemplate';
import OptionType from '../types/FunctionData/OptionType';

const TesterPage: React.FC = () => {
  const [selectedInstrState, setSelectedInstrState] =
    React.useState<InstructionTemplate | null>(null);
  const [selectedOptionState, setSelectedOptionState] = React.useState<
    OptionType | null | undefined
  >(undefined);
  const [paramValueState, setParamValueState] = React.useState<
    number | string | null | undefined
  >(undefined);
  const [instructionCompleteState, setInstructionCompleteState] =
    React.useState<boolean>(false);

  const instrSelectedCallback = (selectedInstr: InstructionTemplate | null) => {
    setSelectedInstrState(selectedInstr);
    setSelectedOptionState(undefined);
    setParamValueState(undefined);
  };

  const selectedOptionCallback = (
    selectedOption: OptionType | undefined | null
  ) => {
    setSelectedOptionState(selectedOption);
    setSubmitButtonState();
  };

  const paramValueEnteredCallback = (
    paramValue: number | string | null | undefined
  ) => {
    setParamValueState(paramValue);
    setSubmitButtonState();
  };

  const setSubmitButtonState = () => {
    if (
      selectedInstrState !== null &&
      selectedOptionState !== undefined &&
      paramValueState !== undefined
    ) {
      setInstructionCompleteState(true);
    } else {
      setInstructionCompleteState(false);
    }
  };

  useEffect(() => {
    setSubmitButtonState();
  }, [selectedInstrState]);

  useEffect(() => {
    setSubmitButtonState();
  }, [selectedOptionState]);

  useEffect(() => {
    setSubmitButtonState();
  }, [paramValueState]);

  return (
    <div className="flex flex-col items-center justify-center space-y-3">
      <TestInstructionSelector instrSelectedCallback={instrSelectedCallback} />
      <TestParametersInput
        selectedInstr={selectedInstrState}
        selectOptionCallback={selectedOptionCallback}
        paramValueEnteredCallback={paramValueEnteredCallback}
      />
      <Button
        title={'Submit'}
        disabled={!instructionCompleteState}
        onClick={() => {
          console.log(instructionCompleteState);
        }}
      />
    </div>
  );
};
export default TesterPage;
