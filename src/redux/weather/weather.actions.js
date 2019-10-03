import WeatherActionTypes from "./weather.types";

export const buttonClicked = () => ({
  type: WeatherActionTypes.BUTTON_CLICKED
});

export const getWeather = data => ({
  type: WeatherActionTypes.GET_WEATHER,
  payload: data
});
