import react from "react";

export const DUMMY_MEALS = [
  {
    id: "m1",
    title: "Sushi",
    description: "finnest fish and veggies",
    price: "22.99",
  },
  {
    id: "m2",
    title: "Schnitzel",
    description: "A german speciality",
    price: "16.5",
  },
  {
    id: "m3",
    title: "Barbecu berger",
    description: "American, raw, meaty",
    price: "12.99",
  },
  {
    id: "m4",
    title: "Green bowl",
    description: "Healty... and green",
    price: "18.99",
  },
];

const CartContext = react.createContext({
  showCart: false,
  cartItems: [],
  onCloseModal: () => {},
  onOpenModal: () => {},
  onAddToCart: (item) => {},
  onRemoveFromCart: (id) => {},
});

export default CartContext;
