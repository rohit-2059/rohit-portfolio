# Reusable Header Component

A flexible, customizable header component that you can use across different projects.

## 🚀 Features

- **Scroll-based navigation detection** - Blue dot follows active section
- **Smart scroll behavior** - Header shrinks/expands on scroll
- **Mobile responsive** - Adapts to different screen sizes
- **Fully customizable** - Colors, text, behavior
- **TypeScript support** - Full type safety
- **Smooth animations** - Professional transitions

## 📦 Installation

1. Copy `ReusableHeader.tsx` to your project
2. Install required dependencies:
   ```bash
   npm install framer-motion lucide-react
   ```
3. Make sure you have Tailwind CSS configured

## 🎯 Basic Usage

```tsx
import ReusableHeader from "./components/ReusableHeader";
import { Download, Home, User, Briefcase, Mail } from "lucide-react";

const App = () => {
  const navigationItems = [
    { id: "home", label: "Home", href: "#home" },
    { id: "about", label: "About", href: "#about" },
    { id: "services", label: "Services", href: "#services" },
    { id: "contact", label: "Contact", href: "#contact" },
  ];

  return (
    <div>
      <ReusableHeader
        brandText="MyBrand"
        navigationItems={navigationItems}
        actionButton={{
          label: "Download CV",
          href: "/cv.pdf",
          icon: <Download className="h-4 w-4" />,
          download: "MyCV.pdf",
        }}
      />
      {/* Your page content */}
    </div>
  );
};
```

## ⚙️ Configuration Options

### Basic Props

```tsx
interface ReusableHeaderProps {
  // Brand/Logo
  brandText?: string; // Default: "BRAND"
  brandHref?: string; // Default: "#"

  // Navigation (Required)
  navigationItems: NavigationItem[];

  // Optional action button
  actionButton?: {
    label: string;
    href: string;
    icon?: React.ReactNode;
    download?: boolean | string;
  };
}
```

### Styling Props

```tsx
{
  // Custom CSS classes
  className?: string;
  brandClassName?: string;
  navClassName?: string;
  actionButtonClassName?: string;

  // Color customization (Tailwind classes)
  primaryColor?: string;           // Default: "bg-blue-500"
  backgroundColor?: string;        // Default: "bg-background/80"
  textColor?: string;             // Default: "text-foreground"
  mutedTextColor?: string;        // Default: "text-muted-foreground"
}
```

### Behavior Props

```tsx
{
  // Scroll detection
  enableScrollDetection?: boolean;  // Default: true
  scrollOffset?: number;           // Default: 100

  // Scroll hide/show
  enableScrollHide?: boolean;      // Default: true
}
```

## 🎨 Customization Examples

### Different Brand Styles

```tsx
<ReusableHeader
  brandText="🚀 MyApp"
  brandClassName="text-gradient-to-r from-purple-500 to-pink-500"
  navigationItems={navItems}
/>
```

### Custom Colors

```tsx
<ReusableHeader
  navigationItems={navItems}
  primaryColor="bg-emerald-500"
  backgroundColor="bg-slate-900/90"
  textColor="text-white"
  mutedTextColor="text-gray-300"
/>
```

### Disable Scroll Features

```tsx
<ReusableHeader
  navigationItems={navItems}
  enableScrollDetection={false}
  enableScrollHide={false}
/>
```

### With Action Button

```tsx
<ReusableHeader
  navigationItems={navItems}
  actionButton={{
    label: "Get Started",
    href: "/signup",
    icon: <ArrowRight className="h-4 w-4" />,
  }}
/>
```

## 📋 Navigation Items Format

```tsx
const navigationItems = [
  {
    id: "section-id", // Must match HTML section id
    label: "Display Name", // Text shown in navigation
    href: "#section-id", // Link target
  },
  // ... more items
];
```

## 🔧 HTML Structure Required

For scroll detection to work, your sections need matching IDs:

```html
<section id="home">Home content</section>
<section id="about">About content</section>
<section id="services">Services content</section>
<section id="contact">Contact content</section>
```

## 🎯 Advanced Examples

### Portfolio Header

```tsx
const portfolioNav = [
  { id: "hero", label: "Home", href: "#hero" },
  { id: "about", label: "About", href: "#about" },
  { id: "portfolio", label: "Portfolio", href: "#portfolio" },
  { id: "contact", label: "Contact", href: "#contact" },
];

<ReusableHeader
  brandText="JD"
  navigationItems={portfolioNav}
  primaryColor="bg-purple-500"
  actionButton={{
    label: "Resume",
    href: "/resume.pdf",
    icon: <Download className="h-4 w-4" />,
    download: "JohnDoe_Resume.pdf",
  }}
/>;
```

### Business Website Header

```tsx
const businessNav = [
  { id: "home", label: "Home", href: "#home" },
  { id: "services", label: "Services", href: "#services" },
  { id: "about", label: "About Us", href: "#about" },
  { id: "testimonials", label: "Reviews", href: "#testimonials" },
  { id: "contact", label: "Contact", href: "#contact" },
];

<ReusableHeader
  brandText="BusinessCorp"
  navigationItems={businessNav}
  backgroundColor="bg-white/95"
  textColor="text-gray-900"
  mutedTextColor="text-gray-600"
  primaryColor="bg-blue-600"
  actionButton={{
    label: "Get Quote",
    href: "/quote",
    icon: <Mail className="h-4 w-4" />,
  }}
/>;
```

## 🚀 Pro Tips

1. **Section IDs**: Make sure your HTML sections have matching IDs
2. **Scroll Offset**: Adjust `scrollOffset` if your header height changes
3. **Mobile First**: Test on mobile devices for best UX
4. **Color Consistency**: Use your design system colors
5. **Performance**: The component uses `requestAnimationFrame` for smooth scrolling

## 🔄 Dependencies

- React 18+
- TypeScript (optional but recommended)
- Tailwind CSS
- Lucide React (for icons)

This component is production-ready and can be easily integrated into any React project! 🎉
