import pkg from 'pg';
import {} from 'dotenv/config';
const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL + "?sslmode=require"
})

export default pool;
