import React from "react";
import {Text} from '../components'
import styled from 'styled-components'

const CustomNotificationWrapper= styled.div`
position: relative;
`
const CustomNotificationIcon = styled.div`
  position: absolute;
  width: 7px;
  height: 7px;
  background-color: ${props => props.theme.colors.alert};
  top: -15px;
  left: 12px;
  border-radius: 50%;
`
const NotificationIcon = () => {
  return (
    <CustomNotificationWrapper>
      <CustomNotificationIcon/>
    </CustomNotificationWrapper>

  );
};

export default NotificationIcon;
