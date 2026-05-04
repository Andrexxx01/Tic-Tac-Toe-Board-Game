export default function GameBoard( { onSelectSquare, board } ) {
    return (
        <ol className="flex flex-col list-none justify-center gap-8 p-0 my-12">
            {board.map((row, rowIndex) => 
                <li key={rowIndex}>
                    <ol className="flex list-none justify-center gap-8 m-0 p-0">
                        {row.map((playerSymbol, colIndex) =>
                            <li key={colIndex}>
                                <button onClick={() => onSelectSquare(rowIndex,colIndex)} className="w-32 h-32 border-0 bg-[#aca788] text-[#3f3b00] text-7xl cursor-pointer font-display p-4" disabled={playerSymbol !== null}>{playerSymbol}</button>
                            </li>
                        )}
                    </ol>
                </li>
            )}
        </ol>
    );
};