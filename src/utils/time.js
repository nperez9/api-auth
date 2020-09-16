const formatNumber = (num) => {
  return num >= 10 ? num : `0${num}`;
};

/**
 * Returns hours minutes and seconds from seconds
 * @param sec {number}
 * @returns string - Time formatted
 */
function secondsToTime(sec) {
  const secs = Math.round(sec);
  const hours = Math.floor(secs / (60 * 60));

  const divisorForMinutes = secs % (60 * 60);
  const minutes = formatNumber(Math.floor(divisorForMinutes / 60));

  const divisorForSeconds = divisorForMinutes % 60;
  const seconds = formatNumber(Math.ceil(divisorForSeconds));

  return `${hours}hh:${minutes}mm:${seconds}ss`;
}

module.exports = { secondsToTime };
