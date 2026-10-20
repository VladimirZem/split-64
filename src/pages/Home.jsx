import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import CounterBlock from '../components/CounterBlock';
import Calculator from '../components/Calculator';

function Home() {
    const heroRef = useRef(null);
    const [isDark, setIsDark] = useState(
        document.documentElement.getAttribute('data-theme') === 'dark'
    );

    // Следим за сменой темы
    useEffect(() => {
        const observer = new MutationObserver(() => {
            setIsDark(
                document.documentElement.getAttribute('data-theme') === 'dark'
            );
        });
        observer.observe(document.documentElement, { attributes: true });
        return () => observer.disconnect();
    }, []);

    return (
        <main>
            {/* ===== HERO ===== */}
            <section className="hero" ref={heroRef}>

                {/* ── ТЁМНАЯ ТЕМА: моторы вентиляции ── */}
                {isDark && (
                    <div className="hero__motors">

                        {/* Красная подсветка фона */}
                        <div className="motors__glow motors__glow--1" />
                        <div className="motors__glow motors__glow--2" />
                        <div className="motors__glow motors__glow--3" />

                        {/* Сетка фона */}
                        <div className="motors__grid" />

                        {/* Мотор 1 */}
                        <div className="fan-unit fan-unit--1">
                            <div className="fan__housing">
                                <div className="fan__ring fan__ring--outer" />
                                <div className="fan__ring fan__ring--middle" />
                                <div className="fan__blade-wrap">
                                    {Array.from({ length: 6 }).map((_, i) => (
                                        <div key={i} className="fan__blade" style={{ '--i': i }} />
                                    ))}
                                </div>
                                <div className="fan__center">
                                    <div className="fan__hub" />
                                </div>
                                <div className="fan__glow-ring" />
                            </div>
                            {/* Красные частицы воздуха */}
                            <div className="fan__airflow">
                                {Array.from({ length: 10 }).map((_, i) => (
                                    <div key={i} className="fan__air-particle" />
                                ))}
                            </div>
                            <div className="fan__label">FAN-01</div>
                        </div>

                        {/* Мотор 2 */}
                        <div className="fan-unit fan-unit--2">
                            <div className="fan__housing">
                                <div className="fan__ring fan__ring--outer" />
                                <div className="fan__ring fan__ring--middle" />
                                <div className="fan__blade-wrap">
                                    {Array.from({ length: 6 }).map((_, i) => (
                                        <div key={i} className="fan__blade" style={{ '--i': i }} />
                                    ))}
                                </div>
                                <div className="fan__center">
                                    <div className="fan__hub" />
                                </div>
                                <div className="fan__glow-ring" />
                            </div>
                            <div className="fan__airflow">
                                {Array.from({ length: 10 }).map((_, i) => (
                                    <div key={i} className="fan__air-particle" />
                                ))}
                            </div>
                            <div className="fan__label">FAN-02</div>
                        </div>

                        {/* Мотор 3 (большой, центральный) */}
                        <div className="fan-unit fan-unit--3">
                            <div className="fan__housing">
                                <div className="fan__ring fan__ring--outer" />
                                <div className="fan__ring fan__ring--middle" />
                                <div className="fan__blade-wrap">
                                    {Array.from({ length: 8 }).map((_, i) => (
                                        <div key={i} className="fan__blade" style={{ '--i': i }} />
                                    ))}
                                </div>
                                <div className="fan__center">
                                    <div className="fan__hub" />
                                </div>
                                <div className="fan__glow-ring" />
                            </div>
                            <div className="fan__airflow">
                                {Array.from({ length: 14 }).map((_, i) => (
                                    <div key={i} className="fan__air-particle" />
                                ))}
                            </div>
                            <div className="fan__label">MAIN</div>
                        </div>

                        {/* ── Трубы ── */}
                        <div className="motors__pipes">

                            {/* Вертикали стен */}
                            <div className="pipe pipe--v pipe--wall-left">
                                <div className="pipe__flange" /><div className="pipe__flange" />
                                <div className="pipe__flange" /><div className="pipe__flange" />
                            </div>
                            <div className="pipe pipe--v pipe--wall-right">
                                <div className="pipe__flange" /><div className="pipe__flange" />
                                <div className="pipe__flange" /><div className="pipe__flange" />
                            </div>

                            {/* Горизонтали верх */}
                            <div className="pipe pipe--h pipe--top-left">
                                <div className="pipe__flange" /><div className="pipe__flange" />
                                <div className="pipe__flange" />
                            </div>
                            <div className="pipe pipe--h pipe--top-right">
                                <div className="pipe__flange" /><div className="pipe__flange" />
                                <div className="pipe__flange" />
                            </div>

                            {/* Вертикаль центр */}
                            <div className="pipe pipe--v pipe--center-drop">
                                <div className="pipe__flange" /><div className="pipe__flange" />
                                <div className="pipe__flange" /><div className="pipe__flange" />
                            </div>

                            {/* Горизонтали низ */}
                            <div className="pipe pipe--h pipe--bot-left">
                                <div className="pipe__flange" /><div className="pipe__flange" />
                                <div className="pipe__flange" /><div className="pipe__flange" />
                            </div>
                            <div className="pipe pipe--h pipe--bot-right">
                                <div className="pipe__flange" /><div className="pipe__flange" />
                                <div className="pipe__flange" /><div className="pipe__flange" />
                            </div>

                            {/* Узлы соединений */}
                            <div className="pipe__node node--top-center" />
                            <div className="pipe__node node--fan1-h" />
                            <div className="pipe__node node--fan2-h" />
                            <div className="pipe__node node--tl" />
                            <div className="pipe__node node--tr" />
                            <div className="pipe__node node--bl" />
                            <div className="pipe__node node--br" />
                            <div className="pipe__node node--bot-cl" />
                            <div className="pipe__node node--bot-cr" />
                        </div>

                        {/* Частицы пыли */}
                        <div className="motors__dust">
                            {Array.from({ length: 20 }).map((_, i) => (
                                <div key={i} className="dust__particle" />
                            ))}
                        </div>
                    </div>
                )}

                {/* ── СВЕТЛАЯ ТЕМА: кондиционеры ── */}
                {!isDark && (
                    <div className="hero__ac">

                        {/* Фоновая сетка */}
                        <div className="ac__grid" />

                        {/* Кондиционер 1 */}
                        <div className="ac-unit ac-unit--1">
                            <div className="ac__body">
                                <div className="ac__brand">SPLIT-64</div>
                                <div className="ac__grill">
                                    <div className="ac__grill-line" />
                                    <div className="ac__grill-line" />
                                    <div className="ac__grill-line" />
                                    <div className="ac__grill-line" />
                                </div>
                                <div className="ac__vane" />
                                <div className="ac__led" />
                            </div>
                            <div className="ac__airflow">
                                {Array.from({ length: 12 }).map((_, i) => (
                                    <div key={i} className="air__particle" />
                                ))}
                            </div>
                            <div className="ac__snowflakes">
                                {Array.from({ length: 8 }).map((_, i) => (
                                    <div key={i} className="snowflake">❄</div>
                                ))}
                            </div>
                        </div>

                        {/* Кондиционер 2 */}
                        <div className="ac-unit ac-unit--2">
                            <div className="ac__body">
                                <div className="ac__brand">SPLIT-64</div>
                                <div className="ac__grill">
                                    <div className="ac__grill-line" />
                                    <div className="ac__grill-line" />
                                    <div className="ac__grill-line" />
                                    <div className="ac__grill-line" />
                                </div>
                                <div className="ac__vane" />
                                <div className="ac__led" />
                            </div>
                            <div className="ac__airflow">
                                {Array.from({ length: 12 }).map((_, i) => (
                                    <div key={i} className="air__particle" />
                                ))}
                            </div>
                            <div className="ac__snowflakes">
                                {Array.from({ length: 8 }).map((_, i) => (
                                    <div key={i} className="snowflake">❄</div>
                                ))}
                            </div>
                        </div>

                        {/* Кондиционер 3 */}
                        <div className="ac-unit ac-unit--3">
                            <div className="ac__body">
                                <div className="ac__brand">SPLIT-64</div>
                                <div className="ac__grill">
                                    <div className="ac__grill-line" />
                                    <div className="ac__grill-line" />
                                    <div className="ac__grill-line" />
                                    <div className="ac__grill-line" />
                                </div>
                                <div className="ac__vane" />
                                <div className="ac__led" />
                            </div>
                            <div className="ac__airflow">
                                {Array.from({ length: 12 }).map((_, i) => (
                                    <div key={i} className="air__particle" />
                                ))}
                            </div>
                            <div className="ac__snowflakes">
                                {Array.from({ length: 8 }).map((_, i) => (
                                    <div key={i} className="snowflake">❄</div>
                                ))}
                            </div>
                        </div>

                        {/* Туман внизу */}
                        <div className="ac__fog">
                            <div className="fog__layer fog__layer--1" />
                            <div className="fog__layer fog__layer--2" />
                            <div className="fog__layer fog__layer--3" />
                        </div>

                        {/* Градиентные пятна */}
                        <div className="ac__blob ac__blob--blue" />
                        <div className="ac__blob ac__blob--cyan" />
                    </div>
                )}

                {/* ── Контент (общий) ── */}
                <div className="hero__content">
                    <div className="hero__badge">
                        <span>⚡</span>
                        <span>Профессиональный климат-контроль</span>
                    </div>

                    <h1 className="hero__title">
                        <span className="title__split">СПЛИТ</span>
                        <span className="title__64">-64</span>
                        <br />
                        <span className="title__sub">Саратов</span>
                    </h1>

                    <p className="hero__description">
                        Продажа, монтаж и обслуживание кондиционеров
                        и вентиляционных систем. Более 10 лет на рынке.
                    </p>

                    <div className="hero__buttons">
                        <Link to="/ventilation" className="hero__btn hero__btn--ventilation">
                            <span className="btn__icon">💨</span>
                            <span className="btn__text">
                                <span className="btn__title">Вентиляция</span>
                                <span className="btn__desc">Приточно-вытяжные системы</span>
                            </span>
                            <span className="btn__arrow">→</span>
                        </Link>
                        <Link to="/conditioning" className="hero__btn hero__btn--conditioning">
                            <span className="btn__icon">❄️</span>
                            <span className="btn__text">
                                <span className="btn__title">Кондиционирование</span>
                                <span className="btn__desc">Сплит-системы и мульти-сплит</span>
                            </span>
                            <span className="btn__arrow">→</span>
                        </Link>
                    </div>

                    <div className="hero__scroll">
                        <div className="scroll__line" />
                        <span>Листай вниз</span>
                    </div>
                </div>
            </section>

            {/* 🔥 СЧЁТЧИКИ */}
            <CounterBlock />

            {/* ПРЕИМУЩЕСТВА */}
            <section className="advantages">
                <div className="advantages__container">
                    <h2 className="section__title">Почему выбирают нас</h2>
                    <p className="section__subtitle">
                        Более 5 лет опыта в монтаже климатического оборудования
                    </p>
                    <div className="advantages__grid">
                        <div className="advantage__card">
                            <div className="card__icon">🏆</div>
                            <h3>Гарантия качества</h3>
                            <p>Даём гарантию на все виды работ и установленное оборудование</p>
                        </div>
                        <div className="advantage__card">
                            <div className="card__icon">⚡</div>
                            <h3>Быстрый монтаж</h3>
                            <p>Установка кондиционера за 1 день. Выезд в день обращения</p>
                        </div>
                        <div className="advantage__card">
                            <div className="card__icon">💰</div>
                            <h3>Честные цены</h3>
                            <p>Прозрачное ценообразование без скрытых платежей</p>
                        </div>
                        <div className="advantage__card">
                            <div className="card__icon">🔧</div>
                            <h3>Опытные мастера</h3>
                            <p>Сертифицированные специалисты с многолетним опытом</p>
                        </div>
                        <div className="advantage__card">
                            <div className="card__icon">📋</div>
                            <h3>Работаем официально</h3>
                            <p>Договор, акт выполненных работ, чек — всё официально</p>
                        </div>
                        <div className="advantage__card">
                            <div className="card__icon">🛠️</div>
                            <h3>Полный комплекс</h3>
                            <p>От подбора оборудования до сервисного обслуживания</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 🔥 КАЛЬКУЛЯТОР */}
            <Calculator />

            {/* УСЛУГИ */}
            <section className="services">
                <div className="services__container">
                    <h2 className="section__title">Наши услуги</h2>
                    <p className="section__subtitle">Выберите нужное направление</p>
                    <div className="services__cards">
                        <Link to="/conditioning" className="service__card service__card--blue">
                            <div className="service__bg"></div>
                            <div className="service__content">
                                <div className="service__icon">❄️</div>
                                <h3>Кондиционеры</h3>
                                <ul>
                                    <li>Монтаж сплит-систем</li>
                                    <li>Демонтаж и перенос</li>
                                    <li>Заправка фреоном</li>
                                    <li>Чистка и обслуживание</li>
                                    <li>Ремонт кондиционеров</li>
                                </ul>
                                <span className="service__link">Подробнее →</span>
                            </div>
                        </Link>
                        <Link to="/ventilation" className="service__card service__card--green">
                            <div className="service__bg"></div>
                            <div className="service__content">
                                <div className="service__icon">💨</div>
                                <h3>Вентиляция</h3>
                                <ul>
                                    <li>Приточная вентиляция</li>
                                    <li>Вытяжная вентиляция</li>
                                    <li>Приточно-вытяжные системы</li>
                                    <li>Вентиляция с подогревом</li>
                                    <li>Монтаж воздуховодов</li>
                                </ul>
                                <span className="service__link">Подробнее →</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA БЛОК */}
            <section className="cta">
                <div className="cta__container">
                    <h2>Получите бесплатную консультацию</h2>
                    <p>Позвоните нам или оставьте заявку — мы перезвоним в течение 15 минут</p>
                    <div className="cta__buttons">
                        <a href="tel:+78452000000" className="cta__btn cta__btn--call">
                            📞 Позвонить
                        </a>
                        <Link to="/contacts" className="cta__btn cta__btn--request">
                            Оставить заявку
                        </Link>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="footer">
                <div className="footer__container">
                    <div className="footer__logo">
                        <span className="logo__split">СПЛИТ</span>
                        <span className="logo__64">-64</span>
                    </div>
                    <p className="footer__copy">© 2024 СПЛИТ-64. Все права защищены.</p>
                    <div className="footer__links">
                        <Link to="/contacts">Контакты</Link>
                        <Link to="/about">О нас</Link>
                    </div>
                </div>
            </footer>
        </main>
    );
}

export default Home;