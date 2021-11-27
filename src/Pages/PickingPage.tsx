import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  infoGroup: JSX.Element[];
  recipeName: string | undefined;
}

const PickingPage: React.FC<Props> = ({ infoGroup, recipeName }: Props) => {
  return (
    <div className="recipe-choosing h-full w-2/3">
      <div className="flex flex-col h-4/6">
        <div className="text-center text-2xl font-bold">{recipeName}</div>
        <div className="flex flex-col overflow-auto shadow rounded-3xl px-8 m-8 mt-10 h-full">
          {infoGroup}
        </div>
      </div>
    </div>
  );
};

export default PickingPage;
