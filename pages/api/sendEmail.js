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
