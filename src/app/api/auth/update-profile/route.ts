import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function POST(request: Request) {
  try {
    const { display_name, accessToken } = await request.json();

    if (!accessToken) {
      return NextResponse.json(
        { error: 'Not authenticated - no token provided' },
        { status: 401 }
      );
    }

    // Create Supabase client with the user's access token
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        global: {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }
      }
    );

    // Update user metadata
    const { data, error } = await supabase.auth.updateUser({
      data: {
        display_name: display_name,
        name: display_name,
        full_name: display_name,
      }
    });

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json({
      message: 'Profile updated successfully',
      user: data.user,
    });
  } catch (error) {
    console.error('Update profile error:', error);
    return NextResponse.json(
      { error: 'An error occurred during profile update' },
      { status: 500 }
    );
  }
}
