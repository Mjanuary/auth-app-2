/**
 * @func      create_user_and_assigning()
 * @argument  Obj
 * @desc      the template to create user by assigning them on the plan
 */
const config = require("config");

const create_user_and_assigning = ({ district, user_name, password }) => {
  let system = config.get("system");
  let website = config.get("url");

  return `<div
    style="
      font-size: inherit;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      padding: 1.9rem;
      width: 100%;
      max-width: 400px;
      margin: auto;
      border: 0.4px solid #1088f8;
      border-top: 0.5rem solid #1088f8;
      margin-top: 1rem;
      background-color: #fff;
    "
    >
    <div style="text-align: center">
      <h1
        style="
          text-align: center;
          font-size: 2.5rem;
          margin: 0;
          font-weight: normal;
          color: #1088f8;
        "
      >
        Hello
      </h1>
      <p style="text-align: center; margin: 0">you have been added to the</p>
      <h3 style="text-align: center; margin: 0; margin-bottom: 1rem">
        ${system}/${district}
      </h3>
      <a href="${website}">${website}</a>
    </div>
    
    <div
      style="
        padding: 1rem;
        background-color: #ebf5ff;
        margin-top: 1rem;
        margin-bottom: 1rem;
        border-radius: 4px;
        border: 1px solid #1088f8;
      "
    >
      <div style="margin-bottom: 1rem">
        <label style="color: #074b8b">Email</label>
        <h4 style="margin: 0; font-size: 1.2rem; color: #1088f8">
          ${user_name}
        </h4>
      </div>
    
      <div>
        <label style="color: #074b8b">Password (Temporary)</label>
        <h4 style="font-size: 2rem; color: #a70000; margin: 0px">${password}</h4>
      </div>
    </div>
    
    <div
      style="
        text-align: center;
        width: 80%;
        margin: auto;
        margin-bottom: 1rem;
        color: #333;
      "
    >
      Remember to cha ge your password to something you will remember and
      secured. <br />
      <a
        href="${website}"
        style="
          display: inline-block;
          margin: auto;
          padding: 0.5rem 0.9rem;
          background-color: #1088f8;
          border: 2px solid #0870d1;
          border-radius: 4px;
          text-decoration: none;
          margin-top: 1rem;
          color: #fff;
        "
      >
        Open system
      </a>
    </div>
    </div>`;
};

/**
 * @func      assigning_existing_user_to_plan()
 * @argument  Obj
 * @desc      the description to be added later
 */
const assigning_existing_user_to_plan = ({
  district,
  pillar,
  sector,
  outcome,
  output,
  indicator,
  plan,
}) => {
  let system = config.get("system");
  let website = config.get("url");

  return `<div
    style="
      font-size: inherit;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      padding: 1.9rem;
      width: 100%;
      max-width: 400px;
      margin: auto;
      border: 0.4px solid #1088f8;
      border-top: 0.5rem solid #1088f8;
      margin-top: 1rem;
      background-color: #fff;
    "
  >
    <div style="text-align: center">
      <h1
        style="
          text-align: center;
          font-size: 2.5rem;
          margin: 0;
          font-weight: normal;
          color: #1088f8;
        "
      >
        Hello!
      </h1>
      <p style="text-align: center; margin: 0">
        you have been assigned to a new plan
      </p>
      <h3 style="text-align: center; margin: 0; margin-bottom: 1rem">
        ${system}/${district}
      </h3>
      <a href="#">${website}</a>
    </div>
  
    <div
      style="
        padding: 1rem;
        background-color: #ebf5ff;
        margin-top: 1rem;
        margin-bottom: 1rem;
        border-radius: 4px;
        border: 1px solid #1088f8;
      "
    >
      <div
        style="
          padding-bottom: 0.5rem;
          padding-top: 0.5rem;
          border-bottom: 1px solid #333;
        "
      >
        <label style="color: #074b8b; font-size: 0.9rem">Pillar</label>
        <h4
          style="
            margin: 0;
            font-size: 1rem;
            color: #1088f8;
            font-weight: bold;
          "
        >
          ${pillar}
        </h4>
      </div>
  
      <div
        style="
          padding-bottom: 0.5rem;
          padding-top: 0.5rem;
          border-bottom: 1px solid #333;
        "
      >
        <label style="color: #074b8b; font-size: 0.9rem">Sector</label>
        <h4
          style="
            margin: 0;
            font-size: 1rem;
            color: #1088f8;
            font-weight: bold;
          "
        >
          ${sector}
        </h4>
      </div>
  
      <div
        style="
          padding-bottom: 0.5rem;
          padding-top: 0.5rem;
          border-bottom: 1px solid #333;
        "
      >
        <label style="color: #074b8b; font-size: 0.9rem">Outcome</label>
        <h4
          style="
            margin: 0;
            font-size: 1rem;
            color: #1088f8;
            font-weight: bold;
          "
        >
          ${outcome}
        </h4>
      </div>
  
      <div
        style="
          padding-bottom: 0.5rem;
          padding-top: 0.5rem;
          border-bottom: 1px solid #333;
        "
      >
        <label style="color: #074b8b; font-size: 0.9rem">Output</label>
        <h4
          style="
            margin: 0;
            font-size: 1rem;
            color: #1088f8;
            font-weight: bold;
          "
        >
          ${output}
        </h4>
      </div>
  
      <div
        style="
          padding-bottom: 0.5rem;
          padding-top: 0.5rem;
          border-bottom: 1px solid #333;
        "
      >
        <label style="color: #074b8b; font-size: 0.9rem">Indicator</label>
        <h4
          style="
            margin: 0;
            font-size: 1rem;
            color: #1088f8;
            font-weight: bold;
          "
        >
          ${indicator}
        </h4>
      </div>
  
      <div style="padding-bottom: 0.5rem; padding-top: 0.5rem">
        <label style="color: #074b8b; font-size: 0.9rem">Plan (Cell)</label>
        <h4
          style="
            margin: 0;
            font-size: 1rem;
            color: #1088f8;
            font-weight: bold;
          "
        >
          ${plan} 
        </h4>
      </div>
    </div>
  
    <div
      style="
        text-align: center;
        width: 80%;
        margin: auto;
        margin-bottom: 1rem;
        color: #333;
      "
    >
      Remember to cha ge your password to something you will remember and
      secured. <br />
      <a
        href="${website}"
        style="
          display: inline-block;
          margin: auto;
          padding: 0.5rem 0.9rem;
          background-color: #1088f8;
          border: 2px solid #0870d1;
          border-radius: 4px;
          text-decoration: none;
          margin-top: 1rem;
          color: #fff;
        "
      >
        Open system
      </a>
    </div>
  </div>`;
};

/**
 * @func      reset_password()
 * @argument  Obj
 * @desc      the description to be added later
 */
const reset_password = ({ reset_link, username }) => {
  let system = config.get("system");
  let website = config.get("url");
  return `
    <div
        style="
          font-size: inherit;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          padding: 1.9rem;
          width: 100%;
          max-width: 400px;
          margin: auto;
          border: 0.4px solid #1088f8;
          border-top: 0.5rem solid #1088f8;
          margin-top: 1rem;
          background-color: #fff;
        "
      >
        <div>
          <h1
            style="
              font-size: 1.5rem;
              margin: 0;
              font-weight: normal;
              color: #1088f8;
              margin-bottom: 1.5rem;
            "
          >
            <b>${username === null ? "Hello!" : username},</b>
          </h1>
          <p style="margin: 0">
            Someone requested that the password for your PMS account be reset.
          </p>
  
          <div style="text-align: center">
            <a
              href="${website + reset_link}"
              style="
                display: inline-block;
                margin: auto;
                padding: 0.5rem 0.9rem;
                background-color: #1088f8;
                border: 2px solid #0870d1;
                border-radius: 4px;
                text-decoration: none;
                margin-top: 1rem;
                color: #fff;
              "
            >
              Reset My Password</a
            >
  
            <p>
              <br />
              Copyable link: <br />
              <a href="${website + reset_link}">${website + reset_link}</a>
            </p>
            <br />
            <p>
              <i
                >This link is good until today at midnight <br />
                and only be used once</i
              >
            </p>
            <br />
          </div>
          <p>
            If you didn’t request this, you can ignore this email or let us known.
            Your password won’t change until you create new password.
          </p>
        </div>
        <br />
        <h3
          style="
            text-align: center;
            width: 80%;
            margin: auto;
            margin-bottom: 1rem;
            color: #333;
          "
        >
          ${system}
        </h3>

      </div>
      `;
};

module.exports = {
  create_user_and_assigning,
  assigning_existing_user_to_plan,
  reset_password,
};
