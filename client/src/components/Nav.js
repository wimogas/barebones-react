import React from "react";
import { connect } from "react-redux";
import { Button, Block, RightSideNav, NotificationIcon} from "../components";
import styled from "styled-components";
import {darken} from 'polished'
import { FaUser, FaSun, FaMoon, FaHome, FaRegBell, FaTimes, FaShoppingBasket,FaComment} from "react-icons/fa";
import { toggleDarkMode, toggleShowRightSideNav, setActiveNav} from "../redux/actions/ui.actions";

const CustomNav = styled.div`
  position: fixed;
  bottom: 0px;
  left: 0;
  width: calc(100%);
  background-color: ${props => props.theme.isDark ? darken(0.04,props.theme.colors.background) : props.theme.colors.primary};
  padding: ${props => props.theme.sizes.base}px 0px;
  z-index: 500;
  @media screen and (min-width: 500px) {
    top: 0;
    max-height: 50px;
    border-radius: 0px 0px 32px 32px;
  }
  border-radius: 32px 32px 0px 0px;
  box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.2)
`;

const CustomCloseButton = styled.div`
  position:fixed;
  top:0;
  left:0;
  margin: 16px;
  z-index: 1001;
`

const CustomSideNavWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  background-color: ${props => props.theme.isDark ? "black" : props.theme.colors.header};
  opacity: 0.8;
  z-index: 1000;
`;

const Nav = ({
  user,
  cart,
  children,
  history,
  isDarkMode,
  toggleDarkMode,
  showRightSideNav,
  setActiveNav,
  activeNav,
  toggleShowRightSideNav,
  ...props
}) => {

  return (
    <>
        <CustomNav {...props}>
          <Block row space={"evenly"} hide={"desktop"}>
            <Button nav active={activeNav === "main-screen"} onClick={() => {
              setActiveNav("main-screen")
              history.push("/main-screen")
            }}>
              <FaHome />
            </Button>
            <Button nav active={activeNav === "posts"} onClick={() => {
              setActiveNav("posts")
              history.push("/posts")
            }}>
               <FaComment />
            </Button>
            <Button nav active={activeNav === "cart"} onClick={() => {
              setActiveNav("cart")
              history.push("/cart")
            }}>
                {cart && cart.length > 0 && (<NotificationIcon/>)}
               <FaShoppingBasket />
            </Button>
            <Button nav active={activeNav === "user"} onClick={() => {
              setActiveNav("user")
              history.push("/user")
            }}>
              <FaUser />
            </Button>
            <Button nav onClick={() => toggleDarkMode(isDarkMode)}>
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </Button>
          </Block>
          <Block row hide={"mobile"}>
            <Block flex={"0.2"} justify={"flex-start"}>
              <Button nav onClick={() => {
                  setActiveNav("")
                  history.push("/main-screen")
              }}>
                Baseline
              </Button>
            </Block>
            <Block
              row
              justify={"flex-end"}
              flex={"2"}
              margin={"0px 16px 0px 0px"}
            >
              <Button nav active={activeNav === "posts"} onClick={() => {
              setActiveNav("posts")
              history.push("/posts")
            }}>
                <FaComment />
              </Button>
              <Button nav active={activeNav === "cart"} onClick={() => {
              setActiveNav("cart")
              history.push("/cart")
            }}>
                {cart && cart.length > 0 && (<NotificationIcon/>)}
                <FaShoppingBasket />
              </Button>
              <Button nav active={activeNav === "user"} onClick={() => {
              setActiveNav("user")
              history.push("/user")
            }}>
                <FaUser />
              </Button>
              <Button nav onClick={() => toggleDarkMode(isDarkMode)}>
                {isDarkMode ? <FaSun /> : <FaMoon />}
              </Button>
              <Button nav onClick={() => toggleShowRightSideNav(showRightSideNav)}>
                <FaRegBell />
              </Button>
            </Block>
          </Block>
        </CustomNav>
      {showRightSideNav && (
        <>
          <CustomSideNavWrapper onClick={() => toggleShowRightSideNav(showRightSideNav)} />
          <CustomCloseButton>
            <Button close onClick={() => toggleShowRightSideNav(showRightSideNav)} >
              <FaTimes/>
            </Button>
          </CustomCloseButton>
          <RightSideNav />
        </>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user,
  isDarkMode: state.ui.isDarkMode,
  showRightSideNav: state.ui.showRightSideNav,
  activeNav: state.ui.activeNav,
  cart: state.cart.items
});

export default connect(mapStateToProps, { toggleDarkMode, toggleShowRightSideNav, setActiveNav })(Nav);
