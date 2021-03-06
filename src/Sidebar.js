import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { CSS_VARIABLES } from './constants';
import { isValidCssLengthValue } from './utils';

function Sidebar({ children, side, sideWidth, contentMin, space }) {
  return (
    <div
      data-side={side}
      css={css`
        display: flex;
        flex-wrap: wrap;
        gap: ${space};

        & > * {
          flex-grow: 1;
          flex-basis: ${sideWidth || 'auto'};
        }

        &[data-side='left'] > :last-child:not(style),
        &[data-side='right'] > :first-child:not(style) {
          flex-basis: 0;
          flex-grow: 999;
          min-width: ${contentMin};
        }
      `}
    >
      {children}
    </div>
  );
}

Sidebar.defaultProps = {
  side: 'left',
  sideWidth: null,
  contentMin: '50%',
  space: CSS_VARIABLES.space.s1,
};

Sidebar.propTypes = {
  children: PropTypes.node.isRequired,
  side: PropTypes.string,
  sideWidth: PropTypes.string,
  contentMin: PropTypes.string,
  space: isValidCssLengthValue,
};

export default Sidebar;
