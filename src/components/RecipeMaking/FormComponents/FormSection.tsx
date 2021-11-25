import React, { useState } from 'react';
import IngredientType from '../../../types/RecipeData/IngredientType';

interface FormSectionProps {
  unloadChoices: string[];
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

const FormSection: React.FC<FormSectionProps> = (props) => {
  const {
    inputFields,
    sectionName,
    handleAdd,
    handleChange,
    handleRemove,
    unloadChoices,
  } = props;

  const options = [
    { value: 'kg', label: 'KG' },
    { value: 'litre', label: 'l' },
    { value: 'oz', label: 'oz' },
  ];

  if (!inputFields) {
    return (
      <div className="my-5">
        <div className="text-left font-bold flow-root ">{sectionName}</div>
        <button
          type="button"
          className="px-4 text-base font-medium text-gray-500 text-left underline float-right"
          onClick={() => handleAdd(sectionName)}
        >
          &#43; Add ingredient
        </button>
      </div>
    );
  }

  return (
    <div className="my-5">
      <div className="text-left font-bold">{sectionName}</div>
      {inputFields.map((inputField, index: number) => (
        <div className="flex flex-row flow-root ">
          <label htmlFor="amount">
            <input
              className="w-24 px-4 border-2 border-gray-300 "
              name="amount"
              type="number"
              value={inputFields[index].amount}
              onChange={(event) => handleChange(inputFields[index].id, event)}
            />
          </label>
          <label htmlFor="units" className="px-1">
            <select
              name="units"
              className="w-20 px-4  border-2 border-gray-300 "
              placeholder=" units"
              value={inputFields[index].units}
              onChange={(event) => handleChange(inputFields[index].id, event)}
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

          <label htmlFor="name">
            <input
              type="text"
              className="w-80 px-8  border-2 border-gray-300 "
              name="name"
              placeholder="ingredient"
              value={inputFields[index].name}
              required
              onChange={(event) => handleChange(inputFields[index].id, event)}
            />
          </label>

          <button
            type="button"
            className="px-4 text-base font-medium text-gray-500  underline float-right "
            onClick={() => handleAdd(sectionName)}
          >
            &#43; Add ingredient
          </button>

          <button
            type="button"
            className="float-right"
            onClick={() => handleRemove(inputFields[index].id)}
          >
            &#8722;
          </button>
        </div>
      ))}
    </div>
  );
};

export default FormSection;
