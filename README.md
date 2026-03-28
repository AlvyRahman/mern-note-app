# Notes App 📝

A simple MERN stack note-taking application inspired by Windows 10 Sticky Notes.

## Features

- ✅ Create, edit, and delete notes
- ✅ Color-coded notes
- ✅ Responsive grid layout
- ✅ Dark/Light theme support

## Tech Stack

**Frontend:**
- React + Vite
- Chakra UI v3
- Zustand (state management)
- React Router
- next-themes (theme switching)

**Backend:**
- Node.js + Express
- MongoDB + Mongoose

## Project Structure
```
notes-app/
├── frontend/          # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/
│   │   └── App.jsx
│   └── package.json
│
├── backend/           # Express backend
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
│
└── README.md
```

## Setup Instructions

### Prerequisites
- Node.js (v16+)
- MongoDB

### Backend Setup

1. Navigate to backend folder:
```bash
cd backend
npm install
```

2. Create `.env` file:
```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

3. Start backend:
```bash
npm start
```

### Frontend Setup

1. Navigate to frontend folder:
```bash
cd frontend
npm install
```

2. Start frontend:
```bash
npm run dev
```

3. Open http://localhost:5173

## API Endpoints

- `GET /api/notes` - Get all notes
- `GET /api/notes/:id` - Get single note
- `POST /api/notes` - Create note
- `PATCH /api/notes/:id` - Update note
- `DELETE /api/notes/:id` - Delete note

## Author

Your Name - Learning MERN Stack

## License

MIT# Notes App 📝

A simple MERN stack note-taking application inspired by Windows 10 Sticky Notes.

## Features

- ✅ Create, edit, and delete notes
- ✅ Color-coded notes
- ✅ Responsive grid layout
- ✅ Dark/Light theme support

## Tech Stack

**Frontend:**
- React + Vite
- Chakra UI v3
- Zustand (state management)
- React Router
- next-themes (theme switching)

**Backend:**
- Node.js + Express
- MongoDB + Mongoose

## Project Structure
```
notes-app/
├── frontend/          # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/
│   │   └── App.jsx
│   └── package.json
│
├── backend/           # Express backend
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
│
└── README.md
```

## Setup Instructions

### Prerequisites
- Node.js (v16+)
- MongoDB

### Backend Setup

1. Navigate to backend folder:
```bash
cd backend
npm install
```

2. Create `.env` file:
```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

3. Start backend:
```bash
npm start
```

### Frontend Setup

1. Navigate to frontend folder:
```bash
cd frontend
npm install
```

2. Start frontend:
```bash
npm run dev
```

3. Open http://localhost:5173

## API Endpoints

- `GET /api/notes` - Get all notes
- `GET /api/notes/:id` - Get single note
- `POST /api/notes` - Create note
- `PATCH /api/notes/:id` - Update note
- `DELETE /api/notes/:id` - Delete note

## Author

Alvy Rahman

## License

MIT
