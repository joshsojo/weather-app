import SelectDetailsActionTypes from "./select.types";

export const selectCountry = country => ({
  type: SelectDetailsActionTypes.SELECT_COUNTRY,
  payload: country
});

export const setCountries = countries => ({
  type: SelectDetailsActionTypes.SET_COUNTRIES,
  payload: countries
});

export const selectState = state => ({
  type: SelectDetailsActionTypes.SELECT_STATE,
  payload: state
});

export const setStates = states => ({
  type: SelectDetailsActionTypes.SET_STATES,
  payload: states
});

export const selectCity = city => ({
  type: SelectDetailsActionTypes.SELECT_CITY,
  payload: city
});

export const setCities = cities => ({
  type: SelectDetailsActionTypes.SET_CITIES,
  payload: cities
});
