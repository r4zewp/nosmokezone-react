// src/pages/ProgressPage.tsx

import React, { useEffect, useState } from 'react';

const ProgressPage: React.FC = () => {
  const [quitDate, setQuitDate] = useState<Date | null>(null);
  const [daysWithoutSmoking, setDaysWithoutSmoking] = useState<number>(0);
  const [moneySaved, setMoneySaved] = useState<number>(0);

  useEffect(() => {
    // Получение сохраненных данных из localStorage или другого источника
    const savedQuitDate = localStorage.getItem('quitDate');
    const savedDailyCost = localStorage.getItem('dailyCost');

    if (savedQuitDate && savedDailyCost) {
      const date = new Date(savedQuitDate);
      setQuitDate(date);

      const today = new Date();
      const diffTime = today.getTime() - date.getTime();
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      setDaysWithoutSmoking(diffDays);

      const dailyCost = parseFloat(savedDailyCost);
      setMoneySaved(diffDays * dailyCost);
    }
  }, []);

  return (
    <div>
      <h2>Ваш прогресс</h2>
      {quitDate ? (
        <div>
          <p>Дней без курения: {daysWithoutSmoking}</p>
          <p>Сэкономлено денег: {moneySaved.toFixed(2)} руб.</p>
          {/* Добавьте другие метрики при необходимости */}
        </div>
      ) : (
        <div>
          <p>Пожалуйста, укажите дату отказа от курения в настройках.</p>
        </div>
      )}
    </div>
  );
};

export default ProgressPage;
