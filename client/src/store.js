import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

import dungeonsAchievements from "./middlewares/dungeonsAchievements";
import raidsAchievements from "./middlewares/raidsAchievements";

export default function configureStore(initialState = {}) {
  return createStore(
    rootReducer,
    applyMiddleware(thunk, dungeonsAchievements, raidsAchievements)
  );
}
