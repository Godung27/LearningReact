import { useState, useEffect } from "react";

const TIMER = 5000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  const [remainingTimer, setRemainingTimer] = useState(TIMER);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("INTERVAL");
      setRemainingTimer(preTime => preTime - 20);
    }, 20)

    return () => {
      clearInterval(interval);
    }
  }, [])

  useEffect(() => {
    console.log("TIME OUT");
    const timer = setTimeout(() => {
      onConfirm();
    }, TIMER);

    return () => {
      console.log("CLEANING TIME")
      clearTimeout(timer);
    }
  }, [onConfirm])

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <progress value={remainingTimer} max={TIMER} />
    </div>
  );
}
