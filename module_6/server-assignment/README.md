# 🚗 Vehicle Rental System API

A RESTful API for managing vehicle rentals with authentication and role-based access control.

---

## 🔗 Links

- **Live API:** https://vehicle-rental-system-ruby-ten.vercel.app
- **GitHub:** https://github.com/iarko26/Next-Level-PH/tree/main/module_6/server-assignment

---

## ✨ Features

- User authentication with JWT
- Role-based access (Admin & Customer)
- Vehicle management (CRUD)
- Booking system
- PostgreSQL database

---

## 🛠 Technology Stack

- **Backend:** Node.js, Express.js, TypeScript
- **Database:** PostgreSQL (Neon)
- **Authentication:** JWT, bcryptjs
- **Deployment:** Vercel

---

## 🚀 API Endpoints

### Base URL
```
https://vehicle-rental-system-ruby-ten.vercel.app
```

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/v1/auth/signup` | Register user |
| POST | `/api/v1/auth/signin` | Login user |

### Vehicles
| Method | Endpoint | Auth |
|--------|----------|------|
| GET | `/api/v1/vehicles` | Public |
| POST | `/api/v1/vehicles` | Admin |
| PUT | `/api/v1/vehicles/:id` | Admin |
| DELETE | `/api/v1/vehicles/:id` | Admin |

### Users
| Method | Endpoint | Auth |
|--------|----------|------|
| GET | `/api/v1/users` | Admin |
| PUT | `/api/v1/users/:id` | Admin/Customer |
| DELETE | `/api/v1/users/:id` | Admin |

### Bookings
| Method | Endpoint | Auth |
|--------|----------|------|
| GET | `/api/v1/bookings` | Customer/Admin |
| POST | `/api/v1/bookings` | Customer/Admin |

---

## 📦 Setup Instructions

### 1. Clone Repository
```bash
git clone https://github.com/iarko26/Next-Level-PH.git
cd Next-Level-PH/module_6/server-assignment
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment
Create `.env` file:
```env
PORT=5000
ConnectionDB=your_postgresql_connection_string
JWT_SECRET=your_jwt_secret

```

### 4. Run Development Server
```bash
npm run dev
```

Server runs at `http://localhost:5000`

---

## 🔐 Environment Variables

| Variable | Description |
|----------|-------------|
| `PORT` | Server port |
| `ConnectionDB` | PostgreSQL connection string |
| `JWT_SECRET` | JWT secret key |


---

## 💻 Usage

### Register User
```bash
POST /api/v1/auth/signup
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "phone": "1234567890",
  "role": "customer"
}
```

### Login
```bash
POST /api/v1/auth/signin
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

### Get Vehicles
```bash
GET /api/v1/vehicles
```

### Create Vehicle (Admin)
```bash
POST /api/v1/vehicles
Authorization: Bearer <token>
Content-Type: application/json

{
  "vehicle_name": "Toyota Camry",
  "type": "car",
  "registration_number": "ABC-123",
  "daily_rent_price": 50,
  "availability_status": "available"
}
```

---

## 🚀 Deployment

Deployed on Vercel with automatic deployments from GitHub.

**Steps:**
1. Push to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel Dashboard
4. Deploy

---

## 📁 Project Structure

```
src/
├── config/          # Database & config
├── middleware/      # Auth middleware
├── modules/
│   ├── auth/        # Authentication
│   ├── users/       # User management
│   ├── vehicles/    # Vehicle management
│   └── bookings/    # Booking system
├── app.ts           # Express app
└── server.ts        # Entry point
```

---

## 👨‍💻 Author

**GitHub:** [@iarko26](https://github.com/iarko26)

---

## 📄 License

MIT License

---

**Made with TypeScript, Express, and PostgreSQL**