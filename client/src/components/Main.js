import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {useTransition, animated} from 'react-spring'
import { FaRegBell } from "react-icons/fa";
import styled from "styled-components";

import { imageItems } from '../components/Images'

import { Text, Block, Button, RightSideNav, NotificationIcon, ItemSkeleton } from "../components";

import { getItems} from "../redux/actions/data.actions"
import { toggleShowRightSideNav } from '../redux/actions/ui.actions';
import { getCart } from '../redux/actions/cart.actions';

const CustomBlock = styled.div`
  background-color: ${props => props.theme.isDark ? props.theme.colors.light : "white"};
  padding: ${props => props.theme.sizes.base}px;
  width: 200px;
  height: 270px;
  border-radius: ${props => props.theme.sizes.radius}px;
  margin-bottom: ${props => props.theme.sizes.base}px;
  @media screen and (max-width: 450px) {
    width: 300px;
  }
`;

const CustomImg = styled.img`
  width: 200px;
  border-radius: 22px;
`

const Main = ({ user, getItems, data: {items}, cart, showRightSideNav, toggleShowRightSideNav, newNotification, getCart }) => {

  useEffect(() => {
    if(items.length === 0 || cart.length === 0) {
      getItems();
      getCart();
    }
  }, []);

  const transitions = useTransition(items, item => item._id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity:0 },
  })

  return (
    <>
    {showRightSideNav && (
      <RightSideNav/>
    )}
      <Block row middle space={"between"} margin={"0px 0px 16px 0px"}>
        <Text h1>Hello {user && `${user.name}`}</Text>
        <Block row justify={"flex-end"} flex={"0.2"} hide={"desktop"}>
          <Button icon onClick={() => toggleShowRightSideNav(showRightSideNav)}>
            {newNotification && (<NotificationIcon/>)}
            <FaRegBell />
          </Button>
        </Block>
      </Block>
      <Block row wrap="true" space={"between"}>
        {items && items.length > 0 ? (
          transitions.map(({item,props,key}) => {
            const imageTitle = item.title.toLowerCase()
          return(
            <animated.div key={key} style={props}>
              <Link to={`/main-screen/${item._id}`}>
                <CustomBlock >
                  <Block row center margin={"0px 0px 16px 0px"}>
                    <CustomImg src={imageItems[imageTitle]}/>
                  </Block>
                  <Block>
                    <Text>{item.title}</Text>
                    <Text>{item.price / 100}€</Text>
                  </Block>
                </CustomBlock>
              </Link>
            </animated.div>
          )})) : (
          <ItemSkeleton />
        )}
      </Block>
    </>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user,
  cart: state.cart.items,
  data: state.data,
  showRightSideNav: state.ui.showRightSideNav,
  newNotification: state.ui.newNotification,
});

export default connect(mapStateToProps, { getItems, toggleShowRightSideNav,getCart})(Main);
