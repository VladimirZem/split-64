import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Conditioning.css';

// ==========================================
// ДАННЫЕ
// ==========================================

const categories = [
    {
        id: 1,
        title: 'Настенный сплит',
        icon: '❄️',
        color: 'blue',
        popular: true,
        desc: 'Самый популярный тип кондиционера для жилых комнат и небольших офисов.',
        features: [
            'Площадь до 50 м²',
            'Тихая работа от 19 дБ',
            'Режимы охлаждения и обогрева',
            'Инверторное управление',
        ],
        price: 'от 25 000 ₽',
    },
    {
        id: 2,
        title: 'Кассетный кондиционер',
        icon: '🏢',
        color: 'cyan',
        popular: false,
        desc: 'Встраивается в подвесной потолок, равномерно распределяет воздух по помещению.',
        features: [
            'Площадь до 100 м²',
            'Равномерный обдув 360°',
            'Скрытый монтаж в потолок',
            'Для коммерческих помещений',
        ],
        price: 'от 60 000 ₽',
    },
    {
        id: 3,
        title: 'Канальный кондиционер',
        icon: '🌀',
        color: 'purple',
        popular: false,
        desc: 'Полностью скрытая система, монтируется за подвесным потолком с разводкой воздуха.',
        features: [
            'Площадь до 200 м²',
            'Полностью скрытый монтаж',
            'Централизованная вентиляция',
            'Для крупных объектов',
        ],
        price: 'от 90 000 ₽',
    },
    {
        id: 4,
        title: 'Мульти-сплит система',
        icon: '🔀',
        color: 'green',
        popular: true,
        desc: 'Один внешний блок обслуживает несколько внутренних — идеально для квартир и офисов.',
        features: [
            'До 5 внутренних блоков',
            'Независимое управление',
            'Экономия места снаружи',
            'Гибкая конфигурация',
        ],
        price: 'от 80 000 ₽',
    },
    {
        id: 5,
        title: 'Напольно-потолочный',
        icon: '🔄',
        color: 'orange',
        popular: false,
        desc: 'Универсальный блок, который можно установить как на полу, так и под потолком.',
        features: [
            'Площадь до 80 м²',
            'Два варианта установки',
            'Мощный поток воздуха',
            'Для высоких помещений',
        ],
        price: 'от 55 000 ₽',
    },
    {
        id: 6,
        title: 'Прецизионный кондиционер',
        icon: '🖥️',
        color: 'red',
        popular: false,
        desc: 'Профессиональное решение для серверных комнат с точным климат-контролем.',
        features: [
            'Точность ±0.5°C',
            'Круглосуточная работа 24/7',
            'Контроль влажности',
            'Для серверных и лабораторий',
        ],
        price: 'от 150 000 ₽',
    },
];

const services = [
    {
        icon: '🔧',
        title: 'Монтаж и установка',
        desc: 'Профессиональная установка любых типов кондиционеров с гарантией на работы 5 лет.',
    },
    {
        icon: '🛠️',
        title: 'Техническое обслуживание',
        desc: 'Чистка фильтров, заправка фреоном, диагностика и профилактика неисправностей.',
    },
    {
        icon: '🔍',
        title: 'Диагностика',
        desc: 'Полная проверка системы кондиционирования с выдачей заключения о состоянии.',
    },
    {
        icon: '❄️',
        title: 'Заправка фреоном',
        desc: 'Дозаправка и полная замена хладагента с проверкой герметичности системы.',
    },
    {
        icon: '🏗️',
        title: 'Демонтаж',
        desc: 'Аккуратный демонтаж оборудования при переезде или замене старого кондиционера.',
    },
    {
        icon: '📋',
        title: 'Проектирование',
        desc: 'Расчёт и проектирование системы кондиционирования для объектов любой сложности.',
    },
];

// ==========================================
// ГЛАВНЫЙ КОМПОНЕНТ
// ==========================================

function CoolDivider() {
    return (
        <div className="cool-divider">
            <div className="cool-divider__waves">
                <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
                    <path
                        className="wave wave--1"
                        d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z"
                    />
                    <path
                        className="wave wave--2"
                        d="M0,80 C480,20 960,100 1440,40 L1440,120 L0,120 Z"
                    />
                </svg>
            </div>

            <div className="cool-divider__content">
                {/* Снежинки */}
                {[...Array(12)].map((_, i) => (
                    <div key={i} className={`snowflake snowflake--${i + 1}`}>
                        ❄
                    </div>
                ))}

                {/* Центральный блок */}
                <div className="cool-divider__center">
                    <div className="cool-divider__line" />
                    <div className="cool-divider__icon">
                        <span className="ac-icon">🌬️</span>
                        <div className="air-flow">
                            <span className="air air--1">～</span>
                            <span className="air air--2">～</span>
                            <span className="air air--3">～</span>
                        </div>
                    </div>
                    <div className="cool-divider__line" />
                </div>

                <p className="cool-divider__text">Выберите подходящее решение</p>
            </div>
        </div>
    );
}
function Conditioning() {
    const [activeFilter, setActiveFilter] = useState('all');

    const filters = [
        { id: 'all', label: 'Все типы' },
        { id: 'popular', label: 'Популярные' },
        { id: 'blue', label: 'Бытовые' },
        { id: 'cyan', label: 'Коммерческие' },
    ];

    const filtered = categories.filter(cat => {
        if (activeFilter === 'all') return true;
        if (activeFilter === 'popular') return cat.popular;
        return cat.color === activeFilter;
    });

    return (
        // ── Никакой логики темы здесь! CSS сам читает [data-theme] с <html> ──
        <div className="conditioning">

            {/* HERO */}
            <section className="cond__hero">
                <div className="cond__hero-bg" />
                <div className="cond__hero-content">
                    <Link to="/" className="back__btn">← На главную</Link>
                    <div className="cond__badge">❄️ Кондиционеры</div>
                    <h1 className="cond__title">
                        Каталог <span>кондиционеров</span>
                    </h1>
                    <p className="cond__subtitle">
                        Подбор, поставка и профессиональный монтаж кондиционеров любого типа.
                        Работаем с ведущими брендами: Daikin, Mitsubishi, Samsung, LG, Haier.
                    </p>
                    <div className="cond__stats">
                        <div className="stat">
                            <span className="stat__num">8+</span>
                            <span className="stat__label">Типов оборудования</span>
                        </div>
                        <div className="stat__divider" />
                        <div className="stat">
                            <span className="stat__num">500+</span>
                            <span className="stat__label">Установок выполнено</span>
                        </div>
                        <div className="stat__divider" />
                        <div className="stat">
                            <span className="stat__num">5 лет</span>
                            <span className="stat__label">Гарантия на работы</span>
                        </div>
                    </div>
                </div>
            </section>
            <CoolDivider />
            {/* КАТАЛОГ */}
            <section className="catalog">
                <div className="catalog__container">
                    <h2 className="section__title">Типы кондиционеров</h2>
                    <p className="section__subtitle">
                        Выберите подходящий тип для вашего помещения
                    </p>

                    <div className="filters">
                        {filters.map(f => (
                            <button
                                key={f.id}
                                className={`filter__btn ${activeFilter === f.id ? 'active' : ''}`}
                                onClick={() => setActiveFilter(f.id)}
                            >
                                {f.label}
                            </button>
                        ))}
                    </div>

                    <div className="catalog__grid">
                        {filtered.map(cat => (
                            <div
                                key={cat.id}
                                className={`cat__card cat__card--${cat.color}`}
                            >
                                {cat.popular && (
                                    <div className="popular__badge">⭐ Популярное</div>
                                )}
                                <div className="cat__icon">{cat.icon}</div>
                                <h3 className="cat__title">{cat.title}</h3>
                                <p className="cat__desc">{cat.desc}</p>
                                <ul className="cat__features">
                                    {cat.features.map((feat, i) => (
                                        <li key={i}>
                                            <span className="feature__check">✓</span>
                                            {feat}
                                        </li>
                                    ))}
                                </ul>
                                <div className="cat__footer">
                                    <span className="cat__price">{cat.price}</span>
                                    <a href="#contact-form" className="cat__btn">
                                        Узнать цену
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* УСЛУГИ */}
            <section className="cond__services">
                <div className="cond__services-container">
                    <h2 className="section__title">Услуги по кондиционерам</h2>
                    <p className="section__subtitle">
                        Полный спектр работ от монтажа до обслуживания
                    </p>
                    <div className="services__grid">
                        {services.map((s, i) => (
                            <div key={i} className="serv__card">
                                <div className="serv__icon">{s.icon}</div>
                                <h3>{s.title}</h3>
                                <p>{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* БРЕНДЫ */}
            <section className="brands">
                <div className="brands__container">
                    <h2 className="section__title">Бренды с которыми работаем</h2>
                    <p className="section__subtitle">
                        Официальные поставки и гарантия производителя
                    </p>
                    <div className="brands__grid">
                        {[
                            'Daikin',
                            'Mitsubishi Electric',
                            'Samsung',
                            'LG',
                            'Haier',
                            'Gree',
                            'Midea',
                            'Hitachi',
                        ].map((brand, i) => (
                            <div key={i} className="brand__card">
                                {brand}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ФОРМА */}
            <section className="contact__section" id="contact-form">
                <div className="contact__container">
                    <h2>Оставить заявку</h2>
                    <p>Перезвоним в течение 15 минут и поможем с выбором</p>
                    <form
                        className="contact__form"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="form__row">
                            <input
                                type="text"
                                placeholder="Ваше имя"
                                className="form__input"
                                required
                            />
                            <input
                                type="tel"
                                placeholder="Ваш телефон"
                                className="form__input"
                                required
                            />
                        </div>
                        <select className="form__input form__select">
                            <option value="">Тип кондиционера</option>
                            {categories.map(cat => (
                                <option key={cat.id} value={cat.title}>
                                    {cat.title}
                                </option>
                            ))}
                        </select>
                        <textarea
                            className="form__input form__textarea"
                            placeholder="Площадь помещения, пожелания..."
                        />
                        <button type="submit" className="form__btn">
                            ❄️ Отправить заявку
                        </button>
                    </form>
                </div>
            </section>

        </div>
    );
}

export default Conditioning;