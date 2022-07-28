export interface CartItem {
  id: string;
  name: string;
  price: number;
  stock: number;
  quantity: number;
}
export interface Input {
  id: number;
  type: string;
  name: "name" | "whatsApp";
  placeholder: string;
}

export const INPUTS: Input[] = [
  {
    id: 0,
    type: "text",
    name: "name",
    placeholder: "John Doe",
  },
  {
    id: 1,
    type: "tel",
    name: "whatsApp",
    placeholder: "54116241579",
  },
];
