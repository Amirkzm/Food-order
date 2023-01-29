import { useContext } from "react";
import CartContext from "../../store/Cart-context";
import InputOrder from "./InputOrder";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const addMealHandler = (amount) => {
    const newCartItem = {
      id: props.id,
      title: props.title,
      price: props.price,
      description: props.description,
      amount: amount,
    };
    cartCtx.onAddToCart(newCartItem);
  };

  return (
    <div className="w-[90%] flex justify-between mx-auto mb-4  py-2">
      <div className="flex flex-col items-start justify-between">
        <h2 className="font-black text-xl">{props.title}</h2>
        <p className="font-normal text-lg text-slate-600 font-mono">
          {props.description}
        </p>
        <p className="text-orange-500 font-black text-xl">{props.price} {"$"}</p>
      </div>
      <InputOrder onAddMeal={addMealHandler} />
    </div>
  );
};

export default MealItem;
