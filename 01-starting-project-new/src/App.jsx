// import React from "react"; Not necessary to explicitly import react.
import { CORE_CONCEPTS } from "./data";
import CoreConceptCard from "./components/CoreConceptCard/CoreConceptCard";
import Header from "./components/UI/Header/Header";
import TabButton from "./components/UI/TabButton/TabButton";

const firstConcept = CORE_CONCEPTS[0];
function App() {
  // console.log('App component rendering');
  let tabContent = 'Please click a button'

  function handleSelect(selectedButton) {
    // console.log(`Hello from ${selectedButton} button World!!`);
    tabContent = selectedButton
    // console.log(tabContent);
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
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
