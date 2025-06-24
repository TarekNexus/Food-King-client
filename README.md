# FoodKing 🍲

FoodKing is a full-stack food sharing web application that connects donors and receivers to share surplus food. It allows users to add, update, request, and manage food items with secure authentication and responsive design.

## 🌐 Live Website

[🔗 Visit FoodKing](https://a11-food-king.netlify.app/)
[🔗 Backend GitHub Repo ](https://github.com/TarekNexus/Food-King-Server)
[🔗 Live API Server ](https://food-king-server-rho.vercel.app/)

---

## 🎯 Purpose

To reduce food waste and help communities by enabling users to share extra food with others in need. Built as a full-stack MERN (MongoDB, Express, React, Node) app with secure authentication and role-based access.

---

## 🔑 Key Features

- 🔐 Email/Password & Google-based Authentication
- 📦 CRUD operations for food items:
  - Add Food (Private)
  - Manage My Foods (Update/Delete)
  - View All Available Foods
  - Request Food
- 🧾 View My Food Requests
- 📅 Sort foods by expiry date
- 🔍 Search foods by name
- 🧱 Toggle Layout (2-column / 3-column grid view)
- 🍃 TanStack Query for data fetching & mutation
- 💬 Toast/SweetAlert notifications
- 🪄 Framer Motion Animations
- 🧠 JWT-based route protection (private route guards)
- 🖼️ Responsive Design (Mobile / Tablet / Desktop)
- 🌈 Clean & recruiter-friendly UI with proper spacing, alignment, and color contrast

---

## 🔧 Technologies & Packages Used

### Client

- React (Vite)
- React Router DOM
- TailwindCSS
- Firebase Auth
- Axios
- React Hook Form
- TanStack React Query
- JWT Decode
- SweetAlert2 / React Hot Toast
- Framer Motion
- dotenv

### Server

- Express.js
- MongoDB 
- CORS
- JSON Web Token (JWT)
- dotenv

---

## 📦 Dependencies (Frontend)

```json
{
  "@tailwindcss/vite": "^4.1.8",
  "@tanstack/react-query": "^5.80.5",
  "daisyui": "^5.0.43",
  "firebase": "^11.8.1",
  "framer-motion": "^12.16.0",
  "lottie-react": "^2.4.1",
  "lucide-react": "^0.511.0",
  "motion": "^12.16.0",
  "react": "^19.1.0",
  "react-dom": "^19.1.0",
  "react-icons": "^5.5.0",
  "react-router": "^7.6.1",
  "react-toastify": "^11.0.5",
  "react-tooltip": "^5.28.1",
  "sweetalert2": "^11.6.13",
  "swiper": "^11.2.8",
  "tailwindcss": "^4.1.8"
}

💪 Getting Started (Run Locally)

✅ Prerequisites

Node.js v18+

Git

📅 Clone the repository

git clone https://github.com/TarekNexus/Food-King-client
cd foodking-client

📦 Install dependencies

npm install

⚙️ Setup environment variables

Create a .env file in the root folder and add:
VITE_API_URL=your_api_url
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
# Add any other Firebase config keys you use

🚀 Start the development server
   npm run dev
