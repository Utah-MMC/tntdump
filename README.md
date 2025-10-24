## Blogging Prompt

Use the 5-Step SEO Blog Post Prompt for every new post.

- Location: `components/prompts/blog-5-step.md`
- Summary: standardizes outline, drafting, and final SEO deliverables.


## Local SEO City Pages (App Router)

This project includes a scalable, white-hat local SEO system using the Next.js App Router.

Key pieces:
- Data-driven cities in `data/cities/cities.csv` with per-city overrides in `data/cities/ut/*.yml`.
- Loaders in `lib/cities.ts` to parse CSV/YAML.
- Structured data builders in `lib/schema.ts` for LocalBusiness, Service, Product, FAQPage.
- Reusable components under `components/city/*`.
- Dynamic route: `app/ut/[city]/dumpster-rental/page.tsx` with SSG via `generateStaticParams()`.
- Hub page: `app/ut/service-areas/page.tsx` groups UT cities by county.
- GA4 contact event hooks in `lib/ga.ts` fired on tel/sms/quote clicks.

Sitemaps: the generator `scripts/generate-type-sitemaps.mjs` includes city pages from `data/cities.json`. Run `npm run generate:cities` after editing CSV/YAML.

### Add a New City
- Add a row to `data/cities/cities.csv` with the provided headers.
- Optionally create `data/cities/ut/<slug>.yml` to enrich content (gallery, testimonials, neighborhoods, permit notes, etc.).
- Run `npm run generate:cities` to create stubs and update `data/cities.json`.
- Build and validate:
  - `npm run build`
  - `npm run validate:cities` (fails if quality gates are not met)

### Validation Rules
- >= 600 total words, >= 250 city-unique words
- If `permit_required = true`, then `permit_url` must be provided
- Landfill/transfer: name and address required
- At least 3 gallery images with city-specific `alt`
- JSON-LD includes LocalBusiness, Service, 4x Product (10/20/30/40), FAQPage
- Adjacent cities: at least 2 (for internal linking)
- CTAs present: `phone_cta`, `sms_cta`, and `quote_url`

### Environment Requirements
- EMAIL_USER and EMAIL_PASS must be set at build time (enforced in `next.config.js`).
