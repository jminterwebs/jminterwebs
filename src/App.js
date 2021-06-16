/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

import { FaGithub, FaLinkedinIn, FaRegCheckCircle } from 'react-icons/fa';
import { MdEmail, MdAccountCircle } from 'react-icons/md';
import { Card, Thumbnail, Title, Label, CalloutBanner } from 'jmdesign';

import logo from './images/jminterwebslogo.png';
import './styles.scss';

function App() {
  const [toggleClass, setToggleClass] = useState(false);

  const copyText = text => {
    const dummy = document.createElement('textarea');
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);

    setToggleClass(!toggleClass);

    setTimeout(() => {
      setToggleClass(toggleClass);
    }, 3000);
  };

  const toggleHide = toggleClass ? 'show-banner' : 'hide-banner';

  const copiedEmail = (
    <>
      <FaRegCheckCircle /> Email Copied
    </>
  );

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
            className="desktop-link"
            onClick={() => copyText('jmverdone@gmail.com')}
            onKeyDown={() => copyText('jmverdone@gmail.com')}
            tabIndex={0}
            role="button">
            <MdEmail />
          </a>
          <a className="mobile-link" href="mailto:jmverdone@gmail.com">
            <MdEmail />
          </a>
          <a href="../public/JohnVerdoneResume.pdf" download>
            <MdAccountCircle />
          </a>
        </span>
      </Card>
      <div className={`${toggleHide} emailBanner `}>
        <CalloutBanner bodyText={copiedEmail} type="info" />
      </div>
    </div>
  );
}

export default App;
