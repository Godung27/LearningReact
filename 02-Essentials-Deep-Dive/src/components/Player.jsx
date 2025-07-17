import { useState } from "react";

export default function Player({ defaultName, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(defaultName)
  const [isEditing, setIsEditing] = useState(false);

  const handleChangeName = function (event) {
    setPlayerName(event.target.value);
  }

  const handleEditClick = function () {
    // setIsEditing(!isEditing) // NOT Performed Instantly
    setIsEditing(editing => !editing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {!isEditing && <span className="player-name">{playerName}</span>}
        {isEditing && <input type="text" required value={playerName} onChange={handleChangeName} />}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{!isEditing ? "Edit" : "Save"}</button>
    </li>
  );
}