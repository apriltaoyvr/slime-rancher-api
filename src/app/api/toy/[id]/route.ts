import { NextRequest, NextResponse } from 'next/server';
import { toys } from '@/lib/data';
export const runtime = 'edge';
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const id = params.id;
  const toy = toys.find((e) => e.id === id);

  if (!toy) {
    const error = {
      status: 'failure',
      message: 'No toy with the ID found',
    };

    return new NextResponse(JSON.stringify(error), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const res = {
    status: 'success',
    toy,
  };

  return NextResponse.json(res);
}
