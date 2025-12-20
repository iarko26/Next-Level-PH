import { Pool } from "pg";
import config from ".";

export const pool = new Pool({
  connectionString: `${config.connectionString}`,
});

const INITDBCON = async () => {
  try {
    // ✅ DROP EXISTING TABLES (Add this)
    await pool.query(`DROP TABLE IF EXISTS bookings CASCADE`);
    await pool.query(`DROP TABLE IF EXISTS vehicles CASCADE`);
    await pool.query(`DROP TABLE IF EXISTS users CASCADE`);

    console.log("🗑️  Old tables dropped");

    // Users table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password TEXT NOT NULL,
        phone VARCHAR(20) NOT NULL,
        role VARCHAR(20) NOT NULL CHECK (role IN ('admin', 'customer'))
      )
    `);

    // Vehicles table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS vehicles(
        id SERIAL PRIMARY KEY,
        vehicle_name VARCHAR(255) NOT NULL,
        type VARCHAR(20) NOT NULL CHECK (type IN ('car', 'bike', 'van', 'SUV')),
        registration_number VARCHAR(20) NOT NULL UNIQUE,
        daily_rent_price DECIMAL(10,2) NOT NULL CHECK(daily_rent_price > 0),
        availability_status VARCHAR(20) NOT NULL CHECK (availability_status IN ('available', 'booked'))
      )
    `);

    // Bookings table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS bookings(
        id SERIAL PRIMARY KEY,
        customer_id INT REFERENCES users(id) ON DELETE CASCADE,
        vehicle_id INT REFERENCES vehicles(id) ON DELETE CASCADE,
        rent_start_date DATE NOT NULL,
        rent_end_date DATE NOT NULL CHECK(rent_end_date > rent_start_date),
        total_price DECIMAL(10,2) NOT NULL CHECK(total_price > 0),
        status VARCHAR(20) NOT NULL CHECK(status IN ('active', 'cancelled', 'returned'))
      )
    `);

    console.log("✅ Database Created Successfully");
    
    // ✅ Verify tables
    const result = await pool.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
      ORDER BY table_name
    `);
    console.log("📋 Tables created:", result.rows.map(r => r.table_name));

  } catch (error) {
    console.error("❌ Database initialization error:", error);
  }
};

export default INITDBCON;