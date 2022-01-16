import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { CSS_VARIABLES } from './constants';
import { isValidCssLengthValue } from './utils';

const Cluster = ({ children, space, justify, align, ...rest }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-wrap: wrap;
        justify-content: ${justify};
        align-items: ${align};
        gap: ${space};
      `}
      {...rest}
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
  space: isValidCssLengthValue,
  justify: PropTypes.string,
  align: PropTypes.string,
};

export default Cluster;
