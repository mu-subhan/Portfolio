import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  // Configure your email service
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `New message from ${name} (${email})`,
      text: message,
      html: `<p>${message}</p>`,
    });

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
  }
}