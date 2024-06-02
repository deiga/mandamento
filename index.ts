import { neon } from '@neondatabase/serverless';

console.log('Hello via Bun!');

// Bun automatically loads the DATABASE_URL from .env.local
// Refer to: https://bun.sh/docs/runtime/env for more information
const sql = neon(process.env.DATABASE_URL!);

const rows = await sql`SELECT version()`;

console.log(rows[0].version);
