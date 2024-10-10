// src/pages/CommunityPage.tsx

import React from 'react';

const CommunityPage: React.FC = () => {
  const handleJoinGroup = () => {
    //window.Telegram.WebApp.openTelegramLink('https://t.me/your_group_link');
  };

  return (
    <div>
      <h2>Сообщество</h2>
      <button onClick={handleJoinGroup}>Присоединиться к группе</button>
    </div>
  );
};

export default CommunityPage;
