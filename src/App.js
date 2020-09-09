/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail, MdAccountCircle } from 'react-icons/md';
import { Card, Thumbnail, Title, Label } from 'jmdesign';

import logo from './images/jminterwebslogo.png';
import './styles.scss';

function App() {
  return (
    <div className="wrapper">
      <Card customClass="avatar-card">
        <Title type="dark" text="John Verdone" />
        <Thumbnail imageSrc={logo} rounded size="large" />
        <Label type="dark" label="Full Stack Web Developer" />
        <span>
          <a href="http://github.com/jminterwebs">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/jmverdone/">
            <FaLinkedinIn />
          </a>
          <a mailto="jmverdone@gmail.com">
            <MdEmail />
          </a>
          <a href="../public/John Verdone Resume.pdf">
            <MdAccountCircle />
          </a>
        </span>
      </Card>
    </div>
  );
}

export default App;
