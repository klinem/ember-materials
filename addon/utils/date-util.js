import Ember from 'ember';

const { typeOf } = Ember;

const MONTH_NAMES = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July',
  'August', 'September', 'October', 'December'];

const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',
  'Saturday'];

export function monthName(month) {
  if (month === undefined || month === null) {
    return null;
  }

  if (typeOf(month) === 'date') {
    month = month.getMonth();
  }

  return MONTH_NAMES[month];
};

export function monthShortName(month) {
  let name = monthName(month);

  if (name === null) {
    return null;
  }

  return name.substring(0, 3);
}

export function weekDayName(day) {
  if (day === undefined || day === null) {
    return null;
  }

  if (typeOf(day) === 'date') {
    day = day.getDay();
  }

  return DAY_NAMES[day];
}

export default {
  monthName,
  monthShortName,
  weekDayName
};
