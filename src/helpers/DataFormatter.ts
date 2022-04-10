const formatNumToDefinedNumOfDecimal = (
  num: string | number,
  decimals: number
): string => {
  if (!num) {
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
