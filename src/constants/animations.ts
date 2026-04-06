import { Variants } from 'framer-motion';

export const DURATIONS = {
  instant: 0.1,
  fast: 0.2,
  medium: 0.3,
  slow: 0.45,
  verySlow: 0.6,
};

export const EASINGS = {
  default: [0.4, 0, 0.2, 1] as [number, number, number, number],
  enter: [0.0, 0, 0.2, 1] as [number, number, number, number],
  exit: [0.4, 0, 1, 1] as [number, number, number, number],
};

export const SPRINGS = {
  default: { type: "spring", stiffness: 300, damping: 30 },
  snappy: { type: "spring", stiffness: 400, damping: 35 },
};

// Page Transition Variants
export const pageVariants: Variants = {
  initialForward: {
    x: 60,
    opacity: 0,
  },
  animateForward: {
    x: 0,
    opacity: 1,
    transition: {
      duration: DURATIONS.medium,
      ease: EASINGS.enter,
    },
  },
  exitForward: {
    x: -60,
    opacity: 0,
    transition: {
      duration: DURATIONS.fast + 0.05, // 250ms
      ease: EASINGS.exit,
    },
  },
  initialBackward: {
    x: -60,
    opacity: 0,
  },
  animateBackward: {
    x: 0,
    opacity: 1,
    transition: {
      duration: DURATIONS.medium,
      ease: EASINGS.enter,
    },
  },
  exitBackward: {
    x: 60,
    opacity: 0,
    transition: {
      duration: DURATIONS.fast + 0.05, // 250ms
      ease: EASINGS.exit,
    },
  },
};

// Dashboard Tab Content Variants
export const dashboardContentVariants: Variants = {
  initial: { opacity: 0, y: 8 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: DURATIONS.fast,
      ease: EASINGS.enter,
    }
  },
};

// Tab switching variants
export const tabContentVariants: Variants = {
  initialForward: { opacity: 0, x: 20 },
  animateForward: { opacity: 1, x: 0, transition: { duration: DURATIONS.fast, ease: EASINGS.enter } },
  exitForward: { opacity: 0, x: -20, transition: { duration: 0.15, ease: EASINGS.exit } },
};

// Modal Variants
export const modalVariants: Variants = {
  initial: { y: "100%", opacity: 0 },
  animate: { 
    y: 0, 
    opacity: 1,
    transition: { duration: DURATIONS.slow, ease: EASINGS.enter }
  },
  exit: { 
    y: "100%", 
    opacity: 0,
    transition: { duration: 0.35, ease: EASINGS.exit }
  },
};

export const backdropVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 0.6, transition: { duration: DURATIONS.medium } },
  exit: { opacity: 0, transition: { duration: DURATIONS.slow } },
};
