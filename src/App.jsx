import Player from "./components/Player";

function App() {
  return (
    <main>
      <div className="relative mx-auto my-12 max-w-180 rounded-md bg-linear-to-b from-[#383624] to-[#282617] p-8 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
        <ol className="my-4 flex list-none items-center justify-center gap-8 p-0">
          <Player initialName="Player 1" symbol="X" />
          <Player initialName="Player 2" symbol="O" />
        </ol>
        <h1>GAME BOARD</h1>
      </div>
    </main>
  );  
}

export default App;