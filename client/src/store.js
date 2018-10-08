import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

import dungeonAchievementsMiddleware from "./middlewares/dungeonAchievementsMiddleware";

export default function configureStore(initialState = {}) {
  return createStore(rootReducer, applyMiddleware(thunk, dungeonAchievementsMiddleware));
}
