import { NextRequest, NextResponse } from 'next/server';
import { foods } from '@/lib/data';
export const runtime = 'edge';
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const id = params.id;
  const food = foods.find((e) => e.id === id);

  if (!food) {
    const error = {
      status: 'failure',
      message: 'No food with the ID found',
    };

    return new NextResponse(JSON.stringify(error), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const res = {
    status: 'success',
    food,
  };

  return NextResponse.json(res);
}
