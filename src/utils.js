export const returnWhenTruthy = (prop) => (styleGetter) =>
  prop ? styleGetter(prop) : null;

const isCssLength = (value) => {
  return /^[+-]?\d*\.?\d+(\s)*(px|em|rem|ch|vh|vw|%)$/.test(value);
};

const isCssPercentage = (value) => {
  return /^[+-]?\d*\.?\d+(\s)*%$/.test(value);
};

const isCssVar = (value) => {
  return /^var\(--\S*(,\s?\S*)?\)$/.test(value);
};

const isCssAuto = (value) => {
  return value === 'auto';
};

const isZero = (value) => {
  return value === 0 || value === '0';
};

export const isValidCssLengthValue = (props, propName, componentName) => {
  const value = props[propName];

  if (
    !isZero(value) &&
    !isCssLength(value) &&
    !isCssPercentage(value) &&
    !isCssAuto(value) &&
    !isCssVar(value)
  ) {
    return new Error(
      `Invalid prop \`${propName}\` supplied to` +
        ` \`${componentName}\`. Validation failed.` +
        `Supply a valid CSS length, percentage, CSS variable or ‘auto’`
    );
  }
  return null;
};
