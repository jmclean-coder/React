import InputGroup from "../InputGroup/InputGroup";

const UserInput = ({ inputHandler, userInputState }) => {
  const { initialInvestment, annualInvestment, expectedReturn, duration } =
    userInputState;

    // Honestly i'd probably go with repeating the declarations for each input group, or not even going this far into a refactor at all. Curious if this is a common pattern.
  const renderInputGroups = () => {
    return Object.entries(userInputState).map(([key, value]) => {
      const derivedName = key.replace(/([a-z])([A-Z])/g, "$1 $2");

      return (
        <InputGroup
          name={derivedName}
          inputHandler={inputHandler}
          value={value}
          identifier={key}
        />
      );
    });
  };
  return (
    <section id="user-input">
      {/* <InputGroup name={'Initial Investment'} inputHandler={inputHandler} value={initialInvestment} identifier='initialInvestment'/>
      <InputGroup name={'Annual Investment'} inputHandler={inputHandler} value={annualInvestment} identifier='annualInvestment'/>
      <InputGroup name={'Expected Return'} inputHandler={inputHandler} value={expectedReturn} identifier='expectedReturn'/>
      <InputGroup name={'Duration'} inputHandler={inputHandler} value={duration} identifier='duration'/> */}
      {renderInputGroups()}
    </section>
  );
};

export default UserInput;
