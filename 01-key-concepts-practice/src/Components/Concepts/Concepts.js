import ConceptItem from "./ConceptItem/ConceptItem";

const Concepts = ({ conceptsData }) => {

    const renderConceptItems = () => {
        return conceptsData.map( conceptData => {
            return <ConceptItem />
        })
    }

  return (
    <ul id="concepts">
        {renderConceptItems()}
    </ul>
  );
};

export default Concepts;
