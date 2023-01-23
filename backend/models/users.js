const pool = require("../config/db");

// FIND USER BY ID OR EMAIL
const getUserByEmailOrNid = async (email, phone, nid) => {
  try {
    let user = await pool.query(
      "SELECT user_id, email, first_name, last_name, middle_name,status, phone FROM users WHERE email =$1 OR phone=$2  OR nid=$3",
      [email, phone, nid]
    );
    return user;
  } catch (error) {
    return error;
  }
};

// FIND USER BY ID OR EMAIL
const getUserByEmail = async (email) => {
  try {
    let user = await pool.query(
      "SELECT user_id, email, first_name, last_name, middle_name,status, phone FROM users WHERE email =$1",
      [email]
    );
    return user;
  } catch (error) {
    return error;
  }
};

// CREATE USER
const addNewUser = async (newUser) => {
  const {
    user_id,
    email,
    first_name,
    last_name,
    middle_name,
    password,
    phone,
    role_id,
    nid,
  } = newUser;
  try {
    let user = await pool.query(
      `INSERT INTO users(
        user_id, email, first_name, last_name, middle_name, password,  phone, role_id, nid)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
      [
        user_id,
        email,
        first_name,
        last_name,
        middle_name,
        password,
        phone,
        role_id,
        nid,
      ]
    );
    return user;
  } catch (error) {
    return error;
  }
};

// LOGIN INTO THE USER
const login = async (email) => {
  try {
    let user = await pool.query(
      "SELECT user_id, password, status, role_id, phone FROM users WHERE email = $1 LIMIT 1",
      [email]
    );
    return user;
  } catch (error) {
    return error;
  }
};

// GET ALL USERS
const getAllUsers = async () => {
  try {
    let data =
      await pool.query(`SELECT users.user_id, email, first_name, last_name, middle_name, phone, role_id, role_name
    FROM users,roles WHERE users.role_id = roles.role_id`);
    return data;
  } catch (error) {
    return error;
  }
};

// GET USER
const getUserById = async (id) => {
  try {
    let data = await pool.query(
      `
      SELECT user_id, email, first_name, last_name, middle_name, phone, roles.role_id, roles.role_name, roles.access
      FROM users,roles WHERE users.role_id = roles.role_id AND users.user_id = $1 LIMIT 1`,
      [id]
    );
    return data;
  } catch (error) {
    return error;
  }
};

// GET ALL USERS
const validateUser = async (id) => {
  try {
    let data = await pool.query(
      "SELECT user_id, password FROM users WHERE user_id = $1 LIMIT 1",
      [id]
    );
    return data;
  } catch (error) {
    return error;
  }
};

// GET ALL USERS
const updateUserPassword = async (id, password) => {
  try {
    let data = await pool.query(
      `UPDATE users SET  password=$1 WHERE user_id = $2`,
      [password, id]
    );

    return data;
  } catch (error) {
    return error;
  }
};

/**
 * @description user details on the first login
 * @param {*} district_id
 */
const updateProfileInfo = async (req) => {
  const { email, first_name, last_name, middle_name, phone, user_id } = req;
  try {
    let data = await pool.query(
      `UPDATE users SET
      email=$1,
      first_name=$2,
      last_name=$3,
      middle_name=$4,
      phone=$5
      WHERE user_id=$6`,
      [email, first_name, last_name, middle_name, phone, user_id]
    );

    console.log(data);
    return data;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getUserByEmailOrNid,
  getUserByEmail,
  addNewUser,
  login,
  getAllUsers,
  getUserById,
  validateUser,
  updateUserPassword,
  updateProfileInfo,
};
