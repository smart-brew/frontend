import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import IngredientType from '../../../types/RecipeData/IngredientType';

interface FormSectionProps {
  inputFields: IngredientType[];
  sectionName: string;

  handleChange: (
    index: number,
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
  handleRemove: (index: number) => void;
  handleAdd: (sectionName: string) => void;
}

const IngredientSection: React.FC<FormSectionProps> = ({
  inputFields,
  sectionName,
  handleAdd,
  handleChange,
  handleRemove,
}) => {
  const options = [
    { value: 'kg', label: 'Kg' },
    { value: 'litre', label: 'l' },
    { value: 'oz', label: 'oz' },
    { value: 'g', label: 'g' },
  ];

  if (!inputFields) {
    return (
      <div className="my-5 text-left space-y-5">
        <div className="text-left font-bold text-2xl space-y-5">
          {sectionName}
        </div>
        <button
          type="button"
          className="px-4 text-xl text-base font-medium text-gray-500 text-left underline"
          onClick={() => handleAdd(sectionName)}
        >
          <div className="space-x-3">
            <FontAwesomeIcon icon={faPlus} color="green" />
            <span>Add ingredient</span>
          </div>
        </button>
      </div>
    );
  }

  return (
    <div className="my-5 text-left">
      <div className="text-left font-bold text-2xl py-5">{sectionName}</div>
      {inputFields.map((inputField) => (
        <div className="flex flex-col text-left" key={inputField.id}>
          <div className="flex flex-row my-3">
            <label htmlFor="amount">
              <input
                className="w-24 px-4 shadow text-xl p-3 rounded-2xl border border-gray-300"
                name="amount"
                type="number"
                value={inputField.amount}
                onChange={(event) => handleChange(inputField.id, event)}
              />
            </label>
            <label htmlFor="units" className="px-1">
              <select
                name="units"
                className="w-20 px-4 shadow text-xl p-3 rounded-2xl border border-gray-300"
                placeholder=" units"
                value={inputField.units}
                onChange={(event) => handleChange(inputField.id, event)}
              >
                {options.map((e) => {
                  return (
                    <option key={e.value} value={e.value}>
                      {e.label}
                    </option>
                  );
                })}
              </select>
            </label>

            <label htmlFor="name" className="mr-3 w-full">
              <input
                type="text"
                className="w-full px-8 shadow text-xl p-3 rounded-2xl border border-gray-300"
                name="name"
                placeholder="Ingredient name"
                value={inputField.name}
                required
                onChange={(event) => handleChange(inputField.id, event)}
              />
            </label>

            <button
              type="button"
              className="ml-6"
              onClick={() => handleRemove(inputField.id)}
            >
              <FontAwesomeIcon icon={faTrashAlt} size="lg" color="red" />
            </button>
          </div>
        </div>
      ))}
      <button
        type="button"
        className="px-4 text-xl text-base font-medium text-gray-500 text-left underline"
        onClick={() => handleAdd(sectionName)}
      >
        <div className="space-x-3">
          <FontAwesomeIcon icon={faPlus} color="green" />
          <span>Add ingredient</span>
        </div>
      </button>
    </div>
  );
};

export default IngredientSection;
