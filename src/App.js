// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import Home from './pages/Home';
import Conditioning from './pages/Conditioning';
import Ventilation from './pages/Ventilation';
import About from './pages/About';

function App() {
  const [isDark, setIsDark] = useState(() => {
    // Запоминаем выбор пользователя
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    // Применяем тему к html элементу
    document.documentElement.setAttribute(
      'data-theme',
      isDark ? 'dark' : 'light'
    );
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => setIsDark(prev => !prev);

  return (
    <Router>
      <Navbar />

      {/* Кнопка темы — фиксированная в углу */}
      <div className="theme-toggle-wrapper">
        <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conditioning" element={<Conditioning />} />
        <Route path="/ventilation" element={<Ventilation />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;