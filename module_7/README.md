# Vehicle Rental Management System

## Project Overview
A PostgreSQL database system for managing vehicle rentals, users, and bookings. This project demonstrates database design, SQL queries, and data relationships for a real-world rental management scenario.

## Database Schema

### ERD (Entity Relationship Diagram)
![Database ERD](f:/Screenshot 2026-01-25 024343.jpg)

### Tables Description

#### Users Table
Stores customer and administrator information with role-based access.
- **Primary Key:** user_id
- **Fields:** name, email, password, phone_number, role (Admin/Customer)
**Result:**
![QueryResult](f:/Screenshot 2026-01-24 211749.jpg)

#### Vehicles Table
Contains complete vehicle inventory with rental pricing and availability tracking.
- **Primary Key:** vehicle_id
- **Fields:** vehicle_name, type (car/bike/truck), model, registration_number, rental_price_per_day, availability_status

**Result:**
![QueryResult](f:/Screenshot 2026-01-24 211814.jpg)

#### Bookings Table
Manages all rental transactions and booking records.
- **Primary Key:** booking_id
- **Foreign Keys:** user_id (references Users), vehicle_id (references Vehicles)
- **Fields:** start_date, end_date, booking_status, total_cost_of_the_booking
**Result:**
![QueryResult](f:/Screenshot 2026-01-24 211833.png)

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
![Query 1 Result](f:/Screenshot 2026-01-25 002603.png)

---

### Query 2: Find Vehicles Never Booked
**Purpose:** Identify vehicles in inventory that have never been rented.

**Explanation:**  
Uses a NOT EXISTS subquery to find vehicles with no corresponding records in the Bookings table. This helps identify underutilized inventory.

**Result:**
![Query 2 Result](f:/Screenshot 2026-01-25 011946.png)

---

### Query 3: Retrieve Available Vehicles of Specific Type
**Purpose:** Show all available vehicles filtered by type and sorted by price.

**Explanation:**  
Filters the Vehicles table to show only available cars, sorted from highest to lowest rental price. Customers can use this to find suitable vehicles within their budget.

**Result:**
![Query 3 Result](f:/Screenshot 2026-01-25 012219.png)

---

### Query 4: Vehicles with Multiple Bookings (2+)
**Purpose:** Analyze booking frequency to identify popular vehicles.

**Explanation:**  
Groups all bookings by vehicle and counts the total bookings for each. The HAVING clause filters to show only vehicles with 2 or more bookings, helping identify high-demand inventory.

**Result:**
![Query 4 Result](f:/Screenshot 2026-01-25 012219.png)

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

## Project Links

- **GitHub Repository:** [Your GitHub Repository Link]
- **ERD Diagram:** [https://drive.google.com/file/d/1cwmMKr2wyZcM-xe5Tr5idoib50j6rbnJ/view?usp=sharing]
- **Viva Video:** [Your YouTube/Google Drive Video Link]





---

