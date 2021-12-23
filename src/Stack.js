import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { CSS_VARIABLES } from './constants';
import { isValidCssLengthValue, returnWhenTruthy } from './utils';

const splitAfterStyle = (splitAfter) => css`
  &:only-child:not(style) {
    height: '100%';
  }

  & > :nth-child(${splitAfter}):not(style) {
    margin-bottom: auto;
  }
`;

const Stack = ({ children, space, splitAfter }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        & > * + * {
          margin-top: ${space};
        }

        ${returnWhenTruthy(splitAfter)(splitAfterStyle)}
      `}
    >
      {children}
    </div>
  );
};

Stack.defaultProps = {
  space: CSS_VARIABLES.space.s1,
  splitAfter: null,
};

Stack.propTypes = {
  children: PropTypes.node.isRequired,
  space: isValidCssLengthValue,
  splitAfter: PropTypes.number,
};

export default Stack;
