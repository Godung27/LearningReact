import { useState, useRef } from "react";

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  const playerName = useRef();

  // const [submitted, setSubmitted] = useState(false);

  // const handleChangeName = function (e) {
  //   setSubmitted(false)
  //   setEnteredPlayerName(e.target.value)
  // }

  const handleClick = function () {
    setEnteredPlayerName(playerName.current.value);
    // setSubmitted(true)
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      <p>
        <input
          ref={playerName}
          type="text"
        // onChange={handleChangeName} 
        // value={enteredPlayerName}   
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
