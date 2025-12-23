# Portfolio 2026 - Terminal Hacker Theme

A modern, interactive portfolio website with a hacker/terminal aesthetic, built with Next.js, React, and Tailwind CSS.

## 🚀 Features

- **Terminal/Hacker Theme**: Immersive hacker-style interface with animated elements
- **Interactive Components**: Clickable elements with hover animations and multiple color themes
- **Responsive Design**: Fully responsive layout that works on all devices
- **Advanced Animations**: Glow effects, matrix backgrounds, scanning lines, and more
- **Multiple Sections**:
  - Home page with animated skill cards
  - About section with detailed profile
  - Experience timeline
  - Projects showcase
  - Advanced Skills page with icons and progress bars
  - Hacker terminal page with system monitoring
  - Contact form
  - Professional summary

## 🛠️ Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Backend**: Go (Golang)
- **Database**: PostgreSQL

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm
- Go 1.21+
- PostgreSQL

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:3000`

### Backend Setup

```bash
cd backend
go mod download
go run main.go
```

## 🎨 Color Themes

The portfolio uses multiple hacker-themed colors:
- Terminal Green (`#00ff00`)
- Terminal Blue (`#00bfff`)
- Terminal Red (`#ff5555`)
- Terminal Yellow (`#ffff00`)
- Terminal Purple (`#ff00ff`)
- Terminal Cyan (`#00ffff`)
- Terminal Orange (`#ff8800`)

## 📁 Project Structure

```
├── frontend/
│   ├── app/              # Next.js app router pages
│   ├── components/       # React components
│   ├── data/            # JSON data files
│   └── styles/          # CSS files
├── backend/
│   ├── routes/          # API routes
│   ├── models/          # Data models
│   └── db/              # Database configuration
└── README.md
```

## 🎯 Key Features

- **Animated Output Blocks**: Every section has animated borders that cycle through colors
- **Interactive Cards**: Hover effects with glow animations and scaling
- **Progress Indicators**: Visual progress bars for skills and system status
- **Matrix Effects**: Background matrix rain animation on hacker page
- **Scanning Animations**: Terminal-style scanning lines and cursor effects
- **Responsive Navigation**: Color-coded navigation with active states

## 🚀 Deployment

Build the frontend for production:

```bash
cd frontend
npm run build
npm start
```

## 📝 License

ISC

## 👤 Author

**Kanhaiya Tiwari**
- Email: kt230088@gmail.com
- GitHub: [@Kanhaiya-Tiwari](https://github.com/Kanhaiya-Tiwari)

---

Built with ❤️ using Next.js and Go

