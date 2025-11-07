# 🎬 VFilms Website Clone EZ test

A pixel-perfect **single-page React web application** inspired by the *VFilms official website design* provided in the assignment.  
This project replicates the **main home page** with responsive layouts, a functional navbar toggle, and section-based navigation.

---

## 🌟 Features

✅ Pixel-perfect recreation of the Adobe XD / Figma design  
✅ Responsive design across all breakpoints  
✅ Mobile-friendly navbar (slide-in/out menu)  
✅ Clean and modular React component structure  
✅ API-integrated contact form (POST request)  
✅ TailwindCSS for rapid, modern styling  

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-------------|----------|
| **React.js (Vite)** | Component-based frontend framework |
| **Tailwind CSS** | Utility-first responsive styling |
| **JavaScript (ES6)** | Logic and interactivity |
| **HTML5 / JSX** | Component markup |
| **Axios** | API requests |
| **Figma / Adobe XD** | Design reference |

---

## 📁 Folder Structure



vfilms-clone/
│
├── public/
│
├── src/
│ ├── assets/
│ │ ├── Hero/
│ │ │ ├── Hero Mandala.svg
│ │ │ ├── VFilms Logo.png
│ │ ├── f1.png
│ │ ├── f2.png
│ │ ├── f3.png
│ │ ├── image 6.png # Tape graphic
│ │ ├── Vector 5.svg # Blue underline
│ │ ├── Frame 33.svg # Bottom border
│ │ ├── bg-texture.png # Optional background pattern
│ │
│ ├── components/
│ │ ├── Navbar.jsx
│ │ ├── Hero.jsx
│ │ ├── ServicesMain.jsx
│ │ ├── AboutTeam.jsx
│ │ ├── Contact.jsx
│ │ └── Footer.jsx
│ │
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
│
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── README.md


---

## ⚙️ Installation & Setup

Follow these steps to set up the project locally 👇

### 1️⃣ Clone the Repository

```bash
git clone <your-repository-link>
cd vfilms-clone

2️⃣ Install Dependencies
npm install

3️⃣ Run the Development Server
npm run dev


The project will start at:
👉 http://localhost:5173/

🌐 API Integration

The Contact Form uses the following endpoint:

POST Request:
https://vernanbackend.ezlab.in/api/contact-us/

Request Body (JSON):

{
  "name": "Amit",
  "email": "amit@gmail.com",
  "phone": "9876543210",
  "message": "Hello there!"
}


✅ Frontend Validations:

Empty fields not allowed

Email validation

Success message on HTTP 200

⚠️ If you see this error:

Unsupported media type "text/plain" in request.


Make sure you are setting correct headers in your Axios call:

headers: { "Content-Type": "application/json" }
Written Readme.md by using AI
