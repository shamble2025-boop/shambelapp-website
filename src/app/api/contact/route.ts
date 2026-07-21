import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Basic Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ message: 'All fields are required.' }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ message: 'Invalid email address.' }, { status: 400 });
    }
    if (message.length < 10) {
      return NextResponse.json({ message: 'Message must be at least 10 characters long.' }, { status: 400 });
    }

    // In production: Send email or save to DB via your backend API
    // await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, { method: 'POST', body: JSON.stringify({ name, email, subject, message }) });
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json({ message: 'Message sent successfully! We will get back to you soon.' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Internal server error. Please try again later.' }, { status: 500 });
  }
}