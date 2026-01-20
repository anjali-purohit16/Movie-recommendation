Movie Recommendation Web App
📌 Project Overview

This is a Movie Recommendation Web Application built as part of an assignment.
The app allows users to enter a genre or short description of their movie preference and returns 3–5 relevant movie recommendations.

The project follows a full-stack approach with:

React for the frontend

Node.js + Fastify for the backend

OMDb API / AI-based API for movie data

SQLite (optional / planned) for storing user inputs and recommendations

🚀 Features

User can enter movie preferences (e.g., “action movies with strong female lead”)

Backend processes the input and fetches movie recommendations

Displays recommended movies on the UI

Clean, responsive UI using Tailwind CSS

REST API based architecture

Easy to extend with OpenAI / HuggingFace APIs

🛠 Tech Stack
Frontend

React (Vite)

Tailwind CSS

Fetch API

Backend

Node.js

Fastify

OMDb API (or OpenAI API – optional)

dotenv

Database (Optional / Future Scope)

SQLite

📂 Project Structure
project-root/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── tailwind.config.js
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── README.md
└── .gitignore


⚠️ Note: node_modules folder is intentionally removed.

🔧 Installation & Setup
1️⃣ Clone or Extract Project
git clone <repository-url>
# OR
extract the ZIP file

2️⃣ Frontend Setup
cd frontend
npm install
npm run dev


Frontend will run at:

http://localhost:5173

3️⃣ Backend Setup
cd backend
npm install
npm start


Backend will run at:

http://localhost:3000

🔑 Environment Variables

Create a .env file inside the backend folder:

OMDB_API_KEY=your_api_key_here


You can get a free API key from: https://www.omdbapi.com/

🔁 API Endpoints
✅ Health Check

GET /

{
  "message": "Backend is running 🚀"
}

🎥 Get Movie Recommendations

POST /recommend

Request Body:

{
  "userInput": "action movies"
}


Response:

{
  "recommendations": [
    {
      "title": "Mad Max: Fury Road",
      "year": "2015",
      "poster": "image_url"
    }
  ]
}

🧪 Testing with Postman

Method: POST

URL: http://localhost:3000/recommend

Headers:

Content-Type: application/json


Body (raw → JSON):

{
  "userInput": "romantic movies"
}

💾 Database Schema (Planned / Optional)
id INTEGER PRIMARY KEY
user_input TEXT
recommended_movies TEXT
timestamp DATETIME

🌱 Future Improvements
Integrate OpenAI / HuggingFace API for smarter recommendations
Store user history using SQLite
Add loading skeletons and error handling UI
Improve prompt engineering for AI-based results
Deploy using Vercel + Render

👩‍💻 Author
Anjali Purohit


Anjali Purohit
Frontend / Full Stack Developer
