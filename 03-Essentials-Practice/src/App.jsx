import { useState } from "react"

import Header from "./components/Header/Header"
import Input from "./components/Input/input"
import Results from "./components/Results/Results"

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 2700,
    expectedReturn: 7,
    duration: 10,
  });

  const inputValid = userInput.duration >= 1;

  const handleChange = function (inputTopic, newValue) {
    setUserInput(preUserInput => {
      return {
        ...preUserInput,
        [inputTopic]: Number(newValue),
      }
    })
  }

  return (
    <>
      <Header />
      <Input
        userInput={userInput}
        onChange={handleChange}
      />
      {
        inputValid ?
          <Results input={userInput} /> :
          <p className="center">Please enter Duration greater than 0.</p>
      }
    </>
  )
}

export default App
