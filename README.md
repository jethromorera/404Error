# Team404Error

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
