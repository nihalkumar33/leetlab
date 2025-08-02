

# 🚀 LeetLab

> **A modern, full-stack coding platform for practicing algorithms and data structures**

---

## 🌐 Live Demo

- **Frontend**: [https://leetlab-drab.vercel.app](https://leetlab-drab.vercel.app)
- **Backend API**: [https://leetlab.nbaworks.dev](https://leetlab.nbaworks.dev)

> ⚠️ **Note:** If the website takes time to load initially, please be patient. The server may need 50 seconds to spin up.

---
<div align="center">
  <img src="https://img.shields.io/badge/LeetLab-Coding%20Platform-blue?style=for-the-badge&logo=leetcode" alt="LeetLab" />
  <br/>
  <img src="https://img.shields.io/badge/Node.js-18+-green?style=flat-square&logo=node.js" alt="Node.js" />
  <img src="https://img.shields.io/badge/React-19+-blue?style=flat-square&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/PostgreSQL-14+-blue?style=flat-square&logo=postgresql" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/Docker-20+-blue?style=flat-square&logo=docker" alt="Docker" />
  <img src="https://img.shields.io/badge/Judge0-1.13.1-orange?style=flat-square" alt="Judge0" />
</div>

<br/>

## ✨ Features

### 🔐 Authentication & Authorization
- **Multi-Provider Authentication**: Email/password and Google OAuth integration
- **Role-Based Access Control (RBAC)**: Admin and User roles with different permissions
- **Secure JWT Tokens**: Stateless authentication with refresh capabilities
- **Session Management**: Persistent login sessions with secure cookie handling

### 💻 Code Execution & Testing
- **Real-Time Code Execution**: Powered by Judge0 for instant code compilation and testing
- **Multi-Language Support**: Execute code in Python, JavaScript, Java, C++, and more
- **Test Case Management**: Comprehensive test case validation with detailed feedback
- **Performance Metrics**: Memory usage and execution time tracking
- **Error Handling**: Detailed compilation and runtime error reporting

### 📚 Problem Management
- **Rich Problem Editor**: Create problems with markdown support, code snippets, and examples
- **Difficulty Levels**: Easy, Medium, and Hard categorization
- **Tagging System**: Organize problems by topics (Arrays, Strings, Dynamic Programming, etc.)
- **Constraints & Hints**: Provide problem constraints and helpful hints
- **Editorial Solutions**: Include detailed solution explanations

### 📊 Submission & Analytics
- **Submission History**: Track all code submissions with timestamps
- **Performance Analytics**: View execution time, memory usage, and success rates
- **Test Case Results**: Detailed breakdown of which test cases passed/failed
- **Progress Tracking**: Monitor solved problems and completion rates

### 🎯 Playlist System
- **Custom Playlists**: Create personalized problem collections
- **Problem Organization**: Group related problems for focused practice
- **Progress Tracking**: Monitor completion within playlists
- **Sharing Capabilities**: Share playlists with other users

### 🎨 Modern UI/UX
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Dark/Light Theme**: Customizable interface themes
- **Real-Time Updates**: Live status updates and notifications
- **Intuitive Navigation**: Clean and user-friendly interface
- **Code Editor**: Monaco Editor with syntax highlighting and autocomplete

---

## 📸 Screenshots

![Dashboard](https://via.placeholder.com/800x400/2563eb/ffffff?text=LeetLab+Dashboard)

![Problem Editor](https://via.placeholder.com/400x300/7c3aed/ffffff?text=Problem+Editor) ![Code Execution](https://via.placeholder.com/400x300/059669/ffffff?text=Code+Execution)

![User Profile](https://via.placeholder.com/400x300/dc2626/ffffff?text=User+Profile) ![Playlist Management](https://via.placeholder.com/400x300/ea580c/ffffff?text=Playlist+Management)

---

## 🛠️ Tech Stack

### Backend
| Technology | Version | Purpose |
|------------|---------|---------|
| ![Node.js](https://img.shields.io/badge/Node.js-18+-green?style=flat-square&logo=node.js) | 18+ | JavaScript runtime |
| ![Express.js](https://img.shields.io/badge/Express.js-5.1.0-black?style=flat-square&logo=express) | 5.1.0 | Web framework |
| ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-14+-blue?style=flat-square&logo=postgresql) | 14+ | Primary database |
| ![Prisma](https://img.shields.io/badge/Prisma-6.8.2-black?style=flat-square&logo=prisma) | 6.8.2 | ORM and database migrations |
| ![JWT](https://img.shields.io/badge/JWT-9.0.2-black?style=flat-square&logo=jsonwebtokens) | 9.0.2 | Authentication tokens |
| ![Passport.js](https://img.shields.io/badge/Passport.js-0.7.0-black?style=flat-square&logo=passport) | 0.7.0 | OAuth authentication |
| ![bcrypt](https://img.shields.io/badge/bcrypt-6.0.0-black?style=flat-square&logo=bcrypt) | 6.0.0 | Password hashing |
| ![CORS](https://img.shields.io/badge/CORS-2.8.5-black?style=flat-square&logo=cors) | 2.8.5 | Cross-origin resource sharing |

### Frontend
| Technology | Version | Purpose |
|------------|---------|---------|
| ![React](https://img.shields.io/badge/React-19.1.0-blue?style=flat-square&logo=react) | 19.1.0 | UI framework |
| ![Vite](https://img.shields.io/badge/Vite-6.3.5-purple?style=flat-square&logo=vite) | 6.3.5 | Build tool and dev server |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.8-38B2AC?style=flat-square&logo=tailwind-css) | 4.1.8 | Utility-first CSS framework |
| ![DaisyUI](https://img.shields.io/badge/DaisyUI-5.0.43-purple?style=flat-square&logo=daisyui) | 5.0.43 | Component library |
| ![Zustand](https://img.shields.io/badge/Zustand-5.0.5-purple?style=flat-square&logo=zustand) | 5.0.5 | State management |
| ![React Router](https://img.shields.io/badge/React_Router-7.6.1-red?style=flat-square&logo=react-router) | 7.6.1 | Client-side routing |
| ![Monaco Editor](https://img.shields.io/badge/Monaco_Editor-4.7.0-blue?style=flat-square&logo=monaco-editor) | 4.7.0 | Code editor component |
| ![Axios](https://img.shields.io/badge/Axios-1.9.0-black?style=flat-square&logo=axios) | 1.9.0 | HTTP client |

### Infrastructure
| Technology | Version | Purpose |
|------------|---------|---------|
| ![Judge0](https://img.shields.io/badge/Judge0-1.13.1-orange?style=flat-square&logo=judge0) | 1.13.1 | Code execution service |
| ![Docker](https://img.shields.io/badge/Docker-20+-blue?style=flat-square&logo=docker) | 20+ | Containerization |
| ![Redis](https://img.shields.io/badge/Redis-7.2.4-red?style=flat-square&logo=redis) | 7.2.4 | Caching and session storage |
| ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16.2-blue?style=flat-square&logo=postgresql) | 16.2 | Judge0 database |

---

## 📁 Project Structure

```
leetlab/
├── 📂 backend/                          # Node.js/Express API Server
│   ├── 📄 package.json                  # Backend dependencies
│   ├── 📄 .env                         # Environment variables
│   ├── 📂 prisma/                      # Database schema and migrations
│   │   ├── 📄 schema.prisma            # Database schema definition
│   │   └── 📂 migrations/              # Database migration files
│   └── 📂 src/                         # Backend source code
│       ├── 📄 index.js                 # Server entry point
│       ├── 📂 auth/                    # Google OAuth configuration
│       ├── 📂 controllers/             # Route controllers
│       ├── 📂 middleware/              # Custom middleware
│       ├── 📂 routes/                  # API route definitions
│       ├── 📂 libs/                    # Utility libraries
│       └── 📂 generated/               # Prisma generated files
│
├── 📂 frontend/                        # React/Vite Frontend Application
│   ├── 📄 package.json                 # Frontend dependencies
│   ├── 📄 .env                        # Environment variables
│   ├── 📄 vite.config.js              # Vite configuration
│   ├── 📂 public/                     # Static assets
│   └── 📂 src/                        # Frontend source code
│       ├── 📄 App.jsx                 # Main application component
│       ├── 📄 main.jsx                # Application entry point
│       ├── 📂 components/             # Reusable UI components
│       ├── 📂 page/                   # Page components
│       ├── 📂 layout/                 # Layout components
│       ├── 📂 store/                  # Zustand state management
│       ├── 📂 lib/                    # Utility functions
│       └── 📂 assets/                 # Images and static files
│
└── 📂 judge0-v1.13.1/                  # Judge0 Code Execution Service
    ├── 📄 docker-compose.yml          # Docker services configuration
    ├── 📄 judge0.conf                 # Judge0 configuration
    └── 📄 .env                        # Judge0 environment variables
```

---

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** (v9 or higher)
- **PostgreSQL** (v14 or higher)
- **Docker** (v20 or higher)
- **Docker Compose** (v2 or higher)

---

### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/leetlab.git
cd leetlab
```

---

### Step 2: Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env
# Edit .env with your configuration (see Environment Setup Guide)

# Set up database
npx prisma migrate dev
npx prisma generate

# Start development server
npm run dev
```

---

### Step 3: Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Create environment file
cp .env.example .env
# Edit .env with your configuration

# Start development server
npm run dev
```

---

### Step 4: Judge0 Setup

```bash
# Navigate to Judge0 directory
cd judge0-v1.13.1

# Create environment file
cp .env.example .env
# Edit .env with your configuration

# Start Judge0 services
docker-compose up -d

# Verify services are running
docker-compose ps
```

---

### Step 5: Access the Application

```bash
# Frontend URL
echo "Frontend: http://localhost:5173"

# Backend API URL
echo "Backend API: http://localhost:3000"

# Judge0 API URL
echo "Judge0 API: http://localhost:2358"
```

> 📖 **For detailed environment setup instructions, see [ENVIRONMENT_SETUP.md](./ENVIRONMENT_SETUP.md)**

---

## 📚 API Documentation

### Base URL
```
http://localhost:3000/api/v1
```

### Authentication Endpoints

#### Register User
```bash
curl -X POST http://localhost:3000/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "securepassword123"
  }'
```

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "User registered successfully",
  "user": {
    "id": "uuid",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "USER"
  }
}
```

#### Login User
```bash
curl -X POST http://localhost:3000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "securepassword123"
  }'
```

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "securepassword123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "user": {
    "id": "uuid",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "USER"
  },
  "token": "jwt_token_here"
}
```

#### Google OAuth
```bash
# Redirect to Google OAuth
curl -L http://localhost:3000/api/v1/auth/google
```

### Problem Endpoints

#### Get All Problems
```bash
curl -X GET http://localhost:3000/api/v1/problems/get-all-problems \
  -H "Authorization: Bearer <jwt_token>"
```

**Response:**
```json
{
  "success": true,
  "problems": [
    {
      "id": "uuid",
      "title": "Two Sum",
      "description": "Given an array of integers...",
      "difficulty": "EASY",
      "tags": ["Array", "Hash Table"],
      "examples": [...],
      "constraints": "...",
      "createdAt": "2024-01-01T00:00:00Z"
    }
  ]
}
```

#### Get Problem by ID
```bash
curl -X GET http://localhost:3000/api/v1/problems/get-problem/uuid \
  -H "Authorization: Bearer <jwt_token>"
```

**Response:**
```json
{
  "success": true,
  "problem": {
    "id": "uuid",
    "title": "Two Sum",
    "description": "Given an array of integers...",
    "difficulty": "EASY",
    "tags": ["Array", "Hash Table"],
    "examples": [...],
    "constraints": "...",
    "hints": "Try using a hash table...",
    "editorial": "The optimal solution uses...",
    "testcases": [...],
    "codeSnippets": {...},
    "referenceSolutions": {...}
  }
}
```

#### Create Problem (Admin Only)
```bash
curl -X POST http://localhost:3000/api/v1/problems/create-problem \
  -H "Authorization: Bearer <jwt_token>" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "New Problem",
    "description": "Problem description...",
    "difficulty": "MEDIUM",
    "tags": ["Array", "Two Pointers"],
    "examples": [
      {
        "input": "nums = [2,7,11,15], target = 9",
        "output": "[0,1]",
        "explanation": "Because nums[0] + nums[1] == 9"
      }
    ],
    "constraints": "1 <= nums.length <= 10^4",
    "hints": "Try using a hash table",
    "editorial": "Optimal solution explanation",
    "testcases": [
      {
        "input": "[2,7,11,15]\n9",
        "output": "[0,1]"
      }
    ],
    "codeSnippets": {
      "python": "def twoSum(nums, target):\n    # Your code here\n    pass",
      "javascript": "function twoSum(nums, target) {\n    // Your code here\n}"
    },
    "referenceSolutions": {
      "python": "def twoSum(nums, target):\n    seen = {}\n    for i, num in enumerate(nums):\n        complement = target - num\n        if complement in seen:\n            return [seen[complement], i]\n        seen[num] = i\n    return []"
    }
  }'
```

### Code Execution Endpoints

#### Execute Code
```bash
curl -X POST http://localhost:3000/api/v1/execute-code \
  -H "Authorization: Bearer <jwt_token>" \
  -H "Content-Type: application/json" \
  -d '{
    "sourceCode": "def twoSum(nums, target):\n    seen = {}\n    for i, num in enumerate(nums):\n        complement = target - num\n        if complement in seen:\n            return [seen[complement], i]\n        seen[num] = i\n    return []",
    "language": "python",
    "stdin": "[2,7,11,15]\n9",
    "problemId": "uuid"
  }'
```

**Response:**
```json
{
  "success": true,
  "result": {
    "stdout": "[0,1]",
    "stderr": null,
    "compileOutput": null,
    "status": "Accepted",
    "memory": "12.5 MB",
    "time": "45 ms",
    "testCases": [
      {
        "testCase": 1,
        "passed": true,
        "stdout": "[0,1]",
        "expected": "[0,1]",
        "status": "Accepted"
      }
    ]
  }
}
```

### Submission Endpoints

#### Get All Submissions
```bash
curl -X GET http://localhost:3000/api/v1/submission/get-all-submissions \
  -H "Authorization: Bearer <jwt_token>"
```

**Response:**
```json
{
  "success": true,
  "submissions": [
    {
      "id": "uuid",
      "problemId": "uuid",
      "language": "python",
      "status": "Accepted",
      "memory": "12.5 MB",
      "time": "45 ms",
      "createdAt": "2024-01-01T00:00:00Z",
      "problem": {
        "title": "Two Sum",
        "difficulty": "EASY"
      }
    }
  ]
}
```

#### Get Submissions for Problem
```bash
curl -X GET http://localhost:3000/api/v1/submission/get-submission/uuid \
  -H "Authorization: Bearer <jwt_token>"
```

### Playlist Endpoints

#### Get All Playlists
```bash
curl -X GET http://localhost:3000/api/v1/playlist \
  -H "Authorization: Bearer <jwt_token>"
```

**Response:**
```json
{
  "success": true,
  "playlists": [
    {
      "id": "uuid",
      "name": "Array Problems",
      "description": "Practice array manipulation",
      "problemCount": 5,
      "createdAt": "2024-01-01T00:00:00Z"
    }
  ]
}
```

#### Create Playlist
```bash
curl -X POST http://localhost:3000/api/v1/playlist/create-playlist \
  -H "Authorization: Bearer <jwt_token>" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Dynamic Programming",
    "description": "Practice DP problems"
  }'
```

#### Add Problem to Playlist
```bash
curl -X POST http://localhost:3000/api/v1/playlist/uuid/add-problem \
  -H "Authorization: Bearer <jwt_token>" \
  -H "Content-Type: application/json" \
  -d '{
    "problemId": "uuid"
  }'
```

---

## 🗄️ Database Schema

### Core Entities

#### User
```sql
- id: UUID (Primary Key)
- name: String
- email: String (Unique)
- image: String (Optional)
- role: UserRole (ADMIN/USER)
- password: String (Hashed)
- createdAt: DateTime
- updatedAt: DateTime
```

#### Problem
```sql
- id: UUID (Primary Key)
- title: String
- description: String
- difficulty: Difficulty (EASY/MEDIUM/HARD)
- tags: String[]
- userId: UUID (Foreign Key)
- examples: JSON
- constraints: String
- hints: String (Optional)
- editorial: String (Optional)
- testcases: JSON
- codeSnippets: JSON
- referenceSolutions: JSON
- createdAt: DateTime
- updatedAt: DateTime
```

#### Submission
```sql
- id: UUID (Primary Key)
- userId: UUID (Foreign Key)
- problemId: UUID (Foreign Key)
- sourceCode: JSON
- language: String
- stdin: String (Optional)
- stdout: String (Optional)
- stderr: String (Optional)
- compileOutput: String (Optional)
- status: String
- memory: String (Optional)
- time: String (Optional)
- createdAt: DateTime
- updatedAt: DateTime
```

#### Playlist
```sql
- id: UUID (Primary Key)
- name: String
- description: String (Optional)
- userId: UUID (Foreign Key)
- createdAt: DateTime
- updatedAt: DateTime
```

---

## 🔧 Environment Setup

For detailed environment setup instructions, see [ENVIRONMENT_SETUP.md](./ENVIRONMENT_SETUP.md).

### Quick Environment Variables

#### Backend (.env)
```bash
PORT=3000
NODE_ENV=development
DATABASE_URL="postgresql://username:password@localhost:5432/leetlab_db"
JWT_SECRET=your-super-secret-jwt-key
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_URL=http://localhost:3000/api/v1/auth/google/callback
FRONTEND_URL=http://localhost:5173
JUDGE0_API_URL=http://localhost:2358
```

#### Frontend (.env)
```bash
VITE_API_BASE_URL=http://localhost:3000/api/v1
VITE_GOOGLE_CLIENT_ID=your_google_client_id
VITE_NODE_ENV=development
```

#### Judge0 (.env)
```bash
REDIS_HOST=redis
REDIS_PORT=6379
REDIS_PASSWORD=your_redis_password
POSTGRES_HOST=db
POSTGRES_PORT=5432
POSTGRES_DB=judge0
POSTGRES_USER=judge0
POSTGRES_PASSWORD=your_postgres_password
JUDGE0_SECRET_KEY=your_judge0_secret_key
```

---

## 🚀 Deployment

---

### Frontend Deployment (Vercel)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

---

### Backend Deployment

```bash
# Build image
docker build -t leetlab-backend .

# Run container
docker run -p 3000:3000 --env-file .env leetlab-backend
```

---

### Judge0 Deployment

```bash
# Production deployment
cd judge0-v1.13.1
docker-compose -f docker-compose.prod.yml up -d
```

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

---

### Step 1: Fork the Repository

```bash
git clone https://github.com/yourusername/leetlab.git
```

---

### Step 2: Create a Feature Branch

```bash
git checkout -b feature/amazing-feature
```

---

### Step 3: Make Your Changes

```bash
# Make your code changes
# Add new features or fix bugs
```

---

### Step 4: Add Tests (if applicable)

```bash
# Write tests for your changes
npm test
```

---

### Step 5: Commit Your Changes

```bash
git add .
git commit -m 'Add amazing feature'
```

---

### Step 6: Push to the Branch

```bash
git push origin feature/amazing-feature
```

---

### Step 7: Open a Pull Request

```bash
# Go to GitHub and create a Pull Request
# Link: https://github.com/yourusername/leetlab/pulls
```

### Development Guidelines

- Follow the existing code style
- Add comments for complex logic
- Update documentation for new features
- Test your changes thoroughly
- Ensure all tests pass

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Judge0** - For providing the code execution service
- **LeetCode** - For inspiration in problem structure and UI
- **React Community** - For excellent documentation and tools
- **Tailwind CSS** - For the utility-first CSS framework

---

## 📞 Support

- **Documentation**: [ENVIRONMENT_SETUP.md](./ENVIRONMENT_SETUP.md)
- **Issues**: [GitHub Issues](https://github.com/yourusername/leetlab/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/leetlab/discussions)

---

**Made with ❤️ by the LeetLab Team**
