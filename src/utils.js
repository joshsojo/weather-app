export const kelvinToFehrenheit = kelvin => {
  return (((kelvin - 273.15) * 9) / 5 + 32).toFixed(2);
};

export const weatherIcon = icon => {
  return `http://openweathermap.org/img/wn/${icon}@2x.png`;
};

export const formatNumber = num => {
  if (num <= 1000) return num.toString();
  let value = num.toString().split("");
  value = value;
  let count = 0;
  let newNumber = [];
  for (let i = value.length - 1; i >= 0; i--) {
    if (count === 3) {
      newNumber.push(",");
      count = 0;
    }
    count += 1;
    newNumber.push(value[i]);
  }
  return newNumber.reverse().join("");
};
