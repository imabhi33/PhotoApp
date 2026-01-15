# Photoshopy - Photography Portfolio Website

A modern MERN stack photography portfolio website for capturing and showcasing beautiful moments. Built with React, Node.js, Express, and MongoDB.

## 🚀 Features

- **Modern UI/UX**: Premium design with gradients, glassmorphism, and smooth animations
- **Responsive Design**: Fully responsive across all devices
- **Portfolio Galleries**: Showcase photography work by categories
- **Contact Form**: Allow visitors to get in touch
- **Event Booking**: Book photography services for weddings and events
- **Admin Panel Ready**: Structure in place for future admin panel implementation

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v20.19.0 or higher)
- **npm** (v11.0.0 or higher)
- **MongoDB** (local installation or MongoDB Atlas account)

## 🛠️ Installation & Setup

### 1. Clone or Navigate to the Project

```bash
cd Photoshopy
```

### 2. Backend Setup

```bash
# Navigate to server directory
cd server

# Install dependencies (already done if you followed the setup)
npm install

# Configure environment variables
# Edit the .env file with your MongoDB connection string
# For local MongoDB: mongodb://localhost:27017/photoshopy
# For MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/photoshopy
```

### 3. Frontend Setup

```bash
# Navigate to client directory
cd ../client

# Install dependencies (already done if you followed the setup)
npm install
```

## 🚀 Running the Application

### Start MongoDB (if using local installation)

```bash
# Windows
mongod

# macOS/Linux
sudo systemctl start mongod
```

### Start Backend Server

```bash
# From the server directory
cd server
npm run dev
```

The backend server will start on **http://localhost:5000**

### Start Frontend Development Server

```bash
# From the client directory (in a new terminal)
cd client
npm run dev
```

The frontend will start on **http://localhost:5173**

## 📁 Project Structure

```
Photoshopy/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # Reusable components (Header, Footer)
│   │   ├── pages/         # Page components (Home, Portfolio, etc.)
│   │   ├── utils/         # Utility functions (API calls)
│   │   ├── styles/        # CSS files
│   │   ├── App.jsx        # Main app component with routing
│   │   └── main.jsx       # Entry point
│   ├── .env               # Environment variables
│   └── package.json
├── server/                # Node.js backend
│   ├── src/
│   │   ├── models/        # MongoDB models (Contact, Booking)
│   │   ├── routes/        # API routes
│   │   ├── controllers/   # Route controllers
│   │   ├── middleware/    # Custom middleware (admin auth placeholder)
│   │   ├── config/        # Configuration (database)
│   │   └── server.js      # Main server file
│   ├── .env               # Environment variables
│   └── package.json
└── README.md
```

## 🌐 API Endpoints

### Contact Routes
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contacts (admin only - future)

### Booking Routes
- `POST /api/bookings` - Create new booking
- `GET /api/bookings` - Get all bookings (admin only - future)
- `PATCH /api/bookings/:id` - Update booking status (admin only - future)

## 🎨 Pages

1. **Home** - Hero section, services overview, call-to-action
2. **Portfolio** - Photography categories and galleries
3. **Packages** - Pricing tiers and package details
4. **About** - Company story and approach
5. **Contact** - Contact form with company information
6. **Booking** - Event booking form

## 🔐 Admin Panel (Future Implementation)

The project includes placeholder structure for admin panel:
- Admin authentication middleware (`server/src/middleware/adminAuth.js`)
- Protected routes ready for implementation
- CRUD operations for managing bookings and contacts

To implement the admin panel:
1. Add JWT authentication in the middleware
2. Create admin login page
3. Build admin dashboard components
4. Protect routes with authentication

## 🌍 Environment Variables

### Backend (.env in server directory)
```env
MONGODB_URI=mongodb://localhost:27017/photoshopy
PORT=5000
CORS_ORIGIN=http://localhost:5173
JWT_SECRET=your_jwt_secret_key_here
```

### Frontend (.env in client directory)
```env
VITE_API_URL=http://localhost:5000/api
```

## 🎯 Technologies Used

### Frontend
- React 18
- React Router DOM
- Axios
- Vite
- CSS3 (with modern features)

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- dotenv

## 📝 Development Notes

- The design uses a modern dark theme with vibrant gradients
- All forms include validation and error handling
- API calls are centralized in `client/src/utils/api.js`
- MongoDB models include proper validation and schemas
- The project is ready for deployment with minimal configuration

## 🚢 Deployment

### Frontend (Vercel/Netlify)
1. Build the production bundle: `npm run build`
2. Deploy the `dist` folder
3. Update `VITE_API_URL` to your production API URL

### Backend (Heroku/Railway/Render)
1. Set environment variables on your hosting platform
2. Deploy the `server` directory
3. Ensure MongoDB connection string is configured

## 📧 Contact

For questions or support, please contact:
- Email: info@photoshopy.com
- Phone: +91 1234567890

## 📄 License

This project is private and proprietary.

---

**Built with ❤️ for capturing beautiful moments**
