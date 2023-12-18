export default function GameBoard() {

    const initialGameBoard = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ]
  return (
    <ol id="game-board">
        {
        initialGameBoard.map((row, rowIndex) => <li key={rowIndex}>
            <ol>
                {
                row.map((playerSymbol, colIndex) => <li key={colIndex}>
                    <button>{playerSymbol}</button>
                </li>)
                }
            </ol>
        </li> )
        }
      {/* <li>
        <ol>
          <li></li>
          <li></li>
          <li></li>
        </ol>
      </li>
      <li>
        <ol>
          <li></li>
          <li></li>
          <li></li>
        </ol>
      </li>
      <li>
        <ol>
          <li></li>
          <li></li>
          <li></li>
        </ol>
      </li>

      This is the static way, we want to generate this structure programatically ^^^
      */}
    </ol>
  );
}
