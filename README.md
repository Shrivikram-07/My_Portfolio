# Shri Vikram M — Technology Developer Portfolio

A developer portfolio website for **Shri Vikram M** (Technology Developer / Software Engineer), engineered with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

Designed in accordance with modern engineering aesthetics (Linear, Vercel, Raycast) with deep-dark obsidian themes, subtle technical telemetry, interactive case study pipelines, and verified resume credentials.

---

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS with custom dark tokens & animations
- **Animations**: Framer Motion (restrained micro-interactions)
- **Icons**: Lucide React
- **Typography**: Responsive system typography with monospace accents
- **Deployment Target**: Vercel (Zero configuration needed)

---

## 📁 Project Architecture & Folder Structure

```
Portfolio/
├── app/
│   ├── layout.tsx                # Global layout, SEO, Open Graph & Twitter meta tags
│   ├── page.tsx                  # Main single-page developer portfolio
│   ├── globals.css               # Tailwind setup, tech-grid backgrounds, dark scrollbar
│   ├── icon.svg                  # Custom modern monogram favicon
│   ├── robots.ts                 # Dynamic robots.txt generator
│   ├── sitemap.ts                # Dynamic sitemap.xml generator
│   └── projects/
│       └── [slug]/
│           └── page.tsx          # Standalone deep-dive case study routes
├── components/
│   ├── Navbar.tsx                # Sticky glass navbar with scroll spy & mobile menu
│   ├── Hero.tsx                  # Engineering hero with CTAs, telemetry & status pill
│   ├── HeroBackground.tsx        # High-performance canvas node network visual
│   ├── About.tsx                 # Developer profile & dual education cards (SRM & IIT Madras)
│   ├── Projects.tsx              # Featured case study grid with category filter
│   ├── ProjectCard.tsx           # Rich case study card with interactive architecture previews
│   ├── ProjectModal.tsx          # In-page deep case study inspector modal
│   ├── Experience.tsx            # Vertical engineering timeline (TANSAM & SarlaYash)
│   ├── Skills.tsx                # Categorized technical competencies with search
│   ├── Achievements.tsx          # Hackathon wins (AI Conclave 1st Place, SIH Finalist, DEFY'26)
│   ├── Certifications.tsx        # Compact verified certifications (NPTEL, IBM)
│   ├── Contact.tsx               # Direct coordinates, clipboard copy & dispatch form
│   └── Footer.tsx                # Minimalist footer with system telemetry
├── data/
│   ├── profile.ts                # Bio, title, contact coordinates, social URLs, education
│   ├── projects.ts               # Case study definitions, pipelines, architecture & outcomes
│   ├── experience.ts             # Work history, roles, responsibilities, tech stacks
│   ├── skills.ts                 # Grouped technical skill categories
│   ├── achievements.ts           # Hackathon accolades and honors
│   └── certifications.ts         # Verified certifications
├── lib/
│   ├── types.ts                  # TypeScript interfaces for all data models
│   └── utils.ts                  # Utility helpers and clsx/tailwind-merge
├── public/
│   └── resume.pdf                # Verified resume document downloadable from navbar & hero
├── tailwind.config.ts            # Custom colors, glows, animations, and typography tokens
├── tsconfig.json                 # TypeScript compiler configuration
└── package.json                  # NPM scripts & dependencies
```

---

## 🛠️ How to Run Locally

### Prerequisites
- Node.js 18+ (tested on Node.js 24+)
- npm or pnpm or yarn

### 1. Install dependencies
```bash
npm install
```

### 2. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production
```bash
npm run build
```

### 4. Run production build locally
```bash
npm run start
```

---

## ✍️ Where to Edit Portfolio Content

All content is cleanly decoupled into local TypeScript files inside the `data/` directory. You do not need to alter component code to update your details:

| File | Content Controlled |
|---|---|
| [`data/profile.ts`](file:///c:/Users/User/OneDrive/Desktop/Portfolio/data/profile.ts) | Your name, title, bio, education, phone, email, location, GitHub, LinkedIn, and LeetCode links. |
| [`data/projects.ts`](file:///c:/Users/User/OneDrive/Desktop/Portfolio/data/projects.ts) | Featured projects, case study pipelines, problem/solution statements, architecture points, challenges, and outcomes. |
| [`data/experience.ts`](file:///c:/Users/User/OneDrive/Desktop/Portfolio/data/experience.ts) | Roles, internships, dates, organizations, and bulleted achievements. |
| [`data/skills.ts`](file:///c:/Users/User/OneDrive/Desktop/Portfolio/data/skills.ts) | Categorized programming languages, frontend/backend frameworks, databases, and ML tools. |
| [`data/achievements.ts`](file:///c:/Users/User/OneDrive/Desktop/Portfolio/data/achievements.ts) | Hackathon rankings, organizers, and descriptions. |
| [`data/certifications.ts`](file:///c:/Users/User/OneDrive/Desktop/Portfolio/data/certifications.ts) | NPTEL / IBM / Coursera certification badges. |
| [`public/resume.pdf`](file:///c:/Users/User/OneDrive/Desktop/Portfolio/public/resume.pdf) | Replace with your latest PDF resume file anytime. |

---

## 🌐 How to Deploy to Vercel

### Method 1: Deploy via Vercel Git Integration (Recommended)
1. Initialize git and commit your files:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit of developer portfolio"
   ```
2. Create a new repository on your GitHub account (`https://github.com/Shrivikram-07/portfolio`) and push:
   ```bash
   git remote add origin https://github.com/Shrivikram-07/portfolio.git
   git branch -M main
   git push -u origin main
   ```
3. Visit [vercel.com](https://vercel.com), click **Add New Project**, select the `portfolio` repository, and click **Deploy**. Vercel will automatically detect Next.js and deploy with zero configuration.

### Method 2: Deploy using Vercel CLI
```bash
npx vercel
```
Follow the interactive prompts to link your project and deploy directly.
