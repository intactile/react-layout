import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { isValidCssLengthValue, returnWhenTruthy } from './utils';

const breakoutStyle = (margin) => () =>
  css`
    max-width: calc(100% - (${margin} * 2));
    max-height: calc(100% - (${margin} * 2));
    overflow: auto;
  `;

const fixedStyle = () => css`
  position: fixed;
`;

const Imposter = ({ children, margin, breakout, fixed }) => {
  return (
    <div
      css={css`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        ${returnWhenTruthy(breakout)(breakoutStyle(margin))}
        ${returnWhenTruthy(fixed)(fixedStyle)}
      `}
    >
      {children}
    </div>
  );
};

Imposter.defaultProps = {
  margin: 0,
  breakout: false,
  fixed: false,
};

Imposter.propTypes = {
  children: PropTypes.node.isRequired,
  margin: isValidCssLengthValue,
  breakout: PropTypes.bool,
  fixed: PropTypes.bool,
};

export default Imposter;
