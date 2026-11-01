---
name: API Pulse Design System
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#3e4947'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#6e7977'
  outline-variant: '#bdc9c6'
  surface-tint: '#006a63'
  primary: '#005c55'
  on-primary: '#ffffff'
  primary-container: '#0f766e'
  on-primary-container: '#a3faef'
  inverse-primary: '#80d5cb'
  secondary: '#006b5f'
  on-secondary: '#ffffff'
  secondary-container: '#6df5e1'
  on-secondary-container: '#006f64'
  tertiary: '#005a66'
  on-tertiary: '#ffffff'
  tertiary-container: '#007484'
  on-tertiary-container: '#bef3ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#9cf2e8'
  primary-fixed-dim: '#80d5cb'
  on-primary-fixed: '#00201d'
  on-primary-fixed-variant: '#00504a'
  secondary-fixed: '#71f8e4'
  secondary-fixed-dim: '#4fdbc8'
  on-secondary-fixed: '#00201c'
  on-secondary-fixed-variant: '#005048'
  tertiary-fixed: '#a2eeff'
  tertiary-fixed-dim: '#2fd9f4'
  on-tertiary-fixed: '#001f25'
  on-tertiary-fixed-variant: '#004e5a'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  title-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.01em
  mono-md:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  container-max: 1440px
  gutter: 24px
  margin-page: 32px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 24px
---

## Brand & Style

The design system for this intelligent API monitoring platform is built on a foundation of **Technical Precision** and **High-Performance Clarity**. The brand personality is authoritative yet unobtrusive, designed to facilitate deep focus for developers and DevOps engineers managing complex infrastructure.

The visual style is a **Minimalist-Glassmorphic hybrid**. It borrows the rigorous structural integrity of high-end developer tools (Linear), the refined typographic hierarchy and subtle gradients of global fintech (Stripe), and the high-contrast, edge-to-edge precision of modern cloud platforms (Vercel). The aesthetic prioritizes data density without clutter, using semi-transparent layers and backdrop blurs to create a sense of organized depth.

## Colors

The palette is centered around a sophisticated range of teals and cyans, conveying a sense of "active pulse" and technological vitality. 

- **Primary & Secondary:** These teals represent the core brand and primary actions. They are used for high-emphasis buttons, active navigation states, and branding elements.
- **Accent (Cyan):** Reserved for data highlights, focus indicators, and subtle decorative gradients that guide the eye to critical API metrics.
- **Semantic States:** Success, Warning, and Error colors follow industry standards but are calibrated for high legibility against both white and deep slate backgrounds.
- **Surface Strategy:** In light mode, surfaces use a mix of pure white and subtle gray-200. In dark mode (implied for dashboard views), surfaces shift to a deep slate (`#0F172A`) to reduce eye strain during long monitoring sessions.

## Typography

The design system utilizes **Inter** as its primary typeface to ensure maximum legibility across dense data environments. The hierarchy is characterized by tight letter-spacing on larger headings to create a modern, "compact" feel.

- **Display & Headlines:** Use semi-bold and bold weights with negative letter-spacing.
- **Body Text:** Standardized at 14px for dashboards to allow for high data density, while 16px is used for documentation and marketing sections.
- **Monospace Integration:** While not the primary font, a secondary monospace font (JetBrains Mono) is used for API endpoints, JSON payloads, and log snippets to maintain a developer-centric feel.

## Layout & Spacing

This design system employs a **12-column fluid grid** for dashboard views and a **fixed-width centered container** for marketing and documentation pages. 

- **The 4px Rule:** All spacing (padding, margins, gaps) must be a multiple of 4px.
- **Dashboard Layout:** A persistent 240px left-sidebar is used for primary navigation. The main content area utilizes a fluid grid with 24px gutters to house glassmorphic metric cards.
- **Responsive Behavior:** On tablet, the sidebar collapses into a hamburger menu or icon-only rail. On mobile, cards stack vertically, and horizontal padding reduces to 16px.

## Elevation & Depth

Hierarchy is established through **Glassmorphism and Ambient Shadows** rather than heavy borders.

- **Glassmorphic Cards:** Primary containers use a semi-transparent background (e.g., `rgba(255, 255, 255, 0.7)` in light mode) with a 20px-40px backdrop-blur. 
- **Subtle Borders:** Each elevated card features a 1px solid border at 10% opacity of the neutral color to define its edges against the background.
- **Shadows:** Use extra-diffused "ambient" shadows. A typical card shadow would be `0 8px 32px rgba(0, 0, 0, 0.04)`.
- **Z-Index Tiers:** 
    - Layer 0: Page Background.
    - Layer 1: Glassmorphic Cards / Content Blocks.
    - Layer 2: Tooltips / Dropdowns.
    - Layer 3: Modals / Overlays.

## Shapes

The design system uses a **Rounded** shape language to soften the technical nature of the data.

- **Standard Elements:** 8px (`rounded-md`) for buttons, input fields, and small UI elements.
- **Large Containers:** 16px (`rounded-xl`) for cards, modals, and the main dashboard content containers.
- **Status Pills:** Fully rounded (pill-shaped) for status chips and tags to differentiate them from interactive buttons.

## Components

- **Buttons:** Primary buttons feature a subtle vertical gradient and a 1px inner light border on the top edge to create a "tactile" 3D effect.
- **Glassmorphism Cards:** Must include `backdrop-filter: blur(12px)` and a thin, low-contrast border.
- **Status Chips:** Use a "pulse" animation for "Live" or "Critical" statuses. These consist of a colored dot and a low-opacity background of the same hue.
- **Data Tables:** Row-based with no vertical borders. Hovering over a row should trigger a subtle background color change or a very slight elevation lift.
- **Input Fields:** Minimalist style with a 1px gray border that transitions to Primary Teal on focus. Use a subtle inner shadow to indicate "inset" depth.
- **Professional Charts:** Use the Accent (Cyan) and Secondary (Teal) colors for line and bar charts. Avoid heavy grid lines; use a maximum of 3-4 horizontal reference lines at low opacity.
- **Sidebar:** A dark, high-contrast sidebar or a very light, glass-tinted sidebar depending on the global mode, using 14px semi-bold Inter for navigation labels.