export const kelvinToFehrenheit = kelvin => {
  return Math.round((((kelvin - 273.15) * 9) / 5 + 32).toFixed(2));
};

export const kelvinToCelcius = kelvin => {
  return Math.round((kelvin - 273.15).toFixed(2));
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
export const getDay = (index = 0) => {
  let round = date.getDay() + index;
  if (round >= 7) {
    round = Math.round(round % 7);
  }
  switch (round) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      return index;
  }
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

export const getTime = hour => {
  if (hour > 12) {
    return `${hour - 12}PM`;
  } else if (hour == "00") {
    return `12AM`;
  } else if (hour == 12) {
    return `12PM`;
  } else {
    return `${parseInt(hour)}AM`;
  }
};
