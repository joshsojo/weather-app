import WeatherActionTypes from "./weather.types";

export const buttonClicked = click => ({
  type: WeatherActionTypes.BUTTON_CLICKED,
  payload: click
});

export const getWeather = data => ({
  type: WeatherActionTypes.GET_WEATHER,
  payload: data
});
