import { useState } from "react";

export function useInput(defaultValue, validationFn) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);

  const valueIsValid = validationFn(enteredValue);


  const handleInputBlur = function () {
    setDidEdit(true);
  }

  const handleInputChange = function (e) {
    setEnteredValue(e.target.value);
    setDidEdit(false);
  }

  return {
    value: enteredValue,
    handleInputBlur,
    handleInputChange,
    hasError: didEdit && !valueIsValid
  };
}