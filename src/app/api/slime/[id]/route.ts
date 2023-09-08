import { NextRequest, NextResponse } from 'next/server';
import { slimes } from '@/lib/data';
export const runtime = 'edge'; 
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const id = params.id;
  const slime = slimes.find((e) => e.id === id);

  if (!slime) {
    const error = {
      status: 'failure',
      message: 'No slime with the ID found',
    };

    return new NextResponse(JSON.stringify(error), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const res = {
    status: 'success',
    slime,
  };

  return NextResponse.json(res);
}
