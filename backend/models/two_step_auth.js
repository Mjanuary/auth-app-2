const pool = require("../config/db");

// Get the active year
const generateAuth = async ({
  user_id,
  email,
  code,
  phone,
  generated_time,
  role_id,
}) => {
  try {
    let data = await pool.query(
      `INSERT INTO two_step_factor(
         user_id, email, code, phone, generated_time, role_id)
        VALUES ($1, $2, $3, $4, $5, $6)`,
      [user_id, email, code, phone, generated_time, role_id]
    );
    return data;
  } catch (error) {
    console.log(error);
    throw "Failed to perform the task, try again later";
  }
};

const getGeneratedAuth = async ({ email, code }) => {
  try {
    let data = await pool.query(
      `SELECT * FROM two_step_factor WHERE email = $1 AND code = $2 LIMIT 1`,
      [email, code]
    );
    return data;
  } catch (error) {
    console.log(error);
    throw "Failed to perform the task, try again later";
  }
};

const clearGeneratedAuth = async (email) => {
  try {
    let data = await pool.query(
      `DELETE FROM two_step_factor WHERE email = $1`,
      [email]
    );
    return data;
  } catch (error) {
    console.log(error);
    throw "Failed to perform the task, try again later";
  }
};

module.exports = {
  generateAuth,
  getGeneratedAuth,
  clearGeneratedAuth,
};
