import { useState } from "react";
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

  // as long as the duration is greater than zero, call it valid,
  // the other numbers can be negative to calculate other things like liabilities.
  const inputIsValid = userInput.duration >= 1;

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [inputIdentifier]: +newValue, // adding this plus returns the numerical representation of the string
    }));
  };

  return (
    <>
      <div id="user-input">
        <UserInput inputHandler={handleChange} userInputState={userInput} />
      </div>
      { inputIsValid ? <Results userInputState={userInput} /> : <p className='center'>Please a duration greater than 0</p> }
    </>
  );
};

export default App;
