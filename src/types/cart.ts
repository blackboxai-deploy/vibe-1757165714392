import { Product } from './product';

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  selectedVariant?: string;
  addedAt: Date;
}

export interface Cart {
  items: CartItem[];
  total: number;
  subtotal: number;
  tax: number;
  discount: number;
  itemCount: number;
}

export interface CheckoutData {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  paymentMethod: 'credit-card' | 'paypal' | 'crypto' | 'gift-card';
  billingAddress?: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  paymentMethod: string;
  createdAt: Date;
  completedAt?: Date;
  trackingNumber?: string;
}