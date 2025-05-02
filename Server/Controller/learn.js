const nodemailer = require('nodemailer');
const dotenv = require('dotenv')

dotenv.config({ path: '../.env' });

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const mailObject = {
  from: process.env.EMAIL,
  to: "thissyakkannasm.22aid@kongu.edu",
  subject: "Verification OTP",
  html: `
    <h1>Password Reset</h1>
    <p> Your Otp is 1234</p>
  `,
};

async function main() {
  try{
    console.log("Verification call initiated")
      await transport.sendMail(mailObject);
    console.log("Email Sent Successfully");
  }catch(error){
    console.log("Error Occured",error.message);
  }
}

main();
