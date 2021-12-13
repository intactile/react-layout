import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { CSS_VARIABLES } from './constants';
import { returnWhenTruthy } from './utils';

const guttersStyle = (gutters) => css`
  padding-left: ${gutters};
  padding-right: ${gutters};
`;

const andTextStyle = () => css`
  text-align: center;
`;

const intrinsicStyle = () => css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Center = ({ children, gutters, max, andText, intrinsic }) => {
  return (
    <div
      css={css`
        box-sizing: content-box;
        margin-left: auto;
        margin-right: auto;
        max-width: ${max};
        ${returnWhenTruthy(gutters)(guttersStyle)}
        ${returnWhenTruthy(andText)(andTextStyle)}
      ${returnWhenTruthy(intrinsic)(intrinsicStyle)}
      `}
    >
      {children}
    </div>
  );
};

Center.defaultProps = {
  gutters: null,
  max: CSS_VARIABLES.measure,
  andText: false,
  intrinsic: false,
};

Center.propTypes = {
  children: PropTypes.node.isRequired,
  gutters: PropTypes.oneOf(Object.values(CSS_VARIABLES.space)),
  max: PropTypes.string,
  andText: PropTypes.bool,
  intrinsic: PropTypes.bool,
};

export default Center;
