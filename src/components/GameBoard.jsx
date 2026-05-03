const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard( { onSelectSquare, turns } ) {
    let gameBoard = initialGameBoard;

    for (const turn of turns) {
        const { square, player } = turn;
        const { row, col} = square;
        gameBoard[row][col] = player;
    }

    // function handleSelectSquare(rowIndex, colIndex) {
    //     setGameBoard((prevGameBoard) => {
    //         const updatedGameBoard = prevGameBoard.map((row) => [...row]);
    //         updatedGameBoard[rowIndex][colIndex] = isActivePlayer;
    //         return updatedGameBoard;
    //     })
    //     onSelectSquare();
    // }

    return (
        <ol className="flex flex-col list-none justify-center gap-8 p-0 my-12">
            {gameBoard.map((row, rowIndex) => 
                <li key={rowIndex}>
                    <ol className="flex list-none justify-center gap-8 m-0 p-0">
                        {row.map((playerSymbol, colIndex) =>
                            <li key={colIndex}>
                                <button onClick={() => onSelectSquare(rowIndex,colIndex)} className="w-32 h-32 border-0 bg-[#aca788] text-[#3f3b00] text-7xl cursor-pointer font-display p-4">{playerSymbol}</button>
                            </li>
                        )}
                    </ol>
                </li>
            )}
        </ol>
    );
};