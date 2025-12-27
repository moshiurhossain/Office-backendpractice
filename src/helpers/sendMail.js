// libaries
const nodemailer = require("nodemailer");

// Create a transporter using Ethereal test credentials.
// For production, replace with your actual SMTP server details.
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use true for port 465, false for port 587
  auth: {
    user: "1001096@daffodil.ac",
    pass: "ylpj tnju oulz gfkt",
  },
//   github copilot suggested this as i was developing and testing it on an office desktop
  tls: {
    rejectUnauthorized: false,  // Bypass certificate check
  },
});

const sendMail = async (emailTO,subject,templete)=>{
   const info = await transporter.sendMail({
    from: '"BackendAPI" 1001096@daffodil.ac',
    to: emailTO,
    subject: subject,
    text: "BACKEND-API", // Plain-text version of the message
    html: templete , // HTML version of the message
  });

  console.log("Message sent:", info.messageId);

}






// all exports
module.exports =sendMail