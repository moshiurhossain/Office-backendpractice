const nodemailer = require("nodemailer");

// For production, replace with your actual SMTP server details.
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use true for port 465, false for port 587
  auth: {
    user: "1001096@daffodil.ac",
    pass: "ntcv zmhk yuhb nkmj",
  },
});

// send email 
const sendEmail = async (emailTo,subject,templete)=>{


    await transporter.sendMail({
    from: '"Maddison Foo Koch" 1001096@daffodil.ac',
    to: emailTo,
    subject: subject,
    text: "Backend Test-API", // Plain-text version of the message
    html: templete, // HTML version of the message
  });
}