import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import {ReactComponent as Logo} from '../assets/logo.svg'
import { FaArrowLeft } from "react-icons/fa";

import {Text, Block, Button} from "../components";
import SignInPage from "./SignInPage";
import SignUpPage from "./SignUpPage";

const HomePage = ({ user }) => {
  const [redirectTo, setRedirectTo] = useState(false);
  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);
  useEffect(() => {
    if (user) {
      setRedirectTo(true);
    }
  }, [user]);

  const CustomDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 400px;
  align-items: center;
  margin: auto;
  @media screen and (min-width: 500px) {
    min-height: 200px;
  }
`;

  return (
    <Block full>
      {redirectTo ? <Redirect to="/posts" /> : null}
      <CustomDiv>
      {signIn ? (
        <> 
          <Block center middle>
            <Button icon onClick={() => setSignIn(false)}><FaArrowLeft /></Button>
          </Block>
          <SignInPage/>
        </>
      ) : signUp ? (
        <> 
          <Block center middle>
            <Button icon onClick={() => setSignUp(false)}><FaArrowLeft /></Button>
          </Block>
          <SignUpPage/>
        </>
      ) : (
      <>
         <Block center middle>
          <Logo style={{width: "54px", marginBottom: "32px"}}/>
        </Block>
        <Block card primary >
          <Block center middle flex={"2"} style={{padding: "16px"}}>
            <Text h1 white bold style={{marginTop: "10px"}}>Barebones</Text>
            <Text white center style={{padding: "16px"}}>A minimalist React Framework</Text>
          </Block>
          <Block style={{width: "100%", margin: "auto"}}>
            <Button full white onClick={() => setSignIn(true)}>
              Sign in
            </Button>
            <Button full iconWhite onClick={() => setSignUp(true)}>
              Sign up
            </Button>
          </Block>
        </Block>
      </>
      )}
    </CustomDiv>
    </Block>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(HomePage);
