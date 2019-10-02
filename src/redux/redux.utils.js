import yourHandle from "countrycitystatejson";

export const addToStates = async (selectedCountry, states, stateOpitons) => {
  try {
    const statesArray = await [yourHandle.getCountryByShort(selectedCountry)];
    await statesArray.map(state => states.push(Object.keys(state.states)));
    await states.map(item =>
      item.map(real =>
        stateOpitons.push({
          value: real,
          label: real
        })
      )
    );
  } catch (error) {
    console.log(Error.message);
  }
};
