import SelectDetailsActionTypes from "./select.types";

const INITIAL_STATE = {
  countries: [],
  states: [],
  cities: [],
  stateOptions: [],
  cityOptions: []
};

const selectDetailsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SelectDetailsActionTypes.SELECT_COUNTRY:
      return {
        ...state,
        selectedCountry: action.payload
      };

    case SelectDetailsActionTypes.SET_COUNTRIES:
      return {
        ...state,
        countries: action.payload
      };

    case SelectDetailsActionTypes.SELECT_STATE:
      return {
        ...state,
        selectedState: action.payload
      };

    case SelectDetailsActionTypes.SET_STATES:
      return {
        ...state,
        states: action.payload
      };

    case SelectDetailsActionTypes.SELECT_CITY:
      return {
        ...state,
        selectedCity: action.payload
      };

    case SelectDetailsActionTypes.SET_CITIES:
      return {
        ...state,
        cities: action.payload
      };

    default:
      return state;
  }
};

export default selectDetailsReducer;
