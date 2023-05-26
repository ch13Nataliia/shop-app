import nodemailer from "nodemailer";

const handler = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    decure: false,
    auth: {
        user: testAccount.user,
        pass: testAccount.pass,
    }
});

const { from, subject, message } = req.body;

const msg = {
  to: from,
  from: 'tcirulnatalya@gmail.com',
  subject,
  text: message,
  html: `<p>${message}</p>`,
};
console.log(msg);

try {
  let info = await transporter.sendMail(msg);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  res.status(201).json({ message: "Email sent", id: info.messageId });
} catch (error){
  console.error(error);
  res.status(500).json({ message: "export default handler"});
}
}
;
export default handler