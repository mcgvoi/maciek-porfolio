import React from "react";
//Picures
import home1 from "../img/home1.jpg";
import coding from "../img/coding.svg";
//animations and styles
import { motion } from "framer-motion";
import styled from "styled-components";
import { titleAnim, titleAnim2 } from "../animations";

const IntroSection = () => {
  return (
    <Intro>
      <Description>
        <Hide>
          <motion.h2 variants={titleAnim}>Maciej Wojciechowski</motion.h2>
        </Hide>
        <Hide>
          <motion.h2 variants={titleAnim2}>
            <span>Frontend</span> Developer
          </motion.h2>
        </Hide>
      </Description>
      <Image>
        <img src={coding} alt="laptop" />
      </Image>
    </Intro>
  );
};

export default IntroSection;

const Intro = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Description = styled.div`
  text-align: center;
  margin: 0 2rem;
  padding: 1rem 0rem;

  h2 {
    padding: 0rem 1rem;
    margin: 0.5rem 0rem;
    width: 100%;
    color: #f2edff;
    font-size: 3.5rem;
    line-height: 200%;
    font-weight: bold;

    span {
      color: #0047fa;
      background: black;
      border-radius: 0.5rem;
      padding: 1rem;
    }
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;
const Image = styled(motion.div)`
  flex: 1;
  padding: 0rem 3rem;
  img {
    height: 60vh;
    width: 100%;
  }
  transition: transform 0.8s;
  :hover {
    transform: scale(1.05);
  }
`;
