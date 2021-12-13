import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { CSS_VARIABLES } from './constants';

function Switcher({ children, space, threshold, limit }) {
  return (
    <div
      css={css`
        display: flex;
        flex-wrap: wrap;
        gap: ${space};

        & > * {
          flex-grow: 1;
          flex-basis: calc((${threshold} - 100%) * 999);
        }

        & > :nth-last-child(n + ${parseInt(limit, 10)} + 1),
        & > :nth-last-child(n + ${parseInt(limit, 10)} + 1) ~ * {
          flex-basis: 100%;
        }
      `}
    >
      {children}
    </div>
  );
}

Switcher.defaultProps = {
  space: CSS_VARIABLES.space.s1,
  threshold: CSS_VARIABLES.measure,
  limit: 4,
};

Switcher.propTypes = {
  children: PropTypes.node.isRequired,
  space: PropTypes.oneOf(Object.values(CSS_VARIABLES.space)),
  threshold: PropTypes.string,
  limit: PropTypes.number,
};

export default Switcher;
