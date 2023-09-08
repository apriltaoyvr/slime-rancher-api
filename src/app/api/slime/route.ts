import { NextRequest, NextResponse } from 'next/server';
import { slimes } from '@/lib/data';
export const runtime = 'edge'; 
export async function GET(request: NextRequest) {
  let res = {
    status: 'success',
    slimes,
  };

  return NextResponse.json(res);
}
