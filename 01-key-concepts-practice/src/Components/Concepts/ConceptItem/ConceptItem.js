
const ConceptItem = props => {
  return <li className="concept">
          <img src="TODO: IMAGE" alt="TODO: TITLE" />
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </li>;
};

export default ConceptItem;
