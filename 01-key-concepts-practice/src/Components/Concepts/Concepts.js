import ConceptItem from "./ConceptItem/ConceptItem";

const Concepts = ({ conceptsData }) => {

    const renderConceptItems = () => {
        return conceptsData.map( conceptData => {
            return <ConceptItem key={conceptData.id} title={conceptData.title} image={conceptData.image} description={conceptData.description} />
        })
    }

  return (
    <ul id="concepts">
        {renderConceptItems()}
    </ul>
  );
};

export default Concepts;
