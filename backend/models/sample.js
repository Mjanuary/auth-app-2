const pool = require("../config/db");

// Get the active year
const getActiveAcademic = async () => {
  try {
    let data = await pool.query(
      "SELECT * FROM accademic_year WHERE status='1' LIMIT 1"
    );
    return data;
  } catch (error) {
    console.log(error);
    throw "Failed to peform the task, try again later";
  }
};

module.exports = {
  getActiveAcademic,
};
