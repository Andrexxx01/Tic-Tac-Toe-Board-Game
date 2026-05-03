import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Log from "./components/Log";

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  function handleSelectSquare(rowIndex, colIndex) {
      setGameTurns((prevTurns) => {
        const currentPlayer = deriveActivePlayer(prevTurns);
        const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurns];
        return updatedTurns;
      });
  }

  return (
    <main>
      <div className="relative mx-auto my-12 max-w-180 rounded-md bg-linear-to-b from-[#383624] to-[#282617] p-8 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
        <ol className="my-4 flex list-none items-center justify-center gap-8 p-0">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === "X"}/>
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );  
}

export default App;