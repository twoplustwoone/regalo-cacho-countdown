document.addEventListener("DOMContentLoaded", function () {
  const date = generateRandomDate();
  appendToTimeElement(date);
});

/**
 * Generates a random date between tomorrow and 2 years from now
 * @returns
 */
function generateRandomDate() {
  const tomorrow = moment().add(1, "days");
  const twoYearsFromNow = moment().add(2, "years");
  const randomDate = moment(
    Math.floor(Math.random() * (twoYearsFromNow - tomorrow + 1)) + tomorrow
  );
  return randomDate;
}

function appendToTimeElement(date) {
  const daysFromNow = moment(date).diff(moment(), "days");
  document.getElementById("time").innerHTML = `${moment(
    date
  ).fromNow()} (${daysFromNow} days)`;
}
