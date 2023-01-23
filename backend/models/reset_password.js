const pool = require("../config/db");
const Error = require("../controllers/Error");

/**
 * @func      getAllLocationsByDIstrict()
 * @argument  {String} req - server request
 * @desc      check if the district exist
 * @return    {Object} - custom response
 */
const create = async ({ user_id, reset_id, date }) => {
  try {
    let results = await pool.query(
      `INSERT INTO reset_password(user_id, reset_id, date, status)
        VALUES ($1, $2, $3, $4)`,
      [user_id, reset_id, date, 1]
    );
    return results;
  } catch (error) {
    Error(error, {
      type: "reset_password",
      level: "models",
      agruments: { user_id, reset_id, date },
      function: "create",
    });
    throw "Failed to peform the task, try again later";
  }
};

/**
 * @func      find()
 * @argument  {}
 * @desc      check if the resrt code  exist
 * @return    []
 */
const find = async (reset_id) => {
  try {
    let results = await pool.query(
      `SELECT * FROM reset_password WHERE reset_id = $1 ORDER BY date DESC LIMIT 1`,
      [reset_id]
    );
    return results;
  } catch (error) {
    Error(error, {
      type: "reset_password",
      level: "models",
      agruments: { reset_id },
      function: "find",
    });
    throw "Failed to peform the task, try again later";
  }
};

// /**
//  * @func      find()
//  * @argument  {}
//  * @desc      check if the resrt code  exist
//  * @return    []
//  */
// const find = async (reset_id) => {
//   try {
//     let results = await pool.query(
//       `SELECT * FROM reset_password WHERE reset_id = $1`,
//       [reset_id]
//     );
//     return results;
//   } catch (error) {
//     Error(error, {
//       type: "reset_password",
//       level: "models",
//       agruments: { reset_id },
//       function: "find",
//     });
//     throw "Failed to peform the task, try again later";
//   }
// };

/**
 * @func      remove()
 * @argument  {}
 * @desc      remove it from the table
 * @return    []
 */
const remove = async (reset_id) => {
  try {
    let results = await pool.query(
      `DELETE FROM reset_password WHERE reset_id = $1`,
      [reset_id]
    );
    return results;
  } catch (error) {
    Error(error, {
      type: "reset_password",
      level: "models",
      agruments: { reset_id },
      function: "remove",
    });
    throw "Failed to peform the task, try again later";
  }
};

/**
 * @func      clear_old_reset()
 * @argument  {}
 * @desc      remove it from the table
 * @return    []
 */
const clear_old_reset = async (user_id) => {
  try {
    let results = await pool.query(
      `DELETE FROM reset_password WHERE user_id = $1`,
      [user_id]
    );
    return results;
  } catch (error) {
    Error(error, {
      type: "clear_old_reset",
      level: "models",
      agruments: { user_id },
      function: "clear_old_reset",
    });
    throw "Failed to peform the task, try again later";
  }
};

module.exports = {
  create,
  find,
  remove,
  clear_old_reset,
};
