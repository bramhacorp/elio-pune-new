# ELIO – Luxury Clothing & Custom Jewellery Atelier

A high-end, single-page luxury clothing and custom jewellery atelier website built for **ELIO** (Pune, India), faithful to the approved design mockup and brand identity.

## ✨ Features & Architecture

- **Faithful Design Mockup Implementation**:
  - **Hero Section**: High-fashion editorial photography, display serif typography (*"Elegance Lives Here"*), brand pillars (*STYLE | CRAFTSMANSHIP | YOU*), and poetic vertical column (*CLOTHES / JEWELLERY / A MORE BEAUTIFUL YOU*).
  - **Products Section**: 3 signature travertine stone display cards (*Statement Pieces: For Every Mood*, *Modern & Timeless: Designs*, *Crafted with Care: Just For You*).
  - **Clothing Section**: Editorial feature in dusty rose bridal organza silk, with authentic iconography (*Elegant Designs*, *Fine Fabrics*, *For Every You*) and the *WEAR YOUR STORY* motif.
  - **Let's Connect Section**: Bespoke handwritten script (*"Let's Create Something Beautiful"*), embossed ELIO stationery card with baby's breath floral arrangement, studio contact details in Pune, and an interactive concierge consultation form.
  - **Dark Obsidian Footer**: Brand logo in white, navigation links, social icons (Instagram, Facebook, Pinterest), Pune location, and copyright.

- **Interactive Atelier Experience**:
  - **Curated Catalog Drawer**: Full collection explorer with category filters (*Fine Jewellery*, *Haute Couture & Clothing*, *Bridal*), search, and currency switcher (INR ₹ / USD $).
  - **High-Resolution Product Details Modal**: Macro views, precious metal karats (18K/22K), certified diamond cuts, hand-embroidery specifications, and direct WhatsApp concierge booking.
  - **Private Salon Appointment Reservation**: Interactive scheduler for the Pune studio (Koregaon Park) with date picker, time slot selection, party size, and salon hospitality preferences.
  - **Personal Lookbook & Saved Pieces**: Allows clients to save favorite pieces, calculate estimated curation totals, and book unified bridal styling consultations.
  - **Pune Flagship Studio Guide**: Location map information, valet parking, private viewing salon details, and direct contact.

- **SEO & Social Optimization**:
  - Semantic HTML5 structure (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`).
  - OpenGraph tags (`og:title`, `og:description`, `og:image`, `og:url`, `og:site_name`).
  - Twitter Card `summary_large_image` tags.
  - Schema.org JSON-LD structured data for `ClothingStore` and `JewelryStore` with opening hours, geographical coordinates, and offer catalogs.

---

## 🚀 Deployment to Vercel via GitHub

This project is built using a modern, clean Vite + React + TypeScript + Tailwind CSS architecture optimized for zero-config Vercel deployment.

### 1. Push to GitHub
```bash
git add .
git commit -m "Initial commit of ELIO luxury store"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
```

### 2. Import into Vercel
1. Go to [vercel.com](https://vercel.com) and log in.
2. Click **"Add New"** > **"Project"**.
3. Select your GitHub repository.
4. Framework Preset will automatically detect **Vite**.
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **"Deploy"**.

That's it! Your single-page luxury atelier will be live on Vercel with high performance and global edge CDN caching.
