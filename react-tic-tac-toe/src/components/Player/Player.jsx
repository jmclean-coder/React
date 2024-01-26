import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {

    const [ isEditing, setIsEditing ] = useState(false);
    const [ playerName, setPlayerName ] = useState(initialName);

    const handleEdit = () => {
        // when updating state based on the previous value of that state, I should pass a function to my state update.
        setIsEditing((editing) => !editing);

        if (isEditing) {
          onChangeName(symbol, playerName)
        }
    }

    const handleNameChange = (event) => {
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>

    if (isEditing) {
        editablePlayerName = <input type="text" value={playerName} required onChange={handleNameChange} /> // this is called two way binding.
    }
  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
