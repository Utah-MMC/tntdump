# TNT Dumpsters Website - Complete Build Guide

**Step-by-Step Documentation for Building from Scratch**

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Initial Setup](#initial-setup)
3. [Project Structure](#project-structure)
4. [Core Configuration Files](#core-configuration-files)
5. [Layout and Root Components](#layout-and-root-components)
6. [Homepage Components](#homepage-components)
7. [City Pages System](#city-pages-system)
8. [API Routes](#api-routes)
9. [SEO and Structured Data](#seo-and-structured-data)
10. [Styling and Design](#styling-and-design)
11. [Forms and User Interaction](#forms-and-user-interaction)
12. [Deployment Configuration](#deployment-configuration)
13. [Prompts Used](#prompts-used)

---

## Project Overview

**Project Name:** TNT Dumpsters  
**Domain:** tntdump.com  
**Technology Stack:**
- Next.js 14.0.4 (App Router)
- TypeScript
- Tailwind CSS
- React 18
- Node.js

**Key Features:**
- Local SEO city pages (data-driven)
- Quote and contact forms
- Blog system
- Service pages
- Dumpster size calculator
- Payment integration (Stripe)
- Email notifications
- Google Analytics integration

---

## Initial Setup

### Step 1: Initialize Next.js Project

**Command:**
```bash
npx create-next-app@14.0.4 tnt-dumpsters --typescript --tailwind --app --no-import-alias
cd tnt-dumpsters
```

**Files Created:**
- `package.json` - Project dependencies
- `tsconfig.json` - TypeScript configuration
- `next.config.js` - Next.js configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `app/` directory structure

### Step 2: Install Dependencies

**Command:**
```bash
npm install @stripe/stripe-js @tailwindcss/typography autoprefixer dotenv js-yaml lucide-react next-sitemap nodemailer npm-run-all papaparse postcss react-google-recaptcha slugify stripe tailwindcss
npm install --save-dev @testing-library/jest-dom @testing-library/react @types/js-yaml @types/nodemailer @types/papaparse @types/react-google-recaptcha eslint eslint-config-next jsdom ts-node vitest
```

**Key Dependencies:**
- `next-sitemap` - Sitemap generation
- `nodemailer` - Email sending
- `stripe` - Payment processing
- `papaparse` - CSV parsing
- `js-yaml` - YAML parsing
- `lucide-react` - Icons

---

## Project Structure

### Directory Layout

```
tnt/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   ├── [cityBase]/         # Dynamic city routes
│   ├── api/                # API routes
│   ├── blog/               # Blog posts
│   ├── dumpsters/          # Dumpster type pages
│   ├── services/           # Service pages
│   └── ...
├── components/             # React components
│   ├── city/               # City page components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   └── ...
├── lib/                    # Utility functions
│   ├── cities.ts           # City data loading
│   ├── schema.ts           # JSON-LD schema builders
│   ├── pricing.ts          # Pricing calculations
│   └── ...
├── data/                   # Data files
│   └── cities/             # City data (CSV + YAML)
├── public/                 # Static assets
│   ├── images/
│   └── ...
├── scripts/                # Build/automation scripts
│   ├── automation/
│   ├── seo/
│   └── ...
└── types/                  # TypeScript type definitions
```

---

## Core Configuration Files

### Step 3: Configure TypeScript (`tsconfig.json`)

**File:** `tsconfig.json`

**Content:**
```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

**Purpose:** TypeScript configuration with path aliases for `@/` imports.

### Step 4: Configure Next.js (`next.config.js`)

**File:** `next.config.js`

**Key Features:**
- Environment variable loading
- Image optimization
- Cache headers
- URL rewrites for legacy routes
- Email credential validation

**Prompt Used:**
> "Configure Next.js for production with image optimization, cache headers, and environment variable validation. Add rewrites for legacy city URLs."

### Step 5: Configure Tailwind CSS (`tailwind.config.js`)

**File:** `tailwind.config.js`

**Key Features:**
- Custom color palette (primary blue, secondary gray)
- Typography plugin
- Content paths for all component files

---

## Layout and Root Components

### Step 6: Create Root Layout (`app/layout.tsx`)

**File:** `app/layout.tsx`

**Key Features:**
- Metadata configuration (title, description, Open Graph, Twitter cards)
- Google Tag Manager integration (deferred loading)
- Organization and LocalBusiness JSON-LD
- FAQPage schema
- Phone click tracking
- Header and Footer components
- Deferred chat widget

**Prompt Used:**
> "Create a Next.js root layout with comprehensive SEO metadata, deferred GTM loading for performance, structured data for Organization and LocalBusiness, and phone click tracking. Include Header and Footer components."

**Sections:**
1. Metadata configuration
2. Viewport settings
3. GTM deferred script
4. Critical CSS inline
5. Favicon links
6. JSON-LD structured data
7. Phone tracking script
8. Header/Footer/Children rendering

### Step 7: Create Header Component (`components/Header.tsx`)

**File:** `components/Header.tsx`

**Key Features:**
- Sticky navigation
- Dropdown menus (Dumpsters, Tools, About, Contact)
- Mobile menu
- Phone number display
- Hover states with delays

**Prompt Used:**
> "Create a responsive header component with dropdown menus, mobile navigation, and phone number display. Use hover delays for better UX."

### Step 8: Create Footer Component (`components/Footer.tsx`)

**File:** `components/Footer.tsx`

**Key Features:**
- Company information
- Service links
- Legal pages (Privacy, Terms)
- Contact information
- Social links (if applicable)

---

## Homepage Components

### Step 9: Create Homepage (`app/page.tsx`)

**File:** `app/page.tsx`

**Key Features:**
- Hero section
- Core services quick links
- Dumpster size cards (15/20/30 yard)
- Process images
- Dumpster calculator
- Cities section
- Services section
- Pricing/FAQ section
- About section
- Contact section

**Prompt Used:**
> "Create a comprehensive homepage with hero section, dumpster size cards, city listings, services overview, pricing information, and multiple CTAs. Use dynamic imports for performance."

### Step 10: Create Hero Component (`components/Hero.tsx`)

**File:** `components/Hero.tsx`

**Key Features:**
- Full-screen hero with background image
- Contact form integration
- Key features grid
- CTA buttons (Phone, Quote)
- Trust indicators
- Responsive design

**Prompt Used:**
> "Create a hero component with background image, contact form, feature highlights, and multiple CTAs. Ensure LCP optimization with priority image loading."

**Form Integration:**
- Connects to `/api/contact`
- Form validation
- Success/error states
- GA4 event tracking

---

## City Pages System

### Step 11: Create City Data System (`lib/cities.ts`)

**File:** `lib/cities.ts`

**Purpose:** Load and parse city data from CSV and YAML files.

**Key Functions:**
- `getAllCities()` - Load all cities from CSV + YAML overrides
- `getCityData(slug)` - Get specific city data
- `getCitySlugParams()` - Generate static params for Next.js
- `getCitiesByCounty()` - Group cities by county

**Data Sources:**
- `data/cities/cities.csv` - Base city data
- `data/cities/ut/{city}.yml` - City-specific overrides

**Prompt Used:**
> "Create a city data loader that reads from CSV and YAML files. Support per-city overrides, gallery images from manifests, and type-safe data structures."

### Step 12: Create City CSV Structure (`data/cities/cities.csv`)

**File:** `data/cities/cities.csv`

**Columns:**
- city, state_code, county
- primary_zips, latitude, longitude
- avg_delivery_eta_hours, cutoff_time
- permit_required, permit_url, permit_notes
- transfer_station_name, transfer_station_address, transfer_station_hours
- disallowed_items_deltas
- busy_seasons_events
- neighborhoods_served
- real_job_examples
- local_testimonials
- price_notes, winter_notes, hoa_common_rule
- adjacent_cities
- phone_cta, sms_cta, quote_url

**Prompt Used:**
> "Create a CSV structure for city data with all necessary fields for local SEO: permits, transfer stations, neighborhoods, testimonials, pricing notes, and CTAs."

### Step 13: Create City YAML Override Example (`data/cities/ut/midvale.yml`)

**File:** `data/cities/ut/midvale.yml`

**Purpose:** City-specific content overrides and enhancements.

**Example Structure:**
```yaml
slug: midvale
city: Midvale
permit_required: true
permit_url: https://midvaleut.gov/permits
transfer_station_name: Salt Lake Valley Landfill
transfer_station_address: 6030 W 1300 S, Salt Lake City, UT
neighborhoods_served:
  - Midvale Center
  - Union Park
adjacent_cities:
  - murray
  - sandy
gallery:
  - src: /images/cities/midvale/dumpster-1.jpg
    alt: Midvale dumpster rental
```

**Prompt Used:**
> "Create YAML override files for city-specific content. Include galleries, testimonials, neighborhoods, and permit information."

### Step 14: Create City Page Route (`app/[cityBase]/service-areas/[city]/page.tsx`)

**File:** `app/[cityBase]/service-areas/[city]/page.tsx`

**Key Features:**
- Dynamic route with `generateStaticParams()`
- Metadata generation per city
- JSON-LD structured data
- City-specific content sections

**Sections:**
1. Intro (H1, description, CTAs)
2. Sizes Table
3. Permit Block
4. Disposal Block
5. Neighborhoods
6. Testimonials
7. FAQ (46+ questions)
8. Nearby Cities
9. CTA Bar

**Prompt Used:**
> "Create a dynamic city page route with static generation, comprehensive metadata, JSON-LD schemas, and city-specific content sections. Ensure 600+ words with 250+ city-unique words."

### Step 15: Create City Page Components (`components/city/`)

**Files:**
- `components/city/SizesTable.tsx` - Dumpster size pricing table
- `components/city/PermitBlock.tsx` - Permit information
- `components/city/DisposalBlock.tsx` - Landfill/transfer station info
- `components/city/Neighborhoods.tsx` - Neighborhoods served
- `components/city/Testimonials.tsx` - Local testimonials
- `components/city/FAQ.tsx` - FAQ section with schema
- `components/city/CTA.tsx` - Call-to-action bar
- `components/city/NearbyCities.tsx` - Adjacent city links
- `components/city/LocalGallery.tsx` - City-specific images

**Prompt Used:**
> "Create modular city page components: sizes table, permit block, disposal info, neighborhoods, testimonials, FAQ with schema, CTAs, and nearby cities. Each component should accept city data props."

### Step 16: Create Schema Builders (`lib/schema.ts`)

**File:** `lib/schema.ts`

**Functions:**
- `buildLocalBusinessLD()` - LocalBusiness schema
- `buildServiceLD()` - Service schema
- `buildProductLD()` - Product schema for each dumpster size
- `buildFaqLD()` - FAQPage schema
- `buildAllLD()` - Combine all schemas

**Prompt Used:**
> "Create JSON-LD schema builders for LocalBusiness, Service, Product (for each dumpster size), and FAQPage. Ensure schema.org compliance and proper areaServed data."

---

## API Routes

### Step 17: Create Quote API (`app/api/quote/route.ts`)

**File:** `app/api/quote/route.ts`

**Features:**
- POST endpoint for quote requests
- Form validation
- reCAPTCHA verification (optional)
- Email sending via Nodemailer
- Error handling

**Email Configuration:**
- Uses environment variables (EMAIL_USER, EMAIL_PASS)
- Sends to sales@tntdump.com
- CC and BCC recipients
- HTML email template

**Prompt Used:**
> "Create a quote API endpoint that validates form data, optionally verifies reCAPTCHA, sends formatted HTML emails via Nodemailer, and handles errors gracefully."

### Step 18: Create Contact API (`app/api/contact/route.ts`)

**File:** `app/api/contact/route.ts`

**Features:**
- Similar to quote API
- Handles contact form submissions
- Email notifications
- Form type tracking

**Prompt Used:**
> "Create a contact API endpoint similar to quote API but for general contact form submissions. Include form type tracking in emails."

### Step 19: Create Payment API (`app/api/payment/route.ts`)

**File:** `app/api/payment/route.ts`

**Features:**
- Stripe payment processing
- Payment intent creation
- Webhook handling
- Order confirmation

**Prompt Used:**
> "Create a Stripe payment API endpoint for processing dumpster rental payments. Include payment intent creation and webhook handling for order confirmations."

---

## SEO and Structured Data

### Step 20: Create Sitemap Generation (`scripts/automation/generate-type-sitemaps.mjs`)

**File:** `scripts/automation/generate-type-sitemaps.mjs`

**Purpose:** Generate sitemaps for different content types (pages, cities, blog posts).

**Features:**
- Reads city data
- Generates city page URLs
- Creates separate sitemap files
- Integrates with next-sitemap

**Prompt Used:**
> "Create a sitemap generator script that reads city data and generates separate sitemap files for pages, cities, and blog posts. Integrate with next-sitemap."

### Step 21: Configure Sitemap (`next-sitemap.config.js`)

**File:** `next-sitemap.config.js`

**Features:**
- Site URL configuration
- Sitemap index generation
- Robots.txt generation
- Exclude patterns

**Prompt Used:**
> "Configure next-sitemap to generate sitemap index, individual sitemaps, and robots.txt. Include all city pages and blog posts."

---

## Styling and Design

### Step 22: Create Global Styles (`app/globals.css`)

**File:** `app/globals.css`

**Features:**
- Tailwind directives
- Custom utility classes
- Container styles
- Button styles
- Typography overrides

**Prompt Used:**
> "Create global CSS with Tailwind directives, custom container classes, button styles, and typography overrides. Ensure consistent spacing and colors."

### Step 23: Create Utility Components

**Files:**
- `components/LazyImage.tsx` - Lazy-loaded images
- `components/PerformanceMonitor.tsx` - Performance tracking
- `components/DeferredChatWidget.tsx` - Deferred chat loading

**Prompt Used:**
> "Create utility components for lazy image loading, performance monitoring, and deferred chat widget loading to improve Core Web Vitals."

---

## Forms and User Interaction

### Step 24: Create Quote Form (`components/QuoteForm.tsx`)

**File:** `components/QuoteForm.tsx`

**Features:**
- Multi-step form (optional)
- Field validation
- reCAPTCHA integration
- Success/error states
- GA4 tracking

**Prompt Used:**
> "Create a comprehensive quote form component with validation, reCAPTCHA, error handling, and GA4 event tracking. Include all necessary fields for dumpster rental quotes."

### Step 25: Create Contact Form (`components/Contact.tsx`)

**File:** `components/Contact.tsx`

**Features:**
- Contact form fields
- Service selection
- Message textarea
- Form submission handling

**Prompt Used:**
> "Create a contact form component that submits to the contact API, includes validation, and provides user feedback."

### Step 26: Create Dumpster Calculator (`components/DumpsterCalculator.tsx`)

**File:** `components/DumpsterCalculator.tsx`

**Features:**
- Interactive size calculator
- Project type selection
- Size recommendations
- CTA to quote form

**Prompt Used:**
> "Create an interactive dumpster size calculator component that recommends sizes based on project type and provides a CTA to get a quote."

---

## Deployment Configuration

### Step 27: Create Environment Variables (`env.example`)

**File:** `env.example`

**Variables:**
- EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS
- RECAPTCHA_SITE_KEY, RECAPTCHA_SECRET_KEY
- STRIPE_PUBLIC_KEY, STRIPE_SECRET_KEY
- NEXT_PUBLIC_SITE_URL
- GTM_ID (optional)

**Prompt Used:**
> "Create an environment variables example file with all necessary configuration for email, reCAPTCHA, Stripe, and site URL."

### Step 28: Create Deployment Scripts

**Files:**
- `package.json` scripts section
- Build scripts
- Sitemap generation
- Validation scripts

**Scripts:**
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "postbuild": "npm run sitemap",
    "start": "next start",
    "sitemap": "run-s sitemap:types sitemap:index",
    "sitemap:types": "node scripts/automation/generate-type-sitemaps.mjs",
    "sitemap:index": "next-sitemap --config next-sitemap.config.js",
    "generate:cities": "ts-node scripts/generate-city-pages.ts data/cities/cities.csv",
    "validate:cities": "ts-node scripts/validate-city-pages.ts"
  }
}
```

**Prompt Used:**
> "Create npm scripts for development, building, sitemap generation, city page generation, and validation."

---

## Prompts Used

### City Page Builder Prompt

**Location:** `scripts/seo/city-page-builder.md`

**Full Prompt:**
```
You are an elite full-stack SEO engineer. Implement a scalable, white-hat local SEO system for TNT Dump (tntdump.com) that creates high-quality, unique city pages and avoids doorway/spun content. Do ALL tasks below in one end-to-end change with clean commits.

# High-level goals
- Rank for queries like "dumpster rental {city} utah" with unique, useful city pages.
- Avoid black-hat pitfalls (no doorway pages, no spun text, no fake addresses).
- Make it data-driven (CSV/YAML) + templatized, yet with substantial city-unique content.
- Ship two production-ready pages now: Midvale, UT and Herriman, UT.
- Add a "Service Areas" hub and internal cross-links.
- Add JSON-LD (LocalBusiness, Service, Product for dumpster sizes, FAQPage).
- Add GA4 event tracking for CTAs (tel, SMS, quote).
- Keep Core Web Vitals in mind (fast, compressed images, lazyload).

# Guardrails (MUST follow)
- Each city page must include ≥ 600–900 words total, with ≥ 250–300 words that are city-unique beyond just the city name.
- Include city-specific: permit rules/links, landfill/transfer station info, neighborhoods/ZIPs, delivery ETA/cutoffs, seasonal notes (snow/steep driveways where relevant), 1–2 city-specific testimonials (placeholder OK if real ones unavailable), and at least 3 locally shot/representative photos (use placeholders if needed, but name and alt are city-specific).
- No keyword stuffing. No hidden text. No fabricated addresses or GBPs.
- Use one legitimate GBP (service-area business). Do not create fake "offices".

# Data model (for all stacks)
Create /data/cities/ with both a CSV and per-city YAMLs:
- /data/cities/cities.csv with headings: city,state_code,county,primary_zips,avg_delivery_eta_hours,cutoff_time,permit_required,permit_url,permit_notes,transfer_station_name,transfer_station_address,transfer_station_hours,disallowed_items_deltas,busy_seasons_events,neighborhoods_served,real_job_examples,local_testimonials,price_notes,winter_notes,hoa_common_rule,adjacent_cities,latitude,longitude,phone_cta, sms_cta, quote_url
- Also allow per-city YAMLs under /data/cities/{state}/{city}.yml with same fields for overrides.

# Content template (rendered per city)
Create a reusable page template with these sections (each backed by data fields + optional manual content):
1) H1: "Dumpster Rentals in {City, Utah}"
2) Trust badges row (licensed/insured, years in UT).
3) Sizes & Pricing table: 10/20/30/40-yard with tonnage, typical projects, price range, overage/day fees; include any city-specific notes.
4) "How it works" (3 steps).
5) City-specific **Permits & Placement** (use permit_* fields; external link).
6) **Disposal & Landfill/Transfer** info (name, address, typical hours; what can/can't go—include disallowed deltas).
7) **Neighborhoods & ZIPs we serve** (bulleted) and candid coverage notes (out-of-range honesty).
8) **Local photos** (3+) with alt like "{City} {job-type} – 20-yard roll-off on driveway".
9) **Local testimonials** (1–2).
10) **FAQ** (4–6 Q&As relevant to the city: permits timing, alley placement, HOA rules, winter/slope tips). Mark up with FAQPage schema.
11) **CTA bar** (Call tel:, SMS sms:, Get a Quote link). Mention same-day by cutoff where applicable.

# Routing & URLs
- Canonical path format: /ut/{city}/dumpster-rental/ (lowercase; hyphenate).
- Create a **Service Areas hub** at /ut/service-areas/ listing all UT cities, grouped by county; each entry links to its city page with a one-sentence local blurb.
- From each city page, link to 2–3 adjacent cities (from `adjacent_cities`).
- Ensure sitemap includes the hub and all city pages; update robots if needed.

# Structured data (JSON-LD)
For each city page:
- LocalBusiness (service-area): name, url, telephone, sameAs (if social), areaServed (city + zips), geo (lat/long), hasOfferCatalog/hasMap optional.
- Service for "Dumpster Rental".
- Product for each dumpster size (name, description, offers priceRange, availability "InStock").
- FAQPage with the on-page Q&A.
Implement via a small utility that merges site-wide brand details + city data. Validate with schema.org rules.

# Internal linking
- Add contextual links from relevant blog posts (if present) to their matching city page (lightweight heuristic: if post mentions city name, add a short "Serving {City}" box with a link).
- On each city page, a "Nearby cities" component that lists adjacent cities.

# Tracking
- Add GA4 event tracking for:
  - Clicks on tel: links → event name "contact_call"
  - Clicks on sms: links → "contact_sms"
  - Quote button clicks → "contact_quote"
Include event params: city, state, page_path, cta_type.

# Performance/UX
- Optimize images (next/image if Next.js; otherwise responsive img + lazy).
- Ensure CLS-safe layout for hero + table.
- Lighthouse/LCP budget: target LCP < 2.5s on mobile. If image heavy, use blur placeholders.

# Implementation details by stack

## If Next.js (app router)
- Create: /app/ut/[city]/dumpster-rental/page.tsx (or /pages if pages router).
- Create /lib/cities.ts to load CSV/YAML (use gray-matter or js-yaml; papaparse for CSV).
- Create components:
  - CityPage.tsx (composes all sections)
  - SizesTable.tsx, PermitBlock.tsx, DisposalBlock.tsx, Neighborhoods.tsx, LocalGallery.tsx, Testimonials.tsx, FAQ.tsx, CTA.tsx, NearbyCities.tsx
- Create /lib/schema.ts to output JSON-LD for LocalBusiness, Service, Product, FAQPage.
- Add /app/ut/service-areas/page.tsx listing cities from data.
- Generate static params (or getStaticPaths) from CSV to prebuild pages.
- Update next-sitemap config to include new routes (or create one if missing).

# QA checklist (enforce; fail build if missing)
Write a small script /scripts/validate-city-pages.ts that:
- Ensures each city page has ≥ 600 words and ≥ 250 city-unique words.
- Has a valid permit_url when permit_required = true.
- Has landfill name/address.
- Has at least 3 images with city-specific alt text.
- Emits JSON-LD blocks for LocalBusiness, Service, Product, FAQPage.
- Links to the hub and to ≥ 2 adjacent cities.
- Exposes CTA links (tel, sms, quote).
Run this in CI (or npm run validate:city-pages) and block commit if failing.

Begin now. Make minimal, well-organized commits with descriptive messages.
```

### Homepage SEO Prompt

**Location:** `scripts/seo/homepage-keywords.md`

**Purpose:** Optimize homepage for target keywords.

**Key Elements:**
- Primary keywords: "dumpster rental", "roll off dumpster rental"
- Secondary keywords: "dumpster rental price", "dumpster rental quote"
- Local modifiers: "Salt Lake County", "Utah County"
- Service keywords: "same day dumpster rental", "delivery dumpster rental"

### Blog Post Prompt

**Location:** `scripts/prompts/seo/blog-5-step.md`

**5-Step Process:**
1. Research and outline
2. Draft content
3. SEO optimization
4. Internal linking
5. Final review

---

## Additional Components

### Step 29: Create Service Pages

**Files:**
- `app/services/residential/page.tsx`
- `app/services/commercial/page.tsx`
- `app/services/industrial/page.tsx`
- `app/services/concrete/page.tsx`

**Prompt Used:**
> "Create service pages for residential, commercial, industrial, and concrete dumpster rentals. Each page should include service-specific content, pricing, and CTAs."

### Step 30: Create Blog System

**Files:**
- `app/blog/page.tsx` - Blog listing
- `app/blog/[slug]/page.tsx` - Individual blog posts

**Features:**
- Blog post listing
- Individual post pages
- SEO optimization
- Internal linking to city pages

**Prompt Used:**
> "Create a blog system with listing page and individual post pages. Include SEO metadata, internal linking to city pages, and related posts."

### Step 31: Create Calculator Page

**File:** `app/calculator/page.tsx`

**Features:**
- Interactive size calculator
- Project type selection
- Visual size comparisons
- CTA to quote form

**Prompt Used:**
> "Create a dumpster size calculator page with interactive project selection, size recommendations, and visual comparisons."

---

## Testing and Validation

### Step 32: Create Validation Script (`scripts/validate-city-pages.ts`)

**File:** `scripts/validate-city-pages.ts`

**Validations:**
- Word count (≥ 600 total, ≥ 250 city-unique)
- Permit URL when required
- Landfill information
- Gallery images (≥ 3)
- JSON-LD schemas
- Internal links (≥ 2 adjacent cities)
- CTA links present

**Prompt Used:**
> "Create a validation script that checks city pages for word count, required fields, JSON-LD schemas, images, and internal links. Fail build if validation fails."

---

## Performance Optimization

### Step 33: Optimize Images

**Strategies:**
- Use Next.js Image component
- WebP/AVIF formats
- Lazy loading
- Responsive sizes
- Priority for above-fold images

**Prompt Used:**
> "Optimize all images using Next.js Image component with WebP/AVIF formats, lazy loading, and responsive sizes. Set priority for hero images."

### Step 34: Defer Third-Party Scripts

**Strategies:**
- Defer GTM loading
- Lazy load chat widget
- Use requestIdleCallback
- Load on user interaction

**Prompt Used:**
> "Defer all third-party scripts (GTM, chat widgets, analytics) until user interaction or idle time. Use requestIdleCallback with timeout fallback."

---

## Final Steps

### Step 35: Create README

**File:** `README.md`

**Sections:**
- Project overview
- Setup instructions
- Environment variables
- Build commands
- City page creation guide
- Validation rules

### Step 36: Create Deployment Guide

**File:** `HOSTGATOR_DEPLOYMENT_GUIDE.md`

**Sections:**
- Hosting setup
- Environment configuration
- Build process
- Domain configuration
- SSL setup

---

## Summary

This guide documents the complete build process for the TNT Dumpsters website. The site is built with:

- **Next.js 14** (App Router) for server-side rendering and static generation
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Data-driven city pages** for local SEO
- **Comprehensive SEO** with structured data
- **Form handling** with email notifications
- **Payment integration** with Stripe
- **Performance optimization** for Core Web Vitals

**Key Features:**
- 30+ city pages with unique content
- Blog system
- Service pages
- Quote and contact forms
- Dumpster calculator
- Payment processing
- Email notifications
- Analytics integration

**Total Files Created:** 100+ files across components, pages, API routes, utilities, and configuration.

---

## Quick Reference: File Creation Order

1. Initialize Next.js project
2. Install dependencies
3. Configure TypeScript, Next.js, Tailwind
4. Create root layout and metadata
5. Create Header and Footer
6. Create homepage and Hero component
7. Set up city data system (CSV, YAML, loader)
8. Create city page route and components
9. Create API routes (quote, contact, payment)
10. Create service pages
11. Create blog system
12. Add SEO and structured data
13. Create forms and calculator
14. Add validation scripts
15. Optimize performance
16. Create documentation

---

**End of Build Guide**

