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

const PLAYER = {
  X: "Player 1",
  O: "Player 2",
};

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function deriveGameBoard(gameTurns) {
  let gameBoard = initialGameBoard.map((row) => [...row]);

  for (const turn of gameTurns) {
     const { square, player } = turn;
     const { row, col } = square;
     gameBoard[row][col] = player;
  }
  return gameBoard;
}

function deriveWinner(gameBoard, players) {
  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].col];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].col];

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      winner = players[firstSquareSymbol];
    }
  }
  return winner;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState(PLAYER);

  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);
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

  function handleRestart() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers((prevPlayers) => ({
      ...prevPlayers,
      [symbol]: newName,
    }));
  }

  return (
    <main>
      <div className="relative mx-auto my-12 max-w-180 rounded-md bg-linear-to-b from-[#383624] to-[#282617] p-8 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
        <ol className="my-4 flex list-none items-center justify-center gap-8 p-0">
          <Player initialName={players.X} symbol="X" isActive={activePlayer === "X"} onChangeName={handlePlayerNameChange} />
          <Player initialName={players.O} symbol="O" isActive={activePlayer === "O"} onChangeName={handlePlayerNameChange} />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart} />}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );  
}

export default App;