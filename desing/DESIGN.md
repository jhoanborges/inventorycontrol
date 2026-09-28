---
version: alpha
name: Ploomes CRM
description: >-
  Enterprise CRM platform for Latin America, centralizing customer journeys, sales automation, and proposal generation
  with a vibrant, modern interface.
logo:
  src: >-
    https://cdn.prod.website-files.com/61afa420e611dbd8b4a5856e/66e351ab19f3e5caa4c1c3aa_d06014be19b980db3251612fdd26fbe0_logo_ploomes_versao_principal.svg
colors:
  surface: '#ffffff'
  surface-dim: '#f4f4f4'
  surface-bright: '#ffffff'
  surface-container-lowest: '#f4f4f4'
  surface-container-low: '#ebe5ff'
  surface-container: '#e9ecef'
  surface-container-high: '#dcd3ff'
  surface-container-highest: '#c6afff'
  on-surface: '#161616'
  on-surface-variant: '#525252'
  inverse-surface: '#1e0c45'
  inverse-on-surface: '#f5f1ff'
  outline: '#8d8d8d'
  outline-variant: '#c6c6c6'
  surface-tint: '#843cff'
  primary: '#843cff'
  on-primary: '#ffffff'
  primary-container: '#ebe5ff'
  on-primary-container: '#1e0c45'
  inverse-primary: '#c6afff'
  secondary: '#5211a1'
  on-secondary: '#ffffff'
  secondary-container: '#dcd3ff'
  on-secondary-container: '#1e0c45'
  tertiary: '#225cd6'
  on-tertiary: '#ffffff'
  tertiary-container: '#68b7f9'
  on-tertiary-container: '#001d3d'
  error: '#ffb4ab'
  on-error: '#ffffff'
  error-container: '#ffdddd'
  on-error-container: '#8b0000'
  primary-fixed: '#ebe5ff'
  primary-fixed-dim: '#dcd3ff'
  on-primary-fixed: '#1e0c45'
  on-primary-fixed-variant: '#5211a1'
  secondary-fixed: '#dcd3ff'
  secondary-fixed-dim: '#c6afff'
  on-secondary-fixed: '#1e0c45'
  on-secondary-fixed-variant: '#5211a1'
  tertiary-fixed: '#68b7f9'
  tertiary-fixed-dim: '#225cd6'
  on-tertiary-fixed: '#001d3d'
  on-tertiary-fixed-variant: '#003d82'
  background: '#ffffff'
  on-background: '#161616'
  surface-variant: '#e0e0e0'
typography:
  display:
    fontFamily: Manrope
    fontSize: 60px
    fontWeight: '700'
    lineHeight: 68px
    letterSpacing: '-0.04em'
  headline-lg:
    fontFamily: Manrope
    fontSize: 54px
    fontWeight: '600'
    lineHeight: 64px
    letterSpacing: '-0.02em'
  headline-md:
    fontFamily: Manrope
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: '-0.01em'
  title-lg:
    fontFamily: Manrope
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: 0em
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0em
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  label-md:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 4px
  DEFAULT: 8px
  md: 12px
  lg: 16px
  xl: 20px
  full: 9999px
spacing:
  unit: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 40px
  xl: 64px
  gutter: 24px
  container-max: 1280px
elevation:
  sm: 0 1px 2px rgba(0, 0, 0, 0.06)
  md: 0 3px 8px rgba(0, 0, 0, 0.15)
  lg: 1px 8px 20px 5px rgba(130, 68, 152, 0.1)
layout:
  containerMaxWidth: 1280px
  gridColumns: 12
components:
  button-primary:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-primary}'
    typography: '{typography.label-md}'
    rounded: '{rounded.lg}'
    padding: 16px 24px
    height: 48px
    fontWeight: '700'
  button-primary-hover:
    backgroundColor: '#7714eb'
    textColor: '{colors.on-primary}'
    boxShadow: 0 3px 8px rgba(132, 60, 255, 0.25)
  button-primary-active:
    backgroundColor: '#5211a1'
    textColor: '{colors.on-primary}'
  button-secondary:
    backgroundColor: transparent
    textColor: '{colors.primary}'
    typography: '{typography.label-md}'
    rounded: '{rounded.lg}'
    padding: 16px 24px
    height: 48px
    border: 2px solid {colors.primary}
  button-secondary-hover:
    backgroundColor: '{colors.primary-container}'
    textColor: '{colors.on-primary-container}'
  badge-new:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-primary}'
    typography: '{typography.label-sm}'
    rounded: '{rounded.full}'
    padding: 4px 12px
    fontWeight: '600'
  card:
    backgroundColor: '{colors.surface}'
    rounded: '{rounded.lg}'
    padding: '{spacing.md}'
    boxShadow: '{elevation.md}'
    border: 1px solid {colors.outline-variant}
  card-hover:
    backgroundColor: '{colors.surface-container-low}'
    boxShadow: '{elevation.lg}'
  input-field:
    backgroundColor: rgba(0, 0, 0, 0)
    textColor: '{colors.on-surface}'
    typography: '{typography.body-md}'
    rounded: '{rounded.DEFAULT}'
    padding: 8px 12px
    border: 1px solid {colors.outline-variant}
    height: 40px
  input-field-focus:
    borderColor: '{colors.primary}'
    boxShadow: 0 0 0 3px rgba(132, 60, 255, 0.1)
  list-item:
    backgroundColor: transparent
    rounded: '{rounded.md}'
    padding: '{spacing.sm}'
    typography: '{typography.body-md}'
  list-item-hover:
    backgroundColor: '{colors.surface-container-high}'
    textColor: '{colors.primary}'
---

## Overview

Ploomes is Latin America's leading enterprise CRM platform, designed for mid-market and enterprise sales teams who demand both sophistication and velocity. The brand embodies "Vibrant Minimalism"—a design philosophy that pairs a clean, purposeful interface with bold purple accents (#843cff) that signal energy, innovation, and trust. The aesthetic is contemporary yet grounded: geometric organic shapes (curved wave elements in the hero) provide visual warmth, while the typography (Manrope at 600–700 weight) conveys confidence and clarity. The UI evokes a sense of control and possibility—users feel empowered to orchestrate complex sales processes without cognitive overload.

The voice is direct, professional, and optimistic. Ploomes speaks to sales leaders and operations teams in Portuguese-first, with language that is precise, action-oriented, and free of jargon. Tone examples: "Gere propostas em minutos" (Generate proposals in minutes) and "Venda de forma mais segura" (Sell more securely). The brand avoids breathlessness; instead, it grounds claims in concrete outcomes (e.g., "redução do tempo de fechamento de 64–90 dias para 25–30 dias"). Personality: pragmatic, ambitious, and deeply customer-centric.

## Colors

The color system is anchored in a vibrant purple primary (#843cff), which appears on all primary CTAs, focus states, and brand-critical interactive elements. This purple is derived from the brand's heritage and is used consistently across web, mobile, and marketing collateral. The secondary accent is a deeper purple (#5211a1), reserved for hover states, secondary buttons, and container backgrounds that need visual hierarchy without competing for attention. The tertiary color (#225cd6, a professional blue) is used sparingly for informational elements, links, and status indicators.

The surface stack is anchored in pure white (#ffffff) for the main canvas, with a light purple tint (#ebe5ff) for elevated containers and cards. Neutral grays (#525252 for body text, #8d8d8d for secondary text, #

## Typography

The type system uses Manrope, a geometric sans-serif from Google Fonts, across all scales. Manrope's humanist letterforms and generous spacing create warmth without sacrificing professionalism—critical for a B2B platform that must feel both approachable and authoritative. The hierarchy is built on weight and size: Display (60px, 700) and Headline-lg (54px, 600) are reserved for page titles and hero statements; Headline-md (40px, 600) and Title-lg (28px, 600) structure section breaks and card titles. Body-lg (18px, 400) and Body-md (16px, 400) carry narrative content and descriptions, with generous line-height (28px and 24px respectively) to ease scanning. Label-md (14px, 600) and Label-sm (12px, 500) are used for buttons, form labels, and UI chrome. Letter-spacing is tightened on display s

## Layout

The page layout uses a 12-column grid with a max-width of 1280px, centered on the viewport. The gutter is 24px between columns, and the outer margin (from viewport edge to container edge) is also 24px on desktop, reducing to 16px on tablet and 12px on mobile. The spacing scale is semantic: lg (40px) is used for section separation (e.g., between hero and features), md (24px) for component padding and card spacing, sm (12px) for internal element spacing, and xs (4px) for micro-interactions. The hero section uses full-width background with centered content; subsequent sections alternate between full-width backgrounds (e.g., light purple for testimonials) and contained content blocks. White-space is generous—sections are separated by at least 40px of vertical space—to prevent cognitive fatigue

## Elevation & Depth

Depth is conveyed through subtle shadows and layering rather than color shifts. The elevation system has three levels: Level 1 (Base) uses no shadow; Level 2 (Standard Card) applies box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15), creating a soft, diffused shadow that suggests the card is slightly raised. Level 3 (Elevated/Modal) uses box-shadow: 1px 8px 20px 5px rgba(130, 68, 152, 0.1), a larger, more diffuse shadow with a purple tint that reinforces the brand. Hover states on cards transition the shadow from Level 2 to Level 3 over 200ms, signaling interactivity. Buttons do not use shadows in thei

## Shapes

The shape philosophy is "Soft-Technical"—rounded corners are used to soften the interface without sacrificing precision or professionalism. Buttons use 16px radius (lg), creating a pill-like appearance that feels modern and approachable; this radius is applied consistently across all button variants (primary, secondary, ghost). Cards and containers use 12px radius (md), a middle ground that suggests structure without rigidity. Input fields and form elements use 8px radius (DEFAULT), a tighter radius that emphasizes their functional role. Badges and small UI elements use full (9999px) radius fo

## Components

### Action Elements
Buttons are the primary interaction mechanism. Primary buttons (button-primary) use the brand purple (#843cff) background with white text, 16px rounded corners, and 16px vertical / 24px horizontal padding, resulting in a 48px height. The label uses label-md typography (14px, 600 weight). On hover, the background shifts to #7714eb (a darker purple) and a subtle shadow (0 3px 8px rgba(132, 60, 255, 0.25)) appears, with a 150ms transition. On active/pressed, the background becomes #5211a1 (secondary), maintaining the white text. Secondary buttons (button-secondary) use a transparent background with a 2px primary-colored border, the same padding and height, and the same text color as the primary background. On hover, the background fills with the primary-container color (#e

## Do's and Don'ts

**Do**
- Do use the primary purple (#843cff) exclusively on CTAs and interactive focus states—never on passive elements or backgrounds.
- Do maintain 40px vertical spacing between major sections to prevent cognitive overload in data-heavy contexts.
- Do apply Manrope at 600–700 weight for all headings to convey confidence and clarity; never use lighter weights for titles.
- Do use the full rounded radius (9999px) only on badges and small UI elements; reserve 12–16px for cards and buttons.
- Do include a 150–200ms transition on hover states for buttons and cards to signal interactivity without jarring the user.

**Don't**
- Don't use the secondary purple (#5211a1) or tertiary blue (#225cd6) as primary CTAs—they are supporting accents only.
- Don't apply shadows to input fields or form elements; use border-color and focus-ring instead to maintain clarity.
- Don't mix Manrope with other typefaces in the same hierarchy level; consistency is critical for a B2B platform.
- Don't reduce padding below 12px (sm) on cards or containers; white-space is essential for scannability.
- Don't use color alone to convey status or error states; always pair color with text labels or icons for accessibility.
