---
name: design-to-code
description: "Convert visual designs into production-ready frontend components. Use when: user provides a screenshot, image, Figma link, or wireframe and wants it implemented as code; translating UI mockups to components; pixel-perfect implementation from design specs; building components from visual references"
argument-hint: "Paste a screenshot or describe the design to implement"
---

# Design to Code

Convert visual designs (screenshots, Figma links, wireframes) into fully implemented, production-ready components with tests, stories, responsive variants, dark mode support, and animations.

## When to Use

- User pastes a screenshot or image of a UI design
- User shares a Figma link to implement
- User describes a component with visual reference
- User wants pixel-perfect implementation from a mockup

## Procedure

### 1. Analyze the Design

Examine the provided visual reference and identify:

- **Layout structure**: grid, flex, spacing, alignment
- **Component hierarchy**: parent/child relationships, reusable pieces
- **Visual properties**: colors, typography, shadows, borders, radii
- **Interactive states**: hover, focus, active, disabled, loading
- **Content types**: static text, dynamic data, placeholders, icons
- **Responsive hints**: how the layout likely adapts across breakpoints

### 2. Detect Project Stack

Before writing any code, inspect the codebase:

- Read `package.json` for framework and styling dependencies
- Check config files (`tailwind.config.*`, `vite.config.*`, `next.config.*`, etc.)
- Look at existing components to match patterns, naming, and file structure
- Identify the test framework (`vitest`, `jest`, `testing-library`, `playwright`)
- Check for Storybook configuration (`.storybook/`)
- Identify design tokens or theme files (CSS variables, Tailwind theme, theme provider)

### 3. Plan the Component Architecture

Break the design into:

- **Atomic components**: smallest reusable pieces (buttons, inputs, badges)
- **Composite components**: combinations of atomic components (cards, forms, navigation)
- **Layout components**: page-level structure and positioning
- **Props interface**: what data and callbacks the component needs

### 4. Implement the Component

Write the code following these priorities:

1. **Semantic HTML first** — correct elements, proper heading hierarchy, landmarks
2. **Styling** — use the project's existing methodology (Tailwind, CSS Modules, styled-components, etc.)
3. **Responsiveness** — mobile-first, with breakpoints for tablet and desktop
4. **Dark mode** — use existing theme tokens; support `prefers-color-scheme` or class-based toggle
5. **Accessibility** — ARIA labels, keyboard navigation, focus indicators, screen reader context
6. **Animations** — subtle transitions for state changes; respect `prefers-reduced-motion`

### 5. Create Responsive Variants

Implement at minimum three breakpoints:

| Breakpoint | Target |
|------------|--------|
| Default | Mobile (< 640px) |
| `sm`/`md` | Tablet (640px – 1024px) |
| `lg`+ | Desktop (> 1024px) |

Verify the layout doesn't break between breakpoints.

### 6. Add Dark Mode Support

- Use the project's theme system (CSS variables, Tailwind `dark:`, theme provider)
- Ensure sufficient contrast ratios (WCAG AA: 4.5:1 text, 3:1 UI)
- Test that images, shadows, and borders adapt appropriately

### 7. Add Animations and Transitions

- Entry/exit animations for modals, dropdowns, toasts
- Hover and focus transitions (150–300ms, ease-out)
- Loading/skeleton states
- Wrap in `prefers-reduced-motion` media query or equivalent

### 8. Write Tests

Create tests covering:

- **Rendering**: component mounts without errors
- **Props**: different prop combinations render correctly
- **Interactions**: click, hover, keyboard events work
- **Responsive**: key layout changes at breakpoints (if testing framework supports it)
- **Accessibility**: no a11y violations (use `axe-core` or equivalent if available)

### 9. Write Storybook Stories

If the project uses Storybook:

- **Default story**: primary/happy path usage
- **Variant stories**: each prop variation, sizes, states
- **Responsive story**: demonstrate breakpoint behavior
- **Dark mode story**: show both themes
- **Interactive story**: demonstrate user interactions with args/controls

### 10. Final Review

Before presenting the result:

- [ ] Matches the design visually
- [ ] Follows project conventions (naming, file location, patterns)
- [ ] Responsive across mobile/tablet/desktop
- [ ] Dark mode works correctly
- [ ] Animations are smooth and accessible
- [ ] Tests pass
- [ ] Stories render correctly
- [ ] No new lint/type errors introduced

## Output Structure

For a component named `FeatureCard`, produce:

```
src/components/FeatureCard/
├── FeatureCard.tsx          # Main component
├── FeatureCard.test.tsx     # Unit tests
├── FeatureCard.stories.tsx  # Storybook stories
└── index.ts                 # Re-export
```

Adapt the file structure to match the project's existing conventions.

## Notes

- When the design is ambiguous, implement the most common/expected pattern and note assumptions
- If a design element maps to an existing component in the project, reuse it rather than creating a new one
- Prefer design tokens over hardcoded values — extract new tokens if they represent a consistent pattern
- If the project lacks a specific setup (e.g., no Storybook), skip that output and mention it
