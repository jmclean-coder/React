export default function TabButton({ children, isSelected, ...props }) { // Forwarded props!
    console.log('TabButton Component rendering');

  return (
    <li>
      <button className={isSelected ? 'active' : ''} {...props}>{children}</button>
    </li>
  ); //the children prop!
}
