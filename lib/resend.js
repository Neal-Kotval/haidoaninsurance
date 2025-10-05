"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  try {
    await resend.emails.send({
      from: "Hai Doan Insurance <neal.kotval@gmail.com>", // verified sender
      to: "neal.kotval@gmail.com",
      subject: `New message from ${name}`,
      reply_to: email,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Email send error:", error);
    return { success: false, error: "Failed to send email." };
  }
};
