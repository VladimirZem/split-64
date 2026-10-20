import React, { useState, useEffect, useCallback } from 'react';
import './Calculator.css';

const roomTypes = [
    { id: 'bedroom', label: '🛏️ Спальня', coef: 1.0 },
    { id: 'living', label: '🛋️ Гостиная', coef: 1.2 },
    { id: 'kitchen', label: '🍳 Кухня', coef: 1.4 },
    { id: 'office', label: '💼 Офис', coef: 1.3 },
    { id: 'server', label: '🖥️ Серверная', coef: 2.0 },
];

const sunTypes = [
    { id: 'shadow', label: '☁️ Теневая сторона', coef: 0.9 },
    { id: 'normal', label: '🌤️ Нейтральная', coef: 1.0 },
    { id: 'sun', label: '☀️ Солнечная сторона', coef: 1.15 },
];

const floorTypes = [
    { id: 'middle', label: '🏢 Средний этаж', coef: 1.0 },
    { id: 'top', label: '🏠 Верхний этаж', coef: 1.15 },
    { id: 'ground', label: '🏗️ Первый этаж', coef: 1.05 },
];

function getRecommendation(power) {
    if (power <= 2.0) return { model: 'Настенный 07 (2.1 кВт)', btu: 'BTU 7000', price: '25 000 – 35 000 ₽' };
    if (power <= 2.7) return { model: 'Настенный 09 (2.7 кВт)', btu: 'BTU 9000', price: '28 000 – 40 000 ₽' };
    if (power <= 3.5) return { model: 'Настенный 12 (3.5 кВт)', btu: 'BTU 12000', price: '32 000 – 50 000 ₽' };
    if (power <= 5.0) return { model: 'Настенный 18 (5.0 кВт)', btu: 'BTU 18000', price: '45 000 – 65 000 ₽' };
    if (power <= 7.0) return { model: 'Настенный 24 (7.0 кВт)', btu: 'BTU 24000', price: '60 000 – 85 000 ₽' };
    return { model: 'Канальный / Кассетный', btu: 'BTU 36000+', price: 'от 90 000 ₽' };
}

function Calculator() {
    const [area, setArea] = useState(20);
    const [height, setHeight] = useState(2.7);
    const [people, setPeople] = useState(2);
    const [roomType, setRoomType] = useState('bedroom');
    const [sunType, setSunType] = useState('normal');
    const [floorType, setFloorType] = useState('middle');
    const [result, setResult] = useState(null);
    const [animating, setAnimating] = useState(false);

    // ✅ useCallback — функция пересоздаётся только когда меняются зависимости
    const calculate = useCallback(() => {
        setAnimating(true);
        setTimeout(() => setAnimating(false), 600);

        const rCoef = roomTypes.find(r => r.id === roomType).coef;
        const sCoef = sunTypes.find(s => s.id === sunType).coef;
        const fCoef = floorTypes.find(f => f.id === floorType).coef;

        let basePower = (area * height / 3) * 0.1 * 10;
        basePower *= rCoef * sCoef * fCoef;
        basePower += people * 0.1;

        const rec = getRecommendation(basePower);
        setResult({ power: basePower.toFixed(2), ...rec });

    }, [area, height, people, roomType, sunType, floorType]);

    // ✅ Теперь ESLint доволен — calculate в зависимостях
    useEffect(() => {
        calculate();
    }, [calculate]);

    return (
        <section className="calc__section">
            <div className="calc__bg"></div>
            <div className="calc__container">

                <div className="calc__header">
                    <div className="calc__badge">🧮 Калькулятор</div>
                    <h2 className="calc__title">Подбор мощности кондиционера</h2>
                    <p className="calc__subtitle">
                        Укажите параметры помещения — мы подберём оптимальную модель
                    </p>
                </div>

                <div className="calc__body">

                    {/* ФОРМА */}
                    <div className="calc__form">

                        {/* Площадь */}
                        <div className="calc__field">
                            <label className="calc__label">
                                📐 Площадь помещения
                                <span className="calc__value-badge">{area} м²</span>
                            </label>
                            <input
                                type="range"
                                min="10" max="150" step="1"
                                value={area}
                                onChange={e => setArea(+e.target.value)}
                                className="calc__range"
                            />
                            <div className="calc__range-labels">
                                <span>10 м²</span>
                                <span>150 м²</span>
                            </div>
                        </div>

                        {/* Высота потолков */}
                        <div className="calc__field">
                            <label className="calc__label">
                                📏 Высота потолков
                                <span className="calc__value-badge">{height} м</span>
                            </label>
                            <input
                                type="range"
                                min="2.4" max="5" step="0.1"
                                value={height}
                                onChange={e => setHeight(+e.target.value)}
                                className="calc__range"
                            />
                            <div className="calc__range-labels">
                                <span>2.4 м</span>
                                <span>5 м</span>
                            </div>
                        </div>

                        {/* Кол-во людей */}
                        <div className="calc__field">
                            <label className="calc__label">
                                👥 Количество людей
                                <span className="calc__value-badge">{people} чел.</span>
                            </label>
                            <input
                                type="range"
                                min="1" max="20" step="1"
                                value={people}
                                onChange={e => setPeople(+e.target.value)}
                                className="calc__range"
                            />
                            <div className="calc__range-labels">
                                <span>1</span>
                                <span>20</span>
                            </div>
                        </div>

                        {/* Тип комнаты */}
                        <div className="calc__field">
                            <label className="calc__label">🏠 Тип помещения</label>
                            <div className="calc__chips">
                                {roomTypes.map(r => (
                                    <button
                                        key={r.id}
                                        className={`calc__chip ${roomType === r.id ? 'active' : ''}`}
                                        onClick={() => setRoomType(r.id)}
                                    >
                                        {r.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Солнечная сторона */}
                        <div className="calc__field">
                            <label className="calc__label">🌞 Освещённость</label>
                            <div className="calc__chips">
                                {sunTypes.map(s => (
                                    <button
                                        key={s.id}
                                        className={`calc__chip ${sunType === s.id ? 'active' : ''}`}
                                        onClick={() => setSunType(s.id)}
                                    >
                                        {s.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Этаж */}
                        <div className="calc__field">
                            <label className="calc__label">🏢 Этаж</label>
                            <div className="calc__chips">
                                {floorTypes.map(f => (
                                    <button
                                        key={f.id}
                                        className={`calc__chip ${floorType === f.id ? 'active' : ''}`}
                                        onClick={() => setFloorType(f.id)}
                                    >
                                        {f.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* РЕЗУЛЬТАТ */}
                    {result && (
                        <div className={`calc__result ${animating ? 'pulse' : ''}`}>
                            <div className="result__header">
                                <div className="result__icon">❄️</div>
                                <h3>Ваш результат</h3>
                            </div>

                            <div className="result__power">
                                <span className="power__num">{result.power}</span>
                                <span className="power__unit">кВт</span>
                            </div>
                            <p className="power__label">Необходимая мощность</p>

                            <div className="result__divider"></div>

                            <div className="result__rec">
                                <div className="rec__item">
                                    <span className="rec__key">📦 Модель</span>
                                    <span className="rec__val">{result.model}</span>
                                </div>
                                <div className="rec__item">
                                    <span className="rec__key">🌡️ Мощность</span>
                                    <span className="rec__val">{result.btu}</span>
                                </div>
                                <div className="rec__item">
                                    <span className="rec__key">💰 Стоимость</span>
                                    <span className="rec__val price">{result.price}</span>
                                </div>
                            </div>

                            <div className="result__divider"></div>

                            <div className="result__params">
                                <div className="param">
                                    <span>{area} м²</span>
                                    <small>площадь</small>
                                </div>
                                <div className="param">
                                    <span>{height} м</span>
                                    <small>потолок</small>
                                </div>
                                <div className="param">
                                    <span>{people} чел</span>
                                    <small>людей</small>
                                </div>
                            </div>

                            <a href="#contact" className="result__btn">
                                Оставить заявку →
                            </a>

                            <p className="result__note">
                                * Расчёт ориентировочный. Для точного подбора — звоните!
                            </p>
                        </div>
                    )}

                </div>
            </div>
        </section>
    );
}

export default Calculator;