import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { useEffect, useRef, useState } from 'react';
import { CSS_VARIABLES } from './constants';
import { returnWhenTruthy, isValidCssLengthValue } from './utils';

const noBarStyle = () => css`
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Reel = ({ children, space, itemWidth, height, noBar }) => {
  const [overflowing, setOverflowing] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    let resizeObserver;
    let mutationObserver;
    const element = elementRef.current;

    if ('ResizeObserver' in window && element) {
      resizeObserver = new ResizeObserver(() => {
        setOverflowing(element.scrollWidth > element.clientWidth);
      });
      resizeObserver.observe(element);
    }

    if ('MutationObserver' in window && element) {
      mutationObserver = new MutationObserver(() => {
        setOverflowing(element.scrollWidth > element.clientWidth);
      });
      mutationObserver.observe(element, { childList: true });
    }

    return function cleanup() {
      if (resizeObserver) {
        resizeObserver.unobserve(element);
      }
      if (mutationObserver) {
        mutationObserver.disconnect(element);
      }
    };
  }, [elementRef]);

  return (
    <div
      ref={elementRef}
      css={css`
        display: flex;
        overflow-x: auto;
        overflow-y: hidden;
        scrollbar-color: var(--color-light, white) var(--color-dark, dark);
        height: ${height};
        padding-bottom: ${overflowing && !noBar ? space : '0'};

        & > * {
          flex: 0 0 ${itemWidth};
        }

        & > img {
          height: 100%;
          flex-basis: auto;
          width: auto;
        }

        & > * + * {
          margin-left: ${space};
        }

        &::-webkit-scrollbar {
          height: 1rem;
        }

        &::-webkit-scrollbar-track {
          background-color: var(--color-dark, black);
        }

        &::-webkit-scrollbar-thumb {
          background-color: var(--color-dark, black);
          background-image: linear-gradient(
            var(--color-dark, black) 0,
            var(--color-dark, black) 0.25rem,
            var(--color-light, white) 0.25rem,
            var(--color-light, white) 0.75rem,
            var(--color-dark, black) 0.75rem
          );
        }

        ${returnWhenTruthy(noBar)(noBarStyle)}
      `}
    >
      {children}
    </div>
  );
};

Reel.defaultProps = {
  space: CSS_VARIABLES.space.s0,
  itemWidth: 'auto',
  height: 'auto',
  noBar: false,
};

Reel.propTypes = {
  children: PropTypes.node.isRequired,
  space: isValidCssLengthValue,
  itemWidth: PropTypes.string,
  height: PropTypes.string,
  noBar: PropTypes.bool,
};

export default Reel;
