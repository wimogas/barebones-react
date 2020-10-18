import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import {
  Button,
  Block,
  Text,
  Input,
  FormContainer,
  BackButton
} from "../components";

import { register } from "../redux/actions/auth.actions";
import { setAlert } from "../redux/actions/ui.actions";

const SignUpPage = ({ user, history, register, setAlert }) => {
  const [name, SetName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignIn = e => {
    e.preventDefault();
    if (email && password && password === confirmPassword) {
      register(name, email, password);
    } else if (password !== confirmPassword) {
      setAlert("Passwords do not match", "danger", 0);
    }
  };
  const [redirectTo, setRedirectTo] = useState(false);

  useEffect(() => {
    if (user) {
      setRedirectTo(true);
    }
  }, [user]);
  return (
    <>
      <Block center middle>
        <Block card>
          <Block>
            <Text middle h1>Create an Account</Text>
          </Block>
          <Block style={{width: "100%"}} flex={"1"}>
            <FormContainer
              onSubmit={e => handleSignIn(e)}
              style={{ margin: "16px 0px" }}
            >
              <Input
                type={"text"}
                name={"name"}
                value={name}
                placeholder={"Name"}
                handleChange={e => SetName(e.target.value)}
                style={{ marginBottom: "16px" }}
              />
              <Input
                type={"text"}
                name={"email"}
                value={email}
                placeholder={"Email"}
                handleChange={e => setEmail(e.target.value)}
                style={{ marginBottom: "16px" }}
              />
              <Input
                type={"password"}
                name={"password"}
                value={password}
                placeholder={"Password"}
                handleChange={e => setPassword(e.target.value)}
                style={{ marginBottom: "16px" }}
              />
              <Input
                type={"password"}
                name={"confirmpassword"}
                value={confirmPassword}
                placeholder={"Confirm Password"}
                handleChange={e => setConfirmPassword(e.target.value)}
                style={{ marginBottom: "16px" }}
              />
              <Button full primary type={"submit"}>
                Create an account
              </Button>
            </FormContainer>
          </Block>
        </Block>
      </Block>
    </>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user
});

const mapDispatchToProps = dispatch => ({
  register: (name, email, password) =>
    dispatch(register(name, email, password)),
  setAlert: (msg, alertType) => dispatch(setAlert(msg, alertType))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
