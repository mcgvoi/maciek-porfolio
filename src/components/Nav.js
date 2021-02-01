import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Animate
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <Logo>
        <motion.h1>
          M
          <motion.span
            transition={{ duration: 0.75, ease: "easeOut" }}
            animate={{ opacity: pathname === "/" ? "0%" : "100%" }}
            initial={{ opacity: "0%" }}>
            aciej
          </motion.span>
        </motion.h1>
        <motion.h1
          id="wLogo"
          transition={{ duration: 0.75, ease: "easeOut" }}
          animate={{ x: pathname !== "/" ? "0%" : "-30%" }}
          initial={{ x: "-30%" }}>
          W
          <motion.span
            transition={{ duration: 0.75, ease: "easeOut" }}
            animate={{ opacity: pathname === "/" ? "0%" : "100%" }}
            initial={{ opacity: "0%" }}>
            ojciechowski
          </motion.span>
        </motion.h1>
      </Logo>

      <ul>
        <li>
          <Link to="/">About Me</Link>
        </li>
        <li>
          <Link to="/work">My Work</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  z-index: 10;
  position: sticky;
  top: 0;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  background: #020106;
  color: #f2edff;

  ul {
    list-style: none;
    display: flex;
    padding: 2rem;
    li {
      padding: 0rem 2rem;
      font-weight: bolder;
      :hover {
        background: white;
        a {
          color: black;
          transition: 0.5s ease;
        }
      }
      transition: 1s ease;
    }
  }
`;
const Logo = styled(motion.div)`
  margin: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-family: "Big Shoulders Stencil Text", sans-serif;
    font-size: 2.5rem;
  }
  #wLogo {
    margin-left: 0.3rem;
  }
`;

export default Nav;
