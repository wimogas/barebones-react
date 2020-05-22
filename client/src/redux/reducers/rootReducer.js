import { combineReducers } from "redux";

import { authReducer } from "./auth.reducer";
import { dataReducer } from "./data.reducer";
import { uiReducer } from "./ui.reducer";
import { cartReducer } from "./cart.reducer";

const rootReducers = combineReducers({
  auth: authReducer,
  data: dataReducer,
  ui: uiReducer,
  cart: cartReducer
});

export default rootReducers;
