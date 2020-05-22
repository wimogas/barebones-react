import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { Text } from "../components";

const CustomSideBlock = styled.div`
  width: 60%;
  height: 100%;
  min-height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  background-color: ${props => props.theme.colors.background};
  z-index: 1001;
  padding: ${props => props.theme.sizes.base}px;
  animation-name: showRightSideBar;
  animation-duration: 0.3s;
  @keyframes showRightSideBar {
      from {
          right: -100%;
      }
      to {
          right: 0;
      }
  }
  border-radius: 32px 0px 0px 32px;
  
`;

const RightSideNav = () => {
  return (
    <CustomSideBlock>
        <Text h1>Notifications</Text>
        <Text>No new notifications</Text>
    </CustomSideBlock>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user,
  data: state.data.items
});

export default connect(mapStateToProps)(RightSideNav);
