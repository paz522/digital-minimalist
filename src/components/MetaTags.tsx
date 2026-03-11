import { Helmet } from 'react-helmet-async';

interface MetaTagsProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export function MetaTags({
  title = 'Digital Minimalist - Screen Time Manager',
  description = 'Build a healthier relationship with your phone. Achieve digital well-being through usage tracking, focus mode, and achievements.',
  image = '/ogp.png',
  url = 'https://digital-minimalist.app',
}: MetaTagsProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Favicon */}
      <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>📱</text></svg>" />
    </Helmet>
  );
}

// Page Meta Tags
export const PageMeta = {
  dashboard: {
    title: 'Dashboard - Digital Minimalist',
    description: 'Check your daily screen time and goal progress. Understand your usage patterns with the 7-day trend graph.',
  },
  focus: {
    title: 'Focus Mode - Digital Minimalist',
    description: 'Maximize your focus with the Pomodoro timer. Put your phone aside and concentrate on your task.',
  },
  analytics: {
    title: 'Analytics - Digital Minimalist',
    description: 'Weekly and monthly usage analysis with trend insights. Visualize your hourly usage patterns.',
  },
  journal: {
    title: 'Journal - Digital Minimalist',
    description: 'Record your daily mood and reflect on your phone usage. Track your growth with weekly summaries.',
  },
  achievements: {
    title: 'Achievements - Digital Minimalist',
    description: 'Earn badges and progress on your digital minimalism journey. We celebrate your consistency.',
  },
  settings: {
    title: 'Settings - Digital Minimalist',
    description: 'Set daily usage goals, change themes, and export data. Customize to your preferences.',
  },
};
