import React from "react";
import { motion } from "framer-motion";
//Animations
import { pageAnimation } from "../animations";

const Contact = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit">
      <h1>CONTACT</h1>
    </motion.div>
  );
};

export default Contact;
