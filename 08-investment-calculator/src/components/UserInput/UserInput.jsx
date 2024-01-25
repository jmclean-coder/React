const UserInput = ({ inputHandler, userInputState }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            name="Initial Investment"
            type="number"
            onChange={(event) =>
              inputHandler("initialInvestment", event.target.value)
            }
            value={userInputState.initialInvestment}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Annual Investment</label>
          <input
            name="Annual Investment"
            type="number"
            onChange={(event) =>
              inputHandler("annualInvestment", event.target.value)
            }
            value={userInputState.annualInvestment}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            name="Expected Return"
            type="number"
            onChange={(event) =>
              inputHandler("expectedReturn", event.target.value)
            }
            value={userInputState.expectedReturn}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>duration</label>
          <input
            name="duration"
            type="number"
            onChange={(event) => inputHandler("duration", event.target.value)}
            value={userInputState.duration}
          />
        </p>
      </div>
    </section>
  );
};

export default UserInput;
