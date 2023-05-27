export const straggeredFadeIn = {
  initial: {
    opacity: 0,
    translateX: -50,
  },
  animate: (delayIndex) => {
    return {
      opacity: 1,
      translateX: 0,
      transition: {
        delay: delayIndex * 0.3,
        duration: 0.5,
      },
    };
  },
  exit: { opacity: 0 },
};

export const FadeIn = {
  initial: { opacity: 0.9, scale: 1.1 },
  animate: { opacity: 1, scale: 1, transition: { duration: 2 } },
  exit: { opacity: 0.9, scale: 1.1 },
};
