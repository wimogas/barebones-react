import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import styled from "styled-components";
import Theme from "./constants/Theme";
import "./index.css"; 
import { store } from "./redux/store";

import App from "./App";

const CustomBody = styled.div`
  background-color: ${props => props.theme.colors.background};
  height: 100%;
  min-height: 100vh;
`;

ReactDOM.render(
  <Provider store={store}>
    <Theme>
      <CustomBody>
        <App />
      </CustomBody>
    </Theme>
  </Provider>,
  document.getElementById("root")
);
