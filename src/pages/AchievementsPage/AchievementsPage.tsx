// src/pages/AchievementsPage.tsx

import React, { useEffect, useState } from 'react';

const AchievementsPage: React.FC = () => {
  const [achievements, setAchievements] = useState<string[]>([]);

  useEffect(() => {
    // Логика для определения достижений на основе прогресса пользователя
    const userAchievements = [];
    const daysWithoutSmoking = parseInt(localStorage.getItem('daysWithoutSmoking') || '0', 10);

    if (daysWithoutSmoking >= 1) {
      userAchievements.push('Первый день без курения!');
    }
    if (daysWithoutSmoking >= 7) {
      userAchievements.push('Неделя без сигарет!');
    }
    // Добавьте другие достижения

    setAchievements(userAchievements);
  }, []);

  return (
    <div>
      <h2>Достижения</h2>
      <ul>
        {achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
    </div>
  );
};

export default AchievementsPage;
