document.addEventListener("DOMContentLoaded", function () {
  const randomDate = generateRandomDate();
  appendToTimeElement(randomDate);
});

/**
 * Generates a random date between tomorrow and 2 years from now
 * @returns {moment.Moment} A random date as a moment object
 */
function generateRandomDate() {
  const tomorrow = moment().add(1, "days");
  const twoYearsFromNow = moment().add(2, "years");
  const randomTimestamp =
    Math.floor(Math.random() * (twoYearsFromNow - tomorrow + 1)) + tomorrow;
  return moment(randomTimestamp);
}

/**
 * Appends the formatted date to the element with id 'time'
 * @param {moment.Moment} date - The date to be appended
 */
function appendToTimeElement(date) {
  const timeElement = document.getElementById("time");
  if (!timeElement) {
    console.error("Element with id 'time' not found.");
    return;
  }

  const daysFromNow = moment(date).diff(moment(), "days");
  timeElement.innerHTML = `${moment(date).fromNow()} (${daysFromNow} days)`;
}
