import React from "react";

import { Title, Label, SubLabel, BodyText, Image } from "jmdesign";

import jmdesign from "./JmDesign.png";

export default function Projects() {
  return (
    <div>
      <div className="projectHeader">
        <div>
          <Title text="Jm Design" />
          <Label label=" Design System for React" />
          <a href="https://github.com/jminterwebs/jmdesign">
            <SubLabel subLabel="GitHub" />
          </a>
          <a href="https://design.jminterwebs.dev/">
            <SubLabel subLabel="StoryBook" />
          </a>
          <a href="https://www.npmjs.com/package/jmdesign">
            <SubLabel subLabel="NPM Page" />
          </a>
        </div>
        <a href="https://design.jminterwebs.dev/">
          <Image imageSrc={jmdesign} />
        </a>
      </div>
      <BodyText>
        <p>
          Currently still a work in progress. Jm Design is a design system
          inspired by my favorite parts of Bootstrap, Material, and Polaris. The
          design system when finished will be fully stateless. React Hooks
          whenever a change to the dome is needed, and example being the
          component this tab is in.
        </p>
      </BodyText>
    </div>
  );
}
