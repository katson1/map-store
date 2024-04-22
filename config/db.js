import dotenv from 'dotenv';
import pkg from 'pg';

const { Pool } = pkg;

dotenv.config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    // Uncomment the next line if you are using SSL connection in production
    // ssl: { rejectUnauthorized: false }
});

export default pool;
