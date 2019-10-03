import WeatherActionTypes from "./weather.types";

const INITIAL_STATE = {
  celcius: false,
  weatherData: []
};

const weatherReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WeatherActionTypes.BUTTON_CLICKED:
      return {
        ...state,
        celcius: !state.celcius
      };

    case WeatherActionTypes.GET_WEATHER:
      return {
        ...state,
        weatherData: action.payload
      };

    default:
      return state;
  }
};

export default weatherReducer;
