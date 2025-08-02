# 🚀 LeetLab Environment Setup Guide

> **A comprehensive guide to set up the development environment for LeetLab - A LeetCode-style coding platform**

---

## 📁 Project Structure

```
leetlab/
├── 📂 backend/                 # Node.js/Express API Server
│   ├── 📄 .env                 # Backend environment variables
│   ├── 📄 package.json         # Backend dependencies
│   └── 📂 src/                 # Backend source code
├── 📂 frontend/                # React/Vite Frontend Application
│   ├── 📄 .env                 # Frontend environment variables
│   ├── 📄 package.json         # Frontend dependencies
│   └── 📂 src/                 # Frontend source code
└── 📂 judge0-v1.13.1/          # Judge0 Code Execution Service
    ├── 📄 .env                 # Judge0 environment variables
    ├── 📄 docker-compose.yml   # Docker services configuration
    └── 📄 judge0.conf          # Judge0 configuration file
```

---

## 🛠️ Prerequisites

Before setting up the environment, ensure you have the following installed:

| Tool | Version | Purpose |
|------|---------|---------|
| **Node.js** | 18.x or higher | JavaScript runtime for backend |
| **npm** | 9.x or higher | Package manager |
| **PostgreSQL** | 14.x or higher | Database server |
| **Docker** | 20.x or higher | Containerization for Judge0 |
| **Docker Compose** | 2.x or higher | Multi-container orchestration |
| **Git** | Latest | Version control |

---

## 🔧 Backend Environment Setup

### 📍 File Location
Create environment file at: `backend/.env`

### 🔑 Required Environment Variables

| Variable | Type | Description | Example Value |
|----------|------|-------------|---------------|
| `PORT` | Number | Backend server port | `3000` |
| `NODE_ENV` | String | Environment mode | `development` |
| `DATABASE_URL` | String | PostgreSQL connection string | `postgresql://username:password@localhost:5432/leetlab_db` |
| `JWT_SECRET` | String | Secret key for JWT tokens | `your-super-secret-jwt-key-here` |
| `GOOGLE_CLIENT_ID` | String | Google OAuth client ID | `123456789-abcdef.apps.googleusercontent.com` |
| `GOOGLE_CLIENT_SECRET` | String | Google OAuth client secret | `GOCSPX-your-secret-here` |
| `GOOGLE_CALLBACK_URL` | String | Google OAuth callback URL | `http://localhost:3000/api/v1/auth/google/callback` |
| `FRONTEND_URL` | String | Frontend application URL | `http://localhost:5173` |
| `JUDGE0_API_URL` | String | Judge0 API endpoint | `http://localhost:2358` |

### 📝 Backend .env Template

```bash
# ========================================
# LeetLab Backend Environment Variables
# ========================================

# Server Configuration
PORT=3000
NODE_ENV=development

# Database Configuration
DATABASE_URL="postgresql://username:password@localhost:5433/leetlab_db"

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-here-make-it-long-and-random

# Google OAuth Configuration
GOOGLE_CLIENT_ID=your_google_client_id_here
GOOGLE_CLIENT_SECRET=your_google_client_secret_here
GOOGLE_CALLBACK_URL=http://localhost:3000/api/v1/auth/google/callback

# Frontend URL (for CORS and redirects)
FRONTEND_URL=http://localhost:5173

# Judge0 API Configuration
JUDGE0_API_URL=http://localhost:2358
```

### 🔐 Google OAuth Setup Instructions

1. **Visit Google Cloud Console**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select an existing one

2. **Enable Google+ API**
   - Navigate to "APIs & Services" → "Library"
   - Search for "Google+ API" and enable it

3. **Create OAuth Credentials**
   - Go to "APIs & Services" → "Credentials"
   - Click "Create Credentials" → "OAuth 2.0 Client IDs"
   - Choose "Web application" as application type

4. **Configure Redirect URIs**
   - Add authorized redirect URI: `http://localhost:3000/api/v1/auth/google/callback`
   - Copy the Client ID and Client Secret to your `.env` file

### 🗄️ Database Setup

1. **Install PostgreSQL**
   ```bash
   # Ubuntu/Debian
   sudo apt-get install postgresql postgresql-contrib
   
   # macOS (using Homebrew)
   brew install postgresql
   
   # Windows
   # Download from https://www.postgresql.org/download/windows/
   ```

2. **Create Database**
   ```bash
   # Connect to PostgreSQL
   sudo -u postgres psql
   
   # Create database and user
   CREATE DATABASE leetlab_db;
   CREATE USER leetlab_user WITH PASSWORD 'your_password';
   GRANT ALL PRIVILEGES ON DATABASE leetlab_db TO leetlab_user;
   \q
   ```

3. **Run Prisma Migrations**
   ```bash
   cd backend
   npm install
   npx prisma migrate dev
   ```

---

## 🎨 Frontend Environment Setup

### 📍 File Location
Create environment file at: `frontend/.env`

### 🔑 Required Environment Variables

| Variable | Type | Description | Example Value |
|----------|------|-------------|---------------|
| `VITE_API_BASE_URL` | String | Backend API base URL | `http://localhost:3000/api/v1` |
| `VITE_GOOGLE_CLIENT_ID` | String | Google OAuth client ID | `123456789-abcdef.apps.googleusercontent.com` |
| `VITE_NODE_ENV` | String | Environment mode | `development` |

### 📝 Frontend .env Template

```bash
# ========================================
# LeetLab Frontend Environment Variables
# ========================================

# API Configuration
VITE_API_BASE_URL=http://localhost:3000/api/v1

# Google OAuth Configuration (if needed on frontend)
VITE_GOOGLE_CLIENT_ID=your_google_client_id_here

# Environment
VITE_NODE_ENV=development
```

> **Note**: In Vite, all environment variables must be prefixed with `VITE_` to be accessible in the frontend code.

---

## ⚖️ Judge0 Environment Setup

### 📍 File Location
Create environment file at: `judge0-v1.13.1/.env`

### 🔑 Required Environment Variables

| Variable | Type | Description | Example Value |
|----------|------|-------------|---------------|
| `REDIS_HOST` | String | Redis server hostname | `redis` |
| `REDIS_PORT` | Number | Redis server port | `6379` |
| `REDIS_PASSWORD` | String | Redis authentication password | `your_redis_password` |
| `POSTGRES_HOST` | String | PostgreSQL hostname | `db` |
| `POSTGRES_PORT` | Number | PostgreSQL port | `5432` |
| `POSTGRES_DB` | String | Database name | `judge0` |
| `POSTGRES_USER` | String | Database username | `judge0` |
| `POSTGRES_PASSWORD` | String | Database password | `your_postgres_password` |
| `JUDGE0_SECRET_KEY` | String | Judge0 secret key | `your_judge0_secret_key` |

### 📝 Judge0 .env Template

```bash
# ========================================
# Judge0 Environment Variables
# ========================================

# Redis Configuration
REDIS_HOST=redis
REDIS_PORT=6379
REDIS_PASSWORD=D8zmZWEsdNbrebAyjBXRwaaCMR22YP5T

# PostgreSQL Configuration
POSTGRES_HOST=db
POSTGRES_PORT=5432
POSTGRES_DB=judge0
POSTGRES_USER=judge0
POSTGRES_PASSWORD=YyKcXK3kSxXtPvTQe4tzkzKpGxNYBSXe

# Judge0 Configuration
JUDGE0_SECRET_KEY=your_judge0_secret_key_here
JUDGE0_REDIS_DB=0
JUDGE0_POSTGRES_DB=judge0

# API Configuration
JUDGE0_API_URL=http://localhost:2358
```

---

## 🚀 Quick Setup Commands

### 1. Backend Setup
```bash
# Navigate to backend directory
cd backend

# Create environment file
cp env.example .env  # If env.example exists
# OR create .env manually with the template above

# Install dependencies
npm install

# Set up database
npx prisma migrate dev

# Start development server
npm run dev
```

### 2. Frontend Setup
```bash
# Navigate to frontend directory
cd frontend

# Create environment file
cp env.example .env  # If env.example exists
# OR create .env manually with the template above

# Install dependencies
npm install

# Start development server
npm run dev
```

### 3. Judge0 Setup
```bash
# Navigate to Judge0 directory
cd judge0-v1.13.1

# Create environment file
cp env.example .env  # If env.example exists
# OR create .env manually with the template above

# Start Judge0 services
docker-compose up -d

# Check if services are running
docker-compose ps
```

---

## 🔒 Security Best Practices

### 🛡️ Environment Variable Security

| Practice | Description | Implementation |
|----------|-------------|----------------|
| **Never commit .env files** | Keep environment files out of version control | Add `.env` to `.gitignore` |
| **Use strong secrets** | Generate cryptographically secure random strings | Use password generators or `crypto.randomBytes()` |
| **Separate environments** | Use different values for dev/staging/production | Create environment-specific `.env` files |
| **Rotate secrets regularly** | Change sensitive values periodically | Set up automated secret rotation |
| **Limit access** | Restrict who can access environment files | Use proper file permissions |

### 🔐 Secret Generation Examples

```bash
# Generate JWT Secret (Node.js)
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"

# Generate Redis Password
openssl rand -base64 32

# Generate PostgreSQL Password
openssl rand -base64 24
```

---

## 🌐 Production Deployment

### 🔧 Production Environment Variables

| Component | Key Changes | Example |
|-----------|-------------|---------|
| **Backend** | `NODE_ENV=production`, HTTPS URLs | `FRONTEND_URL=https://yourdomain.com` |
| **Frontend** | Production API URLs | `VITE_API_BASE_URL=https://api.yourdomain.com/api/v1` |
| **Judge0** | Production database, secure passwords | Use managed database services |

### 🚀 Deployment Checklist

- [ ] Set `NODE_ENV=production`
- [ ] Use HTTPS URLs for all external services
- [ ] Configure production database (AWS RDS, Google Cloud SQL)
- [ ] Set up proper CORS origins
- [ ] Use environment-specific Judge0 instances
- [ ] Configure SSL certificates
- [ ] Set up monitoring and logging
- [ ] Implement rate limiting
- [ ] Configure backup strategies

---

## 🔧 Troubleshooting Guide

### ❌ Common Issues & Solutions

| Issue | Symptoms | Solution |
|-------|----------|----------|
| **CORS Errors** | Frontend can't connect to backend | Verify `FRONTEND_URL` matches exactly |
| **Database Connection** | Backend fails to start | Check `DATABASE_URL` format and credentials |
| **Google OAuth** | Login redirect fails | Ensure redirect URI matches exactly |
| **Judge0 Connection** | Code execution fails | Verify Judge0 service is running on port 2358 |
| **Port Conflicts** | Services won't start | Check if ports 3000, 5173, 2358 are available |

### 🔍 Debug Commands

```bash
# Check if services are running
netstat -tulpn | grep -E ':(3000|5173|2358)'

# Test database connection
psql $DATABASE_URL -c "SELECT 1;"

# Check Judge0 health
curl http://localhost:2358/health

# View Docker logs
docker-compose logs -f
```

---

## 📚 Additional Resources

- [Node.js Documentation](https://nodejs.org/docs/)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [Judge0 Documentation](https://judge0.com/docs)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

---

## 🤝 Support

If you encounter any issues during setup:

1. Check the troubleshooting section above
2. Review the logs for error messages
3. Ensure all prerequisites are installed
4. Verify environment variables are correctly set
5. Check if all services are running on the correct ports

For additional help, please refer to the project documentation or create an issue in the repository.

---

**Happy Coding! 🎉** 