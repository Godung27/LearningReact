import Input from "./Input.jsx";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation.js"
import { useInput } from "../hooks/useInput.js";

export default function StateLogin() {
  const {
    value: emailValue,
    handleInputBlur: handleEmailBlur,
    handleInputChange: handleEmailChange,
    hasError: emailHasError,
  }
    = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleInputBlur: handlePasswordBlur,
    handleInputChange: handlePasswordChange,
    hasError: passwordHasError,
  }
    = useInput("", (value) => hasMinLength(value, 7));

  const handleSubmit = function (e) {
    e.preventDefault();

    if (emailHasError || passwordHasError) {
      return;
    }

    console.log(emailValue, passwordValue);
  }

  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [enteredValues, setEnteredValues] = useState({
  //   email: "",
  //   password: "",
  // });

  // const [didEdit, setDidEdit] = useState({
  //   email: false,
  //   password: false,
  // });

  // const emailIsInvalid = didEdit.email && (!isEmail(enteredValues.email) || !isNotEmpty(enteredValues.email));
  // const passwordIsInvalid = didEdit.password &&
  //   (!isNotEmpty(enteredValues.password) || !hasMinLength(enteredValues.password, 7));

  // const handleInputChange = function (identifier, value) {
  //   setEnteredValues(preValues => ({
  //     ...preValues,
  //     [identifier]: value,
  //   }));

  //   setDidEdit(preEdit => ({
  //     ...preEdit,
  //     [identifier]: false,
  //   }));
  // }

  // const handleInputBlur = function (identifier) {
  //   setDidEdit(preEdit => ({
  //     ...preEdit,
  //     [identifier]: true,
  //   }));
  // }

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
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          value={emailValue}
          error={emailHasError && "Please enter a valid email address."}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={handlePasswordBlur}
          onChange={handlePasswordChange}
          value={passwordValue}
          error={passwordHasError && "Please enter a valid password."}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
