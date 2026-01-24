-- CREATE TABLES and INSERT VALUES
CREATE TABLE Users (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    phone_number VARCHAR(15) NOT NULL,
    role VARCHAR(20) CHECK(role IN ('Admin','Customer')) NOT NULL DEFAULT 'Customer'
);

INSERT INTO Users (name, email, password, phone_number, role) VALUES
('John Doe', 'john@example.com', 'password123', '01712345678', 'Customer'),
('Sarah Smith', 'sarah@example.com', 'password456', '01798765432', 'Customer'),
('Admin User', 'admin@example.com', 'admin123', '01711111111', 'Admin'),
('Mike Johnson', 'mike@example.com', 'password789', '01722222222', 'Customer'),
('Emily Brown', 'emily@example.com', 'password321', '01733333333', 'Customer');

CREATE TABLE Vehicles (
    vehicle_id SERIAL PRIMARY KEY,
    vehicle_name VARCHAR(100) NOT NULL,
    type VARCHAR(20) CHECK (type IN ('car', 'bike', 'truck')) NOT NULL,
    model VARCHAR(50) NOT NULL,
    registration_number VARCHAR(20) NOT NULL UNIQUE,
    rental_price_per_day DECIMAL(10, 2) NOT NULL,
    availability_status VARCHAR(20) CHECK (availability_status IN ('available', 'rented', 'maintenance')) NOT NULL DEFAULT 'available'
);
INSERT INTO Vehicles (vehicle_name, type, model, registration_number, rental_price_per_day, availability_status) VALUES
('Toyota Camry', 'car', '2023', 'DHK-1234', 5000.00, 'available'),
('Honda CBR', 'bike', '2022', 'DHK-5678', 1500.00, 'available'),
('Ford Ranger', 'truck', '2023', 'DHK-9012', 8000.00, 'rented'),
('Tesla Model 3', 'car', '2024', 'DHK-3456', 10000.00, 'available'),
('Yamaha R15', 'bike', '2023', 'DHK-7890', 1200.00, 'maintenance'),
('Suzuki Swift', 'car', '2022', 'DHK-2468', 4000.00, 'available');

CREATE TABLE Bookings (
    booking_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    vehicle_id INT NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    booking_status VARCHAR(20) CHECK (booking_status IN ('pending', 'confirmed', 'completed', 'cancelled')) NOT NULL DEFAULT 'pending',
    total_cost_of_the_booking DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (vehicle_id) REFERENCES Vehicles(vehicle_id) ON DELETE CASCADE
);
INSERT INTO Bookings (user_id, vehicle_id, start_date, end_date, booking_status, total_cost_of_the_booking) VALUES
(1, 1, '2026-01-20', '2026-01-25', 'confirmed', 25000.00),
(2, 2, '2026-01-22', '2026-01-24', 'completed', 3000.00),
(1, 3, '2026-01-15', '2026-01-20', 'confirmed', 40000.00),
(4, 4, '2026-01-25', '2026-01-30', 'pending', 50000.00),
(5, 6, '2026-01-18', '2026-01-22', 'completed', 16000.00),
(2, 1, '2026-02-01', '2026-02-05', 'pending', 20000.00);

-- Retrieve Booking information query and solution

SELECT 
b.booking_id,
u.name,
v.vehicle_name,
b.start_date,
b.end_date,
b.booking_status,
b.total_cost_of_the_booking

FROM Bookings b
INNER JOIN Users u on b.user_id=u.user_id
INNER JOIN Vehicles v on b.vehicle_id= v.vehicle_id
ORDER BY b.booking_id;

-- Find all vehicles that have never been booked.
SELECT * FROM Vehicles v
WHERE NOT EXISTS(
  SELECT 1
  FROM Bookings b
  WHERE b.vehicle_id=v.vehicle_id
)

-- Retrieve all available vehicles of a specific type
SELECT * FROM Vehicles 
WHERE type='car'
ORDER BY rental_price_per_day desc;


-- Find the total number of bookings for each vehicle and display only those vehicles that have more than 2 bookings
SELECT
  v.vehicle_name,
  COUNT(b.booking_id) as total_bookings
FROM
  Vehicles v
  INNER JOIN Bookings b on v.vehicle_id = b.vehicle_id
GROUP BY
  v.vehicle_id,
  v.vehicle_name,
  v.type,
  v.registration_number

HAVING COUNT(b.booking_id) >= 2
ORDER BY total_bookings DESC;

