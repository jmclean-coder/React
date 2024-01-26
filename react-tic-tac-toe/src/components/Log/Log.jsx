export default function Log({ turns }) {
  // outputs an ordered list that stores information about what happened on each players turn
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.square.row}-${turn.square.col}`}>
          {turn.player} selected {turn.square.row},{turn.square.col}
        </li>
      ))}
    </ol>
  );
}
