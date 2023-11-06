// import React from "react"; Not necessary to explicitly import react.
import { CORE_CONCEPTS } from "./data";
import CoreConceptCard from "./components/CoreConceptCard/CoreConceptCard";
import Header from "./components/UI/Header/Header";

const firstConcept = CORE_CONCEPTS[0];
function App() {
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
      </main>
    </div>
  );
}

export default App;
