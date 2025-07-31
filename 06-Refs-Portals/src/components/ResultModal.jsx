import { useImperativeHandle, useRef } from "react"

export default function ResultModal({ ref, targetTime, remainingTime, onReset }) {
  const dialogInside = useRef();

  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogInside.current.showModal();
      }
    };
  });

  return (
    <dialog className="result-modal" ref={dialogInside}>
      {userLost && <h2>You Lost</h2>}
      {!userLost && <h2>Your Score: {score}</h2>}
      <p>The target time was <strong>{targetTime} seconds.</strong></p>
      <p>You stopped the time with <strong>{formattedRemainingTime} seconds left.</strong></p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  )
}

/*
    // Old React version
import { forwardRef } from "react"

const ResultModal = forwardRef(function ResultModal({ result, targetTime }, ref) {
  return (
    <dialog className="result-modal" ref={ref} >
      <h2>You {result}</h2>
      <p>The target time was <strong>{targetTime} seconds.</strong></p>
      <p>You stopped the time with <strong>... seconds left.</strong></p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  )
});

export default ResultModal;
*/