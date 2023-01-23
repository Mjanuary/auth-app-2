const getMonday = (d) => {
  d = new Date(d);
  let day = d.getDay(),
    diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
  return new Date(d.setDate(diff));
};

function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

// getMonday(new Date())

const dateReporing = () => {
  // the week dates
  let date = new Date();
  // let date_ = () => new Date();
  // let first_day_week = getMonday(new Date());
  let first_day_week_day = getMonday(new Date()).toDateString();
  // let last_day_week = first_day_week + 6;

  // last day is the first_day_week day + 6
  // let first_day_week_day = new Date(
  //   new Date().setDate(first_day_week)
  // ).toDateString();
  // let last_day_week_day = new Date(
  //   new Date().setDate(last_day_week)
  // ).toDateString();
  let last_day_week_day = addDays(first_day_week_day, 6).toDateString();

  // get months reports
  let first_day_month = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    1
  ).toDateString();

  let last_day_month = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    0
  ).toUTCString();

  // current day
  let current_day_string =
    new Date().getFullYear() +
    "-" +
    new Date().getMonth() +
    "-" +
    new Date().getDate();

  let current_day = new Date(current_day_string).toUTCString();
  // console.log("---------------------------------");
  // console.log({
  //   current_day,
  //   first_day_week_day,
  //   last_day_week_day,
  //   first_day_month,
  //   last_day_month,
  // });

  return {
    current_day,
    first_day_week_day,
    last_day_week_day,
    first_day_month,
    last_day_month,
  };
};

module.exports = dateReporing;
