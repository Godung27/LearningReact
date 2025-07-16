import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");

  const handleSelectSquare = function (rowIndex, colIndex) {
    setActivePlayer(curActivePlayer => curActivePlayer === "X" ? "O" : "X");
    setGameTurns((preTurns) => {
      let curPlayer = "X";

      if (preTurns.length > 0 && preTurns[0].player === "X") {
        curPlayer = "O";
      }

      const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: curPlayer }, ...preTurns];

      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            defaultName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            defaultName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          turns={gameTurns}
        />
      </div>
      <Log />
    </main>
  );
}

export default App
