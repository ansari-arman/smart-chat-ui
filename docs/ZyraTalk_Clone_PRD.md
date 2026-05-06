# 📄 Product Requirements Document (PRD)
## ZyraTalk Clone — AI Answering Service Platform
**Version:** 1.0  
**Author:** Fresher Developer Reference Guide  
**Tech Stack:** Next.js + Tailwind CSS (Frontend) | Node.js + Express.js + MySQL (Backend)  
**Date:** April 2026

---

## 📌 Table of Contents
1. [Project Overview](#1-project-overview)
2. [Goals & Objectives](#2-goals--objectives)
3. [Tech Stack Details](#3-tech-stack-details)
4. [System Architecture](#4-system-architecture)
5. [Database Schema (MySQL)](#5-database-schema-mysql)
6. [Frontend Pages & UI Modules](#6-frontend-pages--ui-modules)
7. [Backend API Design](#7-backend-api-design)
8. [Feature Breakdown (Sprints)](#8-feature-breakdown-sprints)
9. [Folder Structure](#9-folder-structure)
10. [Non-Functional Requirements](#10-non-functional-requirements)
11. [Milestones & Timeline](#11-milestones--timeline)
12. [Learning Outcomes](#12-learning-outcomes)

---

## 1. Project Overview

**ZyraTalk** is an AI-powered answering service platform for service-based businesses (plumbing, HVAC, legal, healthcare). It captures missed calls, books appointments, answers FAQs, and logs every interaction.

This clone will replicate the **core product experience** — a marketing website, a client dashboard, lead/demo request forms, AI webchat widget, and an admin panel — without requiring real telephony infrastructure (we simulate call logs with data).

> **Scope for this clone:** Marketing website + User Auth + Demo Request + Dashboard + AI Webchat + Call Log viewer + Admin Panel

---

## 2. Goals & Objectives

| Goal | Description |
|------|-------------|
| **Learn Full-Stack Dev** | Build a real-world project with frontend + backend + database |
| **Practice REST APIs** | Design, build, and consume RESTful endpoints |
| **Understand Auth** | Implement JWT-based user authentication |
| **Work with MySQL** | Design relational schemas and write SQL queries |
| **Deploy a Project** | Host the app on Vercel (frontend) + Railway/Render (backend) |

---

## 3. Tech Stack Details

### Frontend
| Technology | Purpose |
|-----------|---------|
| **Next.js 14** (App Router) | React framework for pages, routing, SSR |
| **Tailwind CSS** | Utility-first CSS styling |
| **Axios** | HTTP client to call backend APIs |
| **React Hook Form** | Form management (demo request, login, signup) |
| **Lucide React** | Icons |
| **Recharts** | Charts for analytics dashboard |

### Backend
| Technology | Purpose |
|-----------|---------|
| **Node.js** | JavaScript runtime |
| **Express.js** | Web framework for API routes |
| **MySQL2** | MySQL database driver |
| **JWT (jsonwebtoken)** | Authentication tokens |
| **Bcrypt** | Password hashing |
| **Dotenv** | Environment variables |
| **CORS** | Allow frontend to call backend |
| **Nodemon** | Auto-restart server in development |

### Database
| Technology | Purpose |
|-----------|---------|
| **MySQL** | Relational database (users, leads, calls, chats) |

---

## 4. System Architecture

```
┌─────────────────────────────────────────────────────┐
│                   BROWSER (User)                    │
└───────────────────────┬─────────────────────────────┘
                        │ HTTP / HTTPS
                        ▼
┌─────────────────────────────────────────────────────┐
│          FRONTEND — Next.js + Tailwind CSS          │
│  Pages: Home, Industries, Products, Dashboard,      │
│         Sign In, Sign Up, Admin, Contact            │
└───────────────────────┬─────────────────────────────┘
                        │ REST API calls (Axios)
                        ▼
┌─────────────────────────────────────────────────────┐
│          BACKEND — Node.js + Express.js             │
│  Routes: /auth, /leads, /calls, /chats, /admin      │
│  Middleware: JWT Auth, CORS, Error Handler          │
└───────────────────────┬─────────────────────────────┘
                        │ SQL Queries (mysql2)
                        ▼
┌─────────────────────────────────────────────────────┐
│                  DATABASE — MySQL                   │
│  Tables: users, leads, call_logs, chat_sessions,   │
│          chat_messages, industries, demo_requests   │
└─────────────────────────────────────────────────────┘
```

---

## 5. Database Schema (MySQL)

### Table: `users`
```sql
CREATE TABLE users (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  name        VARCHAR(100) NOT NULL,
  email       VARCHAR(150) UNIQUE NOT NULL,
  password    VARCHAR(255) NOT NULL,          -- bcrypt hashed
  role        ENUM('admin','client') DEFAULT 'client',
  company     VARCHAR(150),
  industry    VARCHAR(100),
  created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Table: `demo_requests`
```sql
CREATE TABLE demo_requests (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  name        VARCHAR(100) NOT NULL,
  email       VARCHAR(150) NOT NULL,
  phone       VARCHAR(20),
  company     VARCHAR(150),
  industry    VARCHAR(100),
  message     TEXT,
  status      ENUM('new','contacted','converted') DEFAULT 'new',
  created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Table: `call_logs`
```sql
CREATE TABLE call_logs (
  id           INT AUTO_INCREMENT PRIMARY KEY,
  user_id      INT NOT NULL,
  caller_name  VARCHAR(100),
  caller_phone VARCHAR(20),
  duration_sec INT DEFAULT 0,
  summary      TEXT,
  transcript   LONGTEXT,
  recording_url VARCHAR(255),
  status       ENUM('answered','missed','transferred') DEFAULT 'answered',
  notified     BOOLEAN DEFAULT FALSE,
  created_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
```

### Table: `chat_sessions`
```sql
CREATE TABLE chat_sessions (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  user_id     INT,
  visitor_id  VARCHAR(100),               -- random ID for anonymous visitors
  status      ENUM('open','closed') DEFAULT 'open',
  created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);
```

### Table: `chat_messages`
```sql
CREATE TABLE chat_messages (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  session_id  INT NOT NULL,
  sender      ENUM('visitor','ai','agent') NOT NULL,
  message     TEXT NOT NULL,
  created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (session_id) REFERENCES chat_sessions(id) ON DELETE CASCADE
);
```

### Table: `analytics`
```sql
CREATE TABLE analytics (
  id              INT AUTO_INCREMENT PRIMARY KEY,
  user_id         INT NOT NULL,
  month           VARCHAR(7),              -- e.g. "2026-04"
  calls_answered  INT DEFAULT 0,
  calls_missed    INT DEFAULT 0,
  leads_captured  INT DEFAULT 0,
  jobs_booked     INT DEFAULT 0,
  revenue_est     DECIMAL(10,2) DEFAULT 0.00,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
```

---

## 6. Frontend Pages & UI Modules

### 6.1 Public Pages (No Login Required)

#### `/` — Home Page
- **Hero Section:** Headline "Turn Missed Calls Into Revenue Opportunities" + CTA button "Get a Demo"
- **How It Works:** 4-step process (Call Answered → Integrate → Notify → Log)
- **Why Choose Us:** 5 feature cards with icons
- **Testimonials:** Carousel of client reviews
- **FAQ Section:** Accordion-style expandable questions
- **Demo CTA Section:** Email capture form at bottom
- **Footer:** Links, social icons, contact info

#### `/home-services`, `/legal`, `/health-care` — Industry Pages
- Industry-specific hero with tailored headline
- Use case list (what problems are solved)
- Feature highlights
- CTA button linking to `/request-demo`

#### `/request-demo` — Demo Request Page
- Form fields: Name, Email, Phone, Company, Industry (dropdown), Message
- On submit → POST to `/api/leads`
- Success message shown after submit

#### `/sign-in` — Login Page
- Email + Password form
- "Remember Me" checkbox
- Link to Sign Up
- On submit → POST `/api/auth/login` → save JWT in localStorage

#### `/sign-up` — Register Page
- Name, Email, Password, Company, Industry
- On submit → POST `/api/auth/register`
- Redirect to Dashboard after success

#### `/ai-webchat` — Webchat Product Page
- Marketing page explaining the webchat feature
- Live demo chat widget embedded (floating button in bottom-right)

#### `/analytics-that-tell-a-story` — Analytics Product Page
- Marketing page with screenshot of dashboard
- Metrics preview cards

#### `/contactus` — Contact Page
- Contact form (Name, Email, Message)
- Company address, phone, email displayed

---

### 6.2 Protected Pages (Login Required)

#### `/dashboard` — Client Dashboard
**Components:**
- **Sidebar:** Navigation links (Dashboard, Call Logs, Chat Sessions, Analytics, Settings)
- **Stats Cards:** Total Calls, Calls Answered, Missed Calls, Leads Captured (fetched from API)
- **Recent Call Logs Table:** Last 10 calls with caller name, status, duration, date
- **Quick Chart:** Monthly call volume bar chart using Recharts

#### `/dashboard/calls` — Call Logs Page
- Full table of all call logs for logged-in user
- Columns: Date, Caller Name, Phone, Duration, Status, Summary, Actions
- Click row → modal with full transcript + recording (mocked URL)
- Filter by: status, date range

#### `/dashboard/chats` — Chat Sessions Page
- Table of chat sessions
- Click session → view full message thread

#### `/dashboard/analytics` — Analytics Page
- Bar chart: Calls per month
- Line chart: Leads captured per month
- Pie chart: Call status breakdown (answered vs missed)
- Summary cards: Total revenue estimated, Jobs booked

#### `/dashboard/settings` — Settings Page
- Update profile: Name, Company, Industry
- Change password form
- Notification preferences

---

### 6.3 Admin Pages

#### `/admin` — Admin Dashboard
- Total users count, total demo requests, total calls
- Recent demo requests table
- Recent new user registrations

#### `/admin/users` — User Management
- Table: All users with role, company, created date
- Actions: View details, Delete user

#### `/admin/demo-requests` — Demo Requests
- Table: All demo request submissions
- Status update dropdown (new → contacted → converted)

---

### 6.4 Shared Components

| Component | Description |
|-----------|-------------|
| `Navbar` | Top navigation with dropdowns for Industries & Products |
| `Footer` | Links, social, contact info |
| `ChatWidget` | Floating bottom-right AI chat bubble |
| `ProtectedRoute` | HOC that redirects to /sign-in if not logged in |
| `StatsCard` | Reusable card showing a metric number + label |
| `CallLogTable` | Table component for call log data |
| `Modal` | Reusable modal for transcript detail view |
| `Loader` | Spinner for API loading states |
| `Toast` | Success/error notification popup |

---

## 7. Backend API Design

### Base URL: `http://localhost:5000/api`

### Authentication Endpoints
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/auth/register` | Register new user | No |
| POST | `/auth/login` | Login, returns JWT | No |
| GET | `/auth/me` | Get logged-in user info | Yes |

**Login Response Example:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR...",
  "user": {
    "id": 1,
    "name": "John Smith",
    "email": "john@example.com",
    "role": "client"
  }
}
```

---

### Leads / Demo Requests
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/leads` | Submit demo request form | No |
| GET | `/leads` | Get all leads (admin only) | Admin |
| PATCH | `/leads/:id` | Update lead status | Admin |

---

### Call Logs
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/calls` | Get all calls for logged-in user | Yes |
| GET | `/calls/:id` | Get single call details | Yes |
| POST | `/calls` | Create new call log (seeding/testing) | Admin |
| DELETE | `/calls/:id` | Delete a call log | Admin |

**GET /calls Query Params:**
- `?status=answered` — filter by status
- `?from=2026-01-01&to=2026-04-30` — date range filter
- `?page=1&limit=10` — pagination

---

### Chat
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/chats/start` | Start a new chat session | No |
| POST | `/chats/:sessionId/message` | Send a message | No |
| GET | `/chats` | Get all sessions for user | Yes |
| GET | `/chats/:sessionId` | Get full chat thread | Yes |

---

### Analytics
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/analytics` | Get analytics data for logged-in user | Yes |
| GET | `/analytics/summary` | Get summary stats (calls, leads, jobs) | Yes |

---

### Admin
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/admin/users` | Get all users | Admin |
| DELETE | `/admin/users/:id` | Delete a user | Admin |
| GET | `/admin/stats` | Get platform-wide stats | Admin |

---

### Middleware

**JWT Auth Middleware** (`middleware/auth.js`):
```javascript
// Attach this to any protected route
// Reads token from: Authorization: Bearer <token>
// Sets req.user = decoded token payload
```

**Admin Middleware** (`middleware/admin.js`):
```javascript
// Run AFTER auth middleware
// Checks req.user.role === 'admin'
// Returns 403 if not admin
```

---

## 8. Feature Breakdown (Sprints)

> Follow these sprints in order. Each sprint builds on the previous one.

### ✅ Sprint 1 — Project Setup (Week 1)
- [ ] Create Next.js project with Tailwind CSS
- [ ] Create Express.js project with folder structure
- [ ] Set up MySQL database locally
- [ ] Create all database tables
- [ ] Create `.env` file for both projects
- [ ] Test backend server runs on port 5000
- [ ] Test frontend runs on port 3000

### ✅ Sprint 2 — Auth System (Week 2)
- [ ] Build `POST /auth/register` API
- [ ] Build `POST /auth/login` API — return JWT
- [ ] Build `GET /auth/me` API — protected route
- [ ] Build `/sign-up` page with form + API call
- [ ] Build `/sign-in` page with form + API call
- [ ] Save JWT to localStorage on login
- [ ] Create `ProtectedRoute` component in Next.js

### ✅ Sprint 3 — Marketing Website (Week 3)
- [ ] Build Navbar component with dropdowns
- [ ] Build Footer component
- [ ] Build Home page with all sections (Hero, How It Works, Why Us, Testimonials, FAQ)
- [ ] Build `/request-demo` page with form
- [ ] Build industry pages: `/home-services`, `/legal`, `/health-care`
- [ ] Build `/contactus` page
- [ ] Build `/ai-webchat` product page

### ✅ Sprint 4 — Dashboard Shell (Week 4)
- [ ] Build sidebar navigation layout
- [ ] Build Dashboard home page with stats cards
- [ ] Connect stats cards to `GET /analytics/summary`
- [ ] Build recent calls mini-table on dashboard
- [ ] Add loading states and error handling

### ✅ Sprint 5 — Call Logs (Week 5)
- [ ] Build `GET /calls` API (with filter + pagination)
- [ ] Build `GET /calls/:id` API
- [ ] Seed the database with 20–30 fake call log records
- [ ] Build `/dashboard/calls` page with full table
- [ ] Add filter UI (by status, date)
- [ ] Build modal for transcript detail view
- [ ] Add pagination controls

### ✅ Sprint 6 — AI Webchat Widget (Week 6)
- [ ] Build floating chat bubble component (bottom-right)
- [ ] Build `POST /chats/start` API
- [ ] Build `POST /chats/:id/message` API
- [ ] Connect widget to backend — store messages in DB
- [ ] Add simple AI response (use a hardcoded FAQ bot logic or random responses)
- [ ] Build `/dashboard/chats` page for viewing chat history

### ✅ Sprint 7 — Analytics Dashboard (Week 7)
- [ ] Seed analytics table with monthly data
- [ ] Build `GET /analytics` API
- [ ] Build `/dashboard/analytics` page
- [ ] Add bar chart (calls per month) with Recharts
- [ ] Add line chart (leads per month)
- [ ] Add pie chart (call status breakdown)
- [ ] Add summary cards

### ✅ Sprint 8 — Admin Panel (Week 8)
- [ ] Build admin middleware
- [ ] Build `GET /admin/users` and `DELETE /admin/users/:id` APIs
- [ ] Build `GET /leads` and `PATCH /leads/:id` APIs
- [ ] Build `/admin` dashboard page
- [ ] Build `/admin/users` page
- [ ] Build `/admin/demo-requests` page

### ✅ Sprint 9 — Polish & Deploy (Week 9)
- [ ] Add proper error handling everywhere (try/catch)
- [ ] Add form validation (client + server side)
- [ ] Make all pages mobile responsive
- [ ] Write a README.md
- [ ] Deploy frontend to Vercel
- [ ] Deploy backend to Railway or Render
- [ ] Deploy MySQL to PlanetScale or Railway
- [ ] Update environment variables in production

---

## 9. Folder Structure

### Frontend (Next.js)
```
zyratalk-frontend/
├── app/
│   ├── page.jsx                    ← Home page
│   ├── layout.jsx                  ← Root layout (Navbar + Footer)
│   ├── sign-in/page.jsx
│   ├── sign-up/page.jsx
│   ├── request-demo/page.jsx
│   ├── contactus/page.jsx
│   ├── home-services/page.jsx
│   ├── legal/page.jsx
│   ├── health-care/page.jsx
│   ├── ai-webchat/page.jsx
│   ├── dashboard/
│   │   ├── layout.jsx              ← Sidebar layout
│   │   ├── page.jsx                ← Dashboard home
│   │   ├── calls/page.jsx
│   │   ├── chats/page.jsx
│   │   ├── analytics/page.jsx
│   │   └── settings/page.jsx
│   └── admin/
│       ├── page.jsx
│       ├── users/page.jsx
│       └── demo-requests/page.jsx
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── ChatWidget.jsx
│   ├── StatsCard.jsx
│   ├── CallLogTable.jsx
│   ├── Modal.jsx
│   ├── Loader.jsx
│   └── Toast.jsx
├── lib/
│   └── api.js                      ← Axios instance with base URL + token
├── context/
│   └── AuthContext.jsx             ← JWT state management
├── public/
│   └── images/
├── .env.local                      ← NEXT_PUBLIC_API_URL=http://localhost:5000
└── tailwind.config.js
```

### Backend (Node.js + Express.js)
```
zyratalk-backend/
├── config/
│   └── db.js                       ← MySQL connection pool
├── controllers/
│   ├── authController.js
│   ├── leadController.js
│   ├── callController.js
│   ├── chatController.js
│   ├── analyticsController.js
│   └── adminController.js
├── middleware/
│   ├── auth.js                     ← JWT verification
│   └── admin.js                    ← Role check
├── routes/
│   ├── authRoutes.js
│   ├── leadRoutes.js
│   ├── callRoutes.js
│   ├── chatRoutes.js
│   ├── analyticsRoutes.js
│   └── adminRoutes.js
├── utils/
│   └── generateToken.js
├── seed/
│   └── seedData.js                 ← Script to insert fake data for testing
├── .env                            ← DB_HOST, DB_USER, DB_PASS, JWT_SECRET
├── server.js                       ← App entry point
└── package.json
```

---

## 10. Non-Functional Requirements

### Security
- All passwords must be hashed using **bcrypt** (minimum 10 salt rounds)
- JWT tokens must expire in **24 hours**
- Never store plain-text passwords or tokens in the database
- Use HTTPS in production

### Performance
- API responses should be under **500ms** for standard queries
- Use MySQL indexes on frequently queried columns (user_id, status, created_at)
- Use pagination for list endpoints (default: 10 items per page)

### Responsiveness
- All pages must work on mobile (375px width) and desktop (1280px)
- Use Tailwind responsive prefixes: `sm:`, `md:`, `lg:`

### Error Handling
- All API routes must return proper HTTP status codes:
  - `200` OK, `201` Created, `400` Bad Request, `401` Unauthorized, `403` Forbidden, `404` Not Found, `500` Server Error
- Frontend must display error messages from API to the user

### Code Quality
- Use `async/await` instead of `.then()` chains
- No hardcoded values — use `.env` for secrets and configs
- Write comments for complex logic

---

## 11. Milestones & Timeline

| Week | Sprint | Deliverable |
|------|--------|-------------|
| Week 1 | Sprint 1 | Both servers running, DB connected |
| Week 2 | Sprint 2 | Login & Register working end-to-end |
| Week 3 | Sprint 3 | Full marketing website live |
| Week 4 | Sprint 4 | Dashboard shell with real data |
| Week 5 | Sprint 5 | Call log CRUD with filters |
| Week 6 | Sprint 6 | Chat widget functional |
| Week 7 | Sprint 7 | Analytics charts with real DB data |
| Week 8 | Sprint 8 | Admin panel functional |
| Week 9 | Sprint 9 | Deployed to production, README done |

---

## 12. Learning Outcomes

By completing this project you will have practical experience in:

| Skill | How You'll Learn It |
|-------|---------------------|
| **Next.js App Router** | Building 10+ pages with layouts and nested routing |
| **Tailwind CSS** | Styling every component with utility classes |
| **REST API Design** | Building 20+ endpoints across 6 resource types |
| **MySQL** | Designing relational schemas, writing JOIN queries |
| **JWT Authentication** | Register → Login → Protected routes → Role-based access |
| **State Management** | Managing auth state with React Context API |
| **Axios & API Integration** | Consuming your own backend from the frontend |
| **Data Visualization** | Building charts using Recharts |
| **Pagination & Filtering** | Server-side pagination + client-side filter UI |
| **Deployment** | Hosting on Vercel + Railway/Render |
| **Git** | Committing progress sprint by sprint |

---

## 🚀 Getting Started — First Steps

### Step 1: Create Backend
```bash
mkdir zyratalk-backend
cd zyratalk-backend
npm init -y
npm install express mysql2 bcryptjs jsonwebtoken dotenv cors nodemon
```

### Step 2: Create Frontend
```bash
npx create-next-app@latest zyratalk-frontend
# Choose: TypeScript=No, Tailwind=Yes, App Router=Yes
cd zyratalk-frontend
npm install axios react-hook-form lucide-react recharts
```

### Step 3: Create MySQL Database
```sql
CREATE DATABASE zyratalk_db;
USE zyratalk_db;
-- Then run all CREATE TABLE statements from Section 5
```

### Step 4: Create .env Files

**Backend `.env`:**
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=zyratalk_db
JWT_SECRET=your_super_secret_key_here
PORT=5000
```

**Frontend `.env.local`:**
```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

### Step 5: Start Both Servers
```bash
# Terminal 1 — Backend
cd zyratalk-backend
nodemon server.js

# Terminal 2 — Frontend
cd zyratalk-frontend
npm run dev
```

---

*This PRD is your complete blueprint. Follow the sprints in order, build one feature at a time, and commit your code after each sprint. Good luck — you've got this! 🎯*
