import { FC, Fragment, useCallback, useState, useRef, CSSProperties } from 'react';
import { motion } from 'framer-motion';
import { runIfFn, __DEV__ } from '@chakra-ui/utils';
import { MaybeRenderProp } from '@chakra-ui/react-utils';

import confetti from './Confetti';
import emoji from './Emoji';

const transition = {
  type: 'spring',
  stiffness: 200,
  damping: 2,
};

const variants = {
  confetti: {
    y: 5,
    transition,
  },
  emoji: {
    y: 5,
    transition,
  },
  resting: {
    y: 0,
    x: 0,
    scale: 1,
    transition,
  },
};

export interface IRewardProps {
  type: 'confetti' | 'emoji';
  containerStyle?: CSSProperties | undefined;
  children: MaybeRenderProp<{
    rewardMe: () => void;
  }>;
  elementCount?: number;
  elementSize?: number;
  colors?: Array<string>;
  angle?: number;
  spread?: number;
  decay?: number;
  lifetime?: number;
  startVelocity?: number;
  zIndex?: number;
  random?: () => number;
}

export const Reward: FC<IRewardProps> = ({
  type,
  containerStyle,
  children,
  elementCount,
  elementSize,
  colors,
  angle,
  spread,
  decay,
  lifetime,
  startVelocity,
  zIndex,
  random,
}) => {
  const [state, setState] = useState('resting');
  const containerRef = useRef<HTMLDivElement>(null);

  const rewardMe = useCallback(() => {
    setState(type);

    const config = { elementCount, elementSize, colors, angle, spread, decay, lifetime, startVelocity, zIndex, random };

    switch (type) {
      case 'confetti': {
        confetti(containerRef.current, config);
        break;
      }
      case 'emoji': {
        emoji(containerRef.current, config);
        break;
      }
      default: {
        break;
      }
    }

    setTimeout(() => {
      setState('resting');
    }, 100);
  }, [type, elementCount, elementSize, colors, angle, spread, decay, lifetime, startVelocity, zIndex, random]);

  return (
    <Fragment>
      <div style={containerStyle} ref={containerRef} />
      <motion.div animate={state} variants={variants}>
        {runIfFn(children, { rewardMe })}
      </motion.div>
    </Fragment>
  );
};
