import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  const handleSelectBox = function (rowIndex, colIndex) {
    setGameBoard((preGameBoard) => {
      const updatedBoard = [...preGameBoard.map(innerArr => [...innerArr])];
      updatedBoard[rowIndex][colIndex] = "X"
      return updatedBoard;
    })
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
        <ol>
          {
            row.map((playerSymbol, colIndex) =>
              <li key={colIndex}>
                <button onClick={() => handleSelectBox(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            )}
        </ol>
      </li>)}
    </ol>
  );
}