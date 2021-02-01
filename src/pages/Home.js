import React from "react";

//Page Components
import IntroSection from "../components/IntroSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animations";

const Home = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit">
      <IntroSection />
      <AboutSection />
      <SkillsSection />
    </motion.div>
  );
};

export default Home;
