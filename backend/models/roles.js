const pool = require("../config/db");

// Get the active year
const getRoles = async () => {
  try {
    let data = await pool.query("SELECT * FROM roles");
    return data;
  } catch (error) {
    console.log(error);
    throw "Failed to perform the task, try again later";
  }
};

const CreateRole = async ({ role_id, role_name, access }) => {
  try {
    let data = await pool.query(
      `INSERT INTO roles(
         role_id, role_name, access)
        VALUES ($1, $2, $3)`,
      [role_id, role_name, access]
    );
    return data;
  } catch (error) {
    console.log(error);
    throw "Failed to perform the task, try again later";
  }
};

module.exports = {
  getRoles,
  CreateRole,
};
