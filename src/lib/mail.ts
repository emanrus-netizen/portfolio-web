
import "server-only";
import nodemailer from "nodemailer";

type SendContactEmailInput = {
  name: string;
  email: string;
  message: string;
};

/**
 * Sends a contact message through Gmail SMTP.
 *
 * SECURITY:
 * This function must only execute on the server.
 * Never expose Gmail credentials to the frontend.
 */
export async function sendContactEmail({
  name,
  email,
  message,
}: SendContactEmailInput) {
  const gmailUser = process.env.GMAIL_USER;
  const appPassword = process.env.GMAIL_APP_PASSWORD;
  const recipient = process.env.CONTACT_TO_EMAIL;

  // Fail early when configuration is missing.
  if (!gmailUser || !appPassword || !recipient) {
    throw new Error("Gmail SMTP is not configured.");
  }

  /**
   * A transporter manages the SMTP connection.
   *
   * Port 465 uses TLS immediately upon connection.
   * The credentials authenticate our Gmail account.
   */
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: gmailUser,
      pass: appPassword,
    },
  });

  /**
   * The sender is always our authenticated Gmail account.
   *
   * replyTo uses the visitor's email, so clicking Reply
   * allows us to respond directly to the visitor.
   */
  const info = await transporter.sendMail({
    from: gmailUser,
    to: recipient,
    replyTo: {
      name,
      address: email,
    },
    subject: "New Portfolio Contact Message",
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      "Message:",
      message,
    ].join("\n"),
  });

  return info.messageId;
}
