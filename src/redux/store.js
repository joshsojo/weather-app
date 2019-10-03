import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import rootReducer from "./root.reducer";

import logger from "redux-logger";
let middlewares = [];
if (process.env.NODE_ENV !== "production") {
  middlewares = [logger];
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);

export default { store, persistor };
