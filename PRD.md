# Product Requirements Document: Mat Buaya Heritage

**Version:** 1.0  
**Date:** May 13, 2026  
**Status:** Draft

---

## 1. Executive Summary

**Mat Buaya** is a digital sanctuary and community hub for motorcycle enthusiasts who value grit, mechanical precision, and the raw soul of riding. Transitioning from a high-octane modern aesthetic to a "Heritage" visual identity, the platform serves as a mechanical journal, community roster, and event roadmap for a brotherhood forged in oil and asphalt.

**Tagline:** Built for the Open Road.

---

## 2. Goals & Objectives

| # | Objective | Success Metric |
|---|-----------|---------------|
| 1 | Establish a cohesive Heritage visual identity across all screens | 100% design token adoption, zero off-brand elements |
| 2 | Provide a digital showroom for community builds | Members can add, view, and inspect machines with full technical specs |
| 3 | Foster brotherhood through member profiles and community interactions | Active member roster with reputation tracking |
| 4 | Organize community events with clear registration flows | Events published with RSVP/registration capability |
| 5 | Deliver a content platform for mechanical knowledge sharing | Blog/journal system with categorized articles |

---

## 3. Brand Identity & Design System

### 3.1 Brand Attributes

- **Name:** Mat Buaya
- **Tagline:** Built for the Open Road.
- **Personality:** Rugged, authentic, vintage, meticulous, and communal.

### 3.2 Heritage Design Tokens

#### Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--color-parchment` | `#fcf9f2` | Primary background, card surfaces |
| `--color-racing-green` | `#1b3022` | Primary brand color, headings, CTAs |
| `--color-charcoal` | `#2c2c2c` | Body text, borders, distressed overlays |
| `--color-charcoal-muted` | `#4a4a4a` | Secondary text, captions |
| `--color-oil-black` | `#0d0d0d` | Deep backgrounds, navbars, footers |
| `--color-rust` | `#8b4513` | Accent, badges, warnings |
| `--color-chrome` | `#c0c0c0` | Dividers, inactive states |

#### Typography

| Role | Font | Style | Fallback |
|------|------|-------|----------|
| Headlines (H1–H3) | Bebas Neue | Condensed, uppercase, heavy | Impact, sans-serif |
| Body | Courier Prime | Typewriter, regular | Courier New, monospace |
| UI Labels | Space Mono | Monospaced, medium | monospace |
| Captions/Meta | Space Mono | Monospaced, light, small caps | monospace |

#### Imagery Guidelines

- High-contrast monochrome photography
- Polaroid-style frames with slight rotation and tape/pin overlays
- Desaturated technical illustrations (engine cross-sections, exploded views)
- Film grain and vignette post-processing
- No stock photography — raw, unfiltered, community-sourced imagery preferred

#### Spacing & Layout

| Token | Value |
|-------|-------|
| `--space-xs` | 4px |
| `--space-sm` | 8px |
| `--space-md` | 16px |
| `--space-lg` | 32px |
| `--space-xl` | 64px |
| `--space-2xl` | 128px |
| `--radius-sm` | 2px |
| `--radius-md` | 4px |
| `--border-weight` | 2px solid |

---

## 4. Information Architecture

```
Mat Buaya Heritage
├── Home (Landing / Manifesto)
├── The Garage (Collection)
│   ├── Machine List (Grid/Gallery view)
│   └── Machine Detail (Inspection View)
├── The Pack (Members)
│   ├── Member Directory
│   └── Member Profile (Racing License Card)
├── The Workshop (Blog/Journal)
│   ├── Article List
│   └── Article Detail
├── The Road Map (Activities/Events)
│   ├── Event Timeline
│   └── Event Detail + Registration
├── The Paddock (Gallery)
│   └── Community Photo Feed
├── Partnerships
│   └── Partner Grid
└── Join the Pack (Registration)
```

---

## 5. Feature Specifications

### 5.1 Home (Landing Page)

**Purpose:** First impression — communicate brand identity and immediate value.

**Content Blocks:**
- Hero section with manifesto statement and full-bleed monochrome imagery
- Latest activities / upcoming events carousel
- Featured machine from The Garage
- "Join the Pack" CTA
- Partnership logos strip (monochrome)

---

### 5.2 The Garage (Collection)

**Purpose:** Digital showroom for custom builds and classic restorations.

**List View:**
- Grid layout of machine cards
- Each card displays: thumbnail (polaroid frame), name, year, displacement
- Filter by: year, engine type, builder/owner
- Sort by: newest, displacement, year

**Inspection View (Detail):**

| Field | Type | Description |
|-------|------|-------------|
| Name | Text | Machine name / model |
| Year | Number | Year of manufacture |
| Displacement | Text | Engine CC (e.g., "750cc") |
| Engine Type | Enum | Single, Twin, Inline-4, V-Twin, etc. |
| Power | Text | HP / torque figures |
| Modifications | List | Array of custom mods with descriptions |
| Builder | Reference | Link to Pack member profile |
| Gallery | Image[] | Multiple high-res inspection angles |
| Story | Rich Text | Build narrative / history |

**Interactions:**
- Image zoom on hover/tap
- Swipe through gallery
- Share machine card

---

### 5.3 The Pack (Member Profiles)

**Purpose:** Community directory styled as vintage racing licenses.

**Directory View:**
- Grid of member cards styled as laminated vintage license badges
- Search by name or specialty
- Filter by role/specialty

**Member Profile (Racing License Card):**

| Field | Type | Description |
|-------|------|-------------|
| Name / Handle | Text | Display name |
| Avatar | Image | Monochrome portrait photo |
| Role/Specialty | Enum | Lead Mechanic, Road Captain, Fabricator, Historian, etc. |
| Reputation (RPM) | Number | Community reputation score |
| Join Date | Date | Brotherhood membership date |
| Stable | Reference[] | Links to machines in The Garage |
| Bio | Text | Short personal manifesto |
| Badges | Badge[] | Achievements, event participation |

**Reputation System (RPM/Rep):**
- Earned through event participation, content contributions, builds shared
- Displayed as a tachometer-style gauge on the profile card

---

### 5.4 The Workshop (Blog/Journal)

**Purpose:** Technical teardowns, reviews, and stories from the road.

**Categories:**
- Technical Teardowns (how-to / maintenance guides)
- Reviews (parts, gear, machines)
- Road Stories (rides, experiences, culture pieces)
- Dark Arts (advanced mechanical knowledge)

**Article Model:**

| Field | Type | Description |
|-------|------|-------------|
| Title | Text | Article headline |
| Author | Reference | Link to Pack member |
| Date | Date | Publication date |
| Category | Enum | Teardown, Review, Road Story, Dark Arts |
| Cover Image | Image | Hero image (monochrome) |
| Body | Rich Text | Article content with embedded images |
| Tags | Text[] | Searchable tags |
| Reading Time | Computed | Estimated minutes |

**Interactions:**
- Read / scroll through article
- Share article
- View related articles by tag/category

---

### 5.5 The Road Map (Activities/Events)

**Purpose:** Chronological log of upcoming and past events.

**Timeline View:**
- Vertical timeline layout (chronological)
- Each event card: date, title, difficulty badge, location, status (upcoming/completed)
- Filter: upcoming vs. past, difficulty level

**Event Detail:**

| Field | Type | Description |
|-------|------|-------------|
| Title | Text | Event name |
| Date | Date/Range | Event date(s) |
| Location | Text | Starting point / route |
| Description | Rich Text | Full event details |
| Difficulty | Enum | Casual, Intermediate, Endurance, Extreme |
| Max Riders | Number | Capacity limit |
| Registered | Number | Current sign-up count |
| Route Map | Image/Embed | Visual route representation |
| Requirements | Text[] | Bike minimums, gear requirements |

**Registration Flow:**
1. View event detail
2. Click "Register" CTA
3. Confirm membership (must be a Pack member)
4. Receive confirmation with event details
5. Event appears on member's profile

---

### 5.6 The Paddock (Gallery)

**Purpose:** Community-submitted photo feed capturing raw, unfiltered moments.

**Features:**
- Masonry grid layout
- Photo submission by Pack members
- Light metadata: photographer, date, location, caption
- Monochrome filter applied consistently
- Lightbox view for full-resolution browsing

---

### 5.7 Partnerships

**Purpose:** Showcase industry partners that anchor brand authenticity.

**Layout:**
- Curated grid of partner logos (monochrome heritage treatment)
- Hover reveals partner name and brief description
- Partners include: Honda, Yamaha, Ohlins, Brembo, and other curated brands

---

### 5.8 Join the Pack (Registration)

**Purpose:** Onboarding flow for new members.

**Fields:**
- Name / Handle
- Email
- Avatar upload
- Specialty selection
- Brief bio / why they ride
- Agreement to brotherhood code

---

## 6. Shared Components

### 6.1 Navigation (Top Bar)

- Fixed top position
- Logo (Mat Buaya wordmark, heritage style)
- Primary nav links: Garage, Pack, Workshop, Road Map, Paddock
- "Join the Pack" CTA button (racing green)
- Mobile: hamburger menu with full-screen overlay

### 6.2 Side Navigation (Optional — Desktop)

- Secondary contextual navigation for sub-sections
- Collapsible
- Styled as a workshop tool pegboard

### 6.3 Footer (Heavy-Duty Industrial)

- Full-width, dark (`--color-oil-black`) background
- Sections: About, Quick Links, Social, Legal
- Tagline repetition: "Built for the Open Road."
- Rivet/bolt decorative elements
- Newsletter signup (optional)

---

## 7. Technical Requirements

### 7.1 Device Support

| Priority | Device | Approach |
|----------|--------|----------|
| Primary | Desktop (1280px+) | Full high-fidelity experience |
| Secondary | Tablet (768px–1279px) | Adapted layouts, preserved hierarchy |
| Tertiary | Mobile (< 768px) | Responsive, single-column, touch-optimized |

### 7.2 Performance Targets

| Metric | Target |
|--------|--------|
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Cumulative Layout Shift | < 0.1 |
| Time to Interactive | < 3.5s |

### 7.3 Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

### 7.4 Accessibility

- WCAG 2.1 AA compliance minimum
- Keyboard navigable
- Screen reader compatible
- Sufficient color contrast despite heritage palette

---

## 8. User Journey

```
┌─────────────┐     ┌─────────────┐     ┌─────────────────┐     ┌──────────────┐
│  DISCOVER   │────▶│    JOIN     │────▶│    EXPLORE      │────▶│ PARTICIPATE  │
│             │     │             │     │                 │     │              │
│ Land on Home│     │ "Join the   │     │ Browse Garage   │     │ View Road Map│
│ Read manif. │     │  Pack" CTA  │     │ Read Workshop   │     │ Register for │
│ See events  │     │ Registration│     │ View Paddock    │     │ events/runs  │
└─────────────┘     └─────────────┘     └─────────────────┘     └──────────────┘
```

### Journey Details:

1. **Discover** — User arrives at the Home screen. They see the manifesto, latest events, and a featured machine. The Heritage aesthetic communicates brand identity immediately.
2. **Join** — User clicks "Join the Pack." Registration collects essential info and assigns them a Racing License profile.
3. **Explore** — As a member, user browses The Garage to inspect machines, reads The Workshop for technical knowledge, and scrolls The Paddock for community moments.
4. **Participate** — User checks The Road Map for upcoming runs, registers for an event, and earns RPM reputation for participation.

---

## 9. Content Strategy

| Section | Content Source | Update Frequency |
|---------|---------------|-----------------|
| The Garage | Member submissions, admin-curated | Ongoing |
| The Pack | Auto-generated on registration | Real-time |
| The Workshop | Editorial team, member contributions | Weekly |
| The Road Map | Admin-managed event calendar | Bi-weekly |
| The Paddock | Community photo submissions | Daily |
| Partnerships | Admin-curated | Quarterly |

---

## 10. Out of Scope (v1)

- E-commerce / merchandise store
- Real-time chat or messaging
- Native mobile applications
- Video hosting / streaming
- Payment processing for events
- Multi-language support

---

## 11. Open Questions

| # | Question | Owner | Status |
|---|----------|-------|--------|
| 1 | What CMS or backend will power the content? | TBD | Open |
| 2 | Is user-generated content moderated before publishing? | TBD | Open |
| 3 | How is RPM reputation calculated (exact formula)? | TBD | Open |
| 4 | Are events free or will there be paid registrations in the future? | TBD | Open |
| 5 | What analytics/tracking is required? | TBD | Open |

---

## 12. Success Criteria

- Heritage design system applied consistently across all screens
- All 6 core sections (Garage, Pack, Workshop, Road Map, Paddock, Partnerships) functional
- Registration flow complete end-to-end
- Desktop experience is pixel-perfect to design intent
- Responsive down to 375px width without broken layouts
- Page load performance targets met
- WCAG AA accessibility compliance verified
