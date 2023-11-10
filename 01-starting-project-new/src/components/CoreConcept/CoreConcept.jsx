import CoreConceptCard from "./components/CoreConceptCard/CoreConceptCard";
import { CORE_CONCEPTS } from "../../data";

export default function CoreConcept() {
  function renderConceptCards() {
    return CORE_CONCEPTS.map((concept) => {
      return <CoreConceptCard {...concept} key={concept.title} />;
    });
  }

  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {/*
        note on approach... common method with one isolated data point
          <CoreConceptCard
            image={firstConcept.image}
            title={firstConcept.title}
            description={firstConcept.description}
          />

        shortened method using rest
         <CoreConceptCard {...CORE_CONCEPTS[1]} />
         <CoreConceptCard {...CORE_CONCEPTS[2]} />
         <CoreConceptCard {...CORE_CONCEPTS[3]} /> */}
        {renderConceptCards()}
      </ul>
    </section>
  );
}
