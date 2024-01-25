import { useState } from "react";
import Header from "./components/Header/Header";
import UserInput from "./components/UserInput/UserInput";
import Results from "./components/Results/Results";

const initialUserInput = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

const App = () => {
  const [userInput, setUserInput] = useState(initialUserInput);

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [inputIdentifier]: newValue,
    }));
  };

  return (
    <>
      <Header />
      <div id="user-input">
        <UserInput inputHandler={handleChange} userInputState={userInput} />
      </div>
      <Results />
    </>
  );
};

export default App;
