const twilio = require("twilio");
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const appPhoneNumber = process.env.APP_PHONE_NUMBER;

const sendSMS = async (receiver, message) => {
  console.log(receiver, message);
  return true;

  const client = new twilio(accountSid, authToken);

  // The phone number you want to send the SMS to
  const to = receiver;

  try {
    await client.messages.create({
      body: message,
      from: appPhoneNumber,
      to: to,
    });

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
  // Send the SMS
};

module.exports = sendSMS;
