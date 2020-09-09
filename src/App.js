/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail, MdAccountCircle } from 'react-icons/md';
import { Card, Thumbnail, Title, Label } from 'jmdesign';

import logo from './images/jminterwebslogo.png';
import './styles.scss';

function App() {
  const copyText = text => {
    const dummy = document.createElement('textarea');
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
  };
  return (
    <div className="wrapper">
      <Card customClass="avatar-card">
        <Title type="dark" text="John Verdone" />
        <Thumbnail imageSrc={logo} rounded size="large" />
        <Label type="dark" label="Full Stack Web Developer" />
        <span>
          <a
            href="http://github.com/jminterwebs"
            target="_blank"
            rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/jmverdone/"
            target="_blank"
            rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
          <a
            onClick={() => copyText('jmverdone@gmail.com')}
            onKeyDown={() => copyText('jmverdone@gmail.com')}
            tabIndex={0}
            role="button">
            <MdEmail />
          </a>
          <a href="../public/John Verdone Resume.pdf" download>
            <MdAccountCircle />
          </a>
        </span>
      </Card>
    </div>
  );
}

export default App;
