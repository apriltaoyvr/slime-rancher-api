import { NextRequest, NextResponse } from 'next/server';
import { locations } from '@/lib/data';
export const runtime = 'edge';
export async function GET(request: NextRequest) {
  let res = {
    status: 'success',
    locations,
  };

  return NextResponse.json(res);
}
