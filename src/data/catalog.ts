import { Category, Product } from '../types/catalog';
import { images } from './images';

export const categories: Category[] = [
  { id: 'essentials', name: 'Pooja Essentials', image: images.puja, slug: 'pooja-essentials' },
  { id: 'kumkum', name: 'Kumkum & Pasupu', image: images.kumkum, slug: 'kumkum-pasupu' },
  { id: 'incense', name: 'Agarbatti & Dhoop', image: images.incense, slug: 'agarbatti-dhoop' },
  { id: 'camphor', name: 'Camphor', image: images.dhoop, slug: 'camphor' },
  { id: 'diyas', name: 'Diyas', image: images.diya, slug: 'diyas' },
  { id: 'idols', name: 'God Idols', image: images.idol, slug: 'god-idols' },
  { id: 'photos', name: 'God Photos', image: images.flowers, slug: 'god-photos' },
  { id: 'brass', name: 'Brass Pooja Items', image: images.brass, slug: 'brass-pooja-items' },
  { id: 'malas', name: 'Rudraksha & Malas', image: images.mala, slug: 'rudraksha-malas' },
  { id: 'books', name: 'Pooja Books', image: images.kit, slug: 'pooja-books' },
];

export const products: Product[] = [
  { id: 'kumkum-100', name: 'Premium Kumkum', slug: 'premium-kumkum', description: 'A finely milled, richly coloured kumkum made for your daily rituals and special occasions.', categoryId: 'kumkum', images: [images.kumkum, images.puja], mrp: 60, sellingPrice: 49, discount: 18, rating: 4.8, reviewCount: 128, stock: 84, weight: '100 g', sku: 'VP-KUM-100', isActive: true },
  { id: 'pasupu-100', name: 'Pure Pasupu', slug: 'pure-pasupu', description: 'Aromatic turmeric powder selected for auspicious pooja rituals.', categoryId: 'kumkum', images: [images.turmeric], mrp: 55, sellingPrice: 45, discount: 18, rating: 4.7, reviewCount: 96, stock: 62, weight: '100 g', sku: 'VP-PAS-100', isActive: true },
  { id: 'camphor-100', name: 'Camphor Tablets', slug: 'camphor-tablets', description: 'Bright, clean-burning camphor tablets for a peaceful aarti.', categoryId: 'camphor', images: [images.dhoop], mrp: 110, sellingPrice: 89, discount: 19, rating: 4.8, reviewCount: 214, stock: 48, weight: '100 g', sku: 'VP-CAM-100', isActive: true },
  { id: 'agarbatti', name: 'Sandalwood Agarbatti', slug: 'sandalwood-agarbatti', description: 'A gentle sandalwood fragrance for your everyday prayer space.', categoryId: 'incense', images: [images.incense], mrp: 90, sellingPrice: 72, discount: 20, rating: 4.6, reviewCount: 74, stock: 105, weight: '40 sticks', sku: 'VP-AGB-40', isActive: true },
  { id: 'wicks-50', name: 'Cotton Pooja Wicks', slug: 'cotton-pooja-wicks', description: 'Soft, hand-rolled cotton wicks for lamps and daily worship.', categoryId: 'essentials', images: [images.wicks], mrp: 40, sellingPrice: 32, discount: 20, rating: 4.9, reviewCount: 182, stock: 120, weight: '50 pcs', sku: 'VP-WCK-50', isActive: true },
  { id: 'brass-diya', name: 'Brass Lakshmi Diya', slug: 'brass-lakshmi-diya', description: 'A timeless brass diya with a warm, polished finish.', categoryId: 'diyas', images: [images.brass, images.diya], mrp: 499, sellingPrice: 399, discount: 20, rating: 4.9, reviewCount: 63, stock: 21, weight: '1 piece', sku: 'VP-DYA-01', isActive: true },
  { id: 'daily-kit', name: 'Daily Pooja Essentials Kit', slug: 'daily-pooja-kit', description: 'A thoughtful collection of everyday pooja essentials, beautifully packed.', categoryId: 'essentials', images: [images.kit], mrp: 799, sellingPrice: 649, discount: 19, rating: 4.9, reviewCount: 147, stock: 30, weight: '12 items', sku: 'VP-KIT-DLY', isActive: true },
  { id: 'ganesh-kit', name: 'Ganesh Pooja Kit', slug: 'ganesh-pooja-kit', description: 'A complete selection of pooja samagri for a meaningful Ganesh pooja.', categoryId: 'essentials', images: [images.puja], mrp: 1199, sellingPrice: 999, discount: 17, rating: 4.8, reviewCount: 89, stock: 18, weight: '18 items', sku: 'VP-KIT-GAN', isActive: true },
];
