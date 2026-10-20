import React, { useEffect, useRef, useState } from 'react';
import './CounterBlock.css';

const counters = [
    { end: 500, suffix: '+', label: 'Установок выполнено', icon: '🔧' },
    { end: 8, suffix: '+', label: 'Лет на рынке', icon: '📅' },
    { end: 98, suffix: '%', label: 'Довольных клиентов', icon: '⭐' },
    { end: 15, suffix: '', label: 'Минут до перезвона', icon: '📞' },
    { end: 5, suffix: ' лет', label: 'Гарантия на работы', icon: '🛡️' },
    { end: 24, suffix: '/7', label: 'Поддержка клиентов', icon: '💬' },
];

function useCounter(end, duration, started) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!started) return;
        let startTime = null;
        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            // Easing
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [started, end, duration]);

    return count;
}

function CounterItem({ item, started, index }) {
    const count = useCounter(item.end, 2000 + index * 200, started);

    return (
        <div className="counter__item" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="counter__icon">{item.icon}</div>
            <div className="counter__num">
                {count}{item.suffix}
            </div>
            <div className="counter__label">{item.label}</div>
        </div>
    );
}

function CounterBlock() {
    const [started, setStarted] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStarted(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="counter__section" ref={ref}>
            <div className="counter__bg"></div>
            <div className="counter__container">
                <h2 className="counter__title">Цифры которые говорят сами за себя</h2>
                <p className="counter__subtitle">Результаты нашей работы за 8 лет</p>
                <div className="counter__grid">
                    {counters.map((item, i) => (
                        <CounterItem key={i} item={item} started={started} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CounterBlock;