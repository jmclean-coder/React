// import React from "react"; Not necessary to explicitly import react.
import { useState } from "react"
import { CORE_CONCEPTS } from "./data";
import CoreConceptCard from "./components/CoreConceptCard/CoreConceptCard";
import Header from "./components/UI/Header/Header";
import TabButton from "./components/UI/TabButton/TabButton";

const firstConcept = CORE_CONCEPTS[0];
function App() {
  const [selectedTopic, setSelectedTopic] = useState('Please click a button');
  console.log('App component rendering');

  function handleSelect(selectedButton) {
    // console.log(`Hello from ${selectedButton} button World!!`);
    setSelectedTopic(selectedButton)
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
            <TabButton onSelect={() => handleSelect('Components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('JSX')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('Props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('State')}>State</TabButton>
          </menu>
          <div id='tab-content'>
            <h3></h3>
            <p></p>
            <pre>
              <code>

              </code>
            </pre>
          </div>
          {/* {selectedTopic} */}
        </section>
      </main>
    </div>
  );
}

export default App;
