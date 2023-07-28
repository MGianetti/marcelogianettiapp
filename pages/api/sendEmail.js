import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.NEXT_EMAIL_KEY);

export default async function (req, res) {
  try {
    await sgMail.send(req.body);
    res.status(200).send("Message sent successfully.");
  } catch (error) {
    console.log("ERROR", error);
    res.status(400).send("Message not sent.");
  }
}
