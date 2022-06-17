export interface Product {
  price: number;
  stock: number;
  category?: number;
  _id?: string;
  name: string;
  image: string[];
  description?: string;
  discount?: number;
  createdAt?: string;
  updatedAt?: string;
}
