// src/components/ThemeToggle.jsx
import React from 'react';
import './ThemeToggle.css';

function ThemeToggle({ isDark, onToggle }) {
    return (
        <button
            className={`theme-toggle ${isDark ? 'theme-toggle--dark' : ''}`}
            onClick={onToggle}
            aria-label="Переключить тему"
            title={isDark ? 'Светлая тема' : 'Тёмная тема'}
        >
            <div className="theme-toggle__track">
                <div className="theme-toggle__thumb">
                    <span className="theme-toggle__icon">
                        {isDark ? '🌙' : '☀️'}
                    </span>
                </div>
            </div>
        </button>
    );
}

export default ThemeToggle;