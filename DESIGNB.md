# DESIGNB.md

# Daniel Vlcek — Clean Airy Premium Systems Design System

## Purpose

This file is the final design source of truth for Daniel Vlcek's business website.

Daniel Vlcek is positioned as a:

**Software Developer & Automation Architect**

The website must not feel like a normal freelancer portfolio. It must feel like a premium digital systems company led by one technical partner who builds scalable business infrastructure.

Daniel builds:

- Premium websites
- Business platforms
- Automation systems
- CRM and lead systems
- Internal dashboards
- Workflow infrastructure
- Scalable digital systems

Core message:

> Daniel Vlcek builds scalable digital systems that help companies operate faster, sell better, and reduce manual work.

---

# 1. Final Style Direction

## Style name

**Clean Airy Premium Systems**

This direction combines the best parts of modern SaaS clarity, enterprise infrastructure, dashboard/product visuals, and controlled premium motion.

Design stack:

- 55% Modern Clean SaaS
- 20% Enterprise Infrastructure
- 15% Dashboard / Business OS Visuals
- 5% Dark Earth Premium accents
- 5% Controlled Scroll Transitions

The site should feel:

- Clean
- Airy
- Premium
- Technical
- Calm
- Structured
- Business-focused
- Conversion-focused
- Product-like
- System-driven
- Trustworthy

The site should not feel:

- Like a generic freelancer page
- Like a colorful agency template
- Like a heavy dark cyberpunk website
- Like a loud AI hype site
- Like a basic developer portfolio
- Like a template SaaS landing page
- Like a random collection of effects

The final visual impression:

> A clean premium digital systems company that builds websites, platforms, and automation infrastructure for serious businesses.

---

# 2. Core Design Principle

The website should visually communicate that Daniel connects business pieces into one operating system.

The core visual idea:

```txt
Website → Lead Capture → CRM → Automation → Dashboard → Reporting
```

The visitor should immediately understand:

- Daniel does not only build websites.
- Daniel builds connected systems.
- The work supports business operations, sales, and internal workflows.
- The visual design is premium, calm, and technical without becoming cold.

---

# 3. Color System

## 3.1 Primary Light Base

Use a warm off-white / cream base, not pure white.

```css
:root {
  --background: #F7F4EC;
  --background-soft: #F1EDE3;
  --background-muted: #E8E1D4;
  --surface: #FFFFFF;
  --surface-soft: rgba(255, 255, 255, 0.72);
  --surface-warm: rgba(247, 244, 236, 0.82);
}
```

Usage:

- Main page background
- Large airy sections
- Content-heavy pages
- Services
- Work overview
- Contact
- Insight pages

Rule:

Do not use pure white as the full page background. Use warm cream to create premium softness.

---

## 3.2 Text Colors

```css
:root {
  --text-primary: #151512;
  --text-secondary: #4C4A43;
  --text-muted: #706C61;
  --text-soft: #9A9487;
  --text-inverse: #F7F4EC;
}
```

Usage:

- Main headings: `--text-primary`
- Body copy: `--text-secondary`
- Supporting copy: `--text-muted`
- Labels/meta: `--text-soft`
- Text on dark sections: `--text-inverse`

---

## 3.3 Premium Earth Accents

Use muted earth tones for warmth, differentiation, and premium feeling.

```css
:root {
  --accent-clay: #B8643F;
  --accent-clay-dark: #8F4A2F;
  --accent-sand: #C9A66B;
  --accent-olive: #777C5D;
  --accent-sage: #A8B098;
}
```

Usage:

- Small badge dots
- Active states
- Timeline highlights
- CTA micro details
- Metrics
- System nodes
- Hover details

Rule:

Clay is the main accent. Use it sparingly. Do not make the whole site orange, gold, or green.

---

## 3.4 Enterprise Blue-Gray Accents

Use muted blue-gray for system, dashboard, and infrastructure visuals.

```css
:root {
  --system-bluegray: #5F7480;
  --system-bluegray-soft: #A7B7BE;
  --system-slate: #2F3A3F;
  --system-mist: #DDE5E6;
}
```

Usage:

- Business OS visual
- Connection lines
- Dashboard panels
- Data/reporting cards
- Subtle gradients
- Contrast sections

---

## 3.5 Dark Contrast Colors

Use dark sections for contrast only. The full site should not be fully dark.

```css
:root {
  --dark: #0D0E0C;
  --dark-soft: #151713;
  --dark-panel: rgba(21, 23, 19, 0.88);
  --dark-border: rgba(247, 244, 236, 0.12);
}
```

Usage:

- Header glass background
- Footer
- CTA blocks
- Business OS dark panels
- Selected premium contrast sections
- Dashboard mockups

Rule:

Dark sections should create rhythm, not dominate the entire website.

---

## 3.6 Borders and Shadows

```css
:root {
  --border-light: rgba(21, 21, 18, 0.08);
  --border-medium: rgba(21, 21, 18, 0.12);
  --border-strong: rgba(21, 21, 18, 0.18);
  --border-inverse: rgba(247, 244, 236, 0.14);

  --shadow-soft: 0 18px 60px rgba(21, 21, 18, 0.08);
  --shadow-card: 0 24px 80px rgba(21, 21, 18, 0.10);
  --shadow-strong: 0 36px 110px rgba(21, 21, 18, 0.16);
}
```

Use soft shadows, not heavy black shadows.

---

# 4. Typography System

Typography should be premium, clean, and conversion-focused.

## Font direction

Use two font roles:

### Display / Heading Font

Recommended:

- Geist
- Satoshi
- Inter Tight
- Manrope
- Neue Haas Grotesk style

Use for:

- Hero headline
- Page headlines
- Section headings
- CTA headings

Style:

- Large
- Clean
- Confident
- Slightly editorial through spacing and scale, not through decorative serif overuse

### Body / UI Font

Recommended:

- Geist
- Inter
- Satoshi
- Manrope

Use for:

- Body copy
- Navigation
- Cards
- Buttons
- Forms
- Tables
- Captions

### Mono Font

Use very sparingly:

- Geist Mono
- JetBrains Mono
- IBM Plex Mono

Use for:

- Tiny system labels
- Badges
- Metrics
- Technical stack labels
- Process numbers

---

## Type Scale

### Hero Heading

```css
.hero-heading {
  font-size: clamp(3.6rem, 8vw, 8.25rem);
  line-height: 0.92;
  letter-spacing: -0.075em;
  font-weight: 650;
  color: var(--text-primary);
}
```

### Page Heading

```css
.page-heading {
  font-size: clamp(3rem, 6.5vw, 7rem);
  line-height: 0.94;
  letter-spacing: -0.065em;
  font-weight: 640;
}
```

### Section Heading

```css
.section-heading {
  font-size: clamp(2.35rem, 5vw, 5.25rem);
  line-height: 0.98;
  letter-spacing: -0.055em;
  font-weight: 620;
}
```

### Card Heading

```css
.card-heading {
  font-size: clamp(1.25rem, 2vw, 1.75rem);
  line-height: 1.15;
  letter-spacing: -0.035em;
  font-weight: 620;
}
```

### Body Large

```css
.body-large {
  font-size: clamp(1.08rem, 1.4vw, 1.35rem);
  line-height: 1.65;
  letter-spacing: -0.015em;
  color: var(--text-secondary);
}
```

### Body

```css
.body {
  font-size: 1rem;
  line-height: 1.75;
  color: var(--text-secondary);
}
```

### Micro Label

```css
.micro-label {
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-family: var(--font-mono);
  color: var(--text-muted);
}
```

---

# 5. Layout System

## Containers

```css
.container {
  width: min(100% - 2rem, 1440px);
  margin-inline: auto;
}

.container-wide {
  width: min(100% - 2rem, 1680px);
  margin-inline: auto;
}

.container-narrow {
  width: min(100% - 2rem, 920px);
  margin-inline: auto;
}
```

## Section Spacing

```css
.section {
  padding-top: clamp(6rem, 11vw, 12rem);
  padding-bottom: clamp(6rem, 11vw, 12rem);
}

.section-compact {
  padding-top: clamp(4rem, 7vw, 7rem);
  padding-bottom: clamp(4rem, 7vw, 7rem);
}
```

## General Layout Rules

Use:

- Large empty space
- Clean section rhythm
- Clear hierarchy
- Strong centered hero
- Wide visual blocks
- Soft cards
- Simple but premium grids
- Product-like system visuals

Avoid:

- Dense card walls
- Too many icons
- Random gradients
- Heavy black sections everywhere
- Overlapping elements that reduce readability
- Too much motion on mobile

---

# 6. Navigation

The header should feel premium and calm.

## Header Style

Use a floating glass command bar.

```css
.header {
  position: fixed;
  top: 1rem;
  left: 1rem;
  right: 1rem;
  z-index: 100;
  border-radius: 999px;
  background: rgba(247, 244, 236, 0.78);
  border: 1px solid rgba(21, 21, 18, 0.08);
  backdrop-filter: blur(24px);
  box-shadow: 0 18px 60px rgba(21, 21, 18, 0.08);
}
```

Optional dark variation on dark/hero overlays:

```css
.header-dark {
  background: rgba(13, 14, 12, 0.72);
  border: 1px solid rgba(247, 244, 236, 0.12);
  color: var(--text-inverse);
}
```

Recommended links:

- Services
- Work
- About
- Insights
- Contact

CTA:

- Book a Call

Header rule:

Keep it minimal. It should not compete with the hero.

---

# 7. Buttons

## Primary Button

```css
.button-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  border-radius: 999px;
  padding: 0.95rem 1.45rem;
  background: #151512;
  color: #F7F4EC;
  font-weight: 650;
  box-shadow: 0 18px 50px rgba(21, 21, 18, 0.14);
}

.button-primary:hover {
  transform: translateY(-2px);
  background: #0D0E0C;
}
```

## Secondary Button

```css
.button-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  border-radius: 999px;
  padding: 0.95rem 1.45rem;
  background: rgba(255, 255, 255, 0.56);
  color: #151512;
  border: 1px solid rgba(21, 21, 18, 0.10);
}
```

## Accent Button

Use rarely.

```css
.button-accent {
  background: #B8643F;
  color: #FFFFFF;
}
```

Button labels:

- Book a Strategy Call
- Explore Systems
- View Work
- Start the Conversation
- Map Your System

---

# 8. Cards and Panels

## Light Premium Card

```css
.card {
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(21, 21, 18, 0.08);
  box-shadow: 0 24px 80px rgba(21, 21, 18, 0.08);
  backdrop-filter: blur(18px);
}
```

## Elevated Card

```css
.card-elevated {
  border-radius: 32px;
  background: #FFFFFF;
  border: 1px solid rgba(21, 21, 18, 0.08);
  box-shadow: 0 36px 110px rgba(21, 21, 18, 0.12);
}
```

## Dark System Panel

```css
.system-panel-dark {
  border-radius: 32px;
  background:
    radial-gradient(circle at 20% 10%, rgba(167, 183, 190, 0.18), transparent 32%),
    linear-gradient(180deg, #151713 0%, #0D0E0C 100%);
  border: 1px solid rgba(247, 244, 236, 0.12);
  color: #F7F4EC;
  box-shadow: 0 36px 110px rgba(21, 21, 18, 0.18);
}
```

Card rules:

- Use fewer cards with stronger content.
- Keep cards clean and airy.
- Use subtle borders.
- Avoid colorful card backgrounds.
- Avoid icon overload.
- Make every card explain business value.

---

# 9. Business OS Visual System

This is the main signature visual for the website.

The hero should contain a wide business operating system visual under the centered headline.

## Visual Purpose

It must show that Daniel builds connected digital systems.

Core system flow:

```txt
Website → Lead Capture → CRM → Automation → Dashboard → Reporting
```

## Visual Components

Use:

- Soft glass interface panels
- Dashboard cards
- CRM pipeline preview
- Automation flow nodes
- Connection lines
- Small metrics
- Status badges
- Clay active signals
- Muted blue-gray system accents

## Visual Style

The Business OS visual should be:

- Wide
- Clean
- Product-like
- Premium
- Light base with selected dark panels
- Calm and readable
- Not too technical
- Not too futuristic
- Not too colorful

## Example Elements

- Lead received
- CRM qualified
- Follow-up automated
- Dashboard updated
- Report generated
- Manual task removed

## Node Style

```css
.system-node {
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(21, 21, 18, 0.10);
  color: #151512;
  padding: 0.65rem 0.9rem;
  box-shadow: 0 12px 40px rgba(21, 21, 18, 0.07);
}
```

## Active Node

```css
.system-node-active {
  background: #151512;
  color: #F7F4EC;
  border-color: rgba(21, 21, 18, 0.18);
}
```

## Connection Line

```css
.connection-line {
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(95, 116, 128, 0.42), transparent);
}
```

---

# 10. Motion System

Motion should be calm, clean, and meaningful.

## Allowed Motion

- Section reveal
- Card hover lift
- Hero visual soft entrance
- Hero-to-problem transition
- System connection line animation
- Dashboard cards sliding subtly into place
- Metrics count-up

## Avoid

- Random bouncing
- Excessive parallax
- Constant movement
- Heavy GSAP everywhere
- Mobile scroll complexity
- Effects that hide content

## Standard Reveal

```js
{
  opacity: 0,
  y: 28,
  duration: 0.8,
  ease: "power3.out"
}
```

## Hero-to-Problem Transition

Use one signature transition.

Concept:

Hero shows scattered business/system pieces:

- Website
- Leads
- CRM
- Manual Work
- Follow-ups
- Data
- Automations
- Dashboard

On scroll, the elements visually connect into the problem/system narrative.

Purpose:

> Your business does not need more disconnected tools. It needs one connected digital system.

Rules:

- Use this once.
- Keep it smooth.
- Disable/simplify on mobile.
- Respect reduced motion.
- Do not let elements overlap important text.

Reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.001ms !important;
  }
}
```

---

# 11. Homepage Structure

The homepage should be the strongest selling page.

Recommended order:

1. Header
2. Hero with centered headline and Business OS visual
3. Hero-to-problem transition
4. Problem section
5. Solution / Operating Layer section
6. Services section
7. Business Platform section
8. Work / Case Studies preview
9. Process section
10. Why Daniel section
11. Final CTA
12. Footer

---

## 11.1 Hero

Purpose:

Position Daniel immediately as a premium systems builder.

Structure:

- Small badge
- Centered headline
- Short subheadline
- Primary CTA
- Secondary CTA
- Wide Business OS visual below
- Soft background gradients

Badge:

```txt
SOFTWARE DEVELOPER & AUTOMATION ARCHITECT
```

Hero headline:

```txt
Digital systems for companies that want to move faster.
```

Alternative:

```txt
Websites, platforms, and automations built as one scalable system.
```

Subheadline:

```txt
I design and build high-performing websites, business platforms, and automation systems that connect your leads, workflows, data, and operations into one scalable digital foundation.
```

CTA:

```txt
Book a Strategy Call
```

Secondary CTA:

```txt
Explore Systems
```

Hero style:

- Clean cream background
- Centered layout
- Large heading
- Business OS visual under text
- Soft cards
- Strong product-like presentation
- No heavy dark hero
- No generic profile intro

---

## 11.2 Problem Section

Core message:

```txt
Most companies do not have a website problem. They have a system problem.
```

Supporting text:

```txt
A website can look good and still fail operationally. Leads get handled manually, follow-ups depend on memory, tools do not talk to each other, and important business data stays scattered across inboxes, spreadsheets, and disconnected platforms.
```

Problem cards:

### Manual Work

Your team repeats the same tasks every week instead of letting systems handle intake, routing, follow-up, and reporting.

### Scattered Tools

Your website, CRM, emails, spreadsheets, and internal workflows are not connected into one reliable flow.

### Lost Leads

Requests come in, but follow-up depends on people remembering tasks manually.

### No Operational Clarity

Important data exists somewhere, but it is not visible in one clean system.

Each card should show:

- Problem
- Business cost
- System fix

---

## 11.3 Solution / Operating Layer Section

Headline:

```txt
From disconnected digital pieces to one connected operating layer.
```

Show before/after.

Before:

- Website
- Forms
- Emails
- Spreadsheets
- Manual follow-up
- No visibility

After:

- Conversion website
- Lead capture
- CRM logic
- Automated workflows
- Internal dashboard
- Reporting layer

Supporting copy:

```txt
I connect your customer-facing website with the systems behind it, so leads, workflows, data, and internal tasks move through a clear digital structure instead of manual fragments.
```

Visual:

- Before/after cards
- Business OS diagram
- Clean system lines
- Dashboard preview

---

## 11.4 Services Section

Headline:

```txt
Digital systems built around how your business actually works.
```

Services:

### Premium Websites

High-converting websites built with strong positioning, clean UI, performance, and scalable frontend architecture.

Business value:

- Stronger first impression
- Higher trust
- Better conversion
- Clearer offer communication

### Business Platforms

Custom platforms that connect users, workflows, data, and internal business logic.

Business value:

- Less operational chaos
- Better process control
- Scalable internal infrastructure
- Faster execution

### Automation Systems

AI-powered and rule-based workflows that reduce manual work across sales, support, administration, and operations.

Business value:

- Faster response times
- Fewer repeated tasks
- Better consistency
- Less dependency on manual work

### CRM & Lead Systems

Lead capture, qualification, routing, follow-up, and pipeline systems designed around the real sales process.

Business value:

- Less lost revenue
- Better lead handling
- Clearer pipeline visibility
- Structured follow-up

### Internal Dashboards

Dashboards and tools that give companies clarity over tasks, workflows, performance, and data.

Business value:

- Better visibility
- Faster decisions
- Less confusion
- Clear internal overview

---

## 11.5 Business Platform Section

Headline:

```txt
The website is only the visible layer. The real value is the system behind it.
```

Supporting copy:

```txt
A modern business needs more than a clean interface. It needs lead flows, data structure, automation logic, internal dashboards, and reliable workflows that support daily operations.
```

Visual layers:

1. Website layer
2. Lead capture layer
3. CRM layer
4. Automation layer
5. Dashboard layer
6. Reporting layer

This section should make Daniel clearly more valuable than a standard web designer.

---

## 11.6 Process Section

Headline:

```txt
A structured process for building systems that actually work.
```

Steps:

### 01. Diagnose

Understand the business model, website, current tools, workflows, bottlenecks, and growth goals.

### 02. Architect

Define the digital system: website, platform, automation logic, CRM flow, dashboard, and data structure.

### 03. Build

Develop the frontend, backend logic, integrations, automations, and internal tools.

### 04. Connect

Connect systems, test workflows, validate user journeys, and prepare launch.

### 05. Improve

Measure real usage, optimize the system, and expand it over time.

---

## 11.7 Final CTA

Headline:

```txt
Let’s map the system your business actually needs.
```

Subheadline:

```txt
Tell me what you are building, what feels manual, and where your current tools stop supporting growth. I will help you identify what kind of website, platform, or automation system makes sense.
```

CTA:

```txt
Book a Strategy Call
```

Secondary:

```txt
View Work
```

---

# 12. Services Page

Purpose:

Explain Daniel’s offers as connected business systems.

Hero headline:

```txt
Websites, platforms, and automations designed as one business system.
```

Subheadline:

```txt
I help companies replace scattered tools and manual workflows with connected digital systems built for clarity, speed, and scalable growth.
```

Each service detail section should include:

- Problem it solves
- What Daniel builds
- Business outcome
- Example use cases
- Technical layer
- CTA

Services page should not read like a list of freelance services.

---

# 13. Work / Case Studies

Work should prove business outcomes, not just visuals.

Case study card fields:

- Company
- Industry
- System type
- Business result
- Short transformation
- Stack
- CTA

System types:

- Conversion Website
- Business Platform
- CRM Automation
- Internal Dashboard
- Workflow Infrastructure
- Lead System

Case study detail structure:

1. Context
2. Challenge
3. System built
4. Technical architecture
5. Transformation
6. Outcome
7. Proof metric
8. CTA

Avoid:

```txt
I built a website.
```

Use:

```txt
Built a connected digital system that improved positioning, lead flow, and internal execution.
```

---

# 14. About Page

Purpose:

Position Daniel as a technical business partner.

Headline ideas:

```txt
Technical execution with business-level thinking.
```

```txt
A developer who thinks beyond the interface.
```

```txt
One technical partner for websites, platforms, and automation.
```

Core message:

```txt
You work directly with the person who thinks, designs, builds, and improves the system.
```

About page should communicate:

- Direct collaboration
- Technical ownership
- Business understanding
- System thinking
- Scalable architecture
- Long-term improvement

Avoid:

- Long personal biography
- Basic freelancer story
- Too much “I love coding”
- CV-like layout

---

# 15. Contact Page

Purpose:

Convert serious project inquiries.

Headline:

```txt
Let’s map the system your business actually needs.
```

Subheadline:

```txt
Share what you are building, what feels manual, and where your current tools stop supporting growth. I will help you identify the right website, platform, or automation system.
```

Form fields:

- Name
- Email
- Company
- Project type
- Current bottleneck
- Budget range
- Message

Best-fit projects:

- Premium business website
- Custom platform
- Automation workflow
- CRM/lead system
- Internal dashboard
- Technical rebuild

Not a fit:

- Cheap template websites
- One-off small fixes
- Projects without business context
- Projects where only price matters

What happens next:

1. You send the project context
2. Daniel reviews the business problem
3. You discuss possible system direction
4. If it fits, the project is scoped clearly

---

# 16. Insights Page

Purpose:

Build authority around systems, automation, websites, and digital operations.

Page headline:

```txt
Practical thinking on websites, systems, automation, and digital infrastructure.
```

Categories:

- Automation
- Web Strategy
- Business Platforms
- CRM Systems
- Process Optimization
- Technical Architecture
- Case Studies
- Growth Systems

Article layout:

- Readable narrow container
- Strong headline
- Clear intro
- Practical sections
- Pull quotes
- Related articles
- CTA

---

# 17. Responsive Rules

Mobile must stay premium and simple.

Rules:

- Stack grids cleanly.
- Simplify Business OS visual.
- Reduce floating elements.
- Keep CTA visible early.
- Disable heavy scroll transitions.
- Keep text readable.
- Do not overcrowd hero.
- Use fewer cards per viewport.

Mobile hero:

- Badge
- Headline
- Subheadline
- CTA
- Simplified system visual

---

# 18. Accessibility Rules

- Maintain strong contrast.
- Do not put text over busy backgrounds without overlay.
- Use semantic HTML.
- Keep heading hierarchy clean.
- Forms need labels.
- Buttons need focus states.
- Respect reduced motion.
- Use color plus text/icons for states.

Focus style:

```css
:focus-visible {
  outline: 2px solid #B8643F;
  outline-offset: 4px;
}
```

---

# 19. Performance Rules

- Avoid huge video backgrounds.
- Optimize images.
- Lazy-load below-fold images.
- Keep animations light.
- Avoid unnecessary dependencies.
- Use server components where possible.
- Do not overuse blur filters on large mobile sections.
- Keep bundle size controlled.
- Make build pass.

---

# 20. Implementation Rules

For Next.js / React / Tailwind:

1. Centralize tokens in global CSS or Tailwind config.
2. Reuse shared components.
3. Keep components clean and typed.
4. Avoid one-off styling.
5. Preserve SEO metadata.
6. Preserve routes.
7. Keep content architecture scalable.
8. Remove unused imports.
9. Do not leave console logs.
10. Run lint and build.

Recommended components:

```txt
src/components/ui/Container.tsx
src/components/ui/Section.tsx
src/components/ui/SectionHeader.tsx
src/components/ui/Button.tsx
src/components/ui/Card.tsx
src/components/ui/Badge.tsx
src/components/ui/SystemCard.tsx
src/components/visuals/BusinessOperatingSystem.tsx
src/components/visuals/SystemFlow.tsx
src/components/animations/Reveal.tsx
src/components/animations/HeroProblemTransition.tsx
```

---

# 21. Codex Instruction Summary

When using this file with Codex:

```txt
Read DESIGNB.md first.

Redesign the current branch into the Clean Airy Premium Systems style.

Use this file as the source of truth.

Keep the best existing structure, but make the visual system cleaner, lighter, airier, more premium, and more business-focused.

Do not make the website fully dark.
Do not copy old colors directly.
Do not make it look like a freelancer portfolio.

Main priority:
Create a premium business systems website with a centered hero, strong business OS visual, connected problem/solution narrative, clear services, strong case studies, and conversion-focused contact flow.

Run lint and build before finishing.
```

---

# 22. Final Quality Standard

The final website should feel like:

> A clean premium digital systems company led by one technical partner.

The user should understand within seconds:

- Daniel builds more than websites.
- Daniel builds connected systems.
- Daniel understands business operations.
- Daniel can connect websites, leads, CRM, automation, dashboards, and reporting.
- The website itself proves clean execution and premium positioning.

The design must be:

- Clean
- Airy
- Premium
- Business-focused
- Technically credible
- Conversion-oriented
- System-driven
- Easy to understand
- Scalable for future agency positioning

This `DESIGNB.md` is the source of truth for the final clean airy redesign.
