import { NextResponse } from 'next/server';

const subscribers: string[] = []; // Temporary in-memory storage

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ message: 'Invalid email address' }, { status: 400 });
    }

    if (subscribers.includes(email)) {
      return NextResponse.json({ message: 'You are already subscribed!' }, { status: 409 });
    }

    // In production: await fetch(`${process.env.NEXT_PUBLIC_API_URL}/newsletter/subscribe`, { method: 'POST', body: JSON.stringify({ email }) });
    subscribers.push(email);

    return NextResponse.json({ message: 'Successfully subscribed!' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}