export const straggeredFadeIn = {
  initial: {
    opacity: 0,
    translateY: 50,
  },
  animate: (delayIndex) => {
    return {
      opacity: 1,
      translateY: 0,
      transition: {
        delay: delayIndex * 0.3,
        duration: 0.5,
      },
    };
  },
  exit: { opacity: 0 },
};

export const FadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0 },
};
