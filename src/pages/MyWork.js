import React from "react";
import { motion } from "framer-motion";
//Animations
import { pageAnimation } from "../animations";

const MyWork = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit">
      <h1>My Work</h1>
    </motion.div>
  );
};

export default MyWork;
