import Player from "./components/Player/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        {/* Players */}
        <ol id="players">
          <Player initialName="Player 1" symbol="X" />
          <Player initialName="Player 2" symbol="O" />
        </ol>
        Game Board
      </div>
      LOG
    </main>
  );
}

export default App;
