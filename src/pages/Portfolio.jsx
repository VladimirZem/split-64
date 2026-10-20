import React, { useState, useEffect, useRef } from 'react';
import './Portfolio.css';

// Заглушки фото — замени на свои реальные пути
const projects = [
    {
        id: 1,
        category: 'conditioning',
        title: 'Монтаж сплит-системы Daikin',
        desc: 'Квартира, 2-комнатная, Саратов',
        tag: '❄️ Кондиционер',
        img: null,
        color: '#003a6e',
    },
    {
        id: 2,
        category: 'ventilation',
        title: 'Приточная вентиляция офиса',
        desc: 'Офис 200 м², ул. Московская',
        tag: '💨 Вентиляция',
        img: null,
        color: '#003a2e',
    },
    {
        id: 3,
        category: 'conditioning',
        title: 'Мультисплит-система Mitsubishi',
        desc: 'Частный дом, 5 внутренних блоков',
        tag: '❄️ Кондиционер',
        img: null,
        color: '#003a6e',
    },
    {
        id: 4,
        category: 'ventilation',
        title: 'ПВУ с рекуперацией тепла',
        desc: 'Коттедж 280 м², Саратовский район',
        tag: '💨 Вентиляция',
        img: null,
        color: '#003a2e',
    },
    {
        id: 5,
        category: 'conditioning',
        title: 'Кассетный кондиционер LG',
        desc: 'Ресторан, зал 120 м²',
        tag: '❄️ Кондиционер',
        img: null,
        color: '#003a6e',
    },
    {
        id: 6,
        category: 'ventilation',
        title: 'Вытяжная вентиляция на кухне',
        desc: 'Ресторан, промышленная кухня',
        tag: '💨 Вентиляция',
        img: null,
        color: '#003a2e',
    },
    {
        id: 7,
        category: 'conditioning',
        title: 'Обслуживание 12 кондиционеров',
        desc: 'Офисный центр, ежегодный сервис',
        tag: '❄️ Кондиционер',
        img: null,
        color: '#003a6e',
    },
    {
        id: 8,
        category: 'ventilation',
        title: 'Монтаж воздуховодов',
        desc: 'Торговый зал 400 м²',
        tag: '💨 Вентиляция',
        img: null,
        color: '#003a2e',
    },
    {
        id: 9,
        category: 'conditioning',
        title: 'Напольно-потолочный Haier',
        desc: 'Спортивный зал, мощность 14 кВт',
        tag: '❄️ Кондиционер',
        img: null,
        color: '#003a6e',
    },
];

const FILTERS = [
    { id: 'all', label: 'Все работы', icon: '🗂️' },
    { id: 'conditioning', label: 'Кондиционеры', icon: '❄️' },
    { id: 'ventilation', label: 'Вентиляция', icon: '💨' },
];

// Плейсхолдер если нет фото
function PhotoPlaceholder({ color, title }) {
    return (
        <div className="card__placeholder" style={{ background: color }}>
            <div className="placeholder__grid">
                {[...Array(9)].map((_, i) => (
                    <div key={i} className="placeholder__dot" />
                ))}
            </div>
            <div className="placeholder__text">{title}</div>
        </div>
    );
}

// Модалка
function Modal({ project, onClose }) {
    useEffect(() => {
        const handler = (e) => e.key === 'Escape' && onClose();
        document.addEventListener('keydown', handler);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', handler);
            document.body.style.overflow = '';
        };
    }, [onClose]);

    return (
        <div className="modal__backdrop" onClick={onClose}>
            <div className="modal__box" onClick={e => e.stopPropagation()}>
                <button className="modal__close" onClick={onClose}>✕</button>
                <div className="modal__img">
                    {project.img
                        ? <img src={project.img} alt={project.title} />
                        : <PhotoPlaceholder color={project.color} title={project.title} />
                    }
                </div>
                <div className="modal__info">
                    <span className="modal__tag">{project.tag}</span>
                    <h3 className="modal__title">{project.title}</h3>
                    <p className="modal__desc">{project.desc}</p>
                    <a href="#contact" className="modal__btn" onClick={onClose}>
                        Заказать похожее →
                    </a>
                </div>
            </div>
        </div>
    );
}

function Portfolio() {
    const [active, setActive] = useState('all');
    const [visible, setVisible] = useState([]);
    const [selected, setSelected] = useState(null);
    const [animKey, setAnimKey] = useState(0);

    const filtered = active === 'all'
        ? projects
        : projects.filter(p => p.category === active);

    const handleFilter = (id) => {
        setActive(id);
        setAnimKey(k => k + 1);
    };

    // Счётчики для фильтров
    const counts = {
        all: projects.length,
        conditioning: projects.filter(p => p.category === 'conditioning').length,
        ventilation: projects.filter(p => p.category === 'ventilation').length,
    };

    return (
        <div className="portfolio">

            {/* HERO */}
            <section className="portfolio__hero">
                <div className="portfolio__hero-bg">
                    <div className="phero__glow phero__glow--1" />
                    <div className="phero__glow phero__glow--2" />
                </div>
                <div className="portfolio__hero-content">
                    <div className="phero__badge">📸 Портфолио</div>
                    <h1 className="phero__title">Наши работы</h1>
                    <p className="phero__sub">
                        Реальные объекты — квартиры, офисы, рестораны и производства.<br />
                        Более <strong>500+ выполненных монтажей</strong> по Саратову и области.
                    </p>
                    <div className="phero__stats">
                        <div className="phero__stat">
                            <span>500+</span><small>Объектов</small>
                        </div>
                        <div className="phero__divider" />
                        <div className="phero__stat">
                            <span>8 лет</span><small>Опыта</small>
                        </div>
                        <div className="phero__divider" />
                        <div className="phero__stat">
                            <span>98%</span><small>Довольных</small>
                        </div>
                    </div>
                </div>
            </section>

            {/* ГАЛЕРЕЯ */}
            <section className="portfolio__gallery">
                <div className="gallery__container">

                    {/* ФИЛЬТРЫ */}
                    <div className="gallery__filters">
                        {FILTERS.map(f => (
                            <button
                                key={f.id}
                                className={`filter__btn ${active === f.id ? 'active' : ''}`}
                                onClick={() => handleFilter(f.id)}
                            >
                                <span className="filter__icon">{f.icon}</span>
                                <span className="filter__label">{f.label}</span>
                                <span className="filter__count">{counts[f.id]}</span>
                            </button>
                        ))}
                    </div>

                    {/* СЕТКА */}
                    <div className="gallery__grid" key={animKey}>
                        {filtered.map((project, i) => (
                            <div
                                key={project.id}
                                className="gallery__card"
                                style={{ animationDelay: `${i * 0.06}s` }}
                                onClick={() => setSelected(project)}
                            >
                                <div className="card__img">
                                    {project.img
                                        ? <img src={project.img} alt={project.title} />
                                        : <PhotoPlaceholder color={project.color} title={project.title} />
                                    }
                                    <div className="card__overlay">
                                        <div className="overlay__zoom">🔍</div>
                                    </div>
                                </div>
                                <div className="card__body">
                                    <span className="card__tag">{project.tag}</span>
                                    <h3 className="card__title">{project.title}</h3>
                                    <p className="card__desc">{project.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* CTA */}
            <section className="portfolio__cta">
                <div className="pcta__container">
                    <h2>Хотите так же?</h2>
                    <p>Оставьте заявку — мы приедем, замерим и сделаем расчёт бесплатно</p>
                    <div className="pcta__btns">
                        <a href="tel:+78452000000" className="pcta__btn pcta__btn--call">
                            📞 Позвонить
                        </a>
                        <a href="/contacts" className="pcta__btn pcta__btn--req">
                            Заказать монтаж
                        </a>
                    </div>
                </div>
            </section>

            {/* МОДАЛКА */}
            {selected && (
                <Modal project={selected} onClose={() => setSelected(null)} />
            )}
        </div>
    );
}

export default Portfolio;