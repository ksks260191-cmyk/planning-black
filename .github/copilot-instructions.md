# Copilot Instructions - Planning Pros Website

## Project Overview
This is a business website for Planning Pros, an IT staff augmentation service, built as a single-page React application with modern tooling (Vite + Tailwind CSS + shadcn/ui components).

## Architecture & Component Patterns

### Component Structure
- **Layout**: Single-page app with sections rendered in sequence from `App.jsx`
- **UI System**: shadcn/ui components in `src/components/ui/` using class-variance-authority (CVA) for variant patterns
- **Utility Pattern**: All components use `cn()` from `@/lib/utils.js` for conditional Tailwind classes

### Key Conventions
1. **Import Alias**: Use `@/` for all src imports (configured in `vite.config.js`)
2. **Component Props**: Follow shadcn/ui patterns - use `className` prop with `cn()` for style overrides
3. **Animation**: Framer Motion for all animations - use `motion.*` components with consistent spring configs
4. **Icons**: Lucide React icons exclusively
5. **Contact Integration**: WhatsApp integration pattern in multiple components with phone `+918076536172`

## Development Workflow

### Commands
- `npm run dev` - Development server (Vite)
- `npm run build` - Production build  
- `npm run preview` - Preview production build

### Styling Approach
- **CSS Variables**: Dark theme with CSS custom properties in `src/index.css` (`:root` section)
- **Background**: Fixed dark background `#18181b` in body
- **Utility Classes**: Custom utilities like `.gradient-text` and `.glass-effect` defined in `index.css`
- **Component Variants**: Use CVA pattern like in `button.jsx` for consistent variant APIs

## Business Logic Patterns

### Contact Actions
- **Phone Calls**: Use `tel:+918076536172` links
- **WhatsApp**: Format as `https://wa.me/+918076536172?text=${encodedMessage}`
- **Smooth Scrolling**: `element.scrollIntoView({ behavior: 'smooth' })` for section navigation

### State Management
- Local component state with useState/useEffect for UI interactions
- No global state management - components are self-contained
- Toast notifications via `@/components/ui/use-toast` hook

## File Patterns

### Component Files
- Export default function components
- Use React hooks for state/effects
- Import Button and other UI components from `@/components/ui/`
- Motion components for animations

### Adding New Sections
1. Create component in `src/components/`
2. Add to `App.jsx` component list
3. Follow existing patterns for scroll-triggered animations
4. Use consistent spacing classes (`py-16`, `px-4`, etc.)

### UI Component Extensions
- Extend shadcn/ui components by wrapping and adding custom variants
- Use CVA for new variant patterns
- Maintain consistent prop interfaces with existing components

## Integration Points
- **Helmet**: SEO metadata management
- **WhatsApp Business**: Fixed floating button + inline contact actions
- **Responsive Design**: Mobile-first Tailwind approach with responsive breakpoints
- **Performance**: Vite for fast builds, ES modules, dynamic imports ready