"use client";

import {
  AnimationControls,
  TargetAndTransition,
  Transition,
  motion,
} from "framer-motion";

interface AnimationContainerProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  reverse?: boolean;
  animate?: AnimationControls | TargetAndTransition;
  initial?: boolean | TargetAndTransition | string | string[];
  exit?: TargetAndTransition;
  mode?: string;
  transition?: Transition;
  onClick?: () => void;
}

const AnimationContainer = ({
  children,
  delay,
  reverse,
  className = "",
  animate,
  initial,
  exit,
  mode,
  transition,
  onClick,
}: AnimationContainerProps) => {
  return (
    <motion.div
      className={className}
      initial={
        typeof initial === "boolean"
          ? initial
          : {
              opacity: 0,
              y: reverse ? -20 : 20,
              mode: mode,
            }
      }
      animate={animate || { opacity: 1, y: 0 }}
      exit={exit}
      viewport={{ once: false }}
      transition={
        transition || {
          duration: 0.2,
          delay: delay,
          ease: "easeInOut",
          type: "spring",
          stiffness: 260,
          damping: 20,
        }
      }
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export default AnimationContainer;
