import { pool } from "../../config/db";
const createbookingBs = async (payload: Record<string, unknown>) => {
  const { customer_id, vehicle_id, rent_start_date, rent_end_date } = payload;
  const vehiclecheckResult = await pool.query(
    `
    SELECT * from vehicles WHERE id=$1
    `,
    [vehicle_id]
  );

  if (vehiclecheckResult.rows.length === 0) {
    throw new Error("Vehicle not found");
  }
  const vehicle = vehiclecheckResult.rows[0];
  if (vehicle.availability_status !== "available") {
    throw new Error("Vehicle is not available");
  }

  const startDate = new Date(rent_start_date as string);
  const endDate = new Date(rent_end_date as string);
  const duration = Math.ceil(
    (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
  );
  const total_price = vehicle.daily_rent_price * duration;

  const result = await pool.query(
    `
    INSERT INTO bookings (customer_id,vehicle_id,rent_start_date,rent_end_date,total_price,status)
    VALUES($1, $2, $3, $4, $5, $6) 
    RETURNING *
    `,
    [
      customer_id,
      vehicle_id,
      rent_start_date,
      rent_end_date,
      total_price,
      "active",
    ]
  );

  await pool.query(`UPDATE vehicles SET availability_status=$1 WHERE id=$2 `, [
    "booked",
    vehicle_id,
  ]);
  const bookingresult = result.rows[0];
  return {
    ...bookingresult,
    total_price: parseFloat(bookingresult.total_price),
    vehicle: {
      vehicle_name: vehicle.vehicle_name,
      daily_rent_price: parseFloat(vehicle.daily_rent_price),
    },
  };
};

const getbookingBs = async (userId: number, userRole: string) => {
  if (userRole === "admin") {
    const result = await pool.query(`
        SELECT
        b.*,
        u.name as customer_name,
        u.email as customer_email,
        v.vehicle_name,
        v.registration_number


        FROM bookings b
        JOIN users u ON b.customer_id=u.id
        JOIN vehicles v ON b.vehicle_id=v.id
        ORDER BY b.id DESC
        `);

    return result.rows.map((row) => ({
      id: row.id,
      customer_id: row.customer_id,
      vehicle_id: row.vehicle_id,
      rent_start_date: row.rent_start_date,
      rent_end_date: row.rent_end_date,
      total_price: parseFloat(row.total_price),
      status: row.status,
      customer: {
        name: row.customer_name,
        email: row.customer_email,
      },
      vehicle: {
        vehicle_name: row.vehicle_name,
        registration_number: row.registration_number,
      },
    }));
  } else {
    const result = await pool.query(`
        SELECT
        b.id,
                b.vehicle_id,
                b.rent_start_date,
                b.rent_end_date,
                b.total_price,
                b.status,
                v.vehicle_name,
                v.registration_number,
                v.type

        FROM bookings b
        JOIN vehicles v ON b.vehicle_id=v.id
       WHERE b.customer_id = $1
        ORDER BY b.id DESC
        `,[userId]);


    return result.rows.map((row)=>({
        id: row.id,
            vehicle_id: row.vehicle_id,
            rent_start_date: row.rent_start_date,
            rent_end_date: row.rent_end_date,
            total_price: parseFloat(row.total_price),
            status: row.status,
            vehicle: {
                vehicle_name: row.vehicle_name,
                registration_number: row.registration_number,
                type: row.type
            }
    }))
  }
};



export const bookingService={
    createbookingBs,
    getbookingBs
}
