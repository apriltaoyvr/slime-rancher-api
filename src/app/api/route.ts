import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const directories = ['slime', 'food', 'location', 'toy'];
  const res = {
    status: 'success',
    directories,
  };

  return NextResponse.json(res);
}
