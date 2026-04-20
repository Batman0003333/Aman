# 🔴 Aman Verma — Portfolio

A **Stranger Things** themed developer portfolio built with **React + Node.js**.

---

## 📁 Project Structure

```
portfolio/
├── client/                  # React frontend (CRA)
│   ├── public/
│   │   └── index.html
│   └── src/
│       ├── components/
│       │   ├── Navbar.jsx   # Fixed nav with scroll effect
│       │   ├── Hero.jsx     # Animated hero with particles
│       │   ├── About.jsx    # Bio + skills grid
│       │   ├── Projects.jsx # Project cards (fetched from API)
│       │   ├── Contact.jsx  # Contact form + social links
│       │   ├── Lights.jsx   # Christmas lights animation
│       │   ├── Footer.jsx
│       │   └── useReveal.js # Scroll reveal hook
│       ├── pages/
│       │   └── Home.jsx     # Assembles all sections
│       ├── styles/
│       │   └── global.css   # Theme variables + shared styles
│       ├── App.jsx          # React Router setup
│       └── index.js         # Entry point
│
├── server/                  # Node.js + Express backend
│   ├── index.js             # API routes
│   ├── .env.example         # Environment variable template
│   └── package.json
│
├── package.json             # Root — runs both concurrently
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- npm v9+

### 1. Install all dependencies

```bash
npm run install:all
```

### 2. Set up environment variables

```bash
cp server/.env.example server/.env
# Edit server/.env and add your Gmail App Password
```

### 3. Run the full stack in development

```bash
npm run dev
```

- **Frontend** → http://localhost:3000
- **Backend API** → http://localhost:5000

---

## 🌐 API Endpoints

| Method | Route            | Description                  |
|--------|------------------|------------------------------|
| GET    | `/api/health`    | Server health check          |
| GET    | `/api/projects`  | Returns all project data     |
| POST   | `/api/contact`   | Sends contact form email     |

### POST `/api/contact` body
```json
{
  "name": "string",
  "email": "string",
  "message": "string"
}
```

---

## 📧 Setting Up the Contact Form

1. Enable 2-Factor Authentication on your Gmail account.
2. Go to **Google Account → Security → App Passwords**.
3. Create a new app password for "Mail".
4. Paste it into `server/.env` as `MAIL_PASS`.

---

## 🏗️ Build for Production

```bash
npm run build
```

This builds the React app into `client/build/`. You can then serve it statically from the Express server by adding:

```js
// In server/index.js — add after your API routes
const path = require("path");
app.use(express.static(path.join(__dirname, "../client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
```

---

## ✨ Features

- 🔴 Flickering red neon title animation
- 🕯️ Animated Christmas lights bar
- 🌫️ Floating particle spores
- 📡 CRT scanline overlay
- 🌿 SVG Upside Down vine decoration
- 📬 Working contact form with Node.js + Nodemailer
- 🔁 Projects served dynamically from Express API
- 📱 Fully responsive (mobile-first)
- ⚡ Scroll-triggered reveal animations

---

## 🛠️ Tech Stack

| Layer     | Technology                          |
|-----------|-------------------------------------|
| Frontend  | React 18, React Router v6           |
| Backend   | Node.js, Express                    |
| Email     | Nodemailer (Gmail SMTP)             |
| Styling   | Pure CSS (no UI libraries)          |
| Fonts     | Bebas Neue, Oswald, Share Tech Mono |
| Dev tools | concurrently, nodemon               |

---

*"Friends don't lie."* — Built with ❤️ by Aman Verma
