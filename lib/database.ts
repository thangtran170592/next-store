import { neon } from '@neondatabase/serverless';

if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not defined in environment variables');
}

const neonSql = neon(process.env.DATABASE_URL);

export default neonSql;
