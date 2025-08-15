import { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log("SET TIME OUT");
    setTimeout(onTimeout, timeout)
  }, [timeout, onTimeout])

  useEffect(() => {
    console.log("SET INTERVAL");
    setInterval(() => {
      setRemainingTime(preTimeRemaining => preTimeRemaining - 100)
    }, 100)
  }, [])

  return (
    <progress id="question-time" max={timeout} value={remainingTime} />
  );
}