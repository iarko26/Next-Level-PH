# Vehicle Rental Management System

## Project Overview
A PostgreSQL database system for managing vehicle rentals, users, and bookings. This project demonstrates database design, SQL queries, and data relationships for a real-world rental management scenario.

## Database Schema

### ERD (Entity Relationship Diagram)
![Screenshot 2026-01-25 024343](https://github.com/user-attachments/assets/2f68fcfa-0b61-4f31-bf8a-5a9e73a72c05)


### Tables Description

#### Users Table
Stores customer and administrator information with role-based access.
- **Primary Key:** user_id
- **Fields:** name, email, password, phone_number, role (Admin/Customer)
**Result:**
![Screenshot 2026-01-24 211749](https://github.com/user-attachments/assets/93baaeeb-dbee-492a-b95f-2831a90d5a6b)


#### Vehicles Table
Contains complete vehicle inventory with rental pricing and availability tracking.
- **Primary Key:** vehicle_id
- **Fields:** vehicle_name, type (car/bike/truck), model, registration_number, rental_price_per_day, availability_status

**Result:**
<img width="972" height="330" alt="Screenshot 2026-01-24 211811" src="https://github.com/user-attachments/assets/8bf9940e-8e3a-4270-a7ad-64f256831c37" />


#### Bookings Table
Manages all rental transactions and booking records.
- **Primary Key:** booking_id
- **Foreign Keys:** user_id (references Users), vehicle_id (references Vehicles)
- **Fields:** start_date, end_date, booking_status, total_cost_of_the_booking
**Result:**
<img width="950" height="317" alt="Screenshot 2026-01-24 211833" src="https://github.com/user-attachments/assets/49d9cd0c-3ee6-4db2-bbda-758e74efbd93" />


## Project Files

### queries.sql
Contains all database creation scripts and query solutions:
- CREATE TABLE statements for Users, Vehicles, and Bookings
- INSERT statements with sample data
- 4 analytical queries with solutions

## Query Solutions Explained

### Query 1: Retrieve Complete Booking Information
**Purpose:** Display all bookings with associated customer and vehicle details.

**Explanation:**  
This query joins three tables (Bookings, Users, Vehicles) to create a comprehensive view of all rental transactions. It helps administrators see who booked which vehicle, when, and the booking status.

**Result:**
<img width="1109" height="764" alt="Screenshot 2026-01-25 002603" src="https://github.com/user-attachments/assets/eac56fa8-cad1-4b9a-98b0-9f4742b80070" />



---

### Query 2: Find Vehicles Never Booked
**Purpose:** Identify vehicles in inventory that have never been rented.

**Explanation:**  
Uses a NOT EXISTS subquery to find vehicles with no corresponding records in the Bookings table. This helps identify underutilized inventory.

**Result:**
<img width="1092" height="601" alt="Screenshot 2026-01-25 011946" src="https://github.com/user-attachments/assets/591e654c-21fa-49e0-ad3d-6f44b926581e" />


---

### Query 3: Retrieve Available Vehicles of Specific Type
**Purpose:** Show all available vehicles filtered by type and sorted by price.

**Explanation:**  
Filters the Vehicles table to show only available cars, sorted from highest to lowest rental price. Customers can use this to find suitable vehicles within their budget.

**Result:**
<img width="1081" height="621" alt="Screenshot 2026-01-25 012219" src="https://github.com/user-attachments/assets/4b1293e5-8252-4dbb-bbae-103fd0e7d2d6" />


---

### Query 4: Vehicles with Multiple Bookings (2+)
**Purpose:** Analyze booking frequency to identify popular vehicles.

**Explanation:**  
Groups all bookings by vehicle and counts the total bookings for each. The HAVING clause filters to show only vehicles with 2 or more bookings, helping identify high-demand inventory.

**Result:**
![Screenshot 2026-01-25 024140](https://github.com/user-attachments/assets/e0e9b028-a136-4e3a-9650-ed1156584aa4)


---

# 🚀 How to Run

### Prerequisites
- PostgreSQL installed (version 12+)
- Database client (pgAdmin, Beekeeper Studio, or psql CLI)

## Technologies Used
- **Database:** PostgreSQL
- **Query Language:** SQL
- **ERD Tool:** Drawio
- **Version Control:** Git & GitHub






---

