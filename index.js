const currentTime = () => {
  const timeObj = new Date();
  // hour, minutes, and seconds
  const [hour, minutes, seconds] = [
    timeObj.getHours(),
    timeObj.getMinutes(),
    timeObj.getSeconds()
  ];
  const isAm = hour < 12 || hour === 0;
  let amPm = isAm ? 'AM' : 'PM';
  // Selecting actualTime div
  const colon = document.createElement('p');
  colon.innerText = ':';
  const actualTime = document.querySelector('.actualTime');
  actualTime.textContent = `${zeroAddition(hour)}:${zeroAddition(
    minutes
  )}:${zeroAddition(seconds)} ${amPm}`;
};

// Zero Addition
const zeroAddition = (number) => {
  return number < 10 ? '0' + number : number;
};
// This function should eliminate 010, 011, 012 hour from being displayed
const correctHour = (whatHour) => {
  whatHour = whatHour >= 13 ? whatHour - 12 : whatHour;

  whatHour = whatHour === 0 ? whatHour + 12 : whatHour;
  return whatHour;
};

// Adds a suffix, 'st', 'nd', 'rd', 'th';
const whichSuffix = (dateOfMonth) => {
  if (dateOfMonth < 10 || dateOfMonth > 20) {
    switch (dateOfMonth % 10) {
      case 1:
        return dateOfMonth + 'st';
      case 2:
        return dateOfMonth + 'nd';
      case 3:
        return dateOfMonth + 'rd';
    }
  }
  return dateOfMonth + 'th';
};

const currentDate = () => {
  const dateObj = new Date();
  // current day, current day of the week, current month, current year
  const [today, weekday, month, year] = [
    dateObj.getDate(),
    dateObj.getDay(),
    dateObj.getMonth(),
    dateObj.getFullYear()
  ];
  // Arrays for weekday and month

  // Selecting actualDate div
  const actualDate = document.querySelector('.actualDate');
  actualDate.textContent =
    week[weekday] +
    ', ' +
    months[month] +
    ' ' +
    whichSuffix(today) +
    ' ' +
    year;
};

const week = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

// Generates 'live/tick' feature of clock
currentTime();
currentDate();
setInterval(() => {
  currentTime();
  currentDate();
}, 1000);
