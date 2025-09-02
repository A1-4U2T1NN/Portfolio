import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
export async function POST(request: Request) {
  const { name, email, phone, message } = await request.json();
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  const mailOptions: Mail.Options = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: "New Message from Portfolio",
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
  };
  await transporter.sendMail(mailOptions);
  console.log("Message sent");
  return new Response("Message sent", { status: 200 });
}
