
import nodemailer from "nodemailer";

/**
 * SMTP Connection Test
 *
 * Purpose:
 * Verify that Gmail accepts our SMTP credentials
 * before integrating email delivery with Next.js.
 *
 * This test does not send an email.
 */

const gmailUser = process.env.GMAIL_USER;
const appPassword = process.env.GMAIL_APP_PASSWORD;

// Check that Node loaded our environment variables.
if (!gmailUser || !appPassword) {
  console.error("Missing Gmail environment variables.");
  process.exitCode = 1;
} else {
  // Create a connection configuration.
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: gmailUser,
      pass: appPassword,
    },
  });

  try {
    // Verify SMTP connection and authentication.
    await transporter.verify();

    console.log("✅ SMTP authentication successful!");
    console.log("Gmail is ready to accept messages.");
  } catch (error) {
    console.error("❌ SMTP authentication failed.");

    // Print diagnostic codes without exposing credentials.
    console.error("Error code:", error.code ?? "unknown");
    console.error(
      "SMTP response code:",
      error.responseCode ?? "none"
    );

    process.exitCode = 1;
  } finally {
    transporter.close();
  }
}
