import { mode, transparentize } from '@chakra-ui/theme-tools';
import { keyframes } from '@emotion/react';

const glitch = keyframes`
  0% {
    clip-path: var(--slice-1);
    transform: translate(-20px, -10px);
  }
  10% {
    clip-path: var(--slice-3);
    transform: translate(10px, 10px);
  }
  20% {
    clip-path: var(--slice-1);
    transform: translate(-10px, 10px);
  }
  30% {
    clip-path: var(--slice-3);
    transform: translate(0px, 5px);
  }
  40% {
    clip-path: var(--slice-2);
    transform: translate(-5px, 0px);
  }
  50% {
    clip-path: var(--slice-3);
    transform: translate(5px, 0px);
  }
  60% {
    clip-path: var(--slice-4);
    transform: translate(5px, 10px);
  }
  70% {
    clip-path: var(--slice-2);
    transform: translate(-10px, 10px);
  }
  80% {
    clip-path: var(--slice-5);
    transform: translate(20px, -10px);
  }
  90% {
    clip-path: var(--slice-1);
    transform: translate(-10px, 0px);
  }
  100% {
    clip-path: var(--slice-1);
    transform: translate(0);
  }
`;

type Dict = Record<string, any>;

const baseStyle = {
  '&, &:after': {
    lineHeight: { base: '78px', md: '88px' },
    fontFamily: 'heading',
    bg: '#010101',
    border: 0,
    borderRadius: 'none',
    color: '#fff',
    outline: 'transparent',
    position: 'relative',
    userSelect: 'none',
    touchAction: 'manipulation',
    clipPath: 'polygon(0% 70%, 10% 100%, 100% 100%, 100% 80%, 95% 70%, 95% 30%, 100% 20%, 100% 0%, 0% 0%)',
  },
  '&:after': {
    '--slice-0': 'inset(50% 50% 50% 50%)',
    '--slice-1': 'inset(80% -6px 0 0)',
    '--slice-2': 'inset(50% -6px 30% 0)',
    '--slice-3': 'inset(10% -6px 85% 0)',
    '--slice-4': 'inset(40% -6px 43% 0)',
    '--slice-5': 'inset(80% -6px 5% 0)',
    content: '"ALTERNATE TEXT"',
    display: 'block',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    bg: 'linear-gradient(45deg, transparent 3%, #02D7F2 3%, #02D7F2 5%, #010101 5%)',
    textShadow: '-3px -3px 0px #FFEE08, 3px 3px 0px #02D7F2',
    clipPath: 'var(--slice-0)',
  },
  '&:hover:after': {
    animation: `1s ${glitch}`,
    animationTimingFunction: 'steps(2, end)',
  },
  _hover: {
    boxShadow: '4px 4px 0px #02D7F2',
    color: '#02D7F2',
  },
  _focus: {
    bg: '#FD0130',
    color: '#fff',
    outline: 'none',
  },
  _active: {
    bg: '#02D7F2',
    color: '#010101',
  },
  _disabled: {
    bg: '#CDCDCD',
    color: '#888888',
  },
};

function variantF(props: Dict) {
  return {};
}

const variants = {
  f: variantF,
};

const sizes = {
  lg: {
    h: 12,
    minW: 12,
    fontSize: 'lg',
    px: 6,
  },
  md: {
    h: 10,
    minW: 10,
    fontSize: 'md',
    px: 4,
  },
  sm: {
    h: 8,
    minW: 8,
    fontSize: 'sm',
    px: 3,
  },
  xs: {
    h: 6,
    minW: 6,
    fontSize: 'xs',
    px: 2,
  },
};

const defaultProps = {
  variant: 'f',
  size: 'md',
  colorScheme: 'gray',
};

export default {
  baseStyle,
  variants,
  sizes,
  defaultProps,
};
