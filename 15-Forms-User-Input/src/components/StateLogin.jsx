import { useState } from "react";

export default function StateLogin() {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const emailIsInvalid = enteredValues.email !== "" && !enteredValues.email.includes("@");

  const handleSubmit = function (e) {
    e.preventDefault();

    console.log(enteredValues);
  }

  const handleInputChange = function (identifier, value) {
    setEnteredValues(preValues => ({
      ...preValues,
      [identifier]: value,
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
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" onChange={(e) => handleInputChange("email", e.target.value)} value={enteredValues.email} />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email address.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" onChange={(e) => handleInputChange("password", e.target.value)} value={enteredValues.password} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
