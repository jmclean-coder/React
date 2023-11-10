// import React from "react"; Not necessary to explicitly import react.
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from "react";
import { EXAMPLES } from "./data";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import Header from "./components/UI/Header/Header";
import TabButton from "./components/UI/TabButton/TabButton";
import CodeBlock from "./components/UI/CodeBlock/CodeBlock";

function App() {
  console.log("App component rendering");
  // states
  const [selectedTopic, setSelectedTopic] = useState("");
  // const firstConcept = CORE_CONCEPTS[0];

  //conditional content
  let tabContent = <p>Please select a topic</p>;
  if (selectedTopic) {
    const { title, description, code } = EXAMPLES[selectedTopic];

    tabContent = (
      <div id="tab-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <CodeBlock theme={a11yDark} code={code} />
      </div>
    );
  }

  //functions


  function handleSelect(selectedButton) {
    // console.log(`Hello from ${selectedButton} button World!!`);
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }
  return (
    <>
      <Header />
      <main>
        <CoreConcept />
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </>
  );
}

export default App;
