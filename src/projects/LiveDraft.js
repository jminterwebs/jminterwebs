import React from 'react';

import { Avatar, Wrapper, BodyText, Label, List } from 'jmdesign';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

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
        <div className="project-icon-group">
          <a
            href="https://github.com/jminterwebs/Draft-React/tree/2019board"
            target="_blank"
            rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://draft.jminterwebs.dev/"
            target="_blank"
            rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGlobe} size="2x" />
          </a>
        </div>
      </Wrapper>

      <BodyText>
        Currently a work in progress. Live Draft is a fantasy draft board for
        use to use for a live drafting your league. It is best used hooked up to
        a HD TV.
      </BodyText>
      <br />
      <Label label="Tools Used" />
      <List list={['NFL Fantasy API', 'React', 'JMDesign']} />
    </Wrapper>
  );
}
