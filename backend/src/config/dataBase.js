const { Pool } = require("pg");
const dotenv = require("dotenv");
dotenv.config();

const dbPool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
  // host: process.env.DB_HOST,
  // port: process.env.DB_PORT,
  // database: process.env.DB_NAME,
  // user: process.env.DB_USER,
  // password: process.env.DB_PASSWORD,
  // ssl: { rejectUnauthorized: false },
});

const testConnection = async () => {
  try {
    const result = await dbPool.query("SELECT NOW()");
    console.log("✅ PostgreSQL Connected to Supabase");
    console.log("📅 Database time:", result.rows[0].now);
  } catch (err) {
    console.error("❌ Database connection error:", err);
    process.exit(1);
  }
};

testConnection();

module.exports = dbPool;
