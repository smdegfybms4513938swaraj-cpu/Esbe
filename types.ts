export interface Product {
  id: string;
  name: string;
  price: number;
  description: string[]; // Array of bullet points
  images: {
    main: string;
    hover: string;
  };
  sizes: string[];
  inStock: boolean;
}

export type CartItem = Product & {
  selectedSize: string;
  quantity: number;
};
