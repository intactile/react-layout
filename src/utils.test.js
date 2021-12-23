import { isValidCssLengthValue } from './utils';

const validTestCases = [
  0,
  '0',
  '10px',
  '0.5rem',
  '0.375em',
  '33.333%',
  '21ch',
  'auto',
  'var(--color)',
];

validTestCases.forEach((testCase) => {
  test(`should validate ${testCase} value`, () => {
    const isValid = isValidCssLengthValue(
      { padding: testCase },
      'padding',
      'component name'
    );
    expect(isValid).toBeNull();
  });
});

const invalidTestCases = [10, '10', '0.5', '2po', 'notauto', '--color'];

invalidTestCases.forEach((testCase) => {
  test(`should not validate ${testCase} value`, () => {
    const isValid = isValidCssLengthValue(
      { padding: testCase },
      'padding',
      'component name'
    );
    expect(isValid).toBeInstanceOf(Error);
  });
});
