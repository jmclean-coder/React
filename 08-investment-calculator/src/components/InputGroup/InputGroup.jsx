const InputGroup = ({ name, inputHandler, value, identifier }) => {
  return (
    <div className="input-group">
      <p>
        <label>{name}</label>
        <input
          name={name}
          type="number"
          onChange={(event) =>
            inputHandler(identifier, event.target.value)
          }
          value={value}
        />
      </p>
    </div>
  );
};

export default InputGroup