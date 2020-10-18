import React from "react";
import { connect } from "react-redux";
import { FaSun, FaMoon} from "react-icons/fa";

import { Text, Block, Button} from "../components";
import { toggleDarkMode} from "../redux/actions/ui.actions";
import { logout } from "../redux/actions/auth.actions";
import {ReactComponent as Avatar} from '../assets/avataaars.svg'

const UserPage = ({ user, logout, isDarkMode, toggleDarkMode }) => {
  return (
    <Block card>
       <Block row middle space={"between"} margin={"0px 0px 16px 0px"}>
        <Block row middle>
          <Avatar style={{maxWidth:"54px", maxHeight: "54px"}}/>
          <Text h1 style={{marginRight: "16px"}}>{user && `${user.name}`}</Text>
        </Block>
      </Block>
      <Block>
        <Text>Name: {user && user.name}</Text>
        <Text>Email: {user && user.email}</Text>
        <Block row middle>
          <Text>Current Mode: </Text>
          <Button icon column onClick={() => toggleDarkMode(isDarkMode)}>
            {!isDarkMode ? <FaSun /> : <FaMoon />}
          </Button>
        </Block>
        <Block row padding={"20px 0px"}>
          <Button alert small onClick={() => logout()}>
            Log out
          </Button>
        </Block>
      </Block>
    </Block>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user,
  isDarkMode: state.ui.isDarkMode,
});

export default connect(mapStateToProps, {logout, toggleDarkMode })(UserPage);
