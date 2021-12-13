// eslint-disable-next-line import/prefer-default-export
export const returnWhenTruthy = (prop) => (styleGetter) =>
  prop ? styleGetter(prop) : null;
