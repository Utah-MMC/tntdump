# TNT Dumpsters - SEO Implementation Plan
## Strategic Roadmap to Outrank Icon Dumpsters

**Created:** December 10, 2025
**Target:** Close the 440+ page gap with Icon Dumpsters
**Approach:** Batched implementation for systematic progress

---

## Current State Analysis

### What We Have ✅
- **Blog Posts:** 7 posts (well-structured, good templates)
- **City Pages:** 31 pages (dynamic routing via `[cityBase]/service-areas/[city]`)
- **Service Pages:** 8+ pages (residential, commercial, industrial, concrete, etc.)
- **Calculators:** 1 main calculator
- **Tech Stack:** Next.js 14, TypeScript, Tailwind CSS
- **Performance:** Optimized, good Lighthouse scores

### The Gap 📊
- **Blog Posts:** Need 125+ more (Icon has 132)
- **City Variations:** Need 257+ pages (size-specific, service-specific)
- **Calculators:** Need 13+ more tools
- **Service Pages:** Need 30+ more variations
- **Total Gap:** 440+ pages

---

## Implementation Strategy: BATCHED APPROACH

We'll work in focused batches, completing each fully before moving to the next. This ensures quality, prevents overwhelm, and allows for measurable progress.

---

## 🚀 BATCH 1: High-Impact Blog Posts (Week 1-2)
**Goal:** Create 5 high-priority blog posts targeting cost/pricing keywords

### Blog Posts to Create:
1. **"How Much Does a Dumpster Rental Cost in 2025?"**
   - Primary Keyword: "dumpster rental cost"
   - Secondary: "how much does a dumpster cost", "dumpster rental prices"
   - Target: 1,500+ words
   - Include: Cost breakdown, pricing factors, hidden fees, cost calculator link

2. **"Dumpster Rental Prices by Size: Complete Cost Comparison"**
   - Primary Keyword: "dumpster rental prices"
   - Secondary: "15 yard dumpster cost", "20 yard dumpster price"
   - Target: 1,500+ words
   - Include: Size-by-size pricing, comparison table, ROI calculator

3. **"15 Yard Dumpster: Complete Guide, Dimensions, Uses & Cost"**
   - Primary Keyword: "15 yard dumpster rental"
   - Secondary: "15 yard dumpster size", "what fits in 15 yard dumpster"
   - Target: 1,200+ words
   - Include: Dimensions, capacity, ideal projects, pricing

4. **"20 Yard Dumpster: The Complete Guide to Utah's Most Popular Size"**
   - Primary Keyword: "20 yard dumpster rental"
   - Secondary: "20 yard dumpster dimensions", "20 yard vs 30 yard"
   - Target: 1,200+ words
   - Include: Comprehensive sizing info, comparison charts

5. **"Kitchen Remodel Dumpster: Size Guide, Costs & What Fits"**
   - Primary Keyword: "kitchen remodel dumpster"
   - Secondary: "kitchen renovation dumpster size"
   - Target: 1,000+ words
   - Include: Project-specific sizing, debris estimates, cost breakdown

### Files to Create:
- `app/blog/dumpster-rental-cost-2025/page.tsx`
- `app/blog/dumpster-rental-prices-by-size/page.tsx`
- `app/blog/15-yard-dumpster-complete-guide/page.tsx`
- `app/blog/20-yard-dumpster-complete-guide/page.tsx`
- `app/blog/kitchen-remodel-dumpster-guide/page.tsx`

### Update Required:
- `app/blog/page.tsx` - Add 5 new posts to blogPosts array

**Expected Impact:**
- Target 5 high-volume keywords
- Immediate search visibility boost
- Internal linking opportunities

---

## 🧮 BATCH 2: Essential Calculators (Week 3)
**Goal:** Create 2 critical calculators that Icon has and we don't

### Calculators to Build:

#### 1. Cost Calculator (`app/calculator/cost/page.tsx`)
**Features:**
- Dumpster size selection (15, 20, 30 yard)
- City/zip code selector
- Rental duration picker (1-14 days)
- Additional fees calculator (overage, permits)
- Real-time cost estimation
- "Get Quote" CTA integration

**Target Keywords:** "dumpster rental cost calculator", "estimate dumpster cost"

#### 2. Volume Calculator (`app/calculator/volume/page.tsx`)
**Features:**
- Room-by-room debris estimator
- Material type selector (concrete, wood, mixed)
- Cubic yard calculator
- Visual size recommendation
- Weight estimate
- Link to size-specific pages

**Target Keywords:** "dumpster volume calculator", "how much fits in dumpster"

### Files to Create:
- `app/calculator/cost/page.tsx`
- `app/calculator/volume/page.tsx`
- `components/calculators/CostCalculator.tsx`
- `components/calculators/VolumeCalculator.tsx`
- `lib/calculators/cost-calculator.ts` (logic)
- `lib/calculators/volume-calculator.ts` (logic)

### Update Required:
- `app/calculator/page.tsx` - Add links to new calculators
- Navigation/footer - Add calculator links

**Expected Impact:**
- 2 new high-value tool pages
- Increased engagement & time on site
- More quote conversions

---

## 🏙️ BATCH 3: Size-Specific City Pages (Week 4-5)
**Goal:** Create 15 size-specific city pages for top 5 Utah cities

### Top 5 Cities (by search volume):
1. Salt Lake City
2. Provo
3. Ogden
4. West Valley City
5. West Jordan

### Size Variations per City:
- 15-yard dumpster rental
- 20-yard dumpster rental
- 30-yard dumpster rental

### URL Structure:
```
app/[cityBase]/service-areas/[city]/15-yard-dumpster/page.tsx
app/[cityBase]/service-areas/[city]/20-yard-dumpster/page.tsx
app/[cityBase]/service-areas/[city]/30-yard-dumpster/page.tsx
```

### Example Pages:
- `/salt-lake-city-dumpster-rentals/service-areas/salt-lake-city/15-yard-dumpster`
- `/salt-lake-city-dumpster-rentals/service-areas/salt-lake-city/20-yard-dumpster`
- `/salt-lake-city-dumpster-rentals/service-areas/salt-lake-city/30-yard-dumpster`
- (Repeat for Provo, Ogden, West Valley City, West Jordan)

### Content Strategy:
- City + size specific content
- Local landmarks/areas served
- Size-specific pricing for that city
- Common projects in that area
- Call-to-action for local quotes

**Expected Impact:**
- 15 new highly-targeted local pages
- Target "city + size" keyword combinations
- Strong local SEO signals

---

## 🛠️ BATCH 4: Project-Specific Service Pages (Week 6)
**Goal:** Create 5 project-specific service pages targeting high-intent keywords

### Service Pages to Create:

1. **Kitchen Remodel Dumpster** (`app/services/kitchen-remodel-dumpster/page.tsx`)
   - Target: "kitchen remodel dumpster", "kitchen renovation dumpster"
   - Content: Sizing, debris types, timeline, cost

2. **Roofing Dumpster Rental** (`app/services/roofing-dumpster-rental/page.tsx`)
   - Target: "roofing dumpster rental", "roof tear off dumpster"
   - Content: Shingle weight, sizing, safety, permits

3. **Basement Cleanout Service** (`app/services/basement-cleanout-service/page.tsx`)
   - Target: "basement cleanout dumpster", "basement junk removal"
   - Content: Sizing, pricing, what to discard, timeline

4. **Garage Cleanout Service** (`app/services/garage-cleanout-service/page.tsx`)
   - Target: "garage cleanout dumpster", "garage junk removal"
   - Content: Common debris, sizing, organization tips

5. **Same Day Dumpster Rental** (`app/services/same-day-dumpster-rental/page.tsx`)
   - Target: "same day dumpster rental", "emergency dumpster rental"
   - Content: Availability, rush fees, process, cities served

### Files to Create:
- 5 new service page components
- Update `app/services/all/page.tsx` with new services

**Expected Impact:**
- 5 high-intent project-specific pages
- Better conversion rates (specific user intent)
- More internal linking opportunities

---

## 📈 BATCH 5: Mid-Priority Blog Posts (Week 7-8)
**Goal:** Create 10 more blog posts covering size guides and project types

### Blog Posts:

**Size Guides (4 posts):**
1. "30 Yard Dumpster: When to Use & What Fits" - 1,200 words
2. "15 Yard vs 20 Yard Dumpster: Which Size Do You Need?" - 1,000 words
3. "20 Yard vs 30 Yard Dumpster Comparison" - 1,000 words
4. "What Size Dumpster Do I Need? Complete Size Selection Guide" - 1,500 words

**Project Guides (6 posts):**
5. "Bathroom Renovation Dumpster: Size & Cost Guide" - 1,000 words
6. "Roofing Project Dumpster Guide: Sizing for Shingle Disposal" - 1,200 words
7. "Basement Cleanout: How to Choose the Right Dumpster" - 1,000 words
8. "Garage Cleanout Dumpster Size Guide" - 900 words
9. "Concrete Disposal: Dumpster Guide & Weight Limits" - 1,200 words
10. "Moving Out? Complete Dumpster Rental Guide" - 1,000 words

**Expected Impact:**
- 10 additional indexed pages
- Coverage of comparison keywords
- Stronger topical authority

---

## 🎯 BATCH 6: Remaining City Size Pages (Week 9-11)
**Goal:** Complete size-specific pages for remaining 26 cities

### Cities to Complete:
- Orem, Sandy, St. George, Layton, Millcreek
- Murray, Taylorsville, Lehi, South Jordan, Draper
- Riverton, Roy, Bountiful, Spanish Fork, Pleasant Grove
- Kearns, Tooele, Springville, Cedar City, Eagle Mountain
- American Fork, Clearfield, Magna, Cottonwood Heights, Midvale
- Herriman

### Pages per City: 3 (15-yard, 20-yard, 30-yard)
### Total Pages: 26 cities × 3 sizes = **78 pages**

### Implementation Approach:
- Use templating system for efficiency
- Customize key details per city
- Maintain quality & local relevance

**Expected Impact:**
- 78 new highly-targeted pages
- Complete size-variation coverage
- Dominate "city + size" searches

---

## 📊 Progress Tracking & Metrics

### After Each Batch, Track:
1. **Pages Created** - Count new pages
2. **Keywords Targeted** - List primary keywords
3. **Indexing Status** - Check Google Search Console
4. **Rankings** - Monitor keyword positions
5. **Traffic** - Organic sessions to new pages
6. **Conversions** - Quotes from new pages

### Success Metrics:
- **Batch 1:** 5 blog posts indexed, targeting 15+ keywords
- **Batch 2:** 2 calculators live, increased engagement
- **Batch 3:** 15 city pages indexed, local rankings improving
- **Batch 4:** 5 service pages live, high conversion rate
- **Batch 5:** 10 blog posts indexed, topical authority boost
- **Batch 6:** 78 city pages indexed, dominating local search

---

## 🔄 Continuous Optimization

### After Initial Batches:
1. **Internal Linking Audit** - Connect all new content
2. **Content Refresh** - Update existing posts with links to new content
3. **Schema Markup** - Add structured data to all pages
4. **Performance Optimization** - Ensure fast load times
5. **Conversion Optimization** - A/B test CTAs

---

## 📅 Timeline Summary

| Week | Batch | Deliverables | Pages |
|------|-------|-------------|-------|
| 1-2 | Batch 1 | High-impact blog posts | 5 |
| 3 | Batch 2 | Cost & volume calculators | 2 |
| 4-5 | Batch 3 | Top 5 cities size pages | 15 |
| 6 | Batch 4 | Project service pages | 5 |
| 7-8 | Batch 5 | Mid-priority blog posts | 10 |
| 9-11 | Batch 6 | Remaining city size pages | 78 |
| **Total** | **6 Batches** | **First Phase Complete** | **115 pages** |

---

## 🎯 Next Phases (After Batch 6)

### Phase 2: Service-Specific City Pages
- Residential, commercial, construction, concrete variations
- 31 cities × 4 services = 124 pages

### Phase 3: Advanced Calculators
- Project-specific calculators (8-10 tools)
- Weight calculator, permit checker, timeline calculator

### Phase 4: Comprehensive Guides
- Ultimate dumpster guide, pricing guide, permit guide
- 15+ resource pages

---

## 🚦 Ready to Start?

**Immediate Next Steps:**
1. ✅ Complete Batch 1: Create 5 high-priority blog posts
2. Update blog index with new posts
3. Add internal links from existing content
4. Submit to Google Search Console
5. Monitor indexing & rankings

---

**This plan will systematically close the gap with Icon Dumpsters and position TNT as the leading dumpster rental resource in Utah.**

**Let's start with Batch 1! 🚀**
