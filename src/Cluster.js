import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { CSS_VARIABLES } from './constants';

const Cluster = ({ children, space, justify, align }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-wrap: wrap;
        justify-content: ${justify};
        align-items: ${align};
        gap: ${space};
      `}
    >
      {children}
    </div>
  );
};

Cluster.defaultProps = {
  space: CSS_VARIABLES.space.s1,
  justify: 'flex-start',
  align: 'flex-start',
};

Cluster.propTypes = {
  children: PropTypes.node.isRequired,
  space: PropTypes.oneOf(Object.values(CSS_VARIABLES.space)),
  justify: PropTypes.string,
  align: PropTypes.string,
};

export default Cluster;
