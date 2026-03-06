# MyPustak - Mini Blog Post Manager

## 📋 Assignment Overview

**MyPustak** is a full-stack web application developed as a mini blog post manager. This assignment demonstrates building a complete CRUD (Create, Read, Update, Delete) application with a modern React frontend and a FastAPI backend. The application allows users to manage blog posts efficiently with a clean, responsive user interface.

**Project Name:** MyPustak Full Stack Developer Assignment – Mini Blog Post Manager

## 🎯 Features Implemented

### Core Functionality

- ✅ **Create Posts** - Add new blog posts with title and body content
- ✅ **Read Posts** - Display all posts in a clean, grid-based layout
- ✅ **Delete Posts** - Remove posts with confirmation dialog
- ✅ **Form Validation** - Ensure both title and content are filled before submission
- ✅ **Loading States** - Animated loading indicator while fetching posts
- ✅ **Empty State** - User-friendly message when no posts exist

### UI/UX Features

- 🎨 **Responsive Design** - Mobile-friendly interface optimized for all screen sizes
- 🎯 **Grid Layout** - Posts display in a responsive grid (1 column on mobile, 2 on desktop)
- ✨ **Interactive Elements** - Smooth transitions, hover effects, and animations
- 💬 **User Feedback** - Confirmation dialogs for destructive actions
- 🚀 **Real-time Updates** - Instant UI updates after post operations
- 📊 **Post Counter** - Display total number of posts created

## 🛠️ Technology Stack

### Backend

- **FastAPI** - Modern, fast Python web framework with automatic API documentation
- **Python 3.8+** - Programming language
- **Pydantic** - Data validation using Python type annotations
- **CORS Middleware** - Enabled for cross-origin requests from frontend
- **In-Memory Storage** - Posts stored in-memory list (perfect for prototyping)

### Frontend

- **React 19** - Modern UI library with hooks
- **Vite** - Fast build tool and high-performance dev server
- **Tailwind CSS** - Utility-first CSS framework for responsive design
- **Axios** - Promise-based HTTP client for API communication
- **ESLint** - Code quality and linting

### Key Libraries & Versions

- axios: ^1.13.6
- react: ^19.2.0
- react-dom: ^19.2.0
- @tailwindcss/vite: ^4.2.1
- fastapi[standard] (latest)

## 📁 Project Structure

```
MyPustak/
├── backend/                      # FastAPI Backend
│   ├── main.py                   # FastAPI app initialization, CORS setup
│   ├── routes.py                 # API route handlers (GET, POST, DELETE)
│   ├── models.py                 # Data models (in-memory post storage)
│   ├── schemas.py                # Pydantic schemas for request/response validation
│   ├── requirements.txt           # Python dependencies
│   └── __pycache__/              # Python cache directory
│
└── frontend/                      # React Frontend
    ├── src/
    │   ├── App.jsx               # Main app component with state management
    │   ├── api.js                # Axios API client configuration
    │   ├── main.jsx              # React entry point
    │   ├── index.css             # Global Tailwind CSS styles
    │   ├── assets/               # Static assets
    │   └── components/           # Reusable React components
    │       ├── PostForm.jsx      # Form for creating new posts
    │       ├── PostItem.jsx      # Individual post card display
    │       └── PostList.jsx      # Grid container for post items
    ├── index.html                # HTML template
    ├── package.json              # npm dependencies and scripts
    ├── vite.config.js            # Vite build configuration
    ├── eslint.config.js          # ESLint rules
    └── README.md                 # Frontend documentation
```

### Quick Start (All-in-One)

#### Step 1: Clone or Extract Project

```bash
cd MyPustak
```

#### Step 2: Start Backend

```bash
cd backend
python -m venv venv

# On Windows
venv\Scripts\activate
# On macOS/Linux
source venv/bin/activate

pip install -r requirements.txt
uvicorn main:app --reload
or
fastapi dev main.py
```

Backend will run at: `http://localhost:8000`

#### Step 3: Start Frontend (in a new terminal)

```bash
cd frontend
npm install
npm run dev
```

Frontend will run at: `http://localhost:5173`

#### Step 4: Open Application

Navigate to `http://localhost:5173` in your browser and start creating posts!

## 📡 API Documentation

The backend provides three main endpoints for managing posts:

### 1. GET /posts

**Description:** Retrieve all posts

**URL:** `GET http://localhost:8000/posts`

**Response (200 OK):**

```json
[
  {
    "id": 1,
    "title": "First Post",
    "body": "This is the content of my first post..."
  },
  {
    "id": 2,
    "title": "Second Post",
    "body": "Another great post content..."
  }
]
```

### 2. POST /posts

**Description:** Create a new post

**URL:** `POST http://localhost:8000/posts`

**Request Body:**

```json
{
  "title": "My New Post",
  "body": "This is the content of my new post that I want to share with everyone."
}
```

**Response (200 OK):**

```json
{
  "id": 3,
  "title": "My New Post",
  "body": "This is the content of my new post that I want to share with everyone."
}
```

**Validation Errors:** Returns 422 if title or body is missing/empty

### 3. DELETE /posts/{post_id}

**Description:** Delete a post by its ID

**URL:** `DELETE http://localhost:8000/posts/1`

**Response (200 OK):**

```json
{
  "message": "post deleted"
}
```

**Error Response (404 Not Found):**

```json
{
  "detail": "post not found"
}
```

## 💻 How to Use the Application

1. **Open Application**
   - Ensure both backend and frontend servers are running
   - Navigate to `http://localhost:5173`

2. **Create a Post**
   - Fill in the "Title" field
   - Fill in the "Content" (body) field
   - Click the "Create" button
   - Post appears instantly in the list below

3. **View Posts**
   - All posts are displayed in a responsive grid
   - Each post shows the title and content preview
   - Post counter shows total number of posts

4. **Delete a Post**
   - Click the "Delete" button on any post card
   - Confirm the deletion in the popup dialog
   - Post is removed immediately

5. **Form Validation**
   - Both title and content fields are required
   - Alert message if you try to submit empty fields
   - Fields clear automatically after successful post creation


## 📚 File Descriptions

### Backend Files

**main.py**

- FastAPI application initialization
- CORS middleware configuration for frontend communication
- Root health-check endpoint

**routes.py**

- GET `/posts` - Retrieve all posts
- POST `/posts` - Create new post
- DELETE `/posts/{post_id}` - Delete specific post
- Error handling for missing posts (404)

**models.py**

- In-memory post storage using Python list
- Data structure: `{"id": int, "title": str, "body": str}`

**schemas.py**

- Pydantic models for request/response validation
- `PostCreate` - Validates incoming post data
- `Post` - Response schema with ID

### Frontend Files

**App.jsx**

- Main application component
- State management for posts and loading
- Handles create and delete operations
- Renders PostForm and PostList components
- Loading spinner while fetching data

**api.js**

- Axios instance configuration
- API client methods: `getPosts()`, `createPost()`, `deletePost()`
- Base URL configuration

**PostForm.jsx**

- Controlled form component for creating posts
- Form validation
- Submit handling with loading state

**PostList.jsx**

- Maps through posts array
- Renders individual PostItem components in a grid

**PostItem.jsx**

- Individual post card display
- Delete button with confirmation dialog
- Responsive styling with hover effects
