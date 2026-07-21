import { NextRequest, NextResponse } from 'next/server';
 
export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret');
  const slug = request.nextUrl.searchParams.get('slug');
 
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
  }
 
  try {
    if (slug) {
      await res.revalidate(`/article/${slug}`);
      await res.revalidate('/');
      return NextResponse.json({ revalidated: true, now: Date.now() });
    } else {
      await res.revalidate('/', { recursive: true });
      return NextResponse.json({ revalidated: true, now: Date.now() });
    }
  } catch (err) {
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 });
  }
}