import CoreConceptCard from "../CoreConceptCard/CoreConceptCard";
import { CORE_CONCEPTS } from "../../data";
import Section from "../UI/Section/Section";

export default function CoreConcept() {
  function renderConceptCards() {
    return CORE_CONCEPTS.map((concept) => {
      return <CoreConceptCard {...concept} key={concept.title} />;
    });
  }

  /*
  note on approach... common method with one isolated data point
    <CoreConceptCard
    image={firstConcept.image}
    title={firstConcept.title}
    description={firstConcept.description}
    />

  shortened method using rest
    <CoreConceptCard {...CORE_CONCEPTS[1]} />
    <CoreConceptCard {...CORE_CONCEPTS[2]} />
    <CoreConceptCard {...CORE_CONCEPTS[3]} />
*/

  return (
    <Section id="core-concepts" title="Core Concepts">
      <ul>{renderConceptCards()}</ul>
    </Section>
  );
}
