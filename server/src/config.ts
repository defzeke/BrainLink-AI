import { config as dotenvConfig } from 'dotenv';
import { resolve } from 'node:path';

// Load environment variables from .env file
dotenvConfig({ path: resolve(process.cwd(), '.env') });

export const config = {
  env: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT || '3001', 10),
  cors: {
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000'
  },
  // Add other configuration values here
  supabase: {
    url: process.env.SUPABASE_URL || '',
    anonKey: process.env.SUPABASE_ANON_KEY || ''
  }
} as const;
