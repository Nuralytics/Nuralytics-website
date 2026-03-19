# One-Page Consulting Website Reference

## Goal
Design the Nuralytics website as a single-page consulting company site that clearly sells four service lines:
- Web design
- Frontend development
- AI systems and automation
- Voice agents

The page should feel premium, technical, and conversion-focused. Dashboard visuals should support credibility, but the page must not read like a dashboard product landing page only. It needs to present Nuralytics as a consulting partner that designs, builds, and ships custom digital systems.

## Core Positioning
Nuralytics is a consulting company that helps businesses design and build:
- modern websites
- custom frontend experiences
- AI-powered workflows
- voice agent systems
- dashboards and internal tools

Primary promise:
- We turn messy manual operations and weak digital experiences into fast, usable systems that drive revenue and save time.

## Page Model
This must stay a one-page website.

### One-Page Structure Rule
- All core content lives on the homepage.
- Navigation should scroll to sections, not open separate service pages.
- CTAs should point to one main conversion target:
  - consultation booking
  - contact form
  - WhatsApp/contact action
- Secondary links can move to anchors such as portfolio, services, process, and contact.

## Current Project Reality
- Stack: React + Vite + TypeScript + Tailwind + Framer Motion.
- Main page entry: `src/pages/Index.tsx`.
- Existing one-page section assembly already happens in `src/pages/Index.tsx`.
- Available MCP servers in this session: Figma, LiveKit, Playwright.
- Constraint: Webflow MCP server is not configured in this workspace/session, so direct Webflow MCP operations cannot be executed from here.

## Recommended Information Architecture
Use this exact single-page flow so the offer is understandable within one scroll.

1. Hero
2. Services overview
3. Featured proof/dashboard section
4. Capabilities grid
5. Process section
6. Selected work / portfolio
7. Results / metrics
8. Testimonials or trust signals
9. FAQ or objection handling
10. Contact / CTA footer

## Section Plan

### 1. Hero
Purpose:
- state who you help and what you build
- establish premium consulting positioning fast

Hero message direction:
- headline should combine design, engineering, and AI execution
- subheadline should make it clear you build websites, frontends, AI systems, and voice agents for real business use cases

Suggested headline directions:
- We Build High-Performance Websites, Frontends, AI Systems, and Voice Agents
- Digital Systems for Companies That Need Better Design, Faster Execution, and Smarter Automation
- Design, Frontend, AI, and Voice Systems Built Around Your Business

Hero content should include:
- 1 strong headline
- 1 concise subheadline
- 2 CTAs
- trust strip or quick proof metrics
- featured visual: branded dashboard/product/system mockup

### 2. Services Overview
Purpose:
- clearly show what the consulting company sells

The four main cards should be:
- Web Design
- Frontend Development
- AI Automation
- Voice Agents

Suggested supporting lines:
- Web Design: landing pages, brand-led marketing sites, conversion-focused redesigns
- Frontend Development: React interfaces, dashboards, product UI, responsive implementation
- AI Automation: workflow automation, smart assistants, internal tools, reporting systems
- Voice Agents: inbound support agents, lead qualification, appointment flows, voice-based workflows

Recommended format:
- 4 large cards in a grid
- each card with icon, short value statement, and 3 capability bullets

### 3. Featured Proof / Dashboard Section
Purpose:
- show that the company does not only design visuals, but builds real operating systems and interfaces

Use dashboard visuals here as proof, not as the entire brand story.

Suggested content:
- custom dashboards
- live business metrics
- AI-assisted decision support
- role-based internal tools
- real-time alerts and workflow visibility

Best visual base:
- `Dashbord/image-1.png` as the primary dark proof image

### 4. Capabilities Grid
Purpose:
- expand what each service line includes

Suggested capabilities:
- UI systems
- design systems
- React builds
- animations and micro-interactions
- API integrations
- AI copilots
- internal admin panels
- analytics dashboards
- voice workflows
- CRM integrations
- booking flows
- multi-step forms

Recommended format:
- 6 to 8 cards or tiles
- concise, technical, and outcome-oriented copy

### 5. Process Section
Purpose:
- make the consulting engagement feel structured and reliable

Suggested process:
- Discover
- Design
- Build
- Launch
- Optimize

Each step should explain:
- what happens
- what the client gets
- how decisions are made fast

### 6. Portfolio Section
Purpose:
- demonstrate range across design, frontend, and systems work

Suggested categories:
- marketing websites
- SaaS/product frontends
- AI internal tools
- dashboards and admin systems
- voice automation flows

### 7. Results Section
Purpose:
- make the value tangible

Suggested metric themes:
- faster launch time
- reduced manual work
- improved conversion performance
- better reporting visibility
- more qualified leads

### 8. Testimonials / Trust Section
Purpose:
- create confidence without overloading the page

Can include:
- testimonials
- company logos
- short trust statements
- delivery speed or quality claims backed by examples

### 9. FAQ / Objection Handling
Purpose:
- remove common buying friction

Suggested questions:
- Do you only design or also build?
- Can you redesign an existing website?
- Do you work with AI automation and voice agents?
- Can you integrate our current tools and CRM?
- How long does a project take?

### 10. Contact Section
Purpose:
- convert interest into a conversation

Should include:
- direct headline
- short qualification copy
- clear contact action
- optional service interest selector

## Visual Direction
The site should look like a premium consulting studio with technical depth.

### Design Tone
- modern
- sharp
- credible
- high-trust
- not template-like
- not generic startup SaaS

### Color Direction
- Keep the existing emerald/green brand core.
- Use dark neutrals and clean light surfaces depending on section contrast.
- Green should act as the signal color, not flood every component.

Suggested palette:
- Deep green: `#059669`
- Brand green: `#10B981`
- Bright accent green: `#34D399`
- Charcoal: `#0B0F0D`
- Soft panel: `#111715`
- Light neutral: `#F6FBF8`

### Typography Direction
- keep strong display typography for hero and major headings
- use clean readable body text
- maintain a consulting-grade tone rather than playful startup language

## Dashboard Image Treatment
The user asked for dashboard images to be changed toward green and aligned with the website.

### Asset Audit
- Main referenced asset:
  - `Dashbord/image-1.png`
- Additional assets:
  - `images/dashbord-1.png`
  - `images/dashbord-2.png`
  - `images/frontend-dashboard.png`
  - `images/animation-starting.png`
  - `images/image.png`
  - `images/image-21.png`

### Asset Decision
- `Dashbord/image-1.png` is already the closest to the site direction and should be the main proof visual.
- `images/dashbord-1.png` needs recoloring or should be demoted because it uses too many unrelated colors.
- `images/dashbord-2.png` needs blue-to-green correction if used.

### Recoloring Rules
- Replace blue, purple, cyan, and yellow accents with controlled green variants.
- Keep backgrounds, cards, and chrome neutral.
- Only interactive or data-emphasis zones should glow green.
- Do not create rainbow analytics visuals.

## Motion System
Use motion to create polish and hierarchy, not noise.

### Motion Principles
- sections reveal smoothly on scroll
- dashboard and proof visuals enter with weight and depth
- service cards can lift subtly on hover
- only live indicators should pulse continuously
- avoid too many floating elements in the same viewport

### Motion Inventory
- section reveal: fade + translateY
- dashboard shell entrance: fade + slight scale-up
- service card hover: lift 4px to 6px
- metric counters: subtle staggered reveal
- nav anchor transitions: smooth scroll
- chart bars: single entrance animation, not endless looping

## Copy Direction
The copy should sound like a consulting team that executes, not like a vague agency.

### Tone
- direct
- credible
- technical but readable
- benefit-led
- no inflated hype language

### Messaging Priorities
- we design and build, not just advise
- we combine UX, frontend, AI, and automation
- we ship custom systems around business operations
- we can handle client-facing and internal products

## Skills And Tools Needed
This is the reference for the next implementation pass.

### Required Skills
- Content strategy:
  - needed to restructure the page as a one-page consulting funnel
- Frontend implementation:
  - needed to update React sections, responsive layout, and CTA flow
- Asset recoloring/editing:
  - needed to create brand-safe green dashboard images
- Motion design judgment:
  - needed to keep Framer Motion polished and restrained
- QA/visual review:
  - needed to verify mobile layout and section pacing

### Tools Available In This Session
- Local file editing
- Playwright for browser validation and screenshots
- Existing React/Tailwind/Framer Motion codebase

### Tool Constraint
- Webflow MCP is not available in this session.
- If Webflow-specific publishing or designer-side automation is mandatory, that server must be configured first.
- Until then, implementation should happen in the React codebase and be validated locally.

## Recommended Execution Order
1. Finalize the one-page section order around the consulting offer.
2. Update hero copy to clearly state web design, frontend, AI, and voice agent services.
3. Redesign services section into four strong offer cards.
4. Rework the dashboard section as a proof section, not the whole site identity.
5. Add a capabilities/process section that supports the consulting model.
6. Recolor or selectively use dashboard visuals so they match the brand.
7. Validate desktop and mobile flow.
8. Tune animation intensity after content and layout are stable.

## Acceptance Criteria
- The website is clearly a one-page consulting company site.
- The four core services are visible and easy to understand.
- Dashboard visuals support the offer without dominating the whole message.
- The page communicates both design quality and technical execution.
- Green branding is consistent across visuals and screenshots.
- The final design works on desktop and mobile.
- The implementation path is documented even without Webflow MCP access.

## Next Practical Step
Implement the one-page redesign directly in the React codebase, starting with hero, services, and the dashboard proof section. Then validate the result with Playwright. If Webflow automation is still required afterward, configure a Webflow MCP server and map the same section structure into that environment.
