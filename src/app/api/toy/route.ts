import { NextRequest, NextResponse } from 'next/server';
import { toys } from '@/lib/data';
export const runtime = 'edge';
export async function GET(request: NextRequest) {
  let res = {
    status: 'success',
    toys,
  };

  return NextResponse.json(res);
}
