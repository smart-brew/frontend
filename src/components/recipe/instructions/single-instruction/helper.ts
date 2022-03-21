type Option = {
  label: string;
  optionCodeName: string;
  value: number;
};

export const getSelectedOption = (
  options: Option[],
  selectedOption: string | null
): number => {
  const selected = options.find(
    (option) => option.optionCodeName === selectedOption
  );
  return selected?.value ?? options[0].value;
};
