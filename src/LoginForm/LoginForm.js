import { useState } from "react";
import Panel from "components/Panel/Panel";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import Checkbox from "components/Checkbox/Checkbox";
import "./LoginForm.css";

const LoginForm = () => {
  const [username, setUsername] = useState(null);
  const [pass, setPass] = useState(null);

  const handleSubmit = (type) => {
      return null;
  };

  return (
    <Panel backgroundColor="blue">
      Username: <input
        id = "username"
        onChange={() => setUsername(username)}
        required="required"
      />
      Password: <Input
        id = "password"
        onChange={() => setPass(pass)}
        required="required"
        type="password"
      />
      <Checkbox label={"Remember Me"}/>
      <Button
        onClick={() => handleSubmit()}
        text="Submit"
      />
    </Panel>
  );
};

export default LoginForm;