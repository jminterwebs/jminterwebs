import React from "react";
import { List, Label, SubLabel, Title } from "jmdesign";
import "./styles.css";

export default function Resume() {
  return (
    <div>
      <a href="../public/John Verdone Resume.pdf" download>
        PDF Here
      </a>
      <Title text="Techincal Skills :" />
      <Label label="Languages" />
      <div className="skills">
        <div className="skillset">
          <SubLabel subLabel="Javascript" />
          <List unstyled list={["React", "jQuery", "Backbone", "Jest"]} />
        </div>
        <div className="skillset">
          <SubLabel subLabel="CSS3" />
          <List unstyled list={["Bootstrap", "Foundation", "Sass"]} />
        </div>
        <div className="skillset">
          <SubLabel subLabel="Ruby" />
          <List unstyled list={["Rails 4.2 - 6", "Rspec"]} />
        </div>
        <div className="skillset">
          <SubLabel subLabel="Databases" />
          <List unstyled list={["MySql", "Postgres"]} />
        </div>
        <div className="skillset">
          <SubLabel subLabel="Version Control" />
          <List unstyled list={["Git", "Bitbucket", "GitHub"]} />
        </div>
        <div className="skillset">
          <SubLabel subLabel="Misc" />
          <List
            unstyled
            list={[
              "Webpack",
              "ESLint",
              "npm",
              "yarn",
              "Docker",
              "Kitematic",
              "Jenkins",
              "AWS"
            ]}
          />
        </div>
      </div>
      <Label label="Software:" />
      <div className="skills">
        <div className="skillset software">
          <SubLabel subLabel="Adobe Creative Cloud" />
          <List unstyled list={["Illustrator", "Photoshop", "XD"]} />
        </div>
        <div className="skillset software">
          <SubLabel subLabel="Design" />
          <List unstyled list={["Sketch", "Invision"]} />
        </div>
        <div className="skillset software">
          <SubLabel subLabel="Project Managment" />
          <List unstyled list={["Jira", "Conflunce", "Kanban"]} />
        </div>
      </div>
      <Title text="Employment" />
      <Label label="Merchdirect - Full Stack Web Developer" />
      <List
        list={[
          "Translated look boards and design mockups in to HTML5 (Liquid)/CSS/JavaScript for clients",
          "Feature clients include shop.msg.com, store.laautoshow.com and www.jmtstore.com",
          "Troubleshooted and bug fixed a multi-tenant e-commence platform (Rails 4.2, backbone)",
          "Lead developer for internal warehousing application (Rails 4.2, backbone)",
          "Help manage client Shopify stores",
          "Took part in managing AWS",
          "Designed and Developed UI design system using React and Storybook (React 16.7, Storybook 5)",
          "Developed and designed API end points for new dashboard",
          "Building out new internal dashboard in React (React 16.7)"
        ]}
      />
      <Label label="Mara’s Southern Kitchen - Marketing Manager" />
      <List
        list={[
          "Create promotional materials to drive sales for diner events",
          "Partner with owner to create and design seasonal dine-in menus resulting in a 35% increase in sales",
          "Research current trends in menu design",
          "Consult with outside vendors on proper promotional vendor graphics to create a unifying theme"
        ]}
      />
      <Label label="MV Sport - Prepress Art Production Lead" />
      <List
        list={[
          "Managed prepress art production department",
          "Ran cost analysis on updating equipment resulting in 95% decrease in production time and material cost • Developed prepress art production processes, to improve process time by 80%",
          "Partnered with creative department to develop new business lines",
          "Troubleshooted and assisted IT related issues"
        ]}
      />
      <Title text="Education" />
      <Label label="Flatiron School - 2017" />
      <SubLabel subLabel="Full Stack Web Development, Ruby on Rails, and JavaScript" />
      <Label label="State University of New York at Buffalo - 2008" />
      <SubLabel subLabel="Bachelor of Arts in Political Science" />
    </div>
  );
}
