import React, { useRef } from 'react';
import InstructionTemplate from '../../types/FunctionData/InstructionTemplate';
import InstructionConstants from '../../helpers/InstructionConstants';
import OptionType from '../../types/FunctionData/OptionType';
import TimeHelper from '../../helpers/TimeHelper';

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
  const daysRef = useRef<HTMLInputElement>(null);
  const hoursRef = useRef<HTMLInputElement>(null);
  const minutesRef = useRef<HTMLInputElement>(null);

  const readWaitParamValue = (): number | null => {
    const daysNode = daysRef.current;
    const hoursNode = hoursRef.current;
    const minutesNode = minutesRef.current;

    if (daysNode != null && hoursNode != null && minutesNode != null) {
      return TimeHelper.convertTimeToMillis(
        parseInt(daysNode?.value, 10),
        parseInt(hoursNode?.value, 10),
        parseInt(minutesNode?.value, 10)
      );
    }
    return null;
  };

  const getInstructionParametersInput = (): JSX.Element | null => {
    if (selectedInstr !== null) {
      if (
        selectedInstr.codeName === InstructionConstants.TEMPERATURE ||
        selectedInstr.codeName === InstructionConstants.MOTOR
      ) {
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
                min={0}
                onChange={(e) => {
                  if (e.target.value === '') {
                    console.log(e.target.value);
                    paramValueEnteredCallback(undefined);
                  } else {
                    paramValueEnteredCallback(e.target.value);
                  }
                }}
              />
              <span className="text-lg w-1/5">
                {selectedInstr.codeName === InstructionConstants.TEMPERATURE
                  ? '°C'
                  : 'RPM'}
              </span>
            </div>
          </div>
        );
      } else if (
        selectedInstr.codeName === InstructionConstants.PUMP ||
        selectedInstr.codeName === InstructionConstants.UNLOADER
      ) {
        return (
          <div className=" rounded-2xl p-5 space-y-3 text-left flex flex-col">
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
                        paramValueEnteredCallback(null);
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
          </div>
        );
      } else if (selectedInstr.codeName === InstructionConstants.WAIT) {
        return (
          <div className="flex flex-row space-x-10 px-6 text-lg">
            <div className="flex flex-row w-1/3 space-x-3 items-center">
              <input
                className="w-4/5 border rounded border-gray-200 p-1 rounded-lg"
                type="number"
                min={0}
                defaultValue={0}
                ref={daysRef}
                onChange={() => {
                  let time = readWaitParamValue();
                  selectOptionCallback(null);
                  if (time && time > 0) {
                    paramValueEnteredCallback(time);
                  } else {
                    paramValueEnteredCallback(undefined);
                  }
                }}
              />
              <span>days</span>
            </div>
            <div className="flex flex-row w-1/3 space-x-3 items-center">
              <input
                className="w-4/5 border rounded border-gray-200 p-1 rounded-lg"
                type="number"
                max={23}
                min={0}
                defaultValue={0}
                ref={hoursRef}
                onChange={() => {
                  let time = readWaitParamValue();
                  selectOptionCallback(null);
                  if (time && time > 0) {
                    paramValueEnteredCallback(time);
                  } else {
                    paramValueEnteredCallback(undefined);
                  }
                }}
              />
              <span>hours</span>
            </div>
            <div className="flex flex-row w-1/3 space-x-3 items-center">
              <input
                className="w-4/5 border rounded border-gray-200 p-1 rounded-lg"
                type="number"
                max={59}
                min={0}
                defaultValue={0}
                ref={minutesRef}
                onChange={() => {
                  let time = readWaitParamValue();
                  selectOptionCallback(null);
                  if (time && time > 0) {
                    paramValueEnteredCallback(time);
                  } else {
                    paramValueEnteredCallback(undefined);
                  }
                }}
              />
              <span>minutes</span>
            </div>
          </div>
        );
      } else if (selectedInstr.codeName === InstructionConstants.MANUAL) {
        return (
          <div>
            <textarea
              className="border border-gray-300 rounded-xl px-6 py-3 text-lg"
              rows={5}
              cols={50}
              onChange={(e) => {
                selectOptionCallback(null);
                console.log(e.target.value);
                if (e.target.value !== '') {
                  paramValueEnteredCallback(e.target.value);
                } else {
                  paramValueEnteredCallback(undefined);
                }
              }}
            />
          </div>
        );
      } else {
        return null;
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
