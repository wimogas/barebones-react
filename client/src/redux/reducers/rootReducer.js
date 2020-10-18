import { combineReducers } from "redux";

import { authReducer } from "./auth.reducer";
import { uiReducer } from "./ui.reducer";
import { dataReducer } from "./data.reducer";

const rootReducers = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  data: dataReducer,
});

export default rootReducers;
