# Personal Portfolio Website 🚀

A full-stack personal portfolio website built using the MERN stack to showcase projects, skills, education, certifications, and contact information.

---

## 📌 Features

- Responsive portfolio website
- Dynamic projects section using MongoDB
- React frontend with reusable components
- Node.js + Express backend API
- MongoDB Atlas integration
- GitHub, LinkedIn, Email, and WhatsApp links
- Skills, education, and certifications sections
- Fully deployed using Vercel and Render

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- CSS

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

### Deployment
- Vercel
- Render

---

## 📂 Folder Structure

```bash
Portfolio/
│
├── client/
│   ├── public/
│   ├── src/
│   └── package.json
│
├── server/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── .env.example
│   └── package.json
│
└── README.md
```

---

## Backend Setup

```bash
cd server
npm install
```

Create `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Run backend:

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

## 📡 API Routes

### Get Projects

```bash
GET /api/projects
```

### Add Project

```bash
POST /api/projects
```

## ⭐ Future Improvements

- Dark mode
- Contact form backend
- Resume download feature
- Admin dashboard
- Animations and transitions

---

## 📜 License

This project is open source and available under the MIT License.
