// import React from "react"; Not necessary to explicitly import react.
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from "react";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import CoreConceptCard from "./components/CoreConceptCard/CoreConceptCard";
import Header from "./components/UI/Header/Header";
import TabButton from "./components/UI/TabButton/TabButton";
import CodeBlock from "./components/UI/CodeBlock/CodeBlock";

function App() {
  console.log("App component rendering");
  const [selectedTopic, setSelectedTopic] = useState("");
  // const firstConcept = CORE_CONCEPTS[0];

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

  function renderConceptCards() {
    return CORE_CONCEPTS.map((concept) => {
      return <CoreConceptCard {...concept} key={concept.title}/>
    });
  }

  function handleSelect(selectedButton) {
    // console.log(`Hello from ${selectedButton} button World!!`);
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* note on approach... common method */}
            {/* <CoreConceptCard
              image={firstConcept.image}
              title={firstConcept.title}
              description={firstConcept.description}
            /> */}

            {/* shortened method using rest */}
            {/* <CoreConceptCard {...CORE_CONCEPTS[1]} />
            <CoreConceptCard {...CORE_CONCEPTS[2]} />
            <CoreConceptCard {...CORE_CONCEPTS[3]} /> */}
            {renderConceptCards()}
          </ul>
        </section>
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
          {/* {selectedTopic} */}
        </section>
      </main>
    </div>
  );
}

export default App;
