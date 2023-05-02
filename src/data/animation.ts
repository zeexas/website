export const animeContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0,
    },
  },
};

export const animeContainerStagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.05,
      staggerDirection: -1,
      ease: 'backOut',
    },
  },
};

export const animeItem = {
  hidden: { y: '-200%' },
  show: { y: '0%', transition: { duration: 0.4 } },
};

export const animeBlock = {
  hidden: { y: '-30%' },
  show: { y: '0%', transition: { duration: 0.2 } },
};
