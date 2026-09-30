export interface Product {
  id: string; name: string; slug: string; description: string; categoryId: string;
  images: string[]; mrp: number; sellingPrice: number; discount: number; rating: number;
  reviewCount: number; stock: number; weight: string; sku: string; isActive: boolean;
}
export interface Category { id: string; name: string; image: string; slug: string; }
