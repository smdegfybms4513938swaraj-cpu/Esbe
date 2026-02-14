import { Product } from './types';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'THE ESSENTIAL TEE',
    price: 2499,
    description: [
      '240 GSM Heavyweight Cotton',
      'Puff Print ESबी Logo',
      'Boxy / Oversized Fit',
      'Pre-shrunk'
    ],
    images: {
      main: 'https://picsum.photos/seed/tee1/800/1000',
      hover: 'https://picsum.photos/seed/tee1fit/800/1000',
    },
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
  },
  {
    id: '2',
    name: 'STRUCTURE HOODIE',
    price: 4999,
    description: [
      '400 GSM French Terry',
      'Double-lined hood',
      'Drop shoulder silhouette',
      'Kangaroo pocket removed for clean lines'
    ],
    images: {
      main: 'https://picsum.photos/seed/hoodie1/800/1000',
      hover: 'https://picsum.photos/seed/hoodie1fit/800/1000',
    },
    sizes: ['M', 'L', 'XL'],
    inStock: true,
  },
  {
    id: '3',
    name: 'UTILITY CARGO',
    price: 3999,
    description: [
      'Ripstop Cotton Blend',
      'Adjustable ankle toggles',
      '6-pocket configuration',
      'Matte black hardware'
    ],
    images: {
      main: 'https://picsum.photos/seed/cargo1/800/1000',
      hover: 'https://picsum.photos/seed/cargo1fit/800/1000',
    },
    sizes: ['30', '32', '34', '36'],
    inStock: true,
  },
  {
    id: '4',
    name: 'CORE VEST',
    price: 1999,
    description: [
      'Ribbed Cotton',
      'High neck cut',
      'Embroidered emblem',
      'Fitted silhouette'
    ],
    images: {
      main: 'https://picsum.photos/seed/vest1/800/1000',
      hover: 'https://picsum.photos/seed/vest1fit/800/1000',
    },
    sizes: ['S', 'M', 'L'],
    inStock: false,
  },
];

export const BRAND_NAME = "EsBe";
export const TAGLINE = "Simply Bold.";
export const MARQUEE_TEXT = "MUMBAI 📍 SIMPLY BOLD. EST 2026. DROP 1.0 LIVE. STRUCTURED CHAOS. MUMBAI 📍 SIMPLY BOLD. EST 2026.";