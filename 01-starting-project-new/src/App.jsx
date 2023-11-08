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
  const [selectedTopic, setSelectedTopic] = useState("components");
  const firstConcept = CORE_CONCEPTS[0];
  const { title, description, code } = EXAMPLES[selectedTopic];

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
            <CoreConceptCard
              image={firstConcept.image}
              title={firstConcept.title}
              description={firstConcept.description}
            />

            {/* shortened method using rest */}
            <CoreConceptCard {...CORE_CONCEPTS[1]} />
            <CoreConceptCard {...CORE_CONCEPTS[2]} />
            <CoreConceptCard {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          <div id="tab-content">
            <h3>{title}</h3>
            <p>{description}</p>
            <CodeBlock theme={a11yDark} code={code} />
          </div>
          {/* {selectedTopic} */}
        </section>
      </main>
    </div>
  );
}

export default App;
