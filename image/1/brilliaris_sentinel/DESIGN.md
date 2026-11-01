---
name: Brilliaris Sentinel
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#45464d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#0058be'
  on-secondary: '#ffffff'
  secondary-container: '#2170e4'
  on-secondary-container: '#fefcff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#0b1c30'
  on-tertiary-container: '#75859d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#d3e4fe'
  tertiary-fixed-dim: '#b7c8e1'
  on-tertiary-fixed: '#0b1c30'
  on-tertiary-fixed-variant: '#38485d'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: IBM Plex Sans
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: IBM Plex Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: IBM Plex Sans
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style
The design system embodies a high-fidelity, enterprise-grade aesthetic focused on precision, security, and elite performance. It targets a sophisticated audience within the technology and finance sectors, where clarity and reliability are paramount.

The design style is **Corporate / Modern** with a slight lean toward **Minimalism**. It prioritizes heavy whitespace to manage information density, utilizing subtle structural lines and a restricted color palette to maintain a premium feel. The visual narrative is one of "The Sentinel"—an ever-watchful, calm, and highly organized presence that simplifies complex data into actionable intelligence.

## Colors
The palette is rooted in a "Deep Slate" primary tone, providing a foundation of authority and stability. The secondary "Sentinel Blue" serves as a high-contrast action color, used sparingly for primary calls-to-action and critical status indicators.

- **Primary:** Deep Slate (#0F172A) - Used for headers, primary text, and grounding elements.
- **Secondary:** Sentinel Blue (#3B82F6) - Used for primary buttons, active states, and brand highlights.
- **Tertiary:** Muted Slate (#64748B) - Used for secondary text, icons, and supporting UI elements.
- **Neutral:** Cloud White (#F8FAFC) - Used for page backgrounds and subtle surface layering.
- **Success/Error:** Standard semantic greens and reds are desaturated to match the professional tone of the system.

## Typography
The typography strategy utilizes a tri-font system to delineate hierarchy and function. 

**IBM Plex Sans** is the voice of the brand, used for headings to convey a systematic, engineered feel. **Inter** is used for all body copy and interface elements to ensure maximum legibility and a neutral, functional tone. **JetBrains Mono** is reserved for technical metadata, labels, and data points, reinforcing the "Sentinel" aspect of monitoring and precision.

All headings should use a tighter letter-spacing to maintain a compact, authoritative appearance, while labels use expanded tracking for clarity at small sizes.

## Layout & Spacing
The design system employs a **Fixed Grid** philosophy for desktop to maintain a controlled, editorial-like structure, transitioning to a fluid model for mobile devices.

- **Grid:** A 12-column grid system with 24px gutters. Elements should align strictly to these columns to evoke a sense of architectural order.
- **Rhythm:** An 8px linear scale (with 4px increments for micro-adjustments) governs all padding and margins.
- **Breakpoints:**
  - **Mobile:** < 600px (4 columns, 16px margins)
  - **Tablet:** 600px - 1024px (8 columns, 24px margins)
  - **Desktop:** > 1024px (12 columns, 40px margins, 1280px max-width)

## Elevation & Depth
Elevation is handled through **Tonal Layers** supplemented by **Low-contrast outlines**. This system avoids heavy shadows to maintain a modern, flat-plus aesthetic.

1.  **Level 0 (Surface):** The default background color.
2.  **Level 1 (Sub-surface):** Used for input fields and wells, using a slightly darker or lighter tint than the background.
3.  **Level 2 (Raised):** Used for cards and navigation bars. These feature a 1px border (#E2E8F0) and an extremely soft, 2% opacity ambient shadow.
4.  **Level 3 (Overlay):** Used for modals and dropdowns. These use a more distinct shadow (12px blur, 10% opacity) and a backdrop blur of 8px to focus the user's attention.

## Shapes
The shape language is **Soft**, utilizing small border radii to take the edge off the "industrial" typography without becoming overly playful. 

A consistent 4px (`0.25rem`) radius is applied to standard components like buttons and inputs. Larger containers like cards use 8px (`0.5rem`). This geometric precision supports the professional narrative of the design system.

## Components
- **Buttons:** Primary buttons are solid Deep Slate or Sentinel Blue with white text. Secondary buttons are outlined with a 1px slate border. Text is always centered and uses `body-sm` weight bold.
- **Input Fields:** Fields use a 1px border in Muted Slate. On focus, the border transitions to Sentinel Blue with a subtle 2px outer glow.
- **Cards:** Cards are white with a 1px border (#E2E8F0). They do not use shadows unless they are interactive (hover state).
- **Chips/Tags:** Used for status. They utilize a desaturated background of the semantic color with high-contrast text (e.g., a pale green background with dark green text for "Success").
- **Lists:** Data lists should use JetBrains Mono for numeric values to ensure tabular alignment. 
- **Data Tables:** High-density tables are a core component. Rows should have a subtle hover highlight (#F1F5F9) and clear vertical alignment.