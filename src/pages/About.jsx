import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './About.css';

/* ─── Данные ─── */
const timeline = [
    {
        year: '1999',
        title: 'Основание компании',
        desc: 'ООО «Сплит-64» открыла свои двери в Саратове. Небольшая команда профессионалов с большой целью.',
    },
    {
        year: '2001',
        title: 'Официальный дилер',
        desc: 'Получили статус официального дилера MITSUBISHI ELECTRIC и Daikin в Саратове.',
    },
    {
        year: '2005',
        title: 'Расширение портфеля',
        desc: 'Добавили в линейку AUX, CARRIER-TOSHIBA, SAKATA — охватили все ценовые сегменты.',
    },
    {
        year: '2010',
        title: 'Промышленные объекты',
        desc: 'Начали работу с крупными промышленными и коммерческими объектами Саратовской области.',
    },
    {
        year: '2015',
        title: 'Сервисный центр',
        desc: 'Открыли собственный сертифицированный сервисный центр по обслуживанию и ремонту.',
    },
    {
        year: '2024',
        title: 'Лидер региона',
        desc: 'Более 3000 выполненных объектов. Одна из ведущих компаний по климатическому оборудованию в регионе.',
    },
];

const values = [
    {
        icon: '🏆',
        title: 'Качество',
        desc: 'Работаем только с сертифицированным оборудованием от мировых производителей.',
    },
    {
        icon: '🤝',
        title: 'Надёжность',
        desc: 'Официальный дилер с 2001 года. Гарантия на все виды работ до 5 лет.',
    },
    {
        icon: '⚡',
        title: 'Оперативность',
        desc: 'Выезд мастера в день обращения. Перезваниваем за 15 минут.',
    },
    {
        icon: '💡',
        title: 'Экспертиза',
        desc: '25 лет опыта. Решаем задачи любой сложности — от квартиры до завода.',
    },
    {
        icon: '💰',
        title: 'Честные цены',
        desc: 'Прозрачная смета без скрытых доплат. Фиксируем стоимость в договоре.',
    },
    {
        icon: '🔧',
        title: 'Сервис 24/7',
        desc: 'Круглосуточная техподдержка и аварийный выезд в любое время суток.',
    },
];

const brands = [
    { name: 'Mitsubishi Electric', type: 'Официальный дилер' },
    { name: 'Daikin', type: 'Официальный дилер' },
    { name: 'Mitsubishi Heavy', type: 'Официальный дилер' },
    { name: 'AUX', type: 'Официальный дилер' },
    { name: 'CARRIER-TOSHIBA', type: 'Авторизованный' },
    { name: 'SAKATA', type: 'Авторизованный' },
    { name: 'MIDEA', type: 'Авторизованный' },
    { name: 'Kentatsu', type: 'Авторизованный' },
];

const team = [
    {
        emoji: '👨‍💼',
        name: 'Руководитель проектов',
        role: 'Проектирование систем',
        exp: '18 лет опыта',
    },
    {
        emoji: '👷',
        name: 'Ведущий монтажник',
        role: 'Монтаж и наладка',
        exp: '15 лет опыта',
    },
    {
        emoji: '🔬',
        name: 'Сервисный инженер',
        role: 'Диагностика и ремонт',
        exp: '12 лет опыта',
    },
    {
        emoji: '📐',
        name: 'Инженер-проектировщик',
        role: 'Проекты вентиляции',
        exp: '10 лет опыта',
    },
];

const stats = [
    { num: '25+', label: 'Лет на рынке' },
    { num: '3000+', label: 'Объектов сдано' },
    { num: '8', label: 'Брендов-партнёров' },
    { num: '5 лет', label: 'Гарантия на работы' },
];

/* ─── Компонент ─── */
function About() {
    const [openYear, setOpenYear] = useState(null);

    return (
        <div className="about">

            {/* ══════════ HERO ══════════ */}
            <section className="about__hero">
                <div className="about__hero-bg" />
                <div className="about__particles">
                    {[...Array(12)].map((_, i) => (
                        <div key={i} className={`about__particle about__particle--${i + 1}`} />
                    ))}
                </div>

                <div className="about__hero-content">
                    <Link to="/" className="back__btn">← На главную</Link>
                    <div className="about__badge">🏢 О компании</div>
                    <h1 className="about__title">
                        ООО <span>«Сплит-64»</span>
                    </h1>
                    <p className="about__subtitle">
                        Более 25 лет создаём комфортный климат в Саратове и области.
                        Официальный дилер ведущих мировых брендов кондиционирования и вентиляции.
                    </p>

                    {/* Статистика */}
                    <div className="about__stats">
                        {stats.map((s, i) => (
                            <React.Fragment key={i}>
                                <div className="stat">
                                    <span className="stat__num">{s.num}</span>
                                    <span className="stat__label">{s.label}</span>
                                </div>
                                {i < stats.length - 1 && <div className="stat__divider" />}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════ О КОМПАНИИ ══════════ */}
            <section className="about__story">
                <div className="about__story-container">
                    <div className="story__text">
                        <h2 className="section__title left">Наша история</h2>
                        <p>
                            Компания ООО «Сплит-64» была создана в <strong>1999 году</strong> и на
                            сегодняшний день является одной из ведущих компаний по продаже и
                            обслуживанию высококачественного оборудования для кондиционирования
                            и вентиляции в Саратовской области.
                        </p>
                        <p>
                            С <strong>2001 года</strong> «Сплит-64» является официальным дилером в
                            Саратове кондиционеров MITSUBISHI ELECTRIC, Daikin, Mitsubishi Heavy,
                            AUX, CARRIER-TOSHIBA, SAKATA, MIDEA, Kentatsu.
                        </p>
                        <p>
                            За четверть века мы реализовали более <strong>3 000 объектов</strong> —
                            от жилых квартир до крупных промышленных предприятий. Каждый проект
                            мы выполняем с полной ответственностью и гарантией качества.
                        </p>
                        <div className="story__badges">
                            <span className="story__badge">✅ Официальный дилер</span>
                            <span className="story__badge">✅ Сертифицированные монтажники</span>
                            <span className="story__badge">✅ Собственный сервис-центр</span>
                        </div>
                    </div>

                    <div className="story__card">
                        <div className="story__card-icon">🏢</div>
                        <h3>ООО «Сплит-64»</h3>
                        <ul className="story__info-list">
                            <li><span>📅</span> Основана в 1999 году</li>
                            <li><span>📍</span> Саратов и область</li>
                            <li><span>🏅</span> Официальный дилер с 2001 года</li>
                            <li><span>👥</span> Более 30 специалистов</li>
                            <li><span>🔧</span> Сервисный центр 24/7</li>
                            <li><span>📋</span> Работаем по договору</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ══════════ АНИМАЦИЯ СИСТЕМЫ ══════════ */}
            <section className="about__anim">
                <div className="about__anim-container">
                    <h2 className="section__title">Как работает система</h2>
                    <p className="section__subtitle">Принцип работы климатического оборудования</p>

                    <div className="anim__scene">
                        {/* Улица */}
                        <div className="anim__device">
                            <div className="anim__device-box">🌤️</div>
                            <div className="anim__device-label">Улица</div>
                        </div>

                        {/* Поток к наружному блоку */}
                        <div className="anim__flow">
                            <div className="anim__arrow warm"></div>
                            <div className="anim__arrow-label">тепло</div>
                        </div>

                        {/* Наружный блок */}
                        <div className="anim__device">
                            <div className="anim__device-box fan">🏠</div>
                            <div className="anim__device-label">Наружный блок</div>
                        </div>

                        {/* Фреон */}
                        <div className="anim__flow">
                            <div className="anim__arrow cold"></div>
                            <div className="anim__arrow-label">фреон</div>
                        </div>

                        {/* Температура */}
                        <div className="anim__temp">
                            <div className="anim__temp-val">❄️</div>
                            <div className="anim__temp-label">Охлаждение</div>
                        </div>

                        {/* Поток к внутреннему */}
                        <div className="anim__flow">
                            <div className="anim__arrow fresh"></div>
                            <div className="anim__arrow-label">воздух</div>
                        </div>

                        {/* Внутренний блок */}
                        <div className="anim__device">
                            <div className="anim__device-box fan">❄️</div>
                            <div className="anim__device-label">Внутренний блок</div>
                        </div>

                        {/* Поток в комнату */}
                        <div className="anim__flow">
                            <div className="anim__arrow cold"></div>
                            <div className="anim__arrow-label">холод</div>
                        </div>

                        {/* Комната */}
                        <div className="anim__device">
                            <div className="anim__device-box">🛋️</div>
                            <div className="anim__device-label">Помещение</div>
                        </div>
                    </div>

                    {/* Легенда */}
                    <div className="anim__caption">
                        <div className="anim__legend">
                            <div className="anim__legend-dot cold"></div>
                            Холодный поток
                        </div>
                        <div className="anim__legend">
                            <div className="anim__legend-dot warm"></div>
                            Тёплый поток
                        </div>
                        <div className="anim__legend">
                            <div className="anim__legend-dot fresh"></div>
                            Свежий воздух
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════ ЦЕННОСТИ ══════════ */}
            <section className="about__values">
                <div className="about__values-container">
                    <h2 className="section__title">Наши принципы</h2>
                    <p className="section__subtitle">То, чем мы руководствуемся в работе каждый день</p>
                    <div className="values__grid">
                        {values.map((v, i) => (
                            <div key={i} className="value__card">
                                <div className="value__icon">{v.icon}</div>
                                <h3>{v.title}</h3>
                                <p>{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════ ИСТОРИЯ / ТАЙМЛАЙН ══════════ */}
            <section className="about__timeline">
                <div className="timeline__container">
                    <h2 className="section__title">25 лет в цифрах</h2>
                    <p className="section__subtitle">Ключевые вехи развития компании</p>
                    <div className="timeline__list">
                        {timeline.map((item, i) => (
                            <div
                                key={i}
                                className={`timeline__item ${openYear === i ? 'open' : ''}`}
                                onClick={() => setOpenYear(openYear === i ? null : i)}
                            >
                                <div className="timeline__year">{item.year}</div>
                                <div className="timeline__dot" />
                                <div className="timeline__body">
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════ БРЕНДЫ ══════════ */}
            <section className="about__brands">
                <div className="about__brands-container">
                    <h2 className="section__title">Официальные партнёры</h2>
                    <p className="section__subtitle">Работаем только с сертифицированным оборудованием</p>
                    <div className="about__brands-grid">
                        {brands.map((b, i) => (
                            <div key={i} className="about__brand-card">
                                <div className="about__brand-name">{b.name}</div>
                                <div className="about__brand-type">{b.type}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════ КОМАНДА ══════════ */}
            <section className="about__team">
                <div className="about__team-container">
                    <h2 className="section__title">Наша команда</h2>
                    <p className="section__subtitle">Профессионалы с многолетним опытом</p>
                    <div className="team__grid">
                        {team.map((m, i) => (
                            <div key={i} className="team__card">
                                <div className="team__avatar">{m.emoji}</div>
                                <h3 className="team__name">{m.name}</h3>
                                <p className="team__role">{m.role}</p>
                                <span className="team__exp">{m.exp}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════ КОНТАКТЫ CTA ══════════ */}
            <section className="about__cta">
                <div className="about__cta-container">
                    <h2>Готовы работать с профессионалами?</h2>
                    <p>Свяжитесь с нами — проконсультируем бесплатно и подберём решение под ваш объект</p>
                    <div className="cta__buttons">
                        <a href="tel:+78452000000" className="cta__btn cta__btn--primary">
                            📞 Позвонить
                        </a>
                        <Link to="/" className="cta__btn cta__btn--secondary">
                            🏠 На главную
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default About;