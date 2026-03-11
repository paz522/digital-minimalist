# 📱 Digital Minimalist

**Build a healthier relationship with your phone**

Digital Minimalist is a free web app that helps you reduce screen time and build healthier habits with your smartphone through usage tracking, focus mode, and achievement system.

![Digital Minimalist](https://via.placeholder.com/800x450/667eea/ffffff?text=Digital+Minimalist+Screenshot)

## ✨ Features

### 📊 Dashboard
- Track your daily screen time
- Set daily usage goals
- View 7-day usage trends
- Get personalized tips

### 🎯 Focus Mode
- Pomodoro timer (25-min focus + 5-min break)
- Customizable session lengths
- Notification alerts
- Track focus sessions

### 📈 Analytics
- Weekly and monthly averages
- Trend analysis (improving/stable/worsening)
- Hourly usage patterns
- Actionable insights

### 🏆 Achievements
- 8 unique badges to earn
- Track your progress
- Share achievements on social media

### 📔 Reflection Journal
- Daily mood tracking
- Weekly summaries
- Note your observations

### 📖 Articles
- Guides on digital detox
- Pomodoro technique tutorials
- Science-backed insights
- 7-day challenges

### ⚙️ Settings
- Customizable daily goals
- 7 beautiful themes (all free)
- Data export functionality

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/digital-minimalist.git
cd digital-minimalist

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: CSS3 with gradients and animations
- **State Management**: React Hooks
- **Data Persistence**: localStorage
- **SEO**: react-helmet-async

## 📁 Project Structure

```
digital-minimalist/
├── src/
│   ├── components/
│   │   ├── ArticlesView.tsx    # Article browser
│   │   └── MetaTags.tsx        # SEO meta tags
│   ├── data/
│   │   └── articles.ts         # Article content
│   ├── App.tsx                 # Main app component
│   ├── hooks.ts                # Custom React hooks
│   ├── types.ts                # TypeScript types
│   └── index.css               # Global styles
├── public/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── vercel.json
```

## 🎨 Available Themes

1. **Default** - Purple gradient
2. **Ocean** - Blue tones
3. **Sunset** - Orange warmth
4. **Forest** - Green nature
5. **Midnight** - Dark theme
6. **Sakura** - Pink cherry blossom
7. **Monochrome** - Gray scale

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔐 Privacy

Digital Minimalist stores all data locally in your browser using localStorage. No data is sent to external servers.

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For issues and feature requests, please create an issue on GitHub.

## 🙏 Acknowledgments

- Inspired by the Digital Minimalism movement
- Built with ❤️ for a healthier digital life

---

**Ready to start your digital minimalism journey?** [Try it now](https://digital-minimalist.app)
