import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {useSpring, animated} from 'react-spring'

import { Text, Block, Button } from "../components";

const HomePage = ({ user, history }) => {
  const [redirectTo, setRedirectTo] = useState(false);
  const animatedTextProps = useSpring({opacity: 1, from: {opacity: 0}})
  const AnimatedText = animated(Text)
  useEffect(() => {
    if (user) {
      setRedirectTo(true);
    }
  }, [user]);

  return (
    <Block full>
      {redirectTo ? <Redirect to="/main-screen" /> : null}
      <Block center middle flex={"2"}>
      <AnimatedText h1 style={animatedTextProps}>barebones-react</AnimatedText>
      </Block>
      <Block center middle flex={"1"}>
        <Button full primary onClick={() => history.push("/sign-up")}>
          Sign up
        </Button>
        <Button full icon onClick={() => history.push("/sign-in")}>
          Sign in
        </Button>
      </Block>
    </Block>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(HomePage);
