import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Ventilation.css';

const categories = [
    {
        id: 1,
        icon: '💨',
        title: 'Приточная вентиляция',
        desc: 'Подаёт свежий воздух с улицы в помещение. Обеспечивает постоянный приток чистого воздуха с фильтрацией.',
        color: 'blue',
        features: ['Подача свежего воздуха', 'Многоступенчатая фильтрация', 'Подогрев воздуха', 'Тихая работа'],
        price: 'от 15 000 ₽',
        popular: true,
    },
    {
        id: 2,
        icon: '🌪️',
        title: 'Вытяжная вентиляция',
        desc: 'Удаляет загрязнённый воздух, запахи и влагу из помещения. Незаменима для кухонь и санузлов.',
        color: 'orange',
        features: ['Удаление запахов', 'Борьба с влажностью', 'Вывод загрязнённого воздуха', 'Простой монтаж'],
        price: 'от 8 000 ₽',
        popular: true,
    },
    {
        id: 3,
        icon: '🔄',
        title: 'Приточно-вытяжная',
        desc: 'Совмещает подачу свежего и удаление отработанного воздуха. Полный контроль микроклимата в помещении.',
        color: 'cyan',
        features: ['Полный воздухообмен', 'Рекуперация тепла', 'Автоматическое управление', 'Для любых помещений'],
        price: 'от 45 000 ₽',
        popular: true,
    },
    {
        id: 4,
        icon: '♻️',
        title: 'Рекуперационная',
        desc: 'Возвращает до 90% тепла из вытяжного воздуха. Значительная экономия на отоплении зимой.',
        color: 'green',
        features: ['КПД рекуперации до 90%', 'Экономия на отоплении', 'Без сквозняков', 'Энергоэффективность'],
        price: 'от 60 000 ₽',
        popular: false,
    },
    {
        id: 5,
        icon: '🏠',
        title: 'Канальная вентиляция',
        desc: 'Распределяет воздух по помещениям через сеть воздуховодов. Идеальна для офисов и крупных объектов.',
        color: 'purple',
        features: ['Скрытый монтаж', 'Для нескольких комнат', 'Равномерное распределение', 'Централизованное управление'],
        price: 'от 80 000 ₽',
        popular: false,
    },
    {
        id: 6,
        icon: '🪟',
        title: 'Бесканальная вентиляция',
        desc: 'Компактные устройства без воздуховодов. Быстрый монтаж и минимальные затраты на установку.',
        color: 'red',
        features: ['Быстрый монтаж', 'Минимальные затраты', 'Для небольших помещений', 'Без воздуховодов'],
        price: 'от 12 000 ₽',
        popular: false,
    },
    {
        id: 7,
        icon: '🏭',
        title: 'Промышленная вентиляция',
        desc: 'Мощные системы для производств, складов и торговых центров. Высокая производительность 24/7.',
        color: 'cyan',
        features: ['Высокая мощность', 'Работа 24/7', 'Для больших площадей', 'Пожаробезопасность'],
        price: 'от 200 000 ₽',
        popular: false,
    },
    {
        id: 8,
        icon: '🌿',
        title: 'Климатическая установка',
        desc: 'Комплексная система очистки, увлажнения и фильтрации воздуха. Создаёт идеальный микроклимат.',
        color: 'green',
        features: ['Очистка воздуха', 'Увлажнение', 'HEPA фильтрация', 'Умное управление'],
        price: 'от 90 000 ₽',
        popular: false,
    },
];

const services = [
    { icon: '📐', title: 'Проектирование', desc: 'Разработка проекта вентиляции под ваш объект' },
    { icon: '🔧', title: 'Монтаж', desc: 'Профессиональная установка системы вентиляции' },
    { icon: '🧹', title: 'Чистка воздуховодов', desc: 'Чистка и дезинфекция всей системы' },
    { icon: '🔍', title: 'Диагностика', desc: 'Проверка работоспособности и балансировка' },
    { icon: '🛠️', title: 'Ремонт', desc: 'Устранение неисправностей любой сложности' },
    { icon: '📋', title: 'Обслуживание', desc: 'Регулярное ТО и замена фильтров' },
];

const facts = [
    { icon: '🫁', title: 'Здоровье', desc: 'Плохая вентиляция повышает концентрацию CO₂, вызывает усталость и головные боли' },
    { icon: '💧', title: 'Влажность', desc: 'Без вентиляции влажность растёт — появляется плесень и грибок на стенах' },
    { icon: '🌡️', title: 'Температура', desc: 'Правильная вентиляция снижает нагрузку на кондиционер до 30%' },
    { icon: '⚡', title: 'Экономия', desc: 'Рекуперация возвращает до 90% тепла, снижая расходы на отопление' },
];

function Ventilation() {
    const [activeFilter, setActiveFilter] = useState('all');

    const filters = [
        { id: 'all', label: 'Все типы' },
        { id: 'popular', label: 'Популярные' },
        { id: 'blue', label: 'Бытовые' },
        { id: 'cyan', label: 'Промышленные' },
    ];

    const filtered = categories.filter(cat => {
        if (activeFilter === 'all') return true;
        if (activeFilter === 'popular') return cat.popular;
        return cat.color === activeFilter;
    });

    return (
        <div className="ventilation">

            {/* HERO */}
            <section className="vent__hero">
                <div className="vent__hero-bg"></div>

                {/* Анимированные частицы */}
                <div className="vent__particles">
                    {[...Array(15)].map((_, i) => (
                        <div key={i} className={`vent__particle vent__particle--${i + 1}`}></div>
                    ))}
                </div>

                <div className="vent__hero-content">
                    <Link to="/" className="back__btn">← На главную</Link>
                    <div className="vent__badge">💨 Вентиляция</div>
                    <h1 className="vent__title">
                        Каталог систем <span>вентиляции</span>
                    </h1>
                    <p className="vent__subtitle">
                        Проектирование, поставка и монтаж вентиляционных систем для квартир,
                        офисов и промышленных объектов. Свежий воздух — основа здоровья.
                    </p>
                    <div className="vent__stats">
                        <div className="stat">
                            <span className="stat__num">8+</span>
                            <span className="stat__label">Типов систем</span>
                        </div>
                        <div className="stat__divider"></div>
                        <div className="stat">
                            <span className="stat__num">300+</span>
                            <span className="stat__label">Объектов сдано</span>
                        </div>
                        <div className="stat__divider"></div>
                        <div className="stat">
                            <span className="stat__num">90%</span>
                            <span className="stat__label">Рекуперация тепла</span>
                        </div>
                        <div className="stat__divider"></div>
                        <div className="stat">
                            <span className="stat__num">5 лет</span>
                            <span className="stat__label">Гарантия</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ФАКТЫ */}
            <section className="facts">
                <div className="facts__container">
                    <h2 className="section__title">Почему важна вентиляция?</h2>
                    <p className="section__subtitle">Правильная вентиляция — это здоровье, комфорт и экономия</p>
                    <div className="facts__grid">
                        {facts.map((f, i) => (
                            <div key={i} className="fact__card">
                                <div className="fact__icon">{f.icon}</div>
                                <h3>{f.title}</h3>
                                <p>{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* КАТАЛОГ */}
            <section className="catalog">
                <div className="catalog__container">
                    <h2 className="section__title">Типы вентиляционных систем</h2>
                    <p className="section__subtitle">Подберём оптимальное решение для вашего объекта</p>

                    {/* Фильтры */}
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

                    {/* Карточки */}
                    <div className="catalog__grid">
                        {filtered.map(cat => (
                            <div key={cat.id} className={`cat__card cat__card--${cat.color}`}>
                                {cat.popular && <div className="popular__badge">⭐ Популярное</div>}
                                <div className="cat__icon">{cat.icon}</div>
                                <h3 className="cat__title">{cat.title}</h3>
                                <p className="cat__desc">{cat.desc}</p>
                                <ul className="cat__features">
                                    {cat.features.map((feature, i) => (
                                        <li key={i}>
                                            <span className="feature__check">✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <div className="cat__footer">
                                    <span className="cat__price">{cat.price}</span>
                                    <a href="#contact-form" className="cat__btn">Узнать цену</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ЭТАПЫ РАБОТЫ */}
            <section className="steps">
                <div className="steps__container">
                    <h2 className="section__title">Как мы работаем</h2>
                    <p className="section__subtitle">От звонка до сдачи объекта за 5 шагов</p>
                    <div className="steps__list">
                        {[
                            { num: '01', title: 'Заявка', desc: 'Оставляете заявку — перезваниваем за 15 минут' },
                            { num: '02', title: 'Замер', desc: 'Выезжаем на объект, делаем замеры и расчёт' },
                            { num: '03', title: 'Проект', desc: 'Разрабатываем проект вентиляции под ваш объект' },
                            { num: '04', title: 'Монтаж', desc: 'Профессиональная установка системы в срок' },
                            { num: '05', title: 'Сдача', desc: 'Сдаём объект, обучаем пользованию, даём гарантию' },
                        ].map((step, i) => (
                            <div key={i} className="step__item">
                                <div className="step__num">{step.num}</div>
                                <div className="step__line"></div>
                                <div className="step__info">
                                    <h3>{step.title}</h3>
                                    <p>{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* УСЛУГИ */}
            <section className="vent__services">
                <div className="vent__services-container">
                    <h2 className="section__title">Услуги по вентиляции</h2>
                    <p className="section__subtitle">Полный цикл работ — от проекта до обслуживания</p>
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
                    <p className="section__subtitle">Только сертифицированное оборудование</p>
                    <div className="brands__grid">
                        {['Systemair', 'Vents', 'Blauberg', 'Electrolux', 'Daikin', 'Mitsubishi', 'Viessmann', 'Shuft'].map((brand, i) => (
                            <div key={i} className="brand__card">{brand}</div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ФОРМА */}
            <section className="contact__section" id="contact-form">
                <div className="contact__container">
                    <h2>Оставить заявку</h2>
                    <p>Перезвоним в течение 15 минут и поможем с выбором системы</p>
                    <form className="contact__form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form__row">
                            <input type="text" placeholder="Ваше имя" className="form__input" required />
                            <input type="tel" placeholder="Ваш телефон" className="form__input" required />
                        </div>
                        <select className="form__input form__select">
                            <option value="">Тип вентиляции</option>
                            {categories.map(cat => (
                                <option key={cat.id} value={cat.title}>{cat.title}</option>
                            ))}
                        </select>
                        <input
                            type="text"
                            placeholder="Площадь помещения (м²)"
                            className="form__input"
                        />
                        <textarea
                            className="form__input form__textarea"
                            placeholder="Тип объекта (квартира, офис, производство...) и пожелания"
                        ></textarea>
                        <button type="submit" className="form__btn">
                            💨 Отправить заявку
                        </button>
                    </form>
                </div>
            </section>

        </div>
    );
}

export default Ventilation;