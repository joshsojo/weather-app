import { combineReducers } from "redux";
import weather from "./weather/weather.reducer";
import select from "./select/select.reducer";

const rootReducer = combineReducers({
  select: select,
  weather: weather
});

export default rootReducer;
