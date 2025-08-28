
# World Vision Dashboard

A modern, full-stack economic intelligence dashboard built with Django (backend) and React, TypeScript, and Tailwind CSS (frontend). This project provides comprehensive data visualization for economic indicators including GDP trends, unemployment rates, and inflation analysis.

## Features

- **Interactive Charts**: Beautiful data visualizations using Recharts
- **Authentication System**: Protected routes with user management
- **Django Backend**: Robust REST API and admin interface

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS
- **Backend**: Django, Django REST Framework, SQLite (default, can be changed)

## Project Structure

```
Backend/
  myproject/
    authapp/         # Django app for authentication and API
    staticfiles/     # Static assets for admin and API
    manage.py        # Django management script
    requirements.txt # Python dependencies
Frontend/
  src/
    components/      # Reusable UI and chart components
    contexts/        # React contexts
    hooks/           # Custom React hooks
    pages/           # Page components
    utils/           # Utility functions and mock data
    lib/             # Library configurations
  public/            # Static assets
  package.json       # Node.js dependencies
```

## Getting Started

### Prerequisites

- Python 3.10+
- Node.js 18+
- npm (comes with Node.js)

---

### Backend Setup (Django)

1. Navigate to the backend directory:
   ```powershell
   cd Backend/myproject
   ```
2. (Optional) Create and activate a virtual environment:
   ```powershell
   python -m venv venv
   .\venv\Scripts\activate
   ```
3. Install Python dependencies:
   ```powershell
   pip install -r requirements.txt
   ```
4. Apply migrations:
   ```powershell
   python manage.py migrate
   ```
5. Start the Django development server:
   ```powershell
   python manage.py runserver
   ```
6. Access the backend at: `http://127.0.0.1:8000/`

---

### Frontend Setup (React + Vite)

1. Navigate to the frontend directory:
   ```powershell
   cd Frontend
   ```
2. Install Node.js dependencies:
   ```powershell
   npm install
   ```
3. Start the frontend development server:
   ```powershell
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:8080/`

---

### Available Scripts (Frontend)

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

---

## Features Overview

### Dashboard
- Economic indicators overview
- Interactive data filters
- Real-time chart updates
- Responsive grid layout

### Authentication
- User login/logout
- Protected routes
- Session management

### Data Visualization
- Line charts for trends
- Bar charts for comparisons
- Dynamic data filtering
- Responsive chart layouts

### Backend API
- RESTful endpoints for data
- User authentication and management
- Admin interface for data management

---

## Usage


- Backend runs locally at: `http://127.0.0.1:8000/`
- Frontend runs locally at: `http://localhost:8080/`
- Deployed application is available at: [https://worldvision-api.onrender.com]

---



## License

This project is licensed under the MIT License. See LICENSE file for details.

---

## Acknowledgments

- Built with modern web technologies
- Inspired by data-driven decision making
- Designed for economic analysts and researchers


---

### Test User Details
- **Username:** test1
- **Password:** test1@123
