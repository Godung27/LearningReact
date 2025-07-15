import { use } from "react";
import { useState } from "react";

export default function Player({ defaultName, symbol }) {
  const [playerName, setPlayerName] = useState(defaultName)
  const [isEditing, setIsEditing] = useState(false);

  const handleChangeName = function (event) {
    setPlayerName(event.target.value);
  }

  const handleEditClick = function () {
    // setIsEditing(!isEditing) // NOT Performed Instantly
    setIsEditing(editing => !editing)
  }

  return (
    <li>
      <span className="player">
        {!isEditing && <span className="player-name">{playerName}</span>}
        {isEditing && <input type="text" required value={playerName} onChange={handleChangeName} />}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{!isEditing ? "Edit" : "Save"}</button>
    </li>
  );
}