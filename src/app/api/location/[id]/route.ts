import { NextRequest, NextResponse } from 'next/server';
import { locations } from '@/lib/data';
export const runtime = 'edge';
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  const { id } = await context.params;
  const location = locations.find((e) => e.id === id);

  if (!location) {
    const error = {
      status: 'failure',
      message: 'No location with the ID found',
    };

    return new NextResponse(JSON.stringify(error), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const res = {
    status: 'success',
    location,
  };

  return NextResponse.json(res);
}
