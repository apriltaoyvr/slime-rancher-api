import { NextRequest, NextResponse } from 'next/server';
import { foods } from '@/lib/data';
export const runtime = 'edge'; 
export async function GET(request: NextRequest) {
  let res = {
    status: 'success',
    foods,
  };

  return NextResponse.json(res);
}
