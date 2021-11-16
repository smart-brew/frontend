import React, { useRef } from 'react';
import FunctionType from '../../../types/FunctionData/FunctionType';
import ParamType from '../../../types/ParamType';

interface Props {
  instruction: FunctionType;
}

const WaitEditableInstr: React.FC<Props> = ({ instruction }: Props) => {
  const daysRef = useRef<HTMLInputElement>(null);
  const hoursRef = useRef<HTMLInputElement>(null);
  const minutesRef = useRef<HTMLInputElement>(null);

  const convertTimeToMillis = (
    days: number,
    hours: number,
    minutes: number
  ): number => {
    let millis = 0;
    millis += minutes * 60000;
    millis += hours * 3600000;
    millis += days * 86400000;

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

      return { device: null, value: millis };
    }
    return null;
  };

  return (
    <div className="flex flex-row space-x-5">
      <div className="flex flex-row w-1/3 space-x-3 align-baseline">
        <input
          className="w-4/5 border rounded border-gray-200 p-1"
          type="number"
          min={0}
          ref={daysRef}
        />
        <span>days</span>
      </div>
      <div className="flex flex-row w-1/3 space-x-3">
        <input
          className="w-4/5 border rounded border-gray-200 p-1"
          type="number"
          max={23}
          min={0}
          ref={hoursRef}
        />
        <span>hours</span>
      </div>
      <div className="flex flex-row w-1/3 space-x-3">
        <input
          className="w-4/5 border rounded border-gray-200 p-1"
          type="number"
          max={59}
          min={0}
          ref={minutesRef}
        />
        <span>minutes</span>
      </div>
    </div>
  );
};

export default WaitEditableInstr;
