import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../shared/Button';
import { usePopup } from '../../contexts/popupContext';

interface Props {
  saveForm: () => void;
}

const CreateIngredientsSidebar: React.FC<Props> = ({ saveForm }: Props) => {
  const popup = usePopup();

  const history = useHistory();

  return (
    <React.StrictMode>
      <div className="context h-2/3" />
      <div className="buttons flex flex-col mx-10 items-center">
        <Button
          title="Next step"
          onClick={() => saveForm()}
          className="w-full"
        />
        <Button
          neutral
          className="w-full"
          title="Cancel"
          onClick={() =>
            popup?.open({
              title: 'Do you want to stop making new recipe?',
              description: 'By leaving this page, all the changes will be lost',
              onConfirm: () => history.push('/recipe'),
            })
          }
        />
      </div>
    </React.StrictMode>
  );
};

export default CreateIngredientsSidebar;
