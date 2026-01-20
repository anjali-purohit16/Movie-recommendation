🎬 Movie Recommendation Web App

📌 Overview

A full-stack web application that recommends 3–5 movies based on a user’s input (genre or short description).

Example input:

“action movies with strong female lead”

🛠 Tech Stack

Frontend: React (Vite), Tailwind CSS

Backend: Node.js, Fastify

API: OMDb API (AI-based recommendation logic can be extended)

Database: SQLite (planned / optional)

🚀 Features

User input form for movie preferences

Backend API processes input and returns recommendations

Clean, responsive UI

REST API architecture

📂 Project Structure
frontend/   → React UI
backend/    → Fastify API
README.md


node_modules removed intentionally.

🔧 Local Setup
Frontend
cd frontend
npm install
npm run dev


Runs on: http://localhost:5173

Backend
cd backend
npm install
npm start


Runs on: http://localhost:3000

Create .env in backend:

OMDB_API_KEY=your_api_key_here

🔁 API Example

POST /recommend

{
  "userInput": "romantic movies"
}


Response

{
  "recommendations": [
    { "title": "Titanic", "year": "1997" }
  ]
}

🌐 Deployment Instructions
Frontend (Vercel / Netlify)

Push code to GitHub

Import frontend folder

Build command:

npm run build


Output directory:

dist

Backend (Render / Railway)

Create new Web Service

Root directory: backend

Start command:

npm start


Add environment variable:

OMDB_API_KEY

👩‍💻 Author

Anjali Purohit
