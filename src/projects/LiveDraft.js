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
        Proof of concept of a live fantasy Draft Board. It can be used the
        complete a live 10 team Live fantasy Draft. Currently front end only.
      </BodyText>
      <br />
      <Label label="To Do" />
      <List
        list={[
          'Add Back-End',
          'Allow for different sized leagues',
          'Add full info pages for players.'
        ]}
      />

      <Label label="Tools Used" />
      <List list={['NFL Fantasy API', 'React', 'JMDesign']} />
    </Wrapper>
  );
}
