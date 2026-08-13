# User Survey

## 1. Overview

The ScoreZone design process began with a user survey to understand how people follow football information, what content they prioritize, and what interface characteristics they expect from a football website.

- **Number of respondents:** 79
- **Method:** Online questionnaire
- **Target:** People who follow football/sports information
- **Purpose:** Inform the information architecture, content hierarchy, visual direction, and interaction design of ScoreZone.

The survey focused on four main areas:

1. Usage habits
2. Information needs and user experience
3. Visual and interface preferences
4. Interaction and personalization preferences

---

## 2. Survey Structure

### Part 1 — Usage Habits

The first section explored how frequently respondents follow sports news, where they get information, and which devices they use.

Questions included:

- How often do you follow sports news?
  - Daily
  - Several times per week
  - Occasionally
  - Rarely

- Where do you usually follow sports information?
  - Official websites
  - Social media
  - Mobile applications
  - TV

- Which device do you usually use to access sports websites?
  - Phone
  - Laptop/Desktop
  - Both

---

### Part 2 — Needs & Experience

This section focused on the information users look for and the problems they encounter when using sports websites.

#### Information users want

Respondents were asked what they usually look for when visiting a football website, including:

- Live Match Center / fixtures & results
- Standings
- News & video highlights
- Detailed club & player information
- Match/event notifications
- Transfers / transfer news

#### Interface features

Respondents evaluated features that could improve the experience, such as:

- Timeline-based match information
- Advanced filters
- Statistical visualizations
- Match notifications
- Fixtures/results organized by preference
- Match highlights/video

#### UX pain points

The survey also asked what would make users leave a sports website immediately:

- Complicated or difficult-to-understand menus
- Small text or low contrast
- Information hierarchy that is difficult to understand
- Too much data/text displayed on one screen

---

## 3. Visual Design Preferences

The survey included visual examples so respondents could evaluate different design directions instead of choosing only from abstract descriptions.

### Color direction

Respondents compared several visual directions:

- Red / Orange — energetic and eye-catching
- Blue — professional and trustworthy
- Black / Dark — modern and strong
- Light / Neutral — simple and easy to read

**Key result:** Blue was the most preferred primary direction, selected by **41.8%** of respondents.

This supported ScoreZone's blue-based visual identity.

### Typography

Respondents compared different type styles for reading statistics and scores:

- Bold sans-serif
- Rounded modern sans-serif
- Traditional serif
- Narrow horizontal type

The survey helped establish typography as part of the visual hierarchy rather than treating font choice as decoration.

### Overall interface style

Respondents compared:

- Modern / Neumorphism / Glassmorphism
- Clean / Minimalist
- Bold / Sporty
- News / Editorial

**Key result:** The **Bold / Sporty** direction was the most preferred, selected by **55.7%** of respondents.

### First-screen / homepage composition

Respondents evaluated three homepage approaches:

- **Hero Banner:** A large image or match moment immediately visible
- **News / Magazine:** Main story combined with supporting news
- **Dashboard:** Direct presentation of competition or match data

**Key result:** The **Hero Banner** direction was preferred by **64.6%** of respondents.

This influenced the homepage composition and the use of prominent visual content.

---

## 4. Interaction Preferences

The final section explored additional interface interactions and personalization features.

Respondents were asked about:

- Dark / Light mode
- Drag & Drop for rearranging content
- Pinned mini-scoreboard
- Collapse / Expand for less important statistics
- Other interaction ideas

The survey also included an open-ended question asking respondents which football website or club interface they found impressive.

### Animation

Respondents were asked about animation usage:

- Prefer more animation for a dynamic feeling
- Prefer limited animation to avoid distraction
- Prefer no animation

**Key result:** **49.4%** preferred less animation, while **46.8%** preferred a moderate/limited level of animation.

This supported a restrained approach to motion in ScoreZone.

---

## 5. Key Findings

| Finding | Result | Design implication |
|---|---:|---|
| Social media is a major information source | **82.3%** | Make ScoreZone useful for quickly finding structured information |
| News & highlights are highly important | **74.7%** | Give news and highlights strong homepage visibility |
| Fixtures & results are frequently needed | **51.9%** | Provide a dedicated fixtures/results experience |
| Standings are frequently needed | **49.4%** | Make competition standings easy to access |
| Advanced filtering is valued | **50.6%** | Provide clear filters for competitions and data |
| Data visualization is valued | **49.4%** | Use charts/visual summaries where they improve understanding |
| Complicated menus are a major UX problem | **32.9%** | Keep navigation simple and predictable |
| Small/low-contrast text is a problem | **25.3%** | Prioritize readable typography and sufficient contrast |
| Bold/Sporty visual style is preferred | **55.7%** | Use a strong but controlled sports visual language |
| Blue is the preferred color direction | **41.8%** | Use blue as the primary brand color |
| Hero Banner is preferred | **64.6%** | Give the homepage a prominent visual entry point |
| Less animation is preferred | **49.4%** | Avoid unnecessary motion and visual noise |

---

## 6. From Research to Design

The survey results were translated into concrete ScoreZone design decisions:

### Content

Users showed strong interest in news, highlights, fixtures, results, and standings. These became core sections of the information architecture.

### Navigation

Because complicated menus were identified as a common pain point, ScoreZone uses a clear navigation structure with predictable competition, news, match, and account areas.

### Visual Direction

The combination of the **Bold / Sporty** preference and **blue** color preference informed the visual identity:

- Blue primary palette
- Strong headings and hierarchy
- Football imagery
- Clear cards and data blocks
- Controlled visual emphasis

### Homepage

The preference for a **Hero Banner** influenced the homepage to present a prominent visual entry point before users move into detailed football information.

### Motion

Because many respondents preferred less animation, interaction design avoids excessive motion and focuses on useful states such as hover, dropdown, modal, toast, and feedback interactions.

---

## 7. Survey Limitations

The survey was useful for establishing initial design direction, but it has limitations:

- The sample consisted of **79 respondents**, so it should not be treated as representative of all football fans.
- Responses describe stated preferences rather than observed behavior.
- Visual preference questions depend on the examples shown to respondents.
- A larger usability study would be needed to validate the final interface through actual tasks.

Therefore, the survey was used as a **design input**, not as the sole basis for every UI decision.

---

## 8. Related Documentation

- [Competitive Analysis](competitive-analysis.md)
- [Design System](../design-system/)
- [Wireframes](../wireframes/)
