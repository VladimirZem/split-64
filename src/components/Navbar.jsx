import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Закрывать меню при смене страницы
    useEffect(() => {
        setMenuOpen(false);
    }, [location]);

    const links = [
        { to: '/', label: 'Главная' },
        { to: '/conditioning', label: 'Кондиционеры' },
        { to: '/ventilation', label: 'Вентиляция' },
        { to: '/portfolio', label: 'Наши работы' },
        { to: '/about', label: 'О нас' },
        { to: '/contacts', label: 'Контакты' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar__container">

                {/* ЛОГО */}
                <Link to="/" className="navbar__logo">
                    <span className="logo__split">СПЛИТ</span>
                    <span className="logo__64">-64</span>
                </Link>

                {/* ССЫЛКИ */}
                <div className={`navbar__links ${menuOpen ? 'open' : ''}`}>
                    {/* Оверлей для закрытия */}
                    <div
                        className={`navbar__overlay ${menuOpen ? 'open' : ''}`}
                        onClick={() => setMenuOpen(false)}
                    />

                    <div className="navbar__menu">
                        {links.map(link => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className={`navbar__link ${location.pathname === link.to ? 'active' : ''
                                    } ${link.to === '/portfolio' ? 'navbar__link--portfolio' : ''}`}
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.label}
                                {link.to === '/portfolio' && (
                                    <span className="link__new">NEW</span>
                                )}
                            </Link>
                        ))}

                        {/* Телефон внутри мобильного меню */}
                        <a href="tel:+78452000000" className="navbar__phone navbar__phone--mobile">
                            📞 8 (845) 200-00-00
                        </a>
                    </div>
                </div>

                {/* ТЕЛЕФОН десктоп */}
                <a href="tel:+78452000000" className="navbar__phone navbar__phone--desktop">
                    📞 8 (845) 200-00-00
                </a>

                {/* БУРГЕР */}
                <button
                    className={`burger ${menuOpen ? 'open' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Меню"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;