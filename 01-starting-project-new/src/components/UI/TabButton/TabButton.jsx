export default function TabButton({ children, isSelected, ...props }) { // Forwarded props!
    console.log('TabButton Component rendering');

    // todo revisit this to make it a very flexible button? How can this be specific to Tabs?
  return (
    <li>
      <button className={isSelected ? 'active' : ''} {...props}>{children}</button>
    </li>
  ); //the children prop!
}
