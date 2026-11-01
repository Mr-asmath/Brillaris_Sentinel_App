---
name: Sentinel Mobile
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#c2c6d8'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#8c90a1'
  outline-variant: '#424656'
  surface-tint: '#b3c5ff'
  primary: '#b3c5ff'
  on-primary: '#002b75'
  primary-container: '#0066ff'
  on-primary-container: '#f8f7ff'
  inverse-primary: '#0054d6'
  secondary: '#4edea3'
  on-secondary: '#003824'
  secondary-container: '#00a572'
  on-secondary-container: '#00311f'
  tertiary: '#ffb95f'
  on-tertiary: '#472a00'
  tertiary-container: '#a06500'
  on-tertiary-container: '#fff7f1'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dae1ff'
  primary-fixed-dim: '#b3c5ff'
  on-primary-fixed: '#001849'
  on-primary-fixed-variant: '#003fa4'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  headline-lg:
    fontFamily: Geist
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 17px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.03em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  margin-main: 1.25rem
  gutter-grid: 1rem
  touch-target-min: 44px
  stack-gap: 0.75rem
  container-padding: 1rem
---

## Brand & Style

This design system translates a high-stakes enterprise security aesthetic into a mobile-first environment for the iPhone 17. The brand personality is authoritative, vigilant, and high-fidelity. 

The design style is **Corporate Modern** with a lean toward **Tonal Minimalism**. It prioritizes rapid information density and clarity. The visual language uses deep neutrals and surgical primary accents to evoke a sense of "command and control." For mobile, the interface moves away from complex sidebars toward a focused, layered stack that emphasizes "glanceability" and high-precision interaction.

## Colors

The palette is optimized for OLED displays, utilizing a deep `neutral` (#0F172A) for the base background to reduce eye strain in low-light security environments.

- **Primary (#0066FF):** Used for "Action" states, primary navigation icons, and active security focus areas.
- **Secondary (#10B981):** Reserved strictly for "Secure" or "Online" status indicators.
- **Tertiary (#F59E0B):** Designated for "Warning" or "Pending Review" alerts.
- **Neutral:** A range of slate grays is used for surface elevations to provide contrast without losing the dark-mode aesthetic.

## Typography

The typography strategy for the iPhone 17 maximizes legibility while maintaining a technical edge. **Geist** provides a sharp, geometric feel for headlines. **Inter** is used for body text to ensure high readability during long periods of monitoring. **JetBrains Mono** is utilized for data points, timestamps, and status labels to reinforce the "Sentinel" security narrative.

All body text is set to a minimum of 15px to meet mobile accessibility standards. Headlines are tightened and reduced in size from desktop values to prevent awkward line breaks on the narrow 6.3"–6.9" display.

## Layout & Spacing

The layout utilizes a **4-column fluid grid** for mobile. The desktop sidebar is replaced by a **Fixed Bottom Navigation Bar** for primary architectural pillars, while secondary administrative actions are housed in a top-right "Overflow" or "Profile" sheet.

Key spacing rules:
- **Margins:** A consistent 20px (1.25rem) safe-area margin on the left and right.
- **Vertical Rhythm:** Elements are stacked using an 8px base unit. 
- **Touch Targets:** No interactive element (links, buttons, toggles) shall have a hit area smaller than 44x44px, regardless of the visual size of the icon.
- **Safe Areas:** Padding must account for the iPhone's Dynamic Island and the bottom home indicator gesture area.

## Elevation & Depth

In this design system, depth is communicated through **Tonal Layering** and **Subtle Outlines** rather than heavy shadows.

- **Level 0 (Background):** Deepest Neutral (#0F172A).
- **Level 1 (Cards/Modules):** One shade lighter than the background with a 1px border at 10% opacity.
- **Level 2 (Modals/Sheets):** Elevated via a 20px backdrop blur (Glassmorphism) and a subtle 0.5px white inner stroke to define the edge against the dark background.

Shadows, when used, are "Ambient Shadows": extremely low opacity (15%), large blur (24px), and slightly tinted with the primary color to suggest a glow from the screen.

## Shapes

The shape language reflects the industrial precision of the iPhone 17 hardware.
- **Components:** Standard buttons and input fields use a **0.5rem (8px)** corner radius.
- **Containers:** Large cards and bottom sheets use a **1rem (16px)** radius to echo the curvature of the device screen.
- **Status Indicators:** Icons and small badges remain sharp or use a minimal 2px radius to maintain a technical "utility" look.

## Components

### Buttons
- **Primary:** Solid Primary color, white text, 48px height for mobile accessibility.
- **Secondary:** Outlined with a 1px stroke, 44px height.
- **Ghost:** No background, Primary color text, reserved for less frequent actions.

### Navigation
- **Bottom Bar:** 4-5 icons max. Active state indicated by a Primary color tint and a subtle 4px top-indicator line.
- **Segmented Control:** Used for switching views (e.g., "Live" vs "Archive") with a sliding tonal background.

### Input Fields
- Filled style with a darker neutral background. 
- Labels are always visible using `label-md` (JetBrains Mono).
- Errors are shown via a 2px bottom border in `tertiary` color.

### Security Cards
- Information-dense. Use `label-sm` for metadata and `body-md` for primary status.
- Entire card is a hit target for drilling into details.

### Lists
- 64px minimum row height.
- Chevron-right icons for all navigable items.
- High-contrast separators (1px, 5% white).