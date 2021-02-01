export const pageAnimation = {
  hidden: {
    scale: 1.2,
    opacity: 0,
    y: -500,
  },
  show: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    y: 500,
    transition: { duration: 0.5 },
  },
};

export const titleAnim = {
  hidden: { y: -200 },
  show: {
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};
export const titleAnim2 = {
  hidden: { y: 200 },
  show: {
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

export const imgContainerAnim = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
  exit: {},
};

export const slideAnim = {
  hidden: {
    x: 1000,
    opacity: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    x: -1000,
  },
};

export const slideAnim2 = {
  hidden: {
    x: -1000,
    opacity: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    x: 1000,
  },
};
