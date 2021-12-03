import React, { useRef } from 'react';

import ParamType from '../../../types/ParamType';
import EditableInstructionTemplateType from './EditableInstructionTemplateType';

interface Props {
  instruction: EditableInstructionTemplateType;
  onChange: (params: ParamType) => void;
}

const WaitEditableInstr: React.FC<Props> = ({
  instruction,
  onChange,
}: Props) => {
  const MILLIS_DAYS = 86400000;
  const MILLIS_HOURS = 3600000;
  const MILLIS_MINUTES = 60000;

  const daysRef = useRef<HTMLInputElement>(null);
  const hoursRef = useRef<HTMLInputElement>(null);
  const minutesRef = useRef<HTMLInputElement>(null);

  const convertTimeToMillis = (
    days: number,
    hours: number,
    minutes: number
  ): number => {
    let millis = 0;
    millis += minutes * MILLIS_MINUTES;
    millis += hours * MILLIS_HOURS;
    millis += days * MILLIS_DAYS;

    return millis;
  };

  const getDaysFromMillis = (millis: string | number): number => {
    if (typeof millis === 'number') {
      return Math.floor(millis / MILLIS_DAYS);
    }
    return 0;
  };

  const getHoursFromMillis = (millis: string | number): number => {
    if (typeof millis === 'number') {
      const newMillis = millis % MILLIS_DAYS;
      if (newMillis > 0) {
        return Math.floor(newMillis / MILLIS_HOURS);
      }
    }
    return 0;
  };

  const getMinutesFromMillis = (millis: string | number): number => {
    if (typeof millis === 'number') {
      let newMillis = millis % MILLIS_DAYS;
      newMillis %= MILLIS_HOURS;

      if (newMillis > 0) {
        return Math.floor(newMillis / MILLIS_MINUTES);
      }
    }
    return 0;
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
      onChange(params);
    }
  };

  return (
    <div className="flex flex-row space-x-5">
      <div className="flex flex-row w-1/3 space-x-3 align-baseline">
        <input
          className="w-4/5 border rounded border-gray-200 p-1"
          type="number"
          min={0}
          defaultValue={
            instruction.param !== null
              ? getDaysFromMillis(instruction.param)
              : 0
          }
          ref={daysRef}
          onBlur={sendParams}
        />
        <span>days</span>
      </div>
      <div className="flex flex-row w-1/3 space-x-3">
        <input
          className="w-4/5 border rounded border-gray-200 p-1"
          type="number"
          max={23}
          min={0}
          defaultValue={
            instruction.param !== null
              ? getHoursFromMillis(instruction.param)
              : 0
          }
          ref={hoursRef}
          onBlur={sendParams}
        />
        <span>hours</span>
      </div>
      <div className="flex flex-row w-1/3 space-x-3">
        <input
          className="w-4/5 border rounded border-gray-200 p-1"
          type="number"
          max={59}
          min={0}
          defaultValue={
            instruction.param !== null
              ? getMinutesFromMillis(instruction.param)
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
