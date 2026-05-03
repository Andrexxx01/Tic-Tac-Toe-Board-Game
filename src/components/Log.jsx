export default function Log({ turns }) {
    return (
        <ol className="max-w-80 text-[#3f3b00] list-none my-8 mx-auto p-0 text-center">
            {turns.map((turn) => 
                <li key={`${turn.square.row}${turn.square.col}`} className="rounded-sm m-3 animate-[slide-in-from-left_1s_cubic-bezier(0.075,0.82,0.165,1)_forwards]">
                    {turn.player} selected {turn.square.row}, {turn.square.col}
                </li>)
            }
        </ol>
    );
}