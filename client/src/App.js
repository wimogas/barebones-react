import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

import { PrivateRoute, Spinner, Alert } from "./components";
import ScrollToTop from "./utils/ScrollToTop";

import HomePage from "./pages/HomePage";
import MainScreen from "./pages/MainScreen";
import UserPage from "./pages/UserPage";
import SignInPage from "./pages/SignInPage";
import SignupPage from "./pages/SignUpPage";

import Posts from "./components/Posts";
import Post from "./components/Post";

import { loadUser } from "./redux/actions/auth.actions";

import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const CustomWrapper = styled.div`
  max-width: calc(775px - 32px);
  margin: auto;
  padding: 16px;
`;

const App = ({ loadUser, loading }) => {
  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Spinner large />;
  }

  return (
    <CustomWrapper>
      <Router>
        <Alert />
        <ScrollToTop />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <PrivateRoute path="/main-screen" component={MainScreen} />
          <PrivateRoute path="/user" component={UserPage} />
          <PrivateRoute exact path="/posts" component={Posts} />
          <PrivateRoute exact path="/posts/:id" component={Post} />
          <Route path="/sign-in" component={SignInPage} exact />
          <Route path="/sign-up" component={SignupPage} exact />
        </Switch>
      </Router>
    </CustomWrapper>
  );
};

const mapStateToProps = state => ({
  loading: state.auth.loading,
  user: state.auth.user
});

export default connect(mapStateToProps, { loadUser })(App);
