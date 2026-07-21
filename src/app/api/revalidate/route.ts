import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');

    if (slug) {
      revalidatePath(`/article/${slug}`);
      revalidatePath('/');
      return NextResponse.json({ revalidated: true, now: Date.now() });
    } else {
      revalidatePath('/');
      return NextResponse.json({ revalidated: true, now: Date.now() });
    }
  } catch (err) {
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 });
  }
}