# AutoDiag Chennai — Setup Guide

## 1. Prerequisites

- **Node.js** 20 or later (download from nodejs.org)
- **npm** (comes with Node.js)
- **Git** (optional, for version control)

---

## 2. Install Dependencies

```bash
cd autosoftchennai
npm install
```

---

## 3. Configure Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Edit `.env.local` and fill in your values:

| Variable | What to Set |
|---|---|
| `RESEND_API_KEY` | Get from https://resend.com (free plan allows 100 emails/day) |
| `CONTACT_EMAIL` | Your email address to receive enquiries |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Your WhatsApp number with country code, no `+` (e.g. `919876543210`) |
| `NEXT_PUBLIC_COMPANY_NAME` | Your actual company name |
| `NEXT_PUBLIC_SITE_URL` | Your live domain (e.g. `https://yoursite.com`) |

---

## 4. Run Locally

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

---

## 5. Customise the Content

### Company name & branding
- Change `NEXT_PUBLIC_COMPANY_NAME` in `.env.local`
- Update the logo text in `components/layout/Navbar.tsx` and `Footer.tsx`
- Replace colours in `app/globals.css` under `@theme`

### WhatsApp number
- Set `NEXT_PUBLIC_WHATSAPP_NUMBER` in `.env.local`
- The floating widget, hero buttons, and footer all use this variable automatically

### Email address
- Set `CONTACT_EMAIL` in `.env.local`
- All enquiry form submissions will be sent to this address

### Services
- Edit `lib/data/services.ts` — add, remove, or modify services

### Brands
- Edit `lib/data/brands.ts` — add or remove supported brands

### News / Blog posts
- Edit `lib/data/news.ts` — add your own posts
- Add a `{ slug, title, excerpt, content, date, category, readingTime, author }` object

### Real images
- Add images to `public/images/` folder
- Use Next.js `<Image>` component: `<Image src="/images/yourfile.jpg" alt="..." width={800} height={400} />`
- For hero background: replace the CSS pattern in `Hero.tsx` with `<Image>`

---

## 6. Deploy to Vercel (Free)

1. Push your project to a GitHub repository
2. Go to https://vercel.com and sign in with GitHub
3. Click **Add New Project** → Import your repo
4. Add all environment variables from `.env.local` in the Vercel project settings
5. Click **Deploy** — your site will be live at `yourproject.vercel.app`

### Custom domain
In Vercel → Project → Settings → Domains, add your domain and follow the DNS instructions.

---

## 7. Email Setup (Resend)

1. Sign up at https://resend.com
2. Verify your sending domain (the domain part of your `CONTACT_EMAIL`)
3. Create an API key in Resend dashboard
4. Paste it as `RESEND_API_KEY` in your environment variables
5. In `lib/actions/contact.ts`, update the `from:` address to use your verified domain

Free Resend plan: **100 emails/day, 3,000/month** — sufficient for most small businesses.

---

## 8. Add Google Analytics (Optional)

Install next/third-parties:
```bash
npm install @next/third-parties
```

In `app/layout.tsx`, add:
```tsx
import { GoogleAnalytics } from '@next/third-parties/google'
// Inside <body>:
<GoogleAnalytics gaId="G-XXXXXXXXXX" />
```

---

## 9. Production Build

```bash
npm run build
npm run start
```

---

## Project Structure

```
autosoftchennai/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (nav, footer, theme)
│   ├── page.tsx            # Home page
│   ├── services/           # Services page
│   ├── products/           # Products page
│   ├── news/               # News listing + article pages
│   ├── about/              # About page
│   └── contact/            # Contact page
├── components/
│   ├── layout/             # Navbar & Footer
│   ├── home/               # Hero, BrandCarousel, etc.
│   ├── contact/            # Enquiry form
│   ├── ui/                 # Reusable UI primitives
│   ├── WhatsAppWidget.tsx  # Floating WhatsApp button
│   └── ThemeToggle.tsx     # Light/dark toggle
├── lib/
│   ├── actions/contact.ts  # Server Action for form submission
│   ├── data/               # Static data (services, brands, news)
│   ├── utils.ts            # Utility helpers
│   └── validations.ts      # Zod schemas + form options
└── public/images/          # Add your images here
```
