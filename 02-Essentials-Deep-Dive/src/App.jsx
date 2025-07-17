import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations.js"

const deriveActivePlayer = function (gameTurns) {
  let curPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    curPlayer = "O";
  }

  return curPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [activePlayer, setActivePlayer] = useState("X");

  const activePlayer = deriveActivePlayer(gameTurns);

  const handleSelectSquare = function (rowIndex, colIndex) {
    // setActivePlayer(curActivePlayer => curActivePlayer === "X" ? "O" : "X");
    setGameTurns((preTurns) => {
      const curPlayer = deriveActivePlayer(preTurns);

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
      <Log turns={gameTurns} />
    </main>
  );
}

export default App
