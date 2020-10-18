import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { login } from "../redux/actions/auth.actions";

import {
  Button,
  Block,
  Text,
  Input,
  FormContainer,
  BackButton
} from "../components";
import { setActiveNav } from '../redux/actions/ui.actions';

const SignInPage = ({ user, login, history, setActiveNav }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = e => {
    e.preventDefault();
    if (email && password) {
      login(email, password);
      setActiveNav("main-screen")
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
              <Text center h1>Welcome Back</Text>
            </Block>
            <Block style={{width: "100%"}}>
              <FormContainer onSubmit={e => handleSignIn(e)}>
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
                <Button full primary>
                  Sign in
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

export default connect(mapStateToProps, {login, setActiveNav})(SignInPage);
