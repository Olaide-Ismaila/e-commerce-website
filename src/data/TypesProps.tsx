export type ProductProps = {
  id: string;
  image: string;
  name: string;
  priceCents: number;
}

export type CartItemProps = ProductProps & {
  quantity: number;
  delivery: string;
}