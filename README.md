# Filipino Emigrants App

A web application built with **React** that manages data about Filipino emigrants.  
This project was developed as part of the **ITD112 Lab 1** course requirement.

---

## 🚀 Features
- Add, update, and delete emigrant records  
- View emigrant data in a chart (powered by Recharts)  
- Firebase integration for backend services  
- Responsive design with modern UI  

---

## 🛠️ Tech Stack
- **React** (Vite setup)
- **JavaScript (ES6+)**
- **Firebase**
- **Recharts**
- **CSS3**

---

## Upload a demo

https://github.com/user-attachments/assets/e7b2ef50-19fe-443b-8d5b-4f4a096f318d


## Dependencies Installations
- Install dependencies
```bash
npm install
```

## 📂 Project Structure

```plaintext
├── src/                    # Source files
│   ├── services/
│   │   └── emigrantsService.js  # Firebase CRUD operations
│   ├── App.jsx             # Main application component
│   ├── counter.js          # Counter component (example/test)
│   ├── firebase.js         # Firebase configuration
│   ├── javascript.svg      # Asset (SVG icon)
│   ├── main.jsx            # Entry point
│   └── style.css           # Application styles
```

---

## ⚡ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Jubil1/filipino-emigrant-app.git
cd filipino-emigrants-app
```
### 2. Install Dependencies
```bash
npm install
```
### 3. Start Development Server
```bash
npm run dev
```
### 4. Open App
```bash
http://localhost:5173
```
---

## Firebase Configuration
Make sure to configure your Firebase project with:
- Firestore Database (emigrants collection)
- Authentication (Email/Password and Google)
- Security rules for authenticated access

---

## Required Packages
- `react` - UI framework
- `react-dom` - React DOM rendering
- `firebase` - Firebase SDK
- `react-firebase-hooks` - Firebase authentication hooks
- `recharts` - Data visualization library
- `vite` - Build tool and development server



