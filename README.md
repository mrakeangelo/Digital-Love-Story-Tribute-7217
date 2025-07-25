# Her Universe - Digital Tribute Web App

A premium, mobile-first React web application designed as a digital tribute celebrating love, life, and beautiful memories. Built with modern web technologies and designed to match the highest standards of clean design and polished storytelling.

## ✨ Features

- **Beautiful Landing Page**: Emotional, elegant introduction with animated elements
- **Our Story Timeline**: Interactive timeline of love milestones and memories
- **Motherhood Journey**: Dedicated section celebrating pregnancy and motherhood
- **Wedding Memories**: Gallery and details from the special day
- **Childhood Garden**: Nostalgic look at early years and family stories
- **Time Capsules**: Create and schedule letters to future selves
- **Photo & Video Gallery**: Organized media with filtering and modal views
- **Personal Message**: Heartfelt letter section "For Me, From Me"
- **Admin Panel**: Secure content management with Supabase authentication
- **Dark/Light Theme**: Smooth theme switching with localStorage persistence

## 🎨 Design Language

- **Mobile-First**: Responsive design optimized for all devices
- **Typography**: Playfair Display for headings, Inter for body text
- **Color Palette**: 
  - Light Mode: Creamy whites, gold accents, soft beiges
  - Dark Mode: Charcoal blacks, muted golds, soft roses
- **Animations**: Smooth Framer Motion transitions and micro-interactions
- **Premium Feel**: Polished UI with attention to spacing and visual hierarchy

## 🚀 Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **React Router** - Client-side routing with HashRouter
- **Supabase** - Backend-as-a-Service for authentication and storage
- **React Icons** - Comprehensive icon library

## 📦 Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd her-universe
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```
Edit `.env` with your Supabase credentials.

4. Start the development server:
```bash
npm run dev
```

## 🔧 Configuration

### Supabase Setup

1. Create a new Supabase project at [supabase.com](https://supabase.com)
2. Get your project URL and anon key from Settings > API
3. Add them to your `.env` file
4. Set up authentication in your Supabase dashboard

### Customization

- **Site Title**: Update in `src/components/Layout/Header.jsx`
- **Colors**: Modify the color palette in `tailwind.config.js`
- **Content**: Edit page content in the respective page components
- **Images**: Replace placeholder images with your own

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Layout/          # Header, Sidebar, Navigation
│   └── UI/              # Reusable UI components
├── contexts/            # React contexts for theme and auth
├── pages/               # Main page components
├── lib/                 # Utility functions and configurations
├── common/              # Shared components like SafeIcon
└── App.jsx              # Main app component
```

## 🎯 Key Pages

- **Home** (`/`) - Hero landing page with animated introduction
- **Our Story** (`/story`) - Timeline of relationship milestones
- **Motherhood** (`/motherhood`) - Pregnancy journey and motherhood celebration
- **Wedding** (`/wedding`) - Wedding day memories and details
- **Childhood** (`/childhood`) - Early years and family stories
- **Gallery** (`/gallery`) - Photo and video collection with filtering
- **Time Capsules** (`/capsules`) - Create and view time-locked messages
- **Message** (`/message`) - Personal letter "For Me, From Me"
- **Admin** (`/admin`) - Content management panel (requires authentication)

## 🔒 Admin Features

- **Content Management**: Edit text content across all pages
- **Media Upload**: Upload photos, videos, and documents
- **Settings**: Configure site preferences and privacy options
- **Backup**: Export all content and media files

## 🌙 Theme System

The app includes a sophisticated theme system with:
- Automatic dark/light mode detection
- Manual theme toggle
- localStorage persistence
- Smooth transitions between themes
- Accessible color contrasts

## 📱 Mobile Optimization

- Touch-friendly navigation
- Optimized image loading
- Responsive typography
- Mobile-first design approach
- PWA-ready architecture

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Netlify/Vercel

1. Connect your repository to your hosting platform
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables for Supabase

## 🎨 Customization Guide

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route in `src/App.jsx`
3. Update navigation in `src/components/Layout/`

### Modifying Colors

Edit `tailwind.config.js` to customize the color palette:

```javascript
colors: {
  // Add your custom colors here
  primary: '#your-color',
}
```

### Adding New Animations

Use Framer Motion for smooth animations:

```javascript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  Your content
</motion.div>
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 💝 Credits

Built with love as a digital tribute to celebrate life's most precious moments and the people who make them special.

---

*"In every shared glance, every gentle touch, every whispered word — we find the poetry of our love story."*