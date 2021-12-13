import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { CSS_VARIABLES } from './constants';

const Box = ({ children, padding, borderWidth }) => {
  return (
    <div
      css={css`
        padding: ${padding};
        border: ${borderWidth}px solid;
        background-color: inherit;
        /* ↓ For high contrast mode */
        outline: 1px solid transparent;
        outline-offset: -1px;
      `}
    >
      {children}
    </div>
  );
};

Box.defaultProps = {
  padding: CSS_VARIABLES.space.s1,
  borderWidth: 1,
};

Box.propTypes = {
  children: PropTypes.node.isRequired,
  padding: PropTypes.oneOf(Object.values(CSS_VARIABLES.space)),
  borderWidth: PropTypes.number,
};

export default Box;
