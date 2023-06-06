require("dotenv").config();
import nodemailer from "nodemailer";

let sendSimpleEmail = async (dataSend) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_APP, // generated ethereal user
      pass: process.env.EMAIL_APP_PASSWORD, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"PerryTheShark 👻" <tungtv.uet@gmail.com>', // sender address
    to: dataSend.receiverEmail, // list of receivers
    subject: "THONG TIN GUI EMAIL", // Subject line
    text: "Hello world?", // plain text body
    html: getBodyHTMLEmail(dataSend),
  });
};

let getBodyHTMLEmail = (dataSend) => {
  let result = "";
  if (dataSend.language === "vi") {
    result = `
    <h3> Xin chao ${dataSend.patientName} </h3>
    <p>Bạn nhận được email này bởi vì Bin thích thế! </p>
    <p>Thong tin dat lich test phong kham </p>
    <div><b> Thời gian: ${dataSend.time} </b> </div>
    <div><b> Bác sĩ: ${dataSend.doctorName} </b> </div>
    <p> Neu thong tin chinh xac vui long click duong link ben duoi </p> 
    <div>
    <a href=${dataSend.redirectLink} target="_blank">Nhấn vào đây!</a>
    </div>
    <div> Thank you very much! </div>
    `;
  }
  if (dataSend.language === "en") {
    result = `
    <h3> Dear ${dataSend.patientName} </h3>
    <p>You receiver this email because Bin sent it to you! </p>
    <p>Information booking: </p>
    <div><b> Time: ${dataSend.time} </b> </div>
    <div><b> Doctor: ${dataSend.doctorName} </b> </div>
    <p> If the information above is correct click the link below to confirm! </p> 
    <div>
    <a href=${dataSend.redirectLink} target="_blank">Click here!</a>
    </div>
    <div> Thank you very much! </div>
    `;
  }

  return result;
};

module.exports = {
  sendSimpleEmail: sendSimpleEmail,
};
