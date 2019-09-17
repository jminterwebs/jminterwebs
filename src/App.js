/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { Avatar, Label } from 'jmdesign';

import Contact from './contact';
import Projects from './projects/Projects';
import logo from './images/jminterwebslogo.png';
import './styles.scss';

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
          <a href="#">
            <li>
              <Label
                label="Contact"
                weight="bolder"
                displayStyle="inline-block"
                labelColor="dark"
              />
              <Contact />
            </li>
          </a>
          <a href="John Verdone Resume.pdf" download>
            <Label
              label="Resume"
              weight="bolder"
              displayStyle="inline-block"
              labelColor="dark"
            />
          </a>
          <a
            href="https://github.com/jminterwebs/jmdesign"
            target="_blank"
            rel="noopener noreferrer">
            <Label
              label="Github"
              weight="bolder"
              displayStyle="inline-block"
              labelColor="dark"
            />
          </a>
        </div>
      </div>

      <Projects />
    </div>
  );
}

export default App;
