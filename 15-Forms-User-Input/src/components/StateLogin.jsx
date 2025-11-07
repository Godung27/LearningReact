import { useState } from "react";

import Input from "./Input.jsx";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation.js"

export default function StateLogin() {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid = didEdit.email && (!isEmail(enteredValues.email) || !isNotEmpty(enteredValues.email));
  const passwordIsInvalid = didEdit.password &&
    (!isNotEmpty(enteredValues.password) || !hasMinLength(enteredValues.password, 7));

  const handleSubmit = function (e) {
    e.preventDefault();

    console.log(enteredValues);
  }

  const handleInputChange = function (identifier, value) {
    setEnteredValues(preValues => ({
      ...preValues,
      [identifier]: value,
    }));

    setDidEdit(preEdit => ({
      ...preEdit,
      [identifier]: false,
    }));
  }

  const handleInputBlur = function (identifier) {
    setDidEdit(preEdit => ({
      ...preEdit,
      [identifier]: true,
    }));
  }

  // const handleChangeEmail = function (e) {
  //   setEnteredEmail(e.target.value);
  // }

  // const handleChangePassword = function (e) {
  //   setEnteredPassword(e.target.value);
  // }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={() => handleInputBlur("email")}
          onChange={(e) => handleInputChange("email", e.target.value)}
          value={enteredValues.email}
          error={emailIsInvalid && "Please enter a valid email address."}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={() => handleInputBlur("password")}
          onChange={(e) => handleInputChange("password", e.target.value)}
          value={enteredValues.password}
          error={passwordIsInvalid && "Please enter a valid password."}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
