import React from "react";

import { Avatar, Wrapper, BodyText, Label, List } from "jmdesign";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faNpm } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function LiveDraft() {
  return (
    <Wrapper customClass="project-wrapper">
      <Wrapper customClass="project-header">
        <Avatar
          label="Live Draft"
          subLabel="Live Fantasy Draft Board"
          initials="LD"
          imageSrc="JMDesignScreenshot.png"
        />
        <div class="project-icon-group">
          <a
            href="https://github.com/jminterwebs/jmdesign"
            target="_blank"
            rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://design.jminterwebs.dev/"
            target="_blank"
            rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGlobe} size="2x" />
          </a>
          <a
            href="https://www.npmjs.com/package/jmdesign"
            target="_blank"
            rel="noopener noreferrer">
            <FontAwesomeIcon icon={faNpm} size="2x" />
          </a>
        </div>
      </Wrapper>

      <BodyText>
        Live Draft is a fantasy draft board for use in for Live Fantasy
        Drafting.
      </BodyText>
      <Label label="Tools Used" />
      <List list={["NFL Fantasy API", "React"]} />
    </Wrapper>
  );
}
