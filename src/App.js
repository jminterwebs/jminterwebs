import React, { useState } from "react";

import {
  Avatar,
  Label,
  Heading,
  Card,
  List,
  BodyText,
  Wrapper
} from "jmdesign";

import Contact from "./contact";

import logo from "./images/jminterwebslogo.png";
import "./styles.scss";

function App() {
  const [viewState, setViewState] = useState("none");

  function toggleView() {
    setViewState(viewState === "none" ? "flex" : "none");
  }

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
              <Contact display={viewState} />
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

      <div className="expertise">
        <Heading text="Expertise" size="large" color="dark" heading="h2" />

        <div className="card-wrapper">
          <Card
            title={
              <span className="multi-line-container">
                <span className="multi-line">Technical </span>
                <span className="multi-line">&</span>
                <span className="multi-line">Languages</span>
              </span>
            }>
            <BodyText>
              My main passion is front-end development. I take great care in
              focusing in on writing strong performant code that is highly
              reusable and scalable. Currently I am maintaining and developing a
              multi-tenant e-commence platform as well as a warehousing and
              manufacturing app to pair with it.
            </BodyText>
            <Wrapper customClass="outer-tech-wrapper">
              <Wrapper customClass="tech-wrapper">
                <Label label="JavaScript" />
                <List
                  list={[
                    "React",
                    "Redux",
                    "jQuery",
                    "Jest",
                    " Webpack",
                    "ESLint",
                    "npm",
                    "yarn"
                  ]}
                />
              </Wrapper>
              <Wrapper customClass="tech-wrapper">
                <Label label="Ruby" />
                <List list={["Ruby on Rails", "Rspec", "Sinatra"]} />
              </Wrapper>
              <Wrapper customClass="tech-wrapper">
                <Label label="HTML & CSS" />
                <List
                  list={[
                    "HTML5",
                    "Liquid",
                    "CSS3",
                    "Sass",
                    "Bootstrap",
                    "Zurb Foundation"
                  ]}
                />
              </Wrapper>

              <Wrapper customClass="tech-wrapper">
                <Label label="Databases" />
                <List list={["MYSql", "PostgreSQL"]} />
              </Wrapper>
              <Wrapper customClass="tech-wrapper">
                <Label label="Misc." />
                <List
                  list={[
                    "REST API",
                    "Docker",
                    "Kitematic",
                    "AWS",
                    "Git",
                    "Google Anayltics"
                  ]}
                />
              </Wrapper>
            </Wrapper>
          </Card>
          <Card
            title={
              <span className="multi-line-container">
                <span className="multi-line">Software </span>
                <span className="multi-line">&</span>
                <span className="multi-line">Project Management</span>
              </span>
            }>
            <BodyText>
              I spent several years as a production graphic artist. Over those
              years I developed a keen eye for design and the ability to
              communicate in both the design and development world. It has also
              allowed me to gain valuable insight on how to manage several
              projects and the teams needed to complete them on time.
            </BodyText>
            <Wrapper customClass="outer-tech-wrapper">
              <Wrapper customClass="tech-wrapper">
                <Label label="Software" />

                <List
                  list={["Adobe Creative Cloud", "InVision", "Google G Suite"]}
                />
              </Wrapper>
              <Wrapper customClass="tech-wrapper">
                <Label label="Project Management" />
                <List list={["Jira", "Confluence", "Bitbucket", "Kanban"]} />
              </Wrapper>
            </Wrapper>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
