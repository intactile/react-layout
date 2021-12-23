import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { CSS_VARIABLES } from './constants';
import { isValidCssLengthValue } from './utils';

const Cover = ({ children, centered, space, minHeight, noPad }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        min-height: ${minHeight};
        padding: ${!noPad ? space : '0'};

        & > * {
          margin-top: ${space};
          margin-bottom: ${space};
        }

        & > :first-child:not(${centered}) {
          margin-top: 0;
        }

        & > :last-child:not(${centered}) {
          margin-bottom: 0;
        }

        & > ${centered} {
          margin-top: auto;
          margin-bottom: auto;
        }
      `}
    >
      {children}
    </div>
  );
};

Cover.defaultProps = {
  space: CSS_VARIABLES.space.s1,
  centered: 'h1',
  minHeight: '100vh',
  noPad: false,
};

Cover.propTypes = {
  children: PropTypes.node.isRequired,
  space: isValidCssLengthValue,
  centered: PropTypes.string,
  minHeight: PropTypes.string,
  noPad: PropTypes.bool,
};

export default Cover;
