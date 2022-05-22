const formatNumToDefinedNumOfDecimal = (
  num: string | number | undefined,
  decimals: number
): string => {
  if (num === undefined || num === null) {
    return 'NaN';
  }
  if (typeof num === 'string') {
    num = parseFloat(num);
  }
  return num.toLocaleString('en-US', {
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals,
  });
};

export { formatNumToDefinedNumOfDecimal };
