export default function TabButton({ children, onSelect }) {
    console.log('TabButtoncomponent rendering');

  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  ); //the children prop!
}
