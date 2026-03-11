// アプリ使用時間の型定義
export interface UsageLog {
  date: string;
  minutes: number;
}

export interface DailyGoal {
  minutes: number;
}

export interface FocusSession {
  id: string;
  startTime: number;
  duration: number;
  completed: boolean;
}

// Premium 機能の型定義
export interface Subscription {
  isPremium: boolean;
  expiresAt?: number;
  subscribedAt?: number;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt?: number;
  condition: (stats: UserStats) => boolean;
}

export interface UserStats {
  totalUsageMinutes: number;
  totalFocusMinutes: number;
  streakDays: number;
  goalAchievedDays: number;
  totalSessions: number;
  averageDailyUsage: number;
}

export interface Theme {
  id: string;
  name: string;
  primary: string;
  secondary: string;
  background: string;
  isDark: boolean;
}

export interface AnalyticsData {
  hourlyUsage: Array<{ hour: number; minutes: number }>;
  weeklyAverage: number;
  monthlyAverage: number;
  bestDay: { date: string; minutes: number };
  worstDay: { date: string; minutes: number };
  trend: 'improving' | 'stable' | 'worsening';
  insights: string[];
}
