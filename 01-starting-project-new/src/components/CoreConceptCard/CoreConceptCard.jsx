import './CoreConceptCard.css'

export default function CoreConceptCard({image, title, description}) {
  return <li>
    <img src={image} alt={title}/>
    <h3>{title}</h3>
    <p>{description}</p>
  </li>
}
