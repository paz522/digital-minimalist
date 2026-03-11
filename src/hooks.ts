import { useState, useEffect, useCallback } from 'react';
import { UsageLog, DailyGoal, FocusSession, Subscription, Achievement, Theme, AnalyticsData } from './types';

const STORAGE_KEYS = {
  USAGE_LOGS: 'digital_minimalist_usage_logs',
  DAILY_GOAL: 'digital_minimalist_daily_goal',
  FOCUS_SESSIONS: 'digital_minimalist_focus_sessions',
  SUBSCRIPTION: 'digital_minimalist_subscription',
  ACHIEVEMENTS: 'digital_minimalist_achievements',
  THEME: 'digital_minimalist_theme',
};

// Premium Themes
export const PREMIUM_THEMES: Theme[] = [
  { id: 'ocean', name: 'Ocean', primary: '#0077b6', secondary: '#00b4d8', background: 'linear-gradient(135deg, #0077b6 0%, #00b4d8 100%)', isDark: false },
  { id: 'sunset', name: 'Sunset', primary: '#ff6b35', secondary: '#f7c59f', background: 'linear-gradient(135deg, #ff6b35 0%, #f7c59f 100%)', isDark: false },
  { id: 'forest', name: 'Forest', primary: '#2d6a4f', secondary: '#52b788', background: 'linear-gradient(135deg, #2d6a4f 0%, #52b788 100%)', isDark: false },
  { id: 'midnight', name: 'Midnight', primary: '#7b2cbf', secondary: '#9d4edd', background: 'linear-gradient(135deg, #240046 0%, #7b2cbf 100%)', isDark: true },
  { id: 'sakura', name: 'Sakura', primary: '#ff69b4', secondary: '#ffb6c1', background: 'linear-gradient(135deg, #ff69b4 0%, #ffb6c1 100%)', isDark: false },
  { id: 'monochrome', name: 'Monochrome', primary: '#2c3e50', secondary: '#95a5a6', background: 'linear-gradient(135deg, #2c3e50 0%, #95a5a6 100%)', isDark: true },
];

// Default Theme
export const DEFAULT_THEME: Theme = {
  id: 'default',
  name: 'Default',
  primary: '#667eea',
  secondary: '#764ba2',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  isDark: false,
};

// Achievements
export const ACHIEVEMENTS: Achievement[] = [
  { id: 'first_day', name: 'First Day', description: 'Record your first usage', icon: '🌱', condition: (stats) => stats.totalUsageMinutes > 0 },
  { id: 'week_streak', name: 'Week Streak', description: 'Record for 7 consecutive days', icon: '🔥', condition: (stats) => stats.streakDays >= 7 },
  { id: 'month_streak', name: 'Month Streak', description: 'Record for 30 consecutive days', icon: '🏆', condition: (stats) => stats.streakDays >= 30 },
  { id: 'goal_master', name: 'Goal Master', description: 'Achieve your goal 10 times', icon: '🎯', condition: (stats) => stats.goalAchievedDays >= 10 },
  { id: 'focus_king', name: 'Focus King', description: 'Focus for 1000 minutes total', icon: '👑', condition: (stats) => stats.totalFocusMinutes >= 1000 },
  { id: 'minimalist', name: 'Minimalist', description: 'Use phone under 60 min per day', icon: '✨', condition: (stats) => stats.averageDailyUsage <= 60 && stats.totalUsageMinutes > 0 },
  { id: 'analyst', name: 'Analyst', description: 'Record for 30 days', icon: '📊', condition: (stats) => stats.totalUsageMinutes > 0 && stats.streakDays >= 30 },
  { id: 'balanced', name: 'Balanced', description: 'Weekly average under 120 min', icon: '⚖️', condition: (stats) => stats.averageDailyUsage <= 120 && stats.totalUsageMinutes > 0 },
];

// Load data from localStorage
function loadFromStorage<T>(key: string, defaultValue: T): T {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch {
    return defaultValue;
  }
}

// Save data to localStorage
function saveToStorage<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error('Failed to save to localStorage:', e);
  }
}

// Custom Hook: Usage Tracker
export function useUsageTracker() {
  const [logs, setLogs] = useState<UsageLog[]>(() =>
    loadFromStorage<UsageLog[]>(STORAGE_KEYS.USAGE_LOGS, [])
  );

  const today = new Date().toISOString().split('T')[0];

  // Get today's usage
  const todayUsage = logs.find(log => log.date === today)?.minutes || 0;

  // Record usage (increment by 1 minute every 10 seconds)
  const incrementUsage = useCallback((minutes: number = 1) => {
    setLogs(prevLogs => {
      const existingLog = prevLogs.find(log => log.date === today);
      if (existingLog) {
        const updated = prevLogs.map(log =>
          log.date === today ? { ...log, minutes: log.minutes + minutes } : log
        );
        saveToStorage(STORAGE_KEYS.USAGE_LOGS, updated);
        return updated;
      } else {
        const newLog = { date: today, minutes };
        const updated = [...prevLogs, newLog];
        saveToStorage(STORAGE_KEYS.USAGE_LOGS, updated);
        return updated;
      }
    });
  }, [today]);

  // Get last 7 days data
  const getLast7Days = useCallback(() => {
    const last7Days = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split('T')[0];
      const log = logs.find(l => l.date === dateStr);
      last7Days.push({
        date: dateStr,
        minutes: log?.minutes || 0,
        dayName: date.toLocaleDateString('ja-JP', { weekday: 'short' })
      });
    }
    return last7Days;
  }, [logs]);

  return { todayUsage, incrementUsage, getLast7Days, logs };
}

// Custom Hook: Daily Goal
export function useDailyGoal() {
  const [goal, setGoal] = useState<DailyGoal>(() =>
    loadFromStorage<DailyGoal>(STORAGE_KEYS.DAILY_GOAL, { minutes: 120 })
  );

  const updateGoal = useCallback((minutes: number) => {
    const newGoal = { minutes };
    setGoal(newGoal);
    saveToStorage(STORAGE_KEYS.DAILY_GOAL, newGoal);
  }, []);

  return { goal, updateGoal };
}

// Custom Hook: Focus Session
export function useFocusSession() {
  const [sessions, setSessions] = useState<FocusSession[]>(() =>
    loadFromStorage<FocusSession[]>(STORAGE_KEYS.FOCUS_SESSIONS, [])
  );
  const [isActive, setIsActive] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [targetTime, setTargetTime] = useState(25 * 60); // Default 25 minutes
  const [isBreak, setIsBreak] = useState(false); // Break flag

  // Play notification sound
  const playNotificationSound = useCallback(() => {
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      // Pleasant 3-tone chime
      const now = audioContext.currentTime;

      // First tone (high)
      oscillator.frequency.setValueAtTime(523.25, now); // C5
      gainNode.gain.setValueAtTime(0.3, now);
      gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.3);

      // Second tone (mid)
      oscillator.frequency.setValueAtTime(659.25, now + 0.15); // E5
      gainNode.gain.setValueAtTime(0.3, now + 0.15);
      gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.45);

      // Third tone (low)
      oscillator.frequency.setValueAtTime(783.99, now + 0.3); // G5
      gainNode.gain.setValueAtTime(0.3, now + 0.3);
      gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.6);

      oscillator.start(now);
      oscillator.stop(now + 0.6);

      // Notification display
      if ('Notification' in window && Notification.permission === 'granted') {
        new Notification('Focus Complete!', {
          body: isBreak ? 'Break is over. Let\'s start focusing!' : 'Focus time is up! Take a 5-minute break.',
          icon: '🍅',
        });
      }
    } catch (e) {
      console.error('Failed to play notification sound:', e);
    }
  }, [isBreak]);

  // Start timer
  const startSession = useCallback(() => {
    // Don't create new session when resuming from pause
    setSessions(prev => {
      const lastSession = prev[prev.length - 1];
      if (lastSession && !lastSession.completed && elapsedTime < targetTime) {
        // Resume existing session
        return prev;
      }
      // New session
      const newSession: FocusSession = {
        id: Date.now().toString(),
        startTime: Date.now(),
        duration: 0,
        completed: false,
      };
      return [...prev, newSession];
    });
    setIsActive(true);
  }, [elapsedTime, targetTime]);

  // Stop timer (pause)
  const stopSession = useCallback(() => {
    setIsActive(false);
    // Don't mark session as complete when paused (for resume)
  }, []);

  // Reset timer
  const resetSession = useCallback(() => {
    setIsActive(false);
    setElapsedTime(0);
    // Save session as complete
    setSessions(prev => {
      const lastSession = prev[prev.length - 1];
      if (lastSession && !lastSession.completed) {
        const updated = prev.map(session =>
          session.id === lastSession.id
            ? { ...session, duration: elapsedTime, completed: true }
            : session
        );
        saveToStorage(STORAGE_KEYS.FOCUS_SESSIONS, updated);
        return updated;
      }
      return prev;
    });
  }, [elapsedTime]);

  // Update elapsed time
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isActive) {
      interval = setInterval(() => {
        setElapsedTime(prev => {
          if (prev >= targetTime) {
            setIsActive(false);
            // Play notification sound
            playNotificationSound();
            // Toggle break flag
            setIsBreak(prevBreak => !prevBreak);
            // Save session as complete
            setSessions(prevSessions => {
              const lastSession = prevSessions[prevSessions.length - 1];
              if (lastSession && !lastSession.completed) {
                const updated = prevSessions.map(session =>
                  session.id === lastSession.id
                    ? { ...session, duration: targetTime, completed: true }
                    : session
                );
                saveToStorage(STORAGE_KEYS.FOCUS_SESSIONS, updated);
              }
              return prevSessions;
            });
            return targetTime;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, targetTime, playNotificationSound]);

  // Record usage when session completes
  useEffect(() => {
    if (!isActive && sessions.length > 0) {
      const lastSession = sessions[sessions.length - 1];
      if (lastSession.completed && lastSession.duration > 0) {
        // Focus time is excluded from usage time (productive time)
      }
    }
  }, [isActive, sessions]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = (elapsedTime / targetTime) * 100;

  return {
    isActive,
    elapsedTime,
    targetTime,
    setTargetTime,
    startSession,
    stopSession,
    resetSession,
    formatTime,
    progress,
    sessions,
    isBreak,
  };
}

// Custom Hook: Subscription Management
export function useSubscription() {
  const [subscription, setSubscription] = useState<Subscription>(() =>
    loadFromStorage<Subscription>(STORAGE_KEYS.SUBSCRIPTION, { isPremium: false })
  );

  const subscribe = useCallback(() => {
    const now = Date.now();
    const newSubscription: Subscription = {
      isPremium: true,
      subscribedAt: now,
      expiresAt: now + 30 * 24 * 60 * 60 * 1000, // 30 days
    };
    setSubscription(newSubscription);
    saveToStorage(STORAGE_KEYS.SUBSCRIPTION, newSubscription);
  }, []);

  const unsubscribe = useCallback(() => {
    const newSubscription: Subscription = { isPremium: false };
    setSubscription(newSubscription);
    saveToStorage(STORAGE_KEYS.SUBSCRIPTION, newSubscription);
  }, []);

  // Check expiration
  useEffect(() => {
    if (subscription.isPremium && subscription.expiresAt) {
      const now = Date.now();
      if (now > subscription.expiresAt) {
        unsubscribe();
      }
    }
  }, [subscription.isPremium, subscription.expiresAt, unsubscribe]);

  const daysRemaining = subscription.expiresAt
    ? Math.max(0, Math.ceil((subscription.expiresAt - Date.now()) / (24 * 60 * 60 * 1000)))
    : 0;

  return { subscription, subscribe, unsubscribe, daysRemaining };
}

// Custom Hook: Achievements
export function useAchievements() {
  const [unlockedIds, setUnlockedIds] = useState<string[]>(() =>
    loadFromStorage<string[]>(STORAGE_KEYS.ACHIEVEMENTS, [])
  );

  const checkAchievements = useCallback((stats: {
    totalUsageMinutes: number;
    totalFocusMinutes: number;
    streakDays: number;
    goalAchievedDays: number;
    totalSessions: number;
    averageDailyUsage: number;
  }) => {
    const newUnlocked: string[] = [...unlockedIds];
    let changed = false;

    ACHIEVEMENTS.forEach(achievement => {
      if (!unlockedIds.includes(achievement.id) && achievement.condition(stats)) {
        newUnlocked.push(achievement.id);
        changed = true;
      }
    });

    if (changed) {
      setUnlockedIds(newUnlocked);
      saveToStorage(STORAGE_KEYS.ACHIEVEMENTS, newUnlocked);
    }

    return newUnlocked;
  }, [unlockedIds]);

  const unlockedAchievements = ACHIEVEMENTS
    .filter(a => unlockedIds.includes(a.id))
    .map(a => ({ ...a, unlockedAt: Date.now() }));

  const progress = Math.round((unlockedIds.length / ACHIEVEMENTS.length) * 100);

  return { unlockedAchievements, checkAchievements, progress, total: ACHIEVEMENTS.length };
}

// Custom Hook: Theme Management
export function useTheme() {
  const [currentTheme, setCurrentTheme] = useState<Theme>(() =>
    loadFromStorage<Theme>(STORAGE_KEYS.THEME, DEFAULT_THEME)
  );

  const setTheme = useCallback((theme: Theme) => {
    setCurrentTheme(theme);
    saveToStorage(STORAGE_KEYS.THEME, theme);
  }, []);

  const resetTheme = useCallback(() => {
    setCurrentTheme(DEFAULT_THEME);
    saveToStorage(STORAGE_KEYS.THEME, DEFAULT_THEME);
  }, []);

  return { currentTheme, setTheme, resetTheme, availableThemes: [DEFAULT_THEME, ...PREMIUM_THEMES] };
}

// Custom Hook: Detailed Analytics (Premium)
export function useAnalytics(logs: UsageLog[], focusSessions: FocusSession[]) {
  const getAnalytics = useCallback((): AnalyticsData => {
    if (logs.length === 0) {
      return {
        hourlyUsage: [],
        weeklyAverage: 0,
        monthlyAverage: 0,
        bestDay: { date: '', minutes: 0 },
        worstDay: { date: '', minutes: 0 },
        trend: 'stable',
        insights: ['Not enough data'],
      };
    }

    // Hourly usage (simulated data)
    const hourlyUsage = Array.from({ length: 24 }, (_, i) => ({
      hour: i,
      minutes: Math.floor(Math.random() * 30),
    }));

    // Weekly and monthly average
    const totalMinutes = logs.reduce((sum, log) => sum + log.minutes, 0);
    const weeklyAverage = totalMinutes / Math.ceil(logs.length / 7);
    const monthlyAverage = totalMinutes / Math.ceil(logs.length / 30);

    // Best and worst day
    const sortedLogs = [...logs].sort((a, b) => b.minutes - a.minutes);
    const bestDay = sortedLogs[0];
    const worstDay = sortedLogs[sortedLogs.length - 1];

    // Trend analysis
    const recent7Days = logs.slice(-7);
    const older7Days = logs.slice(0, 7);
    const recentAvg = recent7Days.reduce((s, l) => s + l.minutes, 0) / recent7Days.length;
    const olderAvg = older7Days.reduce((s, l) => s + l.minutes, 0) / older7Days.length;
    const trend = recentAvg < olderAvg * 0.9 ? 'improving' : recentAvg > olderAvg * 1.1 ? 'worsening' : 'stable';

    // Generate insights
    const insights: string[] = [];
    if (trend === 'improving') {
      insights.push('🎉 Your usage is decreasing. Great pace!');
    } else if (trend === 'worsening') {
      insights.push('⚠️ Your usage is increasing. Try using Focus Mode.');
    }
    if (weeklyAverage > 180) {
      insights.push('💡 Weekly average exceeds 180 min. Consider adjusting your goal.');
    }
    if (focusSessions.length > 0) {
      const totalFocus = focusSessions.reduce((s, f) => s + f.duration, 0);
      insights.push(`🎯 Focused for ${Math.round(totalFocus / 60)} minutes total.`);
    }
    if (insights.length === 0) {
      insights.push('Going well. Keep up the pace.');
    }

    return {
      hourlyUsage,
      weeklyAverage,
      monthlyAverage,
      bestDay: { date: bestDay.date, minutes: bestDay.minutes },
      worstDay: { date: worstDay.date, minutes: worstDay.minutes },
      trend,
      insights,
    };
  }, [logs, focusSessions]);

  return { getAnalytics };
}

// Calculate user statistics
export function calculateUserStats(logs: UsageLog[], focusSessions: FocusSession[], goal: number): {
  totalUsageMinutes: number;
  totalFocusMinutes: number;
  streakDays: number;
  goalAchievedDays: number;
  totalSessions: number;
  averageDailyUsage: number;
} {
  const totalUsageMinutes = logs.reduce((sum, log) => sum + log.minutes, 0);
  const totalFocusMinutes = focusSessions.reduce((sum, session) => sum + session.duration, 0);
  const totalSessions = focusSessions.length;

  // Calculate streak
  let streakDays = 0;
  for (let i = 0; i < 365; i++) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const dateStr = date.toISOString().split('T')[0];
    const log = logs.find(l => l.date === dateStr);
    if (log && log.minutes > 0) {
      streakDays++;
    } else if (i > 0) {
      break;
    }
  }

  // Goal achieved days
  const goalAchievedDays = logs.filter(log => log.minutes <= goal).length;

  // Daily average usage
  const averageDailyUsage = logs.length > 0 ? totalUsageMinutes / logs.length : 0;

  return {
    totalUsageMinutes,
    totalFocusMinutes,
    streakDays,
    goalAchievedDays,
    totalSessions,
    averageDailyUsage,
  };
}
