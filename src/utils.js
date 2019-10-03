export const kelvinToFehrenheit = kelvin => {
  return (((kelvin - 273.15) * 9) / 5 + 32).toFixed(2);
};

export const weatherIcon = icon => {
  return `http://openweathermap.org/img/wn/${icon}@2x.png`;
};

export const formatNumber = num => {
  if (num < 1000) return num.toString();
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
const date = new Date();
export const getYear = () => date.getFullYear();
export const getMonth = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  return months[date.getMonth()];
};

export const getDate = () => date.getDate();
export const getDay = () => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  return days[date.getDay()];
};

export const extractTime = dateTime => {
  const [date, time] = dateTime.split(" ");

  const [hour, min, sec] = time.split(":");

  const [year, month, day] = date.split("-");

  const result = {
    date: date,
    time: time,
    hour: hour,
    min: min,
    sec: sec,
    year: year,
    month: month,
    day: day
  };

  return result;
};
