import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
//Animations
import { slideAnim, slideAnim2, imgContainerAnim } from "../animations";
//Images
import about_code from "../img/about_code.jpg";
import about_enduro from "../img/about_enduro.jpg";
import about_snowboard from "../img/about_snowboard.jpg";
import about_gym from "../img/about_gym.jpg";

const AboutSection = () => {
  const [element, controls] = useScroll();
  return (
    <About
      variants={imgContainerAnim}
      animate={controls}
      initial="hidden"
      exit="exit"
      ref={element}>
      <Description>
        <h2>About Me</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br></br> Et
          est cumque magnam! <br />
          Aperiam tempore, mollitia corporis eum quam soluta? Veritatis? LOREM20
        </p>
      </Description>
      <Image>
        <motion.img variants={slideAnim} src={about_code} alt="laptop" />
        <motion.img variants={slideAnim2} src={about_enduro} alt="enduro" />
        <motion.img
          variants={slideAnim}
          src={about_snowboard}
          alt="snowboard"
        />
        <motion.img variants={slideAnim2} src={about_gym} alt="gym" />
      </Image>
    </About>
  );
};

const About = styled(motion.div)`
  margin-top: 20rem;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Description = styled.div`
  h2 {
    text-align: center;
  }
  margin: 0rem 3rem;
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Image = styled(motion.div)`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0rem 2rem;
  img {
    width: 100%;
    height: 17vh;
    object-fit: cover;
  }
`;

export default AboutSection;
