import React from "react";

import { Avatar, Label, Heading } from "jmdesign";

import logo from "./images/jminterwebslogo.png";
import "./styles.css";

function App() {
  return (
    <div className="wrapper">
      <div className="header">
        <Avatar
          label="John M. Verdone"
          subLabel="Full Stack Engineer"
          initials="JV"
          imageSrc={logo}
        />

        <div className="nav-wrapper">
          <a href="mailto:jmverdone@gmail.com">
            <Label
              label="Contact"
              weight="bolder"
              displayStyle="inline-block"
              labelColor="dark"
            />
          </a>

          <a href="../public/John Verdone Resume.pdf" download>
            <Label
              label="Resume"
              weight="bolder"
              displayStyle="inline-block"
              labelColor="dark"
            />
          </a>

          <a href="https://github.com/jminterwebs/jmdesign" target="_blank">
            <Label
              label="Projects"
              weight="bolder"
              displayStyle="inline-block"
              labelColor="dark"
            />
          </a>
        </div>
      </div>
      <Heading
        text="Under Construction"
        size="x-large"
        color="dark"
        heading="h2"
      />
    </div>
  );
}

export default App;
