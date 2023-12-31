import reactImg from '../../../assets/react-core-concepts.png'; // this is better for React optimizations
import './Header.css'

function Header() {

  const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

  function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }

  const description = reactDescriptions[getRandomInt(2)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

export default Header;
