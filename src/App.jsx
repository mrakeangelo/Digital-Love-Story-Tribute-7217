import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import OurStory from './pages/OurStory';
import Motherhood from './pages/Motherhood';
import Wedding from './pages/Wedding';
import Childhood from './pages/Childhood';
import Gallery from './pages/Gallery';
import TimeCapsules from './pages/TimeCapsules';
import Message from './pages/Message';
import Admin from './pages/Admin';
import Login from './pages/Login';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="story" element={<OurStory />} />
              <Route path="motherhood" element={<Motherhood />} />
              <Route path="wedding" element={<Wedding />} />
              <Route path="childhood" element={<Childhood />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="capsules" element={<TimeCapsules />} />
              <Route path="message" element={<Message />} />
              <Route path="admin" element={<Admin />} />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;