import React from 'react';

import Button from '../components/shared/Button';

interface Props {
  setShowPage: (pageName: string) => void;
  saveForm: () => void;
}

const CreateIngredientsSidebar: React.FC<Props> = ({
  setShowPage,
  saveForm,
}: Props) => {
  return (
    <div className="h-full">
      <div className="context h-4/6" />
      <div className="buttons text-center flex flex-col">
        <Button title="Cancel" onClick={() => setShowPage('PickingPage')} />
        <Button title="Next step" onClick={() => saveForm()} />
      </div>
    </div>
  );
};

export default CreateIngredientsSidebar;
