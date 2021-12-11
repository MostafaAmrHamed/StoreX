export interface button {
  color: string;
  text: string;
  link: string;
  handle?: () => void;
}
export type cart = {
  id: number;
  title: string;
  image: string;
  price: number;
  amount: number;
  totalPrice: number;
};
export type cartProps = {
  cart: {
    id: number;
    title: string;
    image: string;
    price: number;
    amount: number;
    totalPrice: number;
  };
};

export type product = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  image: string;
  rating: {
    rate: number;
  };
};
export type item = {
  id: number;
  title: string;
  image: string;
  price: number;
  category: string;
  rating: {
    rate: number;
  };
};
export type itemProps = {
  items: {
    id: number;
    title: string;
    image: string;
    price: number;
    category: string;
    rating: {
      rate: number;
    };
  }[];
};
export type productProps = {
  product: {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
    rating: {
      rate: number;
    };
  };
};
