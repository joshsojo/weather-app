import React from "react";

import { Provider } from "react-redux";
import store from "./redux/store";
import WeatherPage from "./pages/weather-page/weather-page.component";

import "./App.css";

const App = () => {
  return (
    // <div>
    <Provider store={store}>
      <WeatherPage />
    </Provider>
    // </div>
  );
};

export default App;
