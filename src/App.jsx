import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

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

  let gameBoard = initialGameBoard.map((row) => [...row]);

  for (const turn of gameTurns) {
     const { square, player } = turn;
     const { row, col } = square;
     gameBoard[row][col] = player;
  }

  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].col];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].col];

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      winner = firstSquareSymbol;
    }
  }

  const hasDraw = !winner && gameBoard.every((row) => row.every((square) => square !== null));

  function handleSelectSquare(rowIndex, colIndex) {
      if (winner || hasDraw) {
        return;
      }

      if (gameBoard[rowIndex][colIndex] !== null) {
        return;
      }
      
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
        {(winner || hasDraw) && <GameOver winner={winner} />}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );  
}

export default App;