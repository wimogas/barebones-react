import React from "react";
import { connect } from "react-redux";
import {FaRegBell} from 'react-icons/fa'

import { Text, Block, Button, NotificationIcon} from "../components";

import { logout } from "../redux/actions/auth.actions";
import { toggleShowRightSideNav } from '../redux/actions/ui.actions';

const UserPage = ({ user, logout,showRightSideNav, toggleShowRightSideNav, newNotification}) => {
  return (
    <>
       <Block row middle space={"between"} margin={"0px 0px 16px 0px"}>
        <Text h1>My Account</Text>
        <Block row justify={"flex-end"} flex={"0.2"} hide={"desktop"}>
          <Button icon onClick={() => toggleShowRightSideNav(showRightSideNav)}>
            {newNotification && (<NotificationIcon/>)}
            <FaRegBell />
          </Button>
        </Block>
      </Block>
      <Block>
        <Text>Name: {user && user.name}</Text>
        <Text>Email: {user && user.email}</Text>
        <Block row padding={"20px 0px"}>
          <Button alert small onClick={() => logout()}>
            Log out
          </Button>
        </Block>
      </Block>
    </>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user,
  data: state.data.data,
  showRightSideNav: state.ui.showRightSideNav,
  newNotification: state.ui.newNotification
});

export default connect(mapStateToProps, {logout, toggleShowRightSideNav})(UserPage);
