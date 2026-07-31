<<<<<<< HEAD

## Course
CSCI 275

## Team Members

| Name | Student ID |
|---|---|
| Jethro Morera | 816160 |
| Muhammad Haseeb | 815587 |
| Khadija Meem | 817024 |
| Gurpreet Kaur | 816321 |
| Nischal Bhandari | 816747 |


# Restaurant Rating Application — User & Authentication System

**Team:** Team 404Error (Team 3)
**Version:** 1.0 | **Status:** In Development

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React (JavaScript → TypeScript migration planned) |
| Backend | Node.js with Express |
| Database | PostgreSQL |
| ORM | Prisma (abstracts direct SQL queries) |
| Language | JavaScript (initial), TypeScript (subsequent iterations) |

> Framework and database decisions are documented here rather than in the SRS, per team convention.

---

## Project Structure

```
/
├── client/          # React frontend
├── server/          # Node.js + Express backend
│   ├── prisma/      # Prisma schema and migrations
│   ├── routes/      # API route handlers
│   ├── middleware/  # Auth, role, and rate-limit middleware
│   └── services/    # Business logic (auth, email, tokens)
├── .env.example     # Environment variable template
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL 14+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd <repo-name>

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your local values (see Environment Variables below)

# Run database migrations
npx prisma migrate dev

# Start the development server
npm run dev
```

---

## Environment Variables

Create a `.env` file in the project root. A template is provided in `.env.example`.

```env
# Database
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/restaurant_rating_db"

# JWT
JWT_SECRET=your_jwt_secret_here
JWT_ACCESS_EXPIRY=15m
JWT_REFRESH_EXPIRY=7d

# OAuth — Google
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# OAuth — Facebook
FACEBOOK_CLIENT_ID=your_facebook_client_id
FACEBOOK_CLIENT_SECRET=your_facebook_client_secret

# OAuth — Apple
APPLE_CLIENT_ID=your_apple_client_id
APPLE_CLIENT_SECRET=your_apple_client_secret

# Email Service (provider TBD)
EMAIL_SERVICE_API_KEY=your_email_api_key
EMAIL_FROM=noreply@restaurantrating.app

# Cloud Storage (for avatar uploads)
STORAGE_BUCKET_NAME=your_bucket_name
STORAGE_ACCESS_KEY=your_access_key
STORAGE_SECRET_KEY=your_secret_key

# App
PORT=3000
NODE_ENV=development
```

> ⚠️ Never commit your `.env` file. It is listed in `.gitignore`.

---

## Team Responsibilities

| Member | Area |
|---|---|
| Member 1 | Registration & Onboarding |
| Member 2 | Authentication & Sessions |
| Member 3 | Password Management |
| Member 4 | User Profile |
| Member 5 | Authorization & Roles |

For full requirements, see the SRS document.

---

## Open Decisions (TBDs)

| ID | Item | Status |
|---|---|---|
| TBD-001 | Password hashing: Bcrypt vs Argon2id | ⏳ Pending |
| TBD-002 | Email service provider (SendGrid / Mailgun / AWS SES) | ⏳ Pending |

# Restaurant Reviews — User Management & Authentication

Covers all 5 "member" areas as one connected system:
1. Registration & Onboarding
2. Authentication & Sessions
3. Password Management
4. User Profile
5. Authorization & Roles

## Prerequisites
- Node.js 18+
- PostgreSQL 14+
- npm

## Setup (run these in order)

```bash
# 1. Install dependencies
npm install

# 2. Create the database (run once)
createdb restaurant_reviews
# If that command isn't found, open psql and run: CREATE DATABASE restaurant_reviews;

# 3. Copy env file and edit it with your Postgres username/password
cp .env.example .env
# open .env and set DATABASE_URL to match your local Postgres

# 4. Create tables + seed a demo admin account
npm run initdb

# 5. Start the server
npm start
```

Then open **http://localhost:3000**

## Demo login
- Admin account (pre-seeded): `admin@demo.com` / `admin123`
- Or click "Register" to create a normal user account live during your demo.


## Project structure
```
server.js              - app entrypoint, session setup
db/schema.sql           - users + session tables
db/init.js               - creates tables, seeds admin
routes/auth.js           - register, login, logout
routes/password.js       - forgot/reset password
routes/profile.js        - profile view/edit, admin dashboard
middleware/auth.js        - requireLogin, requireRole
views/*.ejs               - all pages
```

## If something breaks live
- `npm run initdb` is safe to re-run (it checks before inserting the admin).
- If PostgreSQL connection fails, double check `DATABASE_URL` in `.env` matches
  your actual Postgres username/password/port.
=======
# Team404Error
>>>>>>> 0cbeb3986e81974ccaf5ce74a78adfbf15a26cad
