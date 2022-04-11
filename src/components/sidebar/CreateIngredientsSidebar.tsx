import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../shared/Button';
import { usePopup } from '../../contexts/popupContext';

interface Props {
  saveForm: () => void;
  validateInputFields: () => boolean;
}

const CreateIngredientsSidebar: React.FC<Props> = ({
  saveForm,
  validateInputFields,
}: Props) => {
  const popup = usePopup();

  const history = useHistory();

  return (
    <React.StrictMode>
      <div className="context h-2/3" />
      <div className="buttons flex flex-col mx-10 items-center">
        <Button
          title="Next step"
          disabled={!validateInputFields()}
          onClick={() => saveForm()}
          className="w-full"
        />
        <Button
          neutral
          className="w-full"
          title="Cancel"
          onClick={() =>
            popup?.open({
              title: 'Are you sure you want to stop creating this recipe?',
              description: 'By leaving this page, all the changes will be lost',
              buttonType: 'warn',
              buttonText: 'Leave',
              onConfirm: () => history.push('/recipe'),
            })
          }
        />
      </div>
    </React.StrictMode>
  );
};

export default CreateIngredientsSidebar;
