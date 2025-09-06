export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  images: string[];
  game: 'free-fire' | 'fortnite';
  category: ProductCategory;
  stock: number;
  rating: number;
  reviewCount: number;
  tags: string[];
  isPopular: boolean;
  isNew: boolean;
  rarity?: 'common' | 'rare' | 'epic' | 'legendary' | 'mythic';
}

export interface ProductCategory {
  id: string;
  name: string;
  game: 'free-fire' | 'fortnite';
}

export interface ProductFilter {
  game?: 'free-fire' | 'fortnite';
  category?: string;
  priceRange?: {
    min: number;
    max: number;
  };
  rating?: number;
  rarity?: string[];
  search?: string;
}

export interface GameInfo {
  id: 'free-fire' | 'fortnite';
  name: string;
  displayName: string;
  description: string;
  currency: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  categories: ProductCategory[];
}