import { useState, useEffect } from "react";

export default function ProgressBar({ timer }) {
  const [remainingTimer, setRemainingTimer] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("INTERVAL");
      setRemainingTimer(preTime => preTime - 20);
    }, 20)

    return () => {
      clearInterval(interval);
    }
  }, [])

  return <progress value={remainingTimer} max={timer} />
}