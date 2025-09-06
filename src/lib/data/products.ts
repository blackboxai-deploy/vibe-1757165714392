import { Product, GameInfo } from '@/types/product';

export const gameInfo: Record<string, GameInfo> = {
  'free-fire': {
    id: 'free-fire',
    name: 'free-fire',
    displayName: 'Free Fire',
    description: 'The ultimate battle royale experience',
    currency: 'Diamonds',
    colors: {
      primary: '#ff6b35',
      secondary: '#f7931e',
      accent: '#ff1744'
    },
    categories: [
      { id: 'diamonds', name: 'Diamonds', game: 'free-fire' },
      { id: 'characters', name: 'Characters', game: 'free-fire' },
      { id: 'weapon-skins', name: 'Weapon Skins', game: 'free-fire' },
      { id: 'outfits', name: 'Outfits', game: 'free-fire' },
      { id: 'pets', name: 'Pets', game: 'free-fire' },
      { id: 'bundles', name: 'Bundles', game: 'free-fire' }
    ]
  },
  'fortnite': {
    id: 'fortnite',
    name: 'fortnite',
    displayName: 'Fortnite',
    description: 'Build, battle, and be the last one standing',
    currency: 'V-Bucks',
    colors: {
      primary: '#0078f2',
      secondary: '#00d4ff',
      accent: '#9146ff'
    },
    categories: [
      { id: 'v-bucks', name: 'V-Bucks', game: 'fortnite' },
      { id: 'battle-passes', name: 'Battle Passes', game: 'fortnite' },
      { id: 'skins', name: 'Skins', game: 'fortnite' },
      { id: 'emotes', name: 'Emotes', game: 'fortnite' },
      { id: 'pickaxes', name: 'Pickaxes', game: 'fortnite' },
      { id: 'gliders', name: 'Gliders', game: 'fortnite' }
    ]
  }
};

export const mockProducts: Product[] = [
  // Free Fire Products
  {
    id: 'ff-diamonds-100',
    name: '100 Diamonds',
    description: 'Get 100 diamonds instantly to unlock characters, skins, and more!',
    price: 2.99,
    images: ['https://placehold.co/400x300?text=Free+Fire+100+Diamonds+Package+with+gem+icon'],
    game: 'free-fire',
    category: { id: 'diamonds', name: 'Diamonds', game: 'free-fire' },
    stock: 999,
    rating: 4.8,
    reviewCount: 1250,
    tags: ['diamonds', 'currency', 'starter'],
    isPopular: true,
    isNew: false,
    rarity: 'common'
  },
  {
    id: 'ff-diamonds-500',
    name: '500 Diamonds',
    description: 'Perfect bundle for unlocking premium content and character upgrades',
    price: 12.99,
    originalPrice: 14.99,
    discount: 13,
    images: ['https://placehold.co/400x300?text=Free+Fire+500+Diamonds+Bundle+with+golden+gems'],
    game: 'free-fire',
    category: { id: 'diamonds', name: 'Diamonds', game: 'free-fire' },
    stock: 999,
    rating: 4.9,
    reviewCount: 2340,
    tags: ['diamonds', 'currency', 'popular'],
    isPopular: true,
    isNew: false,
    rarity: 'rare'
  },
  {
    id: 'ff-character-alok',
    name: 'DJ Alok Character',
    description: 'Legendary character with Drop the Beat ability - heal and speed boost',
    price: 15.99,
    images: ['https://placehold.co/400x300?text=DJ+Alok+character+with+music+themed+design+and+neon+effects'],
    game: 'free-fire',
    category: { id: 'characters', name: 'Characters', game: 'free-fire' },
    stock: 50,
    rating: 4.9,
    reviewCount: 3450,
    tags: ['character', 'alok', 'legendary', 'abilities'],
    isPopular: true,
    isNew: false,
    rarity: 'legendary'
  },
  {
    id: 'ff-weapon-ak47-red-criminal',
    name: 'AK47 Red Criminal Skin',
    description: 'Legendary weapon skin with unique effects and enhanced damage display',
    price: 8.99,
    images: ['https://placehold.co/400x300?text=AK47+Red+Criminal+weapon+skin+with+flames+and+red+effects'],
    game: 'free-fire',
    category: { id: 'weapon-skins', name: 'Weapon Skins', game: 'free-fire' },
    stock: 100,
    rating: 4.7,
    reviewCount: 890,
    tags: ['weapon', 'ak47', 'skin', 'legendary'],
    isPopular: false,
    isNew: true,
    rarity: 'legendary'
  },
  {
    id: 'ff-outfit-samurai',
    name: 'Samurai Warrior Outfit',
    description: 'Complete samurai outfit with armor, helmet, and traditional weapons',
    price: 12.99,
    images: ['https://placehold.co/400x300?text=Samurai+Warrior+outfit+with+traditional+armor+and+katana'],
    game: 'free-fire',
    category: { id: 'outfits', name: 'Outfits', game: 'free-fire' },
    stock: 75,
    rating: 4.6,
    reviewCount: 567,
    tags: ['outfit', 'samurai', 'armor', 'epic'],
    isPopular: false,
    isNew: true,
    rarity: 'epic'
  },

  // Fortnite Products
  {
    id: 'fn-vbucks-1000',
    name: '1,000 V-Bucks',
    description: 'Get 1,000 V-Bucks to unlock Battle Pass rewards and shop items',
    price: 9.99,
    images: ['https://placehold.co/400x300?text=Fortnite+1000+V-Bucks+package+with+blue+currency+icon'],
    game: 'fortnite',
    category: { id: 'v-bucks', name: 'V-Bucks', game: 'fortnite' },
    stock: 999,
    rating: 4.8,
    reviewCount: 5670,
    tags: ['v-bucks', 'currency', 'popular'],
    isPopular: true,
    isNew: false,
    rarity: 'common'
  },
  {
    id: 'fn-battle-pass-ch5s1',
    name: 'Chapter 5 Season 1 Battle Pass',
    description: 'Unlock 100+ rewards including skins, emotes, V-Bucks, and more',
    price: 9.50,
    images: ['https://placehold.co/400x300?text=Fortnite+Chapter+5+Season+1+Battle+Pass+with+character+tiers'],
    game: 'fortnite',
    category: { id: 'battle-passes', name: 'Battle Passes', game: 'fortnite' },
    stock: 999,
    rating: 4.9,
    reviewCount: 8920,
    tags: ['battle-pass', 'season', 'rewards'],
    isPopular: true,
    isNew: true,
    rarity: 'epic'
  },
  {
    id: 'fn-skin-john-wick',
    name: 'John Wick Skin',
    description: 'Legendary outfit inspired by the legendary assassin character',
    price: 20.00,
    images: ['https://placehold.co/400x300?text=John+Wick+skin+in+black+suit+with+tactical+gear'],
    game: 'fortnite',
    category: { id: 'skins', name: 'Skins', game: 'fortnite' },
    stock: 200,
    rating: 4.9,
    reviewCount: 4560,
    tags: ['skin', 'john-wick', 'legendary', 'crossover'],
    isPopular: true,
    isNew: false,
    rarity: 'legendary'
  },
  {
    id: 'fn-emote-floss',
    name: 'Floss Dance Emote',
    description: 'Classic dance emote that became a cultural phenomenon',
    price: 5.00,
    images: ['https://placehold.co/400x300?text=Floss+Dance+emote+animation+with+dancing+character'],
    game: 'fortnite',
    category: { id: 'emotes', name: 'Emotes', game: 'fortnite' },
    stock: 999,
    rating: 4.7,
    reviewCount: 3210,
    tags: ['emote', 'dance', 'classic', 'popular'],
    isPopular: true,
    isNew: false,
    rarity: 'rare'
  },
  {
    id: 'fn-pickaxe-infinity-blade',
    name: 'Infinity Blade Pickaxe',
    description: 'Mythic pickaxe with glowing effects and unique harvesting animation',
    price: 15.00,
    images: ['https://placehold.co/400x300?text=Infinity+Blade+pickaxe+with+glowing+purple+effects'],
    game: 'fortnite',
    category: { id: 'pickaxes', name: 'Pickaxes', game: 'fortnite' },
    stock: 150,
    rating: 4.8,
    reviewCount: 1890,
    tags: ['pickaxe', 'infinity', 'mythic', 'effects'],
    isPopular: false,
    isNew: true,
    rarity: 'mythic'
  },
  {
    id: 'fn-glider-victory-royale',
    name: 'Victory Royale Glider',
    description: 'Celebrate your wins with this golden glider featuring trophy effects',
    price: 12.00,
    images: ['https://placehold.co/400x300?text=Victory+Royale+glider+with+golden+trophy+and+confetti+effects'],
    game: 'fortnite',
    category: { id: 'gliders', name: 'Gliders', game: 'fortnite' },
    stock: 300,
    rating: 4.6,
    reviewCount: 780,
    tags: ['glider', 'victory', 'golden', 'celebration'],
    isPopular: false,
    isNew: true,
    rarity: 'epic'
  }
];

export const getProductsByGame = (game: 'free-fire' | 'fortnite') => {
  return mockProducts.filter(product => product.game === game);
};

export const getPopularProducts = () => {
  return mockProducts.filter(product => product.isPopular);
};

export const getProductById = (id: string) => {
  return mockProducts.find(product => product.id === id);
};