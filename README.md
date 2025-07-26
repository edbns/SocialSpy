# 🕵️ SocialSpy - AI-Powered Social Media Analytics

<div align="center">

![SocialSpy Logo](https://img.shields.io/badge/SocialSpy-AI%20Analytics-2e392e?style=for-the-badge&logo=analytics&logoColor=f8f6f4)

**Worldwide trending content analytics across multiple social media platforms**

[![Built with Vite](https://img.shields.io/badge/Built%20with-Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Powered by AI](https://img.shields.io/badge/Powered%20by-DeepSeek%20AI-00D4AA?style=flat-square&logo=openai&logoColor=white)](https://openrouter.ai/)
[![Netlify Status](https://img.shields.io/badge/Deploy-Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white)](https://www.netlify.com/)

</div>

## 🚀 Features

### Core Features
- **Worldwide Trending Content**: Real-time trending videos, posts, and content from multiple platforms
- **Multi-Platform Support**: YouTube, TikTok, Twitter, Instagram, Reddit (with more coming soon)
- **AI-Powered Insights**: DeepSeek AI integration for content analysis and trend predictions
- **Infinite Scroll**: Smooth loading of trending content with pagination
- **Advanced Analytics**: Comprehensive data collection and visualization
- **User Authentication**: Email OTP verification for account creation
- **Responsive Design**: Beautiful UI that works on all devices

### Data Collection
- **Public Profile Data**: Collect public profile information
- **Follower Analytics**: Track follower growth and engagement
- **Like & Engagement Metrics**: Monitor likes, comments, shares
- **Trend Analysis**: Analyze trending topics and hashtags
- **Shorts/Short-form Content**: Track short-form video performance
- **Demographics**: Audience demographic analysis
- **Sentiment Analysis**: AI-powered sentiment analysis
- **Geographic Data**: Location-based trending content

### AI Features
- **AI Chat Assistant**: Powered by DeepSeek via OpenRouter
- **Content Summaries**: AI-generated content insights
- **Trend Predictions**: Predictive analytics for upcoming trends
- **Sentiment Analysis**: Real-time sentiment tracking
- **Smart Recommendations**: Personalized content suggestions

### User Experience
- **Modern UI**: Clean design with smooth animations
- **Toast Notifications**: Real-time feedback and updates
- **Loading States**: Beautiful loading animations
- **Error Handling**: Graceful error handling with user-friendly messages

## 🎨 Design System

### Color Palette
- Primary and background color: `#f8f6f4`
- Secondary background: `#2e392e`
- Text, icons, buttons and everything else: `#2e392e`

### Typography
- **Titles**: EB Garamond (Google Fonts)
- **Body text**: Figtree (Google Fonts)

### Components
- Glass morphism effects
- Smooth animations with CSS transitions
- Responsive grid layouts
- Custom scrollbars

## 🛠️ Technology Stack

### Frontend
- **Vite**: Fast build tool and dev server
- **Vanilla JavaScript**: Modern JavaScript with ES6+ features
- **CSS3**: Advanced styling with custom properties
- **Font Awesome**: Icon library
- **Google Fonts**: Typography (EB Garamond, Figtree)

### AI & APIs
- **OpenRouter**: AI model access (DeepSeek R1 free models)
- **YouTube Data API**: Trending content
- **Reddit API**: Public JSON endpoints for trending content
- **Custom APIs**: Platform-specific data collection

### Development
- **ESLint**: Code linting
- **Prettier**: Code formatting
- **Netlify**: Deployment platform
- **Netlify Functions**: Serverless backend

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- YouTube Data API v3 key (optional)
- OpenRouter API key (for AI features)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/edbns/SocialSpy.git
   cd SocialSpy
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Copy the example environment file:
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your API keys:
   ```env
   # YouTube Data API v3 (optional)
   YOUTUBE_API_KEY=your_youtube_api_key_here
   
   # OpenRouter API for AI Features
   OPENROUTER_API_KEY=your_openrouter_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🔑 API Keys Setup

### YouTube Data API v3 (Optional)
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable YouTube Data API v3
4. Create credentials (API key)
5. Add the key to your `.env` file

### OpenRouter (Required for AI Chat)
1. Visit [OpenRouter](https://openrouter.ai/)
2. Sign up for a free account
3. Get your API key from the dashboard
4. Add the key to your `.env` file

**Note**: SocialSpy uses free DeepSeek models that don't require credits.

## 📱 Usage

### Getting Started
1. **Browse Trending Content**: View worldwide trending content on the home page
2. **Filter by Platform**: Use the sidebar to filter by YouTube, TikTok, Reddit, etc.
3. **Search Content**: Use the search bar to find specific content
4. **AI Chat**: Click the AI Chat button for insights and analysis
5. **Create Account**: Sign up for personalized features

### Features Overview

#### Trending Content
- Infinite scroll through trending items
- Platform-specific filtering
- Real-time refresh
- Share and like functionality

#### Analytics
- Engagement metrics
- Platform distribution
- Performance insights
- Data visualization

#### AI Insights
- Trend analysis
- Sentiment analysis
- Predictions
- AI-powered recommendations

#### Settings
- Account management
- Data source configuration
- Privacy settings
- API key management

## 🌐 Platform Support

- ✅ **YouTube**: Full API integration with video metadata
- ✅ **Reddit**: Public JSON API for trending posts
- 🚧 **TikTok**: Basic integration (expanding)
- 🚧 **Twitter/X**: Basic integration (expanding)
- 🚧 **Instagram**: Basic integration (expanding)
- 📋 **Facebook**: Planned
- 📋 **LinkedIn**: Planned
- 📋 **Snapchat**: Planned

*Use the toggle in the UI to disable platforms where data isn't working.*

## 🚀 Deployment

### Netlify (Recommended)

1. **Fork this repository**

2. **Connect to Netlify**
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Select your forked repository

3. **Configure build settings**
   - Build command: `npm run build`
   - Publish directory: `dist`

4. **Add environment variables**
   In Netlify dashboard, go to Site Settings > Environment Variables and add:
   - `YOUTUBE_API_KEY`
   - `OPENROUTER_API_KEY`

5. **Deploy**
   Click "Deploy site"

### Other Platforms

The application can be deployed to any static hosting service:
- Vercel
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [DeepSeek AI](https://deepseek.com/) for powerful AI models
- [OpenRouter](https://openrouter.ai/) for AI API access
- [Font Awesome](https://fontawesome.com/) for icons
- [Google Fonts](https://fonts.google.com/) for typography
- [Vite](https://vitejs.dev/) for build tooling

## 📞 Support

For support, please open an issue on GitHub or contact the development team.

---

<div align="center">
Made with ❤️ by the SocialSpy Team
</div> 