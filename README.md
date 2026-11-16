# TheAmazonReviewer website (Next.js)

Next.js 15 (App Router), TypeScript, Tailwind CSS. Static output, no database or backend.

## Run
```
npm install
cp .env.example .env.local   # then fill in your details
npm run dev                  # http://localhost:3000
npm run build && npm start   # production
```

## Configure
All business details live in `.env.local` (see `.env.example`) and `src/config/site.ts`:
email, WhatsApp number (digits only, with country code), site URL, address, price per 100 pages.

**Contact form:** create a free form endpoint (Formspree, or Web3Forms with an access key), then set
`NEXT_PUBLIC_FORM_ENDPOINT` (and `NEXT_PUBLIC_FORM_ACCESS_KEY` for Web3Forms). Without an endpoint the
form opens the visitor's email app instead and says so; it never shows a false "sent" message.

## Structure
```
src/app/            layout, home page, /terms, /privacy, sitemap.ts, robots.ts, globals.css
src/components/     Header, Hero, Shelf, Intro, Services, HowItWorks, PricingSection (calculator),
                    WhyUs, Faq, FinalCta, ContactSection (form), Footer, WhatsAppButton, Reveal
src/config/site.ts  business settings
src/lib/pricing.ts  price formula
```
Colors and fonts are CSS variables at the top of `globals.css`; Tailwind is configured with the same palette
for any new components. Set `NEXT_PUBLIC_SITE_URL` to your real domain so canonical links, the sitemap and
robots.txt are correct. Deploy to Vercel, Netlify or any Node host.
