const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let timeOfYear;
  if (date === null) {
    timeOfYear = 'Unable to determine the time of year!';
  }
  if (!isNaN(date.getTime())) {
    let month = date.getMonth();
    if (month >= 2 && month <= 4) {
      timeOfYear = 'spring';
    } else if (month >= 5 && month <= 7) {
timeOfYear = 'summer';
    } else if (month >= 8 && month <= 10) {
      timeOfYear = 'autumn'; 
    } else {
       timeOfYear = 'winter'; 
    }
  } else {
    throw new Error("Invalid date!");
  }
  return timeOfYear;
}

module.exports = {
  getSeason
};
