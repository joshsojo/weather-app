//   constructor() {
//     super();
//     this.state = {
//       countries: [],
//       states: [],
//       cities: [],
//       selectedCountry: "",
//       selectedState: "",
//       selectedCity: "",
//       stateOptions: [],
//       cityOptions: [],
//       weahter: {}
//     };
// const countries = yourHandle.getCountries();
// countries.map(country => this.state.countries.push(country));
//   }

// handleSubmit = e => {
//   e.preventDefault();
// };

// COUNTRY HANDLER
// handleCountry = async selectedCountry => {
//   this.setState({ stateOptions: [] });
//   await this.setState({
//     selectedCountry
//   });
//   try {
//     const statesArray = await [
//       yourHandle.getCountryByShort(this.state.selectedCountry.value)
//     ];
//     await statesArray.map(state =>
//       this.state.states.push(Object.keys(state.states))
//     );
//     await this.state.states.map(item =>
//       item.map(real =>
//         this.state.stateOptions.push({
//           value: real,
//           label: real
//         })
//       )
//     );
//   } catch (error) {
//     console.log(Error.message);
//   }
// };

// STATE HANDLER

// handleState = async selectedState => {
//   await this.setState({
//     selectedState
//   });
//   await this.setState({
//     cityOptions: []
//   });
//   try {
//     const citiesArray = yourHandle.getCities(
//       this.state.selectedCountry.value,
//       selectedState.value
//     );

//     await citiesArray.map(city => this.state.cities.push(city));

//     await this.state.cities.map(item =>
//       this.state.cityOptions.push({
//         value: item,
//         label: item
//       })
//     );
//   } catch (error) {
//     console.log(Error.message);
//   }
// };

// CITY HANDLER

// handleCity = async selectedCity => {
//   await this.setState({
//     selectedCity
//   });
//   console.log("Done");
// };

// handleSubmit = async event => {
//   event.preventDefault();
//   const city = this.state.selectedCity.value;
//   const country = this.state.selectedCountry.value;
//   console.log("Submited");
//   await fetch(
//     `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}`
//   )
//     .then(response => response.json())
//     .then(result => {
//       this.state.weahter = result;
//     });
// };
