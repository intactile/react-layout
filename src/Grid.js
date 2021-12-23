import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { CSS_VARIABLES } from './constants';
import { isValidCssLengthValue } from './utils';

const Grid = ({ children, space, min }) => {
  return (
    <div
      css={css`
        display: grid;
        grid-gap: ${space};
        align-content: start;
        grid-template-columns: 100%;

        @supports (width: min(${min}, 100%)) {
          grid-template-columns: repeat(
            auto-fill,
            minmax(min(${min}, 100%), 1fr)
          );
        }
      `}
    >
      {children}
    </div>
  );
};

Grid.defaultProps = {
  space: CSS_VARIABLES.space.s1,
  min: '250px',
};

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  space: isValidCssLengthValue,
  min: PropTypes.string,
};

export default Grid;
