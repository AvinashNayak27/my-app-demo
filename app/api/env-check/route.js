import { NextResponse } from 'next/server';

// Environment variable expected to be set (e.g., in .env.local)
const VALID_ENV_VALUE = process.env.VALID_ENV_VALUE;

export async function GET() {
  try {
    if (!VALID_ENV_VALUE) {
      return NextResponse.json({ message: 'Environment variable is not set' }, { status: 500 });
    }

    if (VALID_ENV_VALUE === 'expected_value') {
      return NextResponse.json({ message: 'Environment variable is valid' }, { status: 200 });
    }

    // If the variable is set but invalid
    return NextResponse.json({ message: 'Environment variable is invalid' }, { status: 500 });
  } catch (error) {
    return NextResponse.json({ message: 'Server error', error: error.message }, { status: 500 });
  }
}