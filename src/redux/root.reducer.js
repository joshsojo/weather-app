import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import weather from "./weather/weather.reducer";
import select from "./select/select.reducer";

const rootPersistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["select", "weather"]
};

const rootReducer = combineReducers({
  select: select,
  weather: weather
});

export default persistReducer(rootPersistConfig, rootReducer);
