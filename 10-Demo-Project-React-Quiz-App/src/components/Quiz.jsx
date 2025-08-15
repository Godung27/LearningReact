import { useState, useCallback } from "react";

import QUESTIONS from "../questions.js"
import QuestionTimer from "./QuestionTimer.jsx";

import quizCompleteImg from "../assets/quiz-complete.png"

export default function Quiz() {
  const [answerState, setAnswerState] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = answerState === "" ? userAnswers.length : userAnswers.length - 1;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectedAnswer = useCallback(function handleSelectedAnswer(selectedAnswer) {
    setAnswerState("answered");
    setUserAnswers(preUserAnswer => {
      return [...preUserAnswer, selectedAnswer];
    });

    setTimeout(() => {
      if (selectedAnswer === QUESTIONS[activeQuestionIndex].answer[0]) {
        setAnswerState("correct");
      } else {
        setAnswerState("wrong");
      }

      setTimeout(() => {
        setAnswerState("");
      }, 2000)
    }, 1000);
  }, [activeQuestionIndex]);

  const handleSkipAnswer = useCallback(() => handleSelectedAnswer(null), [handleSelectedAnswer]);

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="Trophy icon" />
        <h2>Quiz Complete!</h2>
      </div>
    )
  }

  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers]
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          key={activeQuestionIndex}
          timeout={10000}
          onTimeout={() => handleSelectedAnswer(null)}
        />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map(answer => {
            const isSelected = userAnswers[userAnswers.length - 1] === answer;
            let cssClass = "";

            if (answerState === "answered" && isSelected) {
              cssClass = "selected"
            }

            if ((answerState === "correct" || answerState === "wrong") && isSelected) {
              cssClass = answerState;
            }

            return (
              <li key={answer} className="answer">
                <button
                  onClick={() => handleSelectedAnswer(answer)}
                  className={cssClass}
                >
                  {answer}
                </button>
              </li>
            )
          }
          )}
        </ul>
      </div>
    </div>
  )
}