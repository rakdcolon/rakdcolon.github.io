# Rohan Karamel Portfolio

A minimal, Apple-inspired portfolio website showcasing my work as a Machine Learning Engineer and AI Researcher. Built with Next.js 15, TypeScript, and Tailwind CSS.

## ✨ Features

- **Clean, minimal design** inspired by Apple's design philosophy
- **Responsive layout** that works on all devices
- **Smooth animations** and transitions
- **Apple-style typography** using system fonts
- **GitHub Pages deployment** ready
- **SEO optimized** with proper meta tags

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/rakdcolon/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and design system
│   ├── layout.tsx           # Root layout with SEO metadata
│   └── page.tsx            # Main page component
├── components/
│   ├── sections/           # Page sections
│   │   ├── Hero.tsx        # Hero section with introduction
│   │   ├── About.tsx       # About me and skills
│   │   ├── Experience.tsx  # Work experience
│   │   ├── Projects.tsx    # Featured projects
│   │   └── Contact.tsx     # Contact information
│   └── ui/
│       └── Navigation.tsx  # Navigation component
```

## 🎨 Design System

The portfolio uses a minimal, Apple-inspired design system with:

- **Colors**: Primarily black and white with blue accents (#007aff)
- **Typography**: Apple system fonts (-apple-system, BlinkMacSystemFont)
- **Spacing**: Consistent spacing scale
- **Animations**: Subtle, purposeful animations
- **Glass effects**: Modern backdrop-blur effects

## 🛠️ Technologies Used

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Deployment**: GitHub Pages

## 📱 Sections

1. **Hero** - Introduction with name, title, and social links
2. **About** - Background, education, and technical skills
3. **Experience** - Work experience at Rutgers and GE Aerospace
4. **Projects** - Featured projects including GPU Mandelbrot Renderer, JavaLM, and MyOperatingSystem
5. **Contact** - Contact information and social media links

## 🚀 Deployment

The site is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup GitHub Pages:

1. Go to your repository settings
2. Navigate to "Pages" section
3. Set source to "GitHub Actions"
4. Push to the main branch to trigger deployment

The site will be available at `https://rakdcolon.github.io`

## 📝 Customization

To customize for your own portfolio:

1. Update personal information in all components
2. Replace project details in `Projects.tsx`
3. Update experience information in `Experience.tsx`
4. Modify contact information in `Contact.tsx`
5. Update metadata in `layout.tsx`

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements, pull requests are welcome!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
