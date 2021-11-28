import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/shared/Button';

interface Props {
  saveForm: () => void;
}

const CreateIngredientsSidebar: React.FC<Props> = ({ saveForm }: Props) => {
  return (
    <div className="h-full pt-10 pr-10">
      <div className="context h-4/6" />
      <div className="buttons text-center flex flex-col">
        <Link to="/recipe">
          <Button title="Cancel" />
        </Link>
        <Button title="Next step" onClick={() => saveForm()} />
      </div>
    </div>
  );
};

export default CreateIngredientsSidebar;
