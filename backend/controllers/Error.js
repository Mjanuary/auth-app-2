const error = (error, path = null) => {
  console.log({
    error: error,
    path: path,
  });
};

module.exports = error;
