import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import { SubLabel } from "jmdesign";

export default function Contact(props) {
  const { display } = props;

  return (
    <div className={`contact-me ${display}`}>
      <section class="contact-section">
        <a href="mailto:jmverdone@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
          <SubLabel subLabel="jmverdone@gmail.com" />
        </a>
      </section>
      <section class="contact-section">
        <a
          href="https://github.com/jminterwebs/"
          target="_blank"
          rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </section>
      <section class="contact-section">
        <a
          href="https://www.linkedin.com/in/jmverdone/"
          target="_blank"
          rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </section>
    </div>
  );
}
