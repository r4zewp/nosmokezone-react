// src/pages/SettingsPage.tsx

import React, { useState } from 'react';

const SettingsPage: React.FC = () => {
  const [quitDate, setQuitDate] = useState('');
  const [dailyCost, setDailyCost] = useState('');

  const handleSave = () => {
    localStorage.setItem('quitDate', quitDate);
    localStorage.setItem('dailyCost', dailyCost);
    alert('Настройки сохранены!');
  };

  return (
    <div>
      <h2>Настройки</h2>
      <div>
        <label>
          Дата отказа от курения:
          <input
            type="date"
            value={quitDate}
            onChange={(e) => setQuitDate(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Ежедневные затраты на сигареты (руб.):
          <input
            type="number"
            value={dailyCost}
            onChange={(e) => setDailyCost(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleSave}>Сохранить</button>
    </div>
  );
};

export default SettingsPage;
