
export interface Product {
  id: number;
  name: string;
  category: 'Audio' | 'Home' | 'Accessories' | 'Lifestyle';
  price: number;
  rating: number;
  reviews: number;
  imageUrl: string;
}
