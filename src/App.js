import React from "react";

import { Heading, Label, HorizontalTab } from "jmdesign";
import Resume from "./Resume";
import Contact from "./Contact";
import Projects from "./Projects";

function App() {
  return (
    <div className="App">
      <Heading text="John Verdone" heading="h1" color="dark" />
      <Label label="Web Developer" weight="Bolder" />

      <HorizontalTab
        defaultTabIndex={1}
        tabsData={[
          { name: "Resume", body: <Resume />, active: true },
          {
            name: "Project",
            body: <Projects />,
            active: false
          },
          { name: "Contact", body: <Contact />, active: false }
        ]}
      />
    </div>
  );
}

export default App;
