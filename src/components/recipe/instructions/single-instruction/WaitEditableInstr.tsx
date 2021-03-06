import React, { useRef } from 'react';

import ParamType from '../../../../types/ParamType';
import EditableInstructionTemplateType from './EditableInstructionTemplateType';
import TimeHelper from '../../../../helpers/TimeHelper';

interface Props {
  instruction: EditableInstructionTemplateType;
  onChange: (params: ParamType, error: boolean) => void;
}

const WaitEditableInstr: React.FC<Props> = ({
  instruction,
  onChange,
}: Props) => {
  const daysRef = useRef<HTMLInputElement>(null);
  const hoursRef = useRef<HTMLInputElement>(null);
  const minutesRef = useRef<HTMLInputElement>(null);

  const convertTimeToMillis = (
    days: number,
    hours: number,
    minutes: number
  ): number => {
    let millis = 0;
    millis += minutes * TimeHelper.MILLIS_MINUTES;
    millis += hours * TimeHelper.MILLIS_HOURS;
    millis += days * TimeHelper.MILLIS_DAYS;

    return millis;
  };

  const readParams = (): ParamType | null => {
    const daysNode = daysRef.current;
    const hoursNode = hoursRef.current;
    const minutesNode = minutesRef.current;

    if (daysNode != null && hoursNode != null && minutesNode != null) {
      const millis = convertTimeToMillis(
        parseInt(daysNode?.value, 10),
        parseInt(hoursNode?.value, 10),
        parseInt(minutesNode?.value, 10)
      );

      return { optionCodeName: null, value: millis };
    }
    return null;
  };

  const sendParams = (): void => {
    const params = readParams();
    if (params !== null) {
      onChange(params, true);
    }
  };

  return (
    <div className="flex flex-row space-x-8 text-lg">
      <div className="flex flex-row w-1/3 space-x-3 items-center">
        <input
          className="w-4/5 border rounded border-gray-200 p-1 rounded-lg"
          type="number"
          min={0}
          defaultValue={
            instruction.param !== null
              ? TimeHelper.getDaysFromMillis(instruction.param)
              : 0
          }
          ref={daysRef}
          onBlur={sendParams}
        />
        <span>days</span>
      </div>
      <div className="flex flex-row w-1/3 space-x-3 items-center">
        <input
          className="w-4/5 border rounded border-gray-200 p-1 rounded-lg"
          type="number"
          max={23}
          min={0}
          defaultValue={
            instruction.param !== null
              ? TimeHelper.getHoursFromMillis(instruction.param)
              : 0
          }
          ref={hoursRef}
          onBlur={sendParams}
        />
        <span>hours</span>
      </div>
      <div className="flex flex-row w-1/3 space-x-3 items-center">
        <input
          className="w-4/5 border rounded border-gray-200 p-1 rounded-lg"
          type="number"
          max={59}
          min={0}
          defaultValue={
            instruction.param !== null
              ? TimeHelper.getMinutesFromMillis(instruction.param)
              : 0
          }
          ref={minutesRef}
          onBlur={sendParams}
        />
        <span>minutes</span>
      </div>
    </div>
  );
};

export default WaitEditableInstr;
