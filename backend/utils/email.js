const nodemailer = require("nodemailer");
const emailUser = process.env.EMAIL_USER;
const emailPassword = process.env.EMAIL_PASSWORD;

const sendEmail = async (receiverEmail, subject, message) => {
  try {
    // Create a transporter object for sending email
    let transporter = nodemailer.createTransport({
      secure: false, // true for 465, false for other ports
      service: "gmail",
      auth: {
        user: emailUser, // generated ethereal user
        pass: emailPassword, // generated ethereal password
      },
    });

    // Define the email options
    let mailOptions = {
      from: `"Sender Name" <${emailUser}>`, // sender address
      to: receiverEmail,
      subject: subject,
      text: message,
      html: `<b>${message}</b>`,
    };

    // Send the email
    const emailSend = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", emailSend.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(emailSend));

    return true;
  } catch (error) {
    return false;
  }
};

module.exports = sendEmail;
