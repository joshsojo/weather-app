import WeatherActionTypes from "./weather.types";

const INITIAL_STATE = {
  buttonClicked: false,
  weatherData: []
};

const weatherReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WeatherActionTypes.BUTTON_CLICKED:
      return {
        ...state,
        buttonClicked: action.payload ? false : true
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
