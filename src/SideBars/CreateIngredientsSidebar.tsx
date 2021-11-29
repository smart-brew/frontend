import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/shared/Button';

interface Props {
  saveForm: () => void;
}

const CreateIngredientsSidebar: React.FC<Props> = ({ saveForm }: Props) => {
  return (
    <React.StrictMode>
      <div className="context h-2/3" />
      <div className="buttons flex flex-col">
        <Link to="/recipe">
          <Button title="Cancel" />
        </Link>
        <Button title="Next step" onClick={() => saveForm()} />
      </div>
    </React.StrictMode>
  );
};

export default CreateIngredientsSidebar;
