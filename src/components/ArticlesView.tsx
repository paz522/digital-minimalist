import { useState, useEffect } from 'react';
import { ARTICLES, Article, getArticlesByCategory } from '../data/articles';

type Category = Article['category'] | 'all';

export function ArticlesView() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Make app full-width when viewing an article
  useEffect(() => {
    const appElement = document.querySelector('.app');
    if (selectedArticle) {
      appElement?.classList.add('full-width');
    } else {
      appElement?.classList.remove('full-width');
    }
    return () => {
      appElement?.classList.remove('full-width');
    };
  }, [selectedArticle]);

  const filteredArticles = selectedCategory === 'all'
    ? ARTICLES.filter(a =>
        a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.summary.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : getArticlesByCategory(selectedCategory).filter(a =>
        a.title.toLowerCase().includes(searchQuery.toLowerCase())
      );

  const categories: { id: Category; label: string; icon: string; count: number }[] = [
    { id: 'all', label: 'All', icon: '📚', count: ARTICLES.length },
    { id: 'guide', label: 'Guides', icon: '📘', count: getArticlesByCategory('guide').length },
    { id: 'science', label: 'Science', icon: '🔬', count: getArticlesByCategory('science').length },
    { id: 'challenge', label: 'Challenges', icon: '🎯', count: getArticlesByCategory('challenge').length },
  ];

  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.article-body');
      if (element) {
        const scrollTop = element.scrollTop;
        const scrollHeight = element.scrollHeight - element.clientHeight;
        const progress = (scrollTop / scrollHeight) * 100;
        setScrollProgress(progress);
      }
    };

    const element = document.querySelector('.article-body');
    if (element) {
      element.addEventListener('scroll', handleScroll);
      return () => element.removeEventListener('scroll', handleScroll);
    }
  }, [selectedArticle]);

  if (selectedArticle) {
    return (
      <ArticleDetail
        article={selectedArticle}
        onBack={() => setSelectedArticle(null)}
        scrollProgress={scrollProgress}
      />
    );
  }

  return (
    <div className="articles">
      <div className="card articles-card">
        <h2>📖 Help & Tips</h2>
        <p className="articles-description">
          Read articles about digital minimalism
        </p>

        {/* Search Box */}
        <div className="search-box">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>

        {/* Category Filter */}
        <div className="category-filter">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.icon} {cat.label} <span className="category-count">({cat.count})</span>
            </button>
          ))}
        </div>

        {/* Article Grid */}
        <div className="articles-grid">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className="article-grid-card"
              onClick={() => setSelectedArticle(article)}
            >
              <div className="article-grid-icon">{article.icon}</div>
              <div className="article-grid-content">
                <div className="article-grid-category">{getCategoryLabel(article.category)}</div>
                <h3>{article.title}</h3>
                <p className="article-grid-summary">{article.summary}</p>
                <div className="article-grid-meta">
                  <span className="article-grid-read-time">📅 {article.readTime} min</span>
                  <span className="article-grid-keypoints">💡 {article.keypoints.length} points</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <p className="no-articles">No articles found</p>
        )}
      </div>
    </div>
  );
}

function ArticleDetail({
  article,
  onBack,
  scrollProgress
}: {
  article: Article;
  onBack: () => void;
  scrollProgress: number;
}) {
  const [showToc, setShowToc] = useState(false);

  // Generate table of contents
  const headings = article.content
    .split('\n')
    .filter(line => line.startsWith('## ') || line.startsWith('### '))
    .map((line, i) => ({
      text: line.replace(/^##+ /, ''),
      level: line.startsWith('### ') ? 2 : 1,
      id: `heading-${i}`
    }));

  return (
    <div className="article-detail">
      {/* Progress Bar */}
      <div className="reading-progress-bar">
        <div
          className="reading-progress-fill"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="card article-detail-card">
        <div className="article-detail-header">
          <button className="back-btn" onClick={onBack}>
            ← Back
          </button>
          <button
            className={`toc-btn ${showToc ? 'active' : ''}`}
            onClick={() => setShowToc(!showToc)}
          >
            📑 Contents
          </button>
        </div>

        {/* Table of Contents Modal */}
        {showToc && (
          <div className="toc-modal">
            <div className="toc-list">
              {headings.map((heading, i) => (
                <a
                  key={i}
                  href={`#${heading.id}`}
                  className={`toc-item level-${heading.level}`}
                  onClick={() => setShowToc(false)}
                >
                  {heading.text}
                </a>
              ))}
            </div>
          </div>
        )}

        <div className="article-header">
          <div className="article-icon-large">{article.icon}</div>
          <div className="article-category-badge">{getCategoryLabel(article.category)}</div>
          <h1>{article.title}</h1>
          <p className="article-summary">{article.summary}</p>
          <div className="article-meta-large">
            <span className="article-read-time">📅 About {article.readTime} min read</span>
            <span className="article-keypoints">💡 {article.keypoints.length} points</span>
          </div>
        </div>

        {/* Key Points */}
        <div className="keypoints-section">
          <h3>Key Points</h3>
          <ul className="keypoints-list">
            {article.keypoints.map((point, i) => (
              <li key={i} className="keypoint-item">
                <span className="keypoint-number">{i + 1}</span>
                <span className="keypoint-text">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Article Body */}
        <div className="article-body">
          {article.content.split('\n').map((line, i) => {
            if (line.startsWith('# ')) {
              return null; // Title already displayed
            }
            if (line.startsWith('## ')) {
              return <h2 key={i} id={`heading-${i}`}>{line.slice(2)}</h2>;
            }
            if (line.startsWith('### ')) {
              return <h3 key={i} id={`heading-${i}`}>{line.slice(3)}</h3>;
            }
            if (line.startsWith('#### ')) {
              return <h4 key={i}>{line.slice(4)}</h4>;
            }
            if (line.startsWith('- **')) {
              const match = line.match(/- \*\*(.+?)\*\*: (.+)/);
              if (match) {
                return (
                  <div key={i} className="list-item">
                    <span className="list-bullet">•</span>
                    <div>
                      <strong>{match[1]}</strong>: {match[2]}
                    </div>
                  </div>
                );
              }
            }
            if (line.startsWith('- ')) {
              return (
                <div key={i} className="list-item">
                  <span className="list-bullet">•</span>
                  <span>{line.slice(2)}</span>
                </div>
              );
            }
            if (line.startsWith('|')) {
              // Skip table rows
              return null;
            }
            if (line.trim() === '') {
              return <br key={i} />;
            }
            return <p key={i}>{line}</p>;
          })}
        </div>

        {/* Next Action */}
        <div className="next-action-section">
          <h3>🎯 Next Action</h3>
          <p>Put what you learned from this article into practice.</p>
          <button className="action-btn" onClick={onBack}>
            Back to App
          </button>
        </div>

        <button className="back-btn bottom" onClick={onBack}>
          ← Back to Articles
        </button>
      </div>
    </div>
  );
}

function getCategoryLabel(category: Article['category']): string {
  const labels: Record<Article['category'], string> = {
    guide: 'Guide',
    tips: 'Tips',
    science: 'Science',
    challenge: 'Challenge',
  };
  return labels[category];
}
