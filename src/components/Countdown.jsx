import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { useTranslation } from 'react-i18next';

const targetDate = new Date('2026-03-01T00:00:00');

export default function Countdown() {
  const { t } = useTranslation();
  const [timeLeft, setTimeLeft] = useState({});
  const digitsRef = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      digitsRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, stagger: 0.1 }
    );
  }, [timeLeft]);

  return (
    <div className="countdown">
      <h2>{t('countdown_title')}</h2>
      <div className="digits">
        {['days', 'hours', 'minutes', 'seconds'].map((unit, i) => (
          <div key={unit} ref={(el) => (digitsRef.current[i] = el)} className="digit-box">
            <span className="digit">{timeLeft[unit]}</span>
            <span className="label">{t(unit)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
