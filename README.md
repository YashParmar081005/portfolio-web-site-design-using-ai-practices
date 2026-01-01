# Next.js Portfolio Website

A professional, animated portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- ✨ **Modern Design** - Clean, professional UI with smooth animations
- 📱 **Responsive** - Fully responsive design for all devices
- 🎨 **Animated** - Smooth animations using Framer Motion
- 🚀 **Fast** - Built with Next.js 14 for optimal performance
- 💼 **Four Sections**:
  - **Home** - Hero section with animated background and call-to-action buttons
  - **About** - Personal information and statistics
  - **Skills** - Interactive skill bars with progress animations
  - **Contact** - Working contact form with validation

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Update Personal Information

1. **About Section**: Edit `components/About.tsx` to update your personal info
2. **Skills**: Modify the skills array in `components/Skills.tsx`
3. **Contact**: Update contact information in `components/Contact.tsx`
4. **Social Links**: Edit the social links in `components/Footer.tsx`
5. **Metadata**: Update site metadata in `app/layout.tsx`

### Colors and Styling

- Edit `tailwind.config.js` to customize color scheme
- Modify `app/globals.css` for global styles
- Each component uses Tailwind CSS classes for easy customization

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with navbar and footer
│   ├── page.tsx        # Main page with all sections
│   └── globals.css     # Global styles
├── components/
│   ├── Navbar.tsx      # Navigation bar
│   ├── Footer.tsx      # Footer with social links
│   ├── Home.tsx        # Home/Hero section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills section
│   └── Contact.tsx     # Contact form section
└── public/             # Static assets
```

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Icons** - Icon library
- **React Intersection Observer** - Scroll animations

## Build for Production

```bash
npm run build
npm start
```

## License

MIT License - feel free to use this portfolio for your own projects!


# portfolio-web-site-design-using-ai-practices
