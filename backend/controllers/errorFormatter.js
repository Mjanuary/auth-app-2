module.exports = (error_text, error = null) => ({
  errors: [{ msg: error_text, error: error, param: "", location: "body" }],
});
