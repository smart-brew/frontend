import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/shared/Button';
import CancelButton from '../components/shared/CancelButton';

interface Props {
  saveForm: () => void;
}

const CreateIngredientsSidebar: React.FC<Props> = ({ saveForm }: Props) => {
  return (
    <React.StrictMode>
      <div className="context h-2/3" />
      <div className="buttons flex flex-col mx-10">
        <Button title="Next step" onClick={() => saveForm()} />

        <Link to="/recipe">
          <CancelButton title="Cancel" />
        </Link>
      </div>
    </React.StrictMode>
  );
};

export default CreateIngredientsSidebar;
