import React from "react";
//Global style
import GlobalStyle from "./components/GlobalStyle";
//Components
import Home from "./pages/Home";
import MyWork from "./pages/MyWork";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";
//Router
import { Switch, Route, useLocation } from "react-router-dom";
//Animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/work" exact>
            <MyWork />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
