# Employee Attendance Portal

## 📌 Overview

This is a full-stack Employee Attendance Portal built using React.js, Node.js, Express, and PostgreSQL.
It allows employees to manage their daily attendance and leave requests.

---

## 🚀 Tech Stack

* Frontend: React.js + Tailwind CSS
* Backend: Node.js + Express
* Database: PostgreSQL
* ORM: Sequelize
* Authentication: JWT (JSON Web Token)

---

## ✨ Features

* User Login (JWT Authentication)
* Check-in / Check-out system
* Timesheet (attendance history)
* Apply Leave
* View Leave Status

---

## 🗄️ Database Setup

### 1. Install PostgreSQL

Make sure PostgreSQL is installed and running.

---

### 2. Create Database

Run the following query in PostgreSQL:

```sql
CREATE DATABASE attendance_db;
```

---

### 3. Import Database

Use the provided `database.sql` file to create tables:

* Users
* Attendances
* Leaves

---

## ⚙️ Backend Setup

### 1. Navigate to backend folder

```bash
cd backend
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Create `.env` file

Create a `.env` file in backend folder and add:

```env
PORT=5000
DB_NAME=attendance_db
DB_USER=postgres
DB_PASSWORD=Sarala2202@.
DB_HOST=localhost
JWT_SECRET=supersecretkey
```

---

### 4. Run backend server

```bash
npx nodemon server.js
```

Server will run at:

```
http://localhost:5000
```

---

## 💻 Frontend Setup

### 1. Navigate to frontend folder

```bash
cd frontend
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Run frontend

```bash
npm run dev
```

Frontend will run at:

```
http://localhost:5173
```

---

## 🔐 Test Credentials

Use the following login credentials:

```text
Username: kunal
Password: 123456
```

---

## 📌 API Base URL

```text
http://localhost:5000/api
```

---

## 📎 Important Notes

* User cannot check-in more than once per day
* JWT token is required for all protected routes
* Token expires after a certain time (user must login again)
* Leave requests are stored with status (pending/approved/rejected)

---

## 📂 Project Structure

### Backend

* models/
* migrations/
* routes/
* controllers/
* config/
* server.js

### Frontend

* src/
* components/
* pages/
* services/

---

