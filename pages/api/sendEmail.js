import sgMail from "@sendgrid/mail";

sgMail.setApiKey(
  "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"
);

export default async function (req, res) {
  try {
    await sgMail.send(req.body);
    res.status(200).send("Message sent successfully.");
  } catch (error) {
    console.log("ERROR", error);
    res.status(400).send("Message not sent.");
  }
}
