const dateFromatter = (date) => {
  const date_new = new Date(date);
  const year = date_new.getFullYear();
  const month = date_new.getMonth() + 1;
  const day = date_new.getDate();

  return `${year}-${month <= 9 ? "0" + month : month}-${
    day <= 9 ? "0" + day : day
  }`;
};

module.exports = dateFromatter;
