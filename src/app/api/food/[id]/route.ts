import { NextRequest, NextResponse } from 'next/server';
import { foods } from '@/lib/data';
export const runtime = 'edge';
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  const { id } = await context.params;
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
