import type { ComponentType, JSX } from 'react';

import HomePage from '@/pages/HomePage/HomePage';
import ProgressPage from '@/pages/ProgressPage/ProgressPage';
import AchievementsPage from '@/pages/AchievementsPage/AchievementsPage';
import CommunityPage from '@/pages/CommunityPage/CommunityPage';
import SettingsPage from '@/pages/SettingsPage/SettingsPage';

interface Route {
  path: string;
  Component: ComponentType;
  title?: string;
  icon?: JSX.Element;
}

export const routes: Route[] = [
  { path: '/', Component: HomePage, title: 'I\'m not smoking' },
  { path: '/progress', Component: ProgressPage, title: 'My progress' },
  { path: '/achievements', Component: AchievementsPage, title: 'Great Achievments' },
  { path: '/community', Component: CommunityPage, title: 'Supportive Community' },
  { path: '/settings', Component: SettingsPage, title: 'Account settings' } 
];
