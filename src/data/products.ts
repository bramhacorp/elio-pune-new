export interface ProductItem {
  id: string;
  name: string;
  subtitle: string;
  category: 'jewellery' | 'clothing';
  subcategory: string;
  price: string;
  priceNum: number;
  image: string;
  tagline: string;
  description: string;
  details: {
    material: string;
    craftsmanship: string;
    origin: string;
    dimensionsOrFit: string;
  };
  features: string[];
}

import heroModelImg from '@/src/assets/images/elio_hero_model_1790246646840.jpg';
import earringsImg from '@/src/assets/images/elio_earrings_1790246667872.jpg';
import necklaceImg from '@/src/assets/images/elio_necklace_1790246686735.jpg';
import ringImg from '@/src/assets/images/elio_ring_1790246705585.jpg';
import clothingModelImg from '@/src/assets/images/elio_clothing_model_1790246723151.jpg';
import chokerImg from '@/src/assets/images/elio_choker_1790246763095.jpg';
import sareeImg from '@/src/assets/images/elio_saree_1790246783591.jpg';
import contactCardImg from '@/src/assets/images/elio_contact_card_1790246738951.jpg';

export {
  heroModelImg,
  earringsImg,
  necklaceImg,
  ringImg,
  clothingModelImg,
  chokerImg,
  sareeImg,
  contactCardImg
};

export const featuredJewellery: ProductItem[] = [
  {
    id: 'statement-earrings',
    name: 'Heritage Emerald & Pearl Jhumkas',
    subtitle: 'Statement Pieces',
    tagline: 'FOR EVERY MOOD',
    category: 'jewellery',
    subcategory: 'Earrings',
    price: '₹ 1,85,000',
    priceNum: 185000,
    image: earringsImg,
    description: 'Handcrafted in 22-karat yellow gold with deep green Zambian cabochon emeralds and natural South Sea pearls, suspended in delicate temple filigree.',
    details: {
      material: '22K Hallmarked Gold, Natural Zambian Emeralds, South Sea Pearls',
      craftsmanship: 'Hand-chiseled temple carving & jadau setting by master karigars',
      origin: 'ELIO Atelier, Pune',
      dimensionsOrFit: 'Length: 6.8 cm | Weight: 42.6 grams'
    },
    features: ['Conflict-free gemstones', 'BIS Hallmarked', 'Custom engraving available', 'Complimentary annual polishing']
  },
  {
    id: 'marquise-pendant',
    name: 'Celestial Marquise Diamond Pendant',
    subtitle: 'Modern & Timeless',
    tagline: 'DESIGNS',
    category: 'jewellery',
    subcategory: 'Necklaces',
    price: '₹ 1,42,000',
    priceNum: 142000,
    image: necklaceImg,
    description: 'An ethereal solitaire marquise diamond cradled in an 18-karat warm yellow gold bezel, floating effortlessly on a whispering diamond-cut link chain.',
    details: {
      material: '18K Yellow Gold, VVS1-E Color Certified Diamond (1.25 ct)',
      craftsmanship: 'Micro-claw precision bezel set for maximum light dispersion',
      origin: 'ELIO Atelier, Pune',
      dimensionsOrFit: 'Chain Length: 18 inches (adjustable) | Pendant: 14mm'
    },
    features: ['GIA Certified Diamond', '18K Fine Solid Gold', 'Anti-tarnish protective finish', 'Lifetime buyback guarantee']
  },
  {
    id: 'floral-diamond-ring',
    name: 'Petal Blossom Pavé Ring',
    subtitle: 'Crafted with Care',
    tagline: 'JUST FOR YOU',
    category: 'jewellery',
    subcategory: 'Rings',
    price: '₹ 98,000',
    priceNum: 98000,
    image: ringImg,
    description: 'An architectural blossom silhouette featuring eight scalloped petals paved with brilliant-cut diamonds, evoking flowers unfurling at first morning light.',
    details: {
      material: '18K Rose/Yellow Gold, 0.85 ct Brilliant Cut Diamonds',
      craftsmanship: 'Individually microscope-set pavé stones with milgrain contouring',
      origin: 'ELIO Atelier, Pune',
      dimensionsOrFit: 'Custom sized to fit (Complimentary resizing included)'
    },
    features: ['IGI Certified Diamonds', 'Comfort-fit curved inner band', 'Bespoke metal options (Yellow, Rose, Platinum)']
  }
];

export const allProducts: ProductItem[] = [
  ...featuredJewellery,
  {
    id: 'gulmohar-blush-lehenga',
    name: 'Gulmohar Pastel Blush Lehenga',
    subtitle: 'Haute Couture',
    tagline: 'WEAR YOUR STORY',
    category: 'clothing',
    subcategory: 'Bridal Lehengas',
    price: '₹ 2,45,000',
    priceNum: 245000,
    image: clothingModelImg,
    description: 'A masterpiece in dusty rose organza silk, richly embroidered with hand-dyed resham floss, micro-pearls, and antique silver dabka in cascading floral vines.',
    details: {
      material: 'Pure Mulberry Silk & French Organza, Italian Butter Crepe Lining',
      craftsmanship: 'Over 480 hours of hand-embroidery by heritage artisans',
      origin: 'ELIO Couture Studio, Pune',
      dimensionsOrFit: 'Custom tailored to exact measurements (Bespoke silhouette)'
    },
    features: ['Made to measure fit', 'Hand-stitched cancan skirt volume', 'Dual dupatta option available', 'Personalized bridal monogramming']
  },
  {
    id: 'royal-polki-choker',
    name: 'Maharani Polki & Ruby Choker',
    subtitle: 'High Jewellery',
    tagline: 'ROYAL HEIRLOOM',
    category: 'jewellery',
    subcategory: 'Necklaces',
    price: '₹ 4,95,000',
    priceNum: 495000,
    image: chokerImg,
    description: 'An opulent multi-tier collar necklace featuring syndicate polki uncut diamonds, pigeon-blood ruby drops, and clustered Basra seed pearls.',
    details: {
      material: '22K Gold, Uncut Polki Diamonds (14.2 ct), Burmese Rubies, Basra Seed Pearls',
      craftsmanship: 'Pure jadau technique with 24K meenakari reverse enameling',
      origin: 'ELIO Atelier, Pune',
      dimensionsOrFit: 'Adjustable silk zari dori cord | Width: 4.5 cm'
    },
    features: ['Museum-grade provenance', 'Reversible royal floral meenakari art', 'Private vault delivery in bespoke velvet chest']
  },
  {
    id: 'banarasi-tissue-saree',
    name: 'Kashi Ivory & Gold Tissue Silk Saree',
    subtitle: 'Heritage Textiles',
    tagline: 'TIMELESS DRAPE',
    category: 'clothing',
    subcategory: 'Sarees',
    price: '₹ 86,000',
    priceNum: 86000,
    image: sareeImg,
    description: 'Woven with real silver and gold zari threads over fine Katan silk, this luminous ivory tissue saree drapes with regal fluidity and timeless grace.',
    details: {
      material: '100% Handloom Katan Silk with Real Zari Interweave',
      craftsmanship: 'Kadhwa handloom weaving technique from the looms of Varanasi',
      origin: 'Curated by ELIO Atelier, Pune',
      dimensionsOrFit: 'Length: 5.5 meters with unstitched brocade blouse piece (0.8m)'
    },
    features: ['Handloom Mark & Silk Mark certified', 'Featherlight drape', 'Custom blouse designing and tailoring available']
  },
  {
    id: 'champagne-zari-lehenga',
    name: 'Zarin Champagne Gold Bridal Lehenga',
    subtitle: 'Bridal Couture',
    tagline: 'MODERN ROYALTY',
    category: 'clothing',
    subcategory: 'Bridal Lehengas',
    price: '₹ 3,10,000',
    priceNum: 310000,
    image: heroModelImg,
    description: 'An ethereal champagne gold ensemble inspired by classical royal court architecture, lavishly adorned with cut-dana, metallic zardozi, and hand-cut sequins.',
    details: {
      material: 'Heavy Raw Silk, Tissue Organza Dupatta, Pure Silk Satin Lining',
      craftsmanship: 'Hand-done zardozi, badla wirework, and French knot floral clusters',
      origin: 'ELIO Couture Studio, Pune',
      dimensionsOrFit: 'Bespoke made-to-measure with private salon fitting'
    },
    features: ['Signature flared kalis', 'Weighted heirloom hemline', 'Includes veil with personalized embroidered border']
  }
];
