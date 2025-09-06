export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  avatar?: string;
  phone?: string;
  dateOfBirth?: Date;
  preferredGame?: 'free-fire' | 'fortnite';
  role: 'user' | 'admin';
  createdAt: Date;
  lastLogin?: Date;
  isActive: boolean;
}

export interface UserProfile extends User {
  orders: Order[];
  wishlist: string[];
  totalSpent: number;
  loyaltyPoints: number;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  username: string;
  preferredGame?: 'free-fire' | 'fortnite';
}

import { Order } from './cart';