<h1 align="center">Portfolio — Next.js (App Router)</h1>

<p align="center">Personal portfolio built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. It showcases projects, skills, credentials, and includes a contact form powered by a Next.js API route.</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-black?logo=nextdotjs&logoColor=white" alt="Next.js Badge" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white" alt="TypeScript Badge" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind Badge" />
  <img src="https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white" alt="Vercel Badge" />
  
</p>

<p align="center">
  <a href="https://chigazos-portfolio.vercel.app">Live Demo</a>
</p>

## Tech Stack

- Next.js (App Router) for routing and server-side rendering
- React 18 with TypeScript for type-safe UI development
- Tailwind CSS + PostCSS for styling
- Next.js API route for email sending via Nodemailer
- Deployed on Vercel

## Features

- Responsive layout across mobile and desktop
- Project gallery and skills showcase
- Credentials and about sections
- Contact form using API route at `/api/contact`
- Custom 404 page

## Getting Started

Prerequisites: Node.js 18+ and Git

1. Clone the repo
   `git clone <this-repo-url> && cd next-app`
2. Install dependencies
   `npm install`
3. Configure environment variables (see below)
4. Run the dev server
   `npm run dev`
5. Open the app at `http://localhost:3000`

## Environment Variables

This app sends emails from the contact form using a Gmail transporter via Nodemailer. Create a `.env.local` file inside `next-app/` with:

```
EMAIL_USER="your.email@example.com"
EMAIL_PASS="your-app-password"
```

Notes:
- Use a Gmail App Password (recommended) or SMTP creds.
- Never commit real secrets. Use `.env.local`, which Next.js ignores by default.

## Project Structure (Next.js)

```bash
next-app/
├── app/
│   ├── api/contact/route.ts     # API route for contact form (Nodemailer)
│   ├── projects/page.tsx        # Projects page
│   ├── globals.css              # Global styles (Tailwind base)
│   ├── layout.tsx               # Root layout
│   ├── not-found.tsx            # Custom 404 page
│   └── page.tsx                 # Home page
├── components/                  # Reusable UI components
│   ├── About.tsx
│   ├── Banner.tsx
│   ├── Credentials.tsx
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   ├── ProjectGallery.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   └── Timeline.tsx
├── public/                      # Static assets and icons
├── postcss.config.mjs           # Tailwind/PostCSS config
├── next.config.mjs              # Next.js config
├── tsconfig.json                # TypeScript config
├── package.json                 # Scripts and dependencies
└── README.md                    # This file
```

## Available Scripts (from `next-app/`)

- `npm run dev`: Start dev server on `localhost:3000`
- `npm run build`: Create production build
- `npm start`: Run production server locally

## Deployment

- Vercel: Import the `next-app` directory as the project root.
- Set `EMAIL_USER` and `EMAIL_PASS` as environment variables in the Vercel project settings.

## License

See `LICENSE` for details.

## Contact

- Portfolio: https://chigazos-portfolio.vercel.app
- LinkedIn: https://www.linkedin.com/in/chigazo-graham

Feel free to fork this project and adapt it for your own portfolio.
