/**
 * redounts the number
 * @param num number
 */
const formatNumber = (num: number): number | string => {
  return num >= 10 ? num : `0${num}`;
};

/**
 * Returns hours minutes and seconds from seconds
 * @param {number} sec
 * @returns string - Time formatted
 */
export function secondsToTime(sec: number): string {
  const secs = Math.round(sec);
  const hours = Math.floor(secs / (60 * 60));

  const divisorForMinutes = secs % (60 * 60);
  const minutes = formatNumber(Math.floor(divisorForMinutes / 60));

  const divisorForSeconds = divisorForMinutes % 60;
  const seconds = formatNumber(Math.ceil(divisorForSeconds));

  return `${hours}hh:${minutes}mm:${seconds}ss`;
};
