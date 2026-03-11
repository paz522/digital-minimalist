import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useUsageTracker, useDailyGoal, useFocusSession, useAchievements, useTheme, useAnalytics, calculateUserStats, ACHIEVEMENTS } from './hooks';
import { PageMeta } from './components/MetaTags';
import { ArticlesView } from './components/ArticlesView';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'focus' | 'analytics' | 'journal' | 'articles' | 'achievements' | 'settings'>('dashboard');
  const { todayUsage, getLast7Days, logs, incrementUsage } = useUsageTracker();
  const { goal, updateGoal } = useDailyGoal();
  const { unlockedAchievements, checkAchievements, progress: achievementProgress, total: totalAchievements } = useAchievements();
  const {
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
  } = useFocusSession();
  const { getAnalytics } = useAnalytics(logs, sessions);

  // Request notification permission
  useEffect(() => {
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission();
    }
  }, []);

  // Calculate statistics
  const stats = calculateUserStats(logs, sessions, goal.minutes);

  // Check achievements
  useEffect(() => {
    checkAchievements(stats);
  }, [stats, checkAchievements]);

  // Simulate usage tracking (increment by 1 minute every 10 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isActive) {
        incrementUsage(1);
      }
    }, 10000);
    return () => clearInterval(interval);
  }, [isActive, incrementUsage]);

  const usagePercentage = Math.min((todayUsage / goal.minutes) * 100, 100);
  const remainingMinutes = Math.max(goal.minutes - todayUsage, 0);

  return (
    <div className="app">
      <Helmet>
        <title>{activeTab === 'dashboard' ? PageMeta.dashboard.title :
                activeTab === 'focus' ? PageMeta.focus.title :
                activeTab === 'analytics' ? PageMeta.analytics.title :
                activeTab === 'journal' ? PageMeta.journal.title :
                activeTab === 'achievements' ? PageMeta.achievements.title :
                activeTab === 'settings' ? PageMeta.settings.title :
                PageMeta.dashboard.title}</title>
        <meta name="description" content={
                activeTab === 'dashboard' ? PageMeta.dashboard.description :
                activeTab === 'focus' ? PageMeta.focus.description :
                activeTab === 'analytics' ? PageMeta.analytics.description :
                activeTab === 'journal' ? PageMeta.journal.description :
                activeTab === 'achievements' ? PageMeta.achievements.description :
                activeTab === 'settings' ? PageMeta.settings.description :
                PageMeta.dashboard.description} />
      </Helmet>

      <header className="header">
        <div className="header-top">
          <h1>📱 Digital Minimalist</h1>
        </div>
        <p className="tagline">Build a healthier relationship with your phone</p>
      </header>

      <main className="main">
        {activeTab === 'dashboard' && (
          <Dashboard
            todayUsage={todayUsage}
            goal={goal.minutes}
            usagePercentage={usagePercentage}
            remainingMinutes={remainingMinutes}
            getLast7Days={getLast7Days}
          />
        )}

        {activeTab === 'focus' && (
          <FocusMode
            isActive={isActive}
            elapsedTime={elapsedTime}
            targetTime={targetTime}
            setTargetTime={setTargetTime}
            startSession={startSession}
            stopSession={stopSession}
            resetSession={resetSession}
            formatTime={formatTime}
            progress={progress}
            isBreak={isBreak}
          />
        )}

        {activeTab === 'analytics' && (
          <AnalyticsView getAnalytics={getAnalytics} />
        )}

        {activeTab === 'achievements' && (
          <AchievementsView
            unlockedAchievements={unlockedAchievements}
            achievementProgress={achievementProgress}
            totalAchievements={totalAchievements}
          />
        )}

        {activeTab === 'journal' && (
          <JournalView />
        )}

        {activeTab === 'articles' && (
          <ArticlesView />
        )}

        {activeTab === 'settings' && (
          <Settings
            goal={goal.minutes}
            updateGoal={updateGoal}
          />
        )}
      </main>

      <nav className="nav">
        <button
          className={`nav-btn ${activeTab === 'dashboard' ? 'active' : ''}`}
          onClick={() => setActiveTab('dashboard')}
        >
          📊 Dashboard
        </button>
        <button
          className={`nav-btn ${activeTab === 'focus' ? 'active' : ''}`}
          onClick={() => setActiveTab('focus')}
        >
          🎯 Focus
        </button>
        <button
          className={`nav-btn ${activeTab === 'articles' ? 'active' : ''}`}
          onClick={() => setActiveTab('articles')}
        >
          📖 Articles
        </button>
        <button
          className={`nav-btn ${activeTab === 'journal' ? 'active' : ''}`}
          onClick={() => setActiveTab('journal')}
        >
          📔 Journal
        </button>
        <button
          className={`nav-btn ${activeTab === 'achievements' ? 'active' : ''}`}
          onClick={() => setActiveTab('achievements')}
        >
          🏆 Achievements
        </button>
        <button
          className={`nav-btn ${activeTab === 'settings' ? 'active' : ''}`}
          onClick={() => setActiveTab('settings')}
        >
          ⚙️ Settings
        </button>
      </nav>
    </div>
  );
}

// Dashboard Component
function Dashboard({
  todayUsage,
  goal,
  usagePercentage,
  remainingMinutes,
  getLast7Days,
}: {
  todayUsage: number;
  goal: number;
  usagePercentage: number;
  remainingMinutes: number;
  getLast7Days: () => Array<{ date: string; minutes: number; dayName: string }>;
}) {
  const last7Days = getLast7Days();
  const weeklyTotal = last7Days.reduce((sum, day) => sum + day.minutes, 0);
  const weeklyAverage = Math.round(weeklyTotal / 7);

  const shareWeeklyReport = () => {
    const text = `📱 Weekly Screen Time Report\n\n` +
      `Average: ${weeklyAverage} min/day\n` +
      `Total: ${weeklyTotal} min\n` +
      `Goal: ${goal} min/day\n\n` +
      `#DigitalMinimalist #ScreenTime #DigitalDetox`;

    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'width=600,height=400');
  };

  const shareTodayReport = () => {
    const achievement = todayUsage <= goal ? '🎯 Goal achieved!' : todayUsage <= goal * 1.2 ? '😌 Almost there!' : '💪 Try again tomorrow!';
    const text = `📱 Today's Screen Time\n\n` +
      `Usage: ${todayUsage} min\n` +
      `Goal: ${goal} min\n` +
      `${achievement}\n\n` +
      `#DigitalMinimalist #ScreenTime`;

    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'width=600,height=400');
  };

  return (
    <div className="dashboard">
      <div className="card today-card">
        <div className="card-header-with-action">
          <h2>Today's Usage</h2>
          <button className="share-btn-small" onClick={shareTodayReport}>
            📤 Share
          </button>
        </div>
        <div className="usage-display">
          <span className="usage-value">{todayUsage}</span>
          <span className="usage-unit">min</span>
        </div>
        <div className="goal-progress">
          <div className="progress-bar">
            <div
              className={`progress-fill ${usagePercentage > 100 ? 'over' : ''}`}
              style={{ width: `${Math.min(usagePercentage, 100)}%` }}
            />
          </div>
          <p className="goal-text">
            Goal: {goal} min | Remaining: {remainingMinutes} min
          </p>
        </div>
      </div>

      <div className="card weekly-card">
        <div className="card-header-with-action">
          <h2>Last 7 Days Trend</h2>
          <button className="share-btn-small" onClick={shareWeeklyReport}>
            📤 Share Report
          </button>
        </div>
        <div className="weekly-chart">
          {last7Days.map((day) => (
            <div key={day.date} className="chart-bar">
              <div className="bar-label">{day.dayName}</div>
              <div className="bar-container">
                <div
                  className="bar"
                  style={{ height: `${Math.min((day.minutes / 300) * 100, 100)}%` }}
                />
              </div>
              <div className="bar-value">{day.minutes} min</div>
            </div>
          ))}
        </div>
      </div>

      <div className="card tips-card">
        <h2>💡 Today's Tip</h2>
        <p className="tip">
          {todayUsage > goal * 0.8
            ? 'You\'re approaching your daily limit. Time for a digital detox!'
            : todayUsage > goal * 0.5
            ? 'Great job! Keep up the pace.'
            : 'Good start. Create more screen-free time intentionally.'}
        </p>
      </div>
    </div>
  );
}

// Focus Mode Component
function FocusMode({
  isActive,
  elapsedTime,
  targetTime,
  setTargetTime,
  startSession,
  stopSession,
  resetSession,
  formatTime,
  progress,
  isBreak,
}: {
  isActive: boolean;
  elapsedTime: number;
  targetTime: number;
  setTargetTime: (time: number) => void;
  startSession: () => void;
  stopSession: () => void;
  resetSession: () => void;
  formatTime: (seconds: number) => string;
  progress: number;
  isBreak: boolean;
}) {
  const presets = [15, 25, 45, 60];

  return (
    <div className="focus-mode">
      <div className="card focus-card">
        <h2>🎯 Focus Mode</h2>
        <p className="focus-description">
          {isBreak ? '💤 Break time. Relax and recharge.' : 'Minimize phone usage and focus on your task'}
        </p>
        {isBreak && (
          <div className="break-badge">
            Break Mode
          </div>
        )}

        <div className="timer-display">
          <div className="timer-circle">
            <svg viewBox="0 0 100 100" className="timer-svg">
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#e0e0e0"
                strokeWidth="8"
              />
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#667eea"
                strokeWidth="8"
                strokeDasharray={`${2 * Math.PI * 45}`}
                strokeDashoffset={`${2 * Math.PI * 45 * (1 - progress / 100)}`}
                transform="rotate(-90 50 50)"
                className="timer-progress"
              />
            </svg>
            <div className="timer-time">{formatTime(elapsedTime)}</div>
          </div>
        </div>

        {!isActive ? (
          <div className="timer-controls">
            <div className="preset-buttons">
              {presets.map((mins) => (
                <button
                  key={mins}
                  className={`preset-btn ${targetTime === mins * 60 ? 'active' : ''}`}
                  onClick={() => setTargetTime(mins * 60)}
                >
                  {mins} min
                </button>
              ))}
            </div>
            <button className="start-btn" onClick={startSession}>
              Start
            </button>
          </div>
        ) : (
          <div className="timer-controls">
            <button className="stop-btn" onClick={stopSession}>
              Pause
            </button>
            <button className="reset-btn" onClick={resetSession}>
              Reset
            </button>
          </div>
        )}

        <div className="focus-tips">
          <h3>Tips for Focus</h3>
          <ul>
            <li>Turn off notifications</li>
            <li>Keep your phone in another room</li>
            <li>Pomodoro Technique (25 min focus + 5 min break)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// Settings Component
function Settings({
  goal,
  updateGoal,
}: {
  goal: number;
  updateGoal: (minutes: number) => void;
}) {
  const [tempGoal, setTempGoal] = useState(goal);
  const { currentTheme, setTheme, availableThemes } = useTheme();

  const handleSave = () => {
    updateGoal(tempGoal);
  };

  return (
    <div className="settings">
      <div className="card settings-card">
        <h2>⚙️ Settings</h2>

        <div className="setting-item">
          <label htmlFor="daily-goal">Daily Usage Goal (minutes)</label>
          <div className="goal-input-group">
            <input
              id="daily-goal"
              type="number"
              value={tempGoal}
              onChange={(e) => setTempGoal(Number(e.target.value))}
              min="0"
              max="1440"
            />
            <button className="save-btn" onClick={handleSave}>
              Save
            </button>
          </div>
          <p className="setting-hint">
            Recommended: 120 min (2 hours)
          </p>
        </div>

        <div className="setting-item">
          <h3>Presets</h3>
          <div className="preset-buttons">
            {[60, 120, 180, 240].map((mins) => (
              <button
                key={mins}
                className="preset-btn"
                onClick={() => {
                  setTempGoal(mins);
                  updateGoal(mins);
                }}
              >
                {mins} min
              </button>
            ))}
          </div>
        </div>

        <div className="setting-item about-section">
          <h3>About This App</h3>
          <p>
            Digital Minimalist is an app to build a healthier relationship with your phone.
          </p>
          <p>
            Achieve digital well-being through usage tracking and focus mode.
          </p>
          <p className="free-notice">
            ✨ All features are free
          </p>
        </div>

        <div className="setting-item export-section">
          <h3>📥 Data Management</h3>
          <button className="export-btn-small" onClick={() => {
            const data = {
              exportDate: new Date().toISOString(),
              usageLogs: JSON.parse(localStorage.getItem('digital_minimalist_usage_logs') || '[]'),
              focusSessions: JSON.parse(localStorage.getItem('digital_minimalist_focus_sessions') || '[]'),
              journal: JSON.parse(localStorage.getItem('digital_minimalist_journal') || '[]'),
            };
            const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `digital-minimalist-export-${new Date().toISOString().split('T')[0]}.json`;
            a.click();
            URL.revokeObjectURL(url);
          }}>
            Export Data
          </button>
        </div>

        <div className="setting-item theme-section">
          <h3>🎨 Theme Settings</h3>
          <button className="theme-btn-small" onClick={() => {
            const modal = document.getElementById('theme-modal');
            if (modal) modal.style.display = 'block';
          }}>
            Change Theme
          </button>
        </div>

        <div id="theme-modal" className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h2>🎨 Theme</h2>
              <button className="modal-close" onClick={() => {
                const modal = document.getElementById('theme-modal');
                if (modal) modal.style.display = 'none';
              }}>×</button>
            </div>
            <div className="themes-grid">
              {availableThemes.map((theme) => {
                const isSelected = currentTheme.id === theme.id;
                return (
                  <button
                    key={theme.id}
                    className={`theme-item ${isSelected ? 'selected' : ''}`}
                    onClick={() => {
                      setTheme(theme);
                      const modal = document.getElementById('theme-modal');
                      if (modal) modal.style.display = 'none';
                    }}
                    style={{ background: theme.primary }}
                  >
                    <div className="theme-preview" style={{ background: theme.background }}>
                      <span className="theme-name">{theme.name}</span>
                    </div>
                  </button>
                );
              })}
            </div>
            <p className="theme-hint">All themes are available for free</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Analytics View Component (Premium)
function AnalyticsView({ getAnalytics }: { getAnalytics: () => import('./types').AnalyticsData }) {
  const analytics = getAnalytics();

  return (
    <div className="analytics">
      <div className="card analytics-card">
        <h2>📈 Detailed Analytics</h2>

        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-value">{Math.round(analytics.weeklyAverage)} min</div>
            <div className="stat-label">Weekly Avg</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">{Math.round(analytics.monthlyAverage)} min</div>
            <div className="stat-label">Monthly Avg</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">{analytics.bestDay.minutes} min</div>
            <div className="stat-label">Peak Day</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">{analytics.worstDay.minutes} min</div>
            <div className="stat-label">Lowest Day</div>
          </div>
        </div>

        <div className="trend-section">
          <h3>Trend Analysis</h3>
          <div className={`trend-badge ${analytics.trend}`}>
            {analytics.trend === 'improving' && '🎉 Improving'}
            {analytics.trend === 'stable' && '😌 Stable'}
            {analytics.trend === 'worsening' && '⚠️ Worsening'}
          </div>
        </div>

        <div className="insights-section">
          <h3>💡 Insights</h3>
          <ul className="insights-list">
            {analytics.insights.map((insight, i) => (
              <li key={i}>{insight}</li>
            ))}
          </ul>
        </div>

        <div className="hourly-section">
          <h3>Hourly Usage Pattern</h3>
          <div className="hourly-chart">
            {analytics.hourlyUsage.slice(6, 24).map((h) => (
              <div key={h.hour} className="hour-bar">
                <div className="hour-label">{h.hour}:00</div>
                <div className="hour-bar-fill" style={{ height: `${Math.min(h.minutes * 3, 100)}%` }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Achievements Component
function AchievementsView({
  unlockedAchievements,
  achievementProgress,
  totalAchievements,
}: {
  unlockedAchievements: import('./types').Achievement[];
  achievementProgress: number;
  totalAchievements: number;
}) {
  const shareAchievements = () => {
    const text = `🏆 Digital Minimalist Achievements\n\n` +
      `Progress: ${achievementProgress}%\n` +
      `Badges Earned: ${unlockedAchievements.length} / ${totalAchievements}\n\n` +
      `Building a healthier relationship with my phone!\n\n` +
      `#DigitalMinimalist #Achievements #DigitalDetox`;

    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'width=600,height=400');
  };

  return (
    <div className="achievements">
      <div className="card achievements-card">
        <div className="card-header-with-action">
          <h2>🏆 Achievements</h2>
          <button className="share-btn-small" onClick={shareAchievements}>
            📤 Share
          </button>
        </div>

        <div className="achievement-progress">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${achievementProgress}%` }} />
          </div>
          <p className="progress-text">{unlockedAchievements.length} / {totalAchievements} Achieved</p>
        </div>

        <div className="achievements-grid">
          {ACHIEVEMENTS.map((achievement: import('./types').Achievement) => {
            const unlocked = unlockedAchievements.some(a => a.id === achievement.id);
            return (
              <div key={achievement.id} className={`achievement-item ${unlocked ? 'unlocked' : 'locked'}`}>
                <div className="achievement-icon">{unlocked ? achievement.icon : '🔒'}</div>
                <div className="achievement-info">
                  <div className="achievement-name">{achievement.name}</div>
                  <div className="achievement-description">{unlocked ? achievement.description : '???'}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Journal Component
function JournalView() {
  const [entries, setEntries] = useState<Array<{ date: string; mood: string; note: string }>>(() => {
    try {
      const saved = localStorage.getItem('digital_minimalist_journal');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [todayMood, setTodayMood] = useState('');
  const [todayNote, setTodayNote] = useState('');

  const today = new Date().toISOString().split('T')[0];
  const todayEntry = entries.find(e => e.date === today);

  useEffect(() => {
    if (todayEntry) {
      setTodayMood(todayEntry.mood);
      setTodayNote(todayEntry.note);
    }
  }, [todayEntry]);

  const saveEntry = () => {
    if (!todayMood) return;
    const newEntry = { date: today, mood: todayMood, note: todayNote };
    const updated = entries.filter(e => e.date !== today).concat(newEntry);
    setEntries(updated);
    localStorage.setItem('digital_minimalist_journal', JSON.stringify(updated));
  };

  const getWeeklySummary = () => {
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    const weekEntries = entries.filter(e => new Date(e.date) >= weekAgo);
    const moodCounts: Record<string, number> = {};
    weekEntries.forEach(e => {
      moodCounts[e.mood] = (moodCounts[e.mood] || 0) + 1;
    });
    const dominantMood = Object.entries(moodCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || '―';
    return { count: weekEntries.length, dominantMood };
  };

  const weekly = getWeeklySummary();

  const moodEmojis: Record<string, string> = {
    'great': '😊',
    'good': '🙂',
    'neutral': '😐',
    'bad': '😔',
    'terrible': '😫'
  };

  return (
    <div className="journal">
      <div className="card journal-card">
        <h2>📔 Reflection Journal</h2>
        <p className="journal-description">
          Record your daily mood and reflect on your phone usage
        </p>

        <div className="weekly-summary">
          <div className="summary-item">
            <span className="summary-label">This Week</span>
            <span className="summary-value">{weekly.count}</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Main Mood</span>
            <span className="summary-value">{moodEmojis[weekly.dominantMood] || weekly.dominantMood}</span>
          </div>
        </div>

        <div className="journal-entry">
          <h3>Today's Reflection</h3>
          <div className="mood-selector">
            <p>How are you feeling?</p>
            <div className="mood-options">
              {Object.entries(moodEmojis).map(([key, emoji]) => (
                <button
                  key={key}
                  className={`mood-btn ${todayMood === key ? 'selected' : ''}`}
                  onClick={() => setTodayMood(key)}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>
          <textarea
            className="journal-textarea"
            placeholder="Write your thoughts, feelings, and observations..."
            value={todayNote}
            onChange={(e) => setTodayNote(e.target.value)}
            rows={4}
          />
          <button className="save-journal-btn" onClick={saveEntry}>
            Save
          </button>
        </div>

        <div className="journal-history">
          <h3>History</h3>
          {entries.slice(-7).reverse().map((entry) => (
            <div key={entry.date} className="journal-entry-item">
              <div className="entry-date">{entry.date}</div>
              <div className="entry-mood">{moodEmojis[entry.mood]}</div>
              <div className="entry-note">{entry.note || '―'}</div>
            </div>
          ))}
          {entries.length === 0 && (
            <p className="no-entries">No entries yet</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
