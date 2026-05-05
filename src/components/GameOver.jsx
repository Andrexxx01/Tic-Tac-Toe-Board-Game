export default function GameOver({ winner, onRestart }) {
    return (
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-[rgba(40,38,23,0.95)] animate-[pop-in_0.5s_cubic-bezier(0.68,-0.55,0.65,0.52)_forwards]">
            <h2 className="m-0 pb-10 font-display text-[4rem] text-center text-[#fcd256]">Game Over!</h2>
            {winner && <p className="text-[2rem] text-center text-[#e1dec7]">{winner} won!</p>}
            {!winner && <p className="text-[2rem] text-center text-[#e1dec7]">It&apos;s a draw!</p>}
            <p className="text-[2rem] text-center text-[#e1dec7] p-10">
                <button onClick={onRestart} className="block my-0 mx-auto text-[1.5rem] bg-none border-0.5 border-[#fcd256] text-[#fcd256] py-2 px-4 rounded-sm cursor-pointer transition-all shadow-[0_0_8px_rgba(255,187,0,0.4)] duration-200 hover:bg-[#fcd256] hover:text-[#3f3b00] hover:shadow-[0_0_20px_rgba(255,187,0,0.8)] hover:scale-110">Rematch!</button>
            </p>
        </div>
    )
}