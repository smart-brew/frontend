import React from 'react';
import FunctionType from '../../../types/FunctionData/FunctionType';

interface Props {
  instruction: FunctionType;
}

const TemperatureEditableInstr: React.FC<Props> = ({ instruction }: Props) => {
  return <div>{instruction}</div>;
};

export default TemperatureEditableInstr;
