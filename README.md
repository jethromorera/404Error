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

## What to show in your presentation
1. **Register** a new account → shows Registration & Onboarding
2. **Log out**, then **log back in** → shows Authentication & Sessions
3. Click **"Forgot password"**, submit your email → shows Password Management
   (reset link is displayed on screen instead of emailed, for demo purposes)
4. Go to **Profile**, edit your bio/avatar, save → shows User Profile
5. Log out, log in as `admin@demo.com` / `admin123`, visit **/admin** →
   shows Authorization & Roles (regular users get a 403 if they try this URL)

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
