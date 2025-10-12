import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "orgalaser@gmail.com", // Replace with your actual email
      subject: `Contact Form: ${subject}`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #eab308; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <p style="margin: 10px 0;">
              <strong style="color: #555;">Name:</strong> 
              <span style="color: #333;">${name}</span>
            </p>
            <p style="margin: 10px 0;">
              <strong style="color: #555;">Email:</strong> 
              <a href="mailto:${email}" style="color: #2563eb;">${email}</a>
            </p>
            <p style="margin: 10px 0;">
              <strong style="color: #555;">Subject:</strong> 
              <span style="color: #333;">${subject}</span>
            </p>
          </div>
          <div style="margin-top: 20px; padding: 20px; background-color: #fff; border-left: 4px solid #eab308;">
            <p style="margin: 0 0 10px 0;">
              <strong style="color: #555;">Message:</strong>
            </p>
            <p style="color: #333; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          <div style="margin-top: 20px; padding: 15px; background-color: #f0f9ff; border-radius: 8px;">
            <p style="margin: 0; color: #666; font-size: 12px;">
              This message was sent from the Orgalaser contact form on ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      `,
    });

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}

