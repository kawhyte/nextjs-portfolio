# 8-Point Spacing System

## Overview
This project implements a comprehensive 8-point spacing system following Atlassian Design System principles and inspired by Material Design 3 and Mailchimp's visual hierarchy.

## Spacing Scale

### Base Unit: 8px

| Token    | Value | Usage                    |
|----------|-------|--------------------------|
| space-025| 2px   | Fine details, borders    |
| space-050| 4px   | Icon spacing            |
| space-100| 8px   | Micro spacing           |
| space-150| 12px  | Button padding          |
| space-200| 16px  | Small spacing           |
| space-300| 24px  | Medium spacing          |
| space-400| 32px  | Large spacing           |
| space-500| 40px  | Section margins         |
| space-600| 48px  | Component separation    |
| space-800| 64px  | Major spacing           |
| space-1000| 80px | Page sections          |
| space-1200| 96px | Large sections         |
| space-1600| 128px| Hero/macro spacing     |

## Typography Line Heights (8px aligned)

| Utility         | Line Height | Usage              |
|----------------|-------------|-------------------|
| leading-tight-8 | 16px       | Small text        |
| leading-normal-8| 24px       | Body text         |
| leading-relaxed-8| 32px      | Large text        |
| leading-loose-8 | 40px       | Headings          |
| leading-extra-8 | 48px       | Large headings    |
| leading-mega-8  | 56px       | Hero text         |

## Usage Guidelines

### Component Spacing
```css
/* Card components */
.card {
  padding: theme('spacing.300'); /* 24px */
  gap: theme('spacing.200');     /* 16px */
}

/* Grid systems */
.grid {
  gap: theme('spacing.300');     /* 24px */
}
```

### Responsive Spacing
```css
/* Mobile-first approach */
.section {
  padding: theme('spacing.400');  /* 32px mobile */
}

@media (min-width: 768px) {
  .section {
    padding: theme('spacing.800'); /* 64px tablet+ */
  }
}
```

### Typography
```css
/* Align to 8px grid */
.heading {
  font-size: 1.5rem;
  line-height: theme('lineHeight.relaxed-8'); /* 32px */
}
```

## Utility Classes

### Pre-built Spacing Utilities
- `.card-padding` - Standard card padding (24px)
- `.grid-gap-md` - Medium grid gap (24px)
- `.section-padding` - Section padding (80px)
- `.button-padding` - Button padding (12px 16px)

### Debug Utility
- `.debug-8pt-grid` - Visual 8px grid overlay for development

## Migration Guide

### Before (Arbitrary Values)
```css
.component {
  padding: 20px;
  margin: 15px;
  gap: 18px;
}
```

### After (8-Point System)
```css
.component {
  padding: theme('spacing.300');  /* 24px */
  margin: theme('spacing.200');   /* 16px */
  gap: theme('spacing.200');      /* 16px */
}
```

## Benefits

1. **Visual Consistency** - All spacing follows systematic scale
2. **Better Vertical Rhythm** - Typography aligns to 8px baseline
3. **Easier Maintenance** - Centralized spacing tokens
4. **Improved Accessibility** - Consistent touch targets and spacing
5. **Design-Dev Alignment** - Matches design system tokens

## Team Guidelines

1. **Always use spacing tokens** instead of arbitrary values
2. **Test with debug grid** during development
3. **Consider responsive scaling** for different screen sizes
4. **Align touch targets** to minimum 44px (space-550)
5. **Use semantic utilities** when available (card-padding, etc.)

## Related Files
- `tailwind.config.ts` - Spacing scale definition
- `styles/spacing-utilities.css` - Component utilities
- `styles/globals.css` - Global imports