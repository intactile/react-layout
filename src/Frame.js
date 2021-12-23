import PropTypes from 'prop-types';
import { css } from '@emotion/react';

const Frame = ({ children, ratio }) => {
  const [l, h] = ratio.split(':');

  return (
    <div
      css={css`
        position: relative;
        padding-bottom: calc(${h} / ${l} * 100%);

        & > * {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
        }

        & > img,
        & > video {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
      `}
    >
      {children}
    </div>
  );
};

Frame.defaultProps = {
  ratio: '16:9',
};

Frame.propTypes = {
  children: PropTypes.node.isRequired,
  ratio: PropTypes.string,
};

export default Frame;
