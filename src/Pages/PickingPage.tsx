import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  infoGroup: JSX.Element[];
  recipeName: string | undefined;
}

const PickingPage: React.FC<Props> = ({ infoGroup, recipeName }: Props) => {
  return (
    <div className="recipe-choosing h-screen w-2/3">
      <Link
        to="/"
        className=" underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
      >
        <div className=" flex flex-row text-2xl text-black text-left ml-10">
          &#8592; back
        </div>
      </Link>

      <div className=" flex flex-col h-4/6">
        <div className=" text-center text-2xl font-bold">{recipeName}</div>
        <div className="flex flex-col overflow-auto border-2 border-gray-300 rounded-3xl px-8 m-8 mt-10 h-full">
          {infoGroup}
        </div>
      </div>
    </div>
  );
};

export default PickingPage;
