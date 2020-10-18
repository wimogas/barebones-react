import React from "react";
import { connect } from "react-redux";

import { Text, Block } from "../components";

const Main = ({ user }) => {

  return (
    <>
      <Block row middle space={"between"} margin={"0px 0px 16px 0px"}>
        <Text h1>Hello {user && `${user.name}`}</Text>
      </Block>
      <Block row wrap="true" space={"between"}>
      </Block>
    </>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(Main);
