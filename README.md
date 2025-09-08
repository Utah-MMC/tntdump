# T&T Dumpsters Website

A modern, responsive website for T&T Dumpsters, a family-owned dumpster rental business serving the Wasatch Front area in Utah.

## Features

- **Responsive Design**: Mobile-first approach with modern UI/UX
- **SEO Optimized**: Meta tags, structured data, and semantic HTML
- **Fast Performance**: Built with Next.js 14 and optimized images
- **Contact Forms**: Interactive contact and quote request forms
- **Service Pages**: Dedicated pages for each dumpster service
- **Customer Reviews**: Testimonials and ratings section
- **Business Information**: Hours, contact details, and service areas

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Images**: Next.js Image Optimization

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd tnt-dumpsters
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section with CTA
│   ├── Services.tsx        # Services showcase
│   ├── About.tsx           # Company information
│   ├── WhyChooseUs.tsx     # Benefits section
│   ├── Reviews.tsx         # Customer testimonials
│   ├── Contact.tsx         # Contact information
│   └── Footer.tsx          # Footer with links
├── public/                 # Static assets
└── package.json           # Dependencies and scripts
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    900: '#1e3a8a',
  }
}
```

### Content
Update the content in each component file to match your business information:
- Contact details in `Header.tsx` and `Contact.tsx`
- Service descriptions in `Services.tsx`
- Company information in `About.tsx`
- Customer reviews in `Reviews.tsx`

### Images
Replace placeholder images with your actual business photos:
- Update image URLs in components
- Add images to the `public/` directory
- Update `next.config.js` for external image domains

## SEO Features

- Meta tags for title, description, and keywords
- Open Graph tags for social sharing
- Semantic HTML structure
- Alt text for all images
- Structured data markup (can be added)

## Performance Optimizations

- Next.js Image component for optimized images
- Tailwind CSS for minimal CSS bundle
- Code splitting with Next.js App Router
- Lazy loading of components

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
1. Build the project: `npm run build`
2. Start the server: `npm run start`
3. Deploy the `.next` folder and `package.json`

## Contact Information

- **Phone**: (801) 209-9013
- **Email**: info@tntdump.com
- **Service Area**: Wasatch Front, Utah
- **Hours**: Mon-Fri 7:00 am - 9:00 pm

## License

This project is proprietary and confidential. All rights reserved.



