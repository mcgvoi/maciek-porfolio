import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import css3Logo from "../img/css3.svg";
import html5Logo from "../img/html5.svg";
import js from "../img/js.svg";
import react from "../img/react.svg";
import firebase from "../img/firebase.svg";

const SkillsSection = () => {
  return (
    <Skills>
      <h2>My Skills</h2>
      <Cards>
        <Card>
          <img src={html5Logo} alt="css_logo" />
          <h3>HTML5</h3>
        </Card>
        <Card>
          <img src={css3Logo} alt="css_logo" />
          <h3>CSS3</h3>
        </Card>
        <Card>
          <img src={js} alt="css_logo" />
          <h3>JAVASCRIPT</h3>
        </Card>
        <Card>
          <img src={react} alt="css_logo" />
          <h3>REACT</h3>
        </Card>
        <Card>
          <i class="fab fa-sass fa-5x"></i>
          <h3>SASS</h3>
        </Card>
        <Card>
          <img src={firebase} alt="css_logo" />
          <h3>FIREBASE</h3>
        </Card>
      </Cards>
    </Skills>
  );
};

const Skills = styled.div`
  height: 90vh;
  margin-top: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  h2 {
    margin-bottom: 5rem;
  }
`;

const Cards = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

const Card = styled(motion.div)`
  height: 9rem;
  width: 9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2rem;
  align-self: center;
  justify-self: center;

  transition: transform 0.8s;
  :hover {
    transform: scale(1.05);
  }

  img {
    height: 6rem;
  }
  i {
    height: 6rem;
    color: white;
  }
  h3 {
    padding: 0.3rem;
  }
`;

export default SkillsSection;
