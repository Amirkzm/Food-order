import { useContext } from "react";
import CartContext from "../../store/Cart-context";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  const cartCtx = useContext(CartContext);
  const totalCartAmount = cartCtx.cartItems.reduce((total, item) => {
    total = +total + +item.amount;
    return total;
  }, 0);

  return (
    <div id="header" className="relative w-screen h-[50%] ">
      <div className="bg-orange-800 h-20 w-full flex justify-between items-center absolute top-0 left-0 ">
        <h1 className="font-black text-white m-4 text-3xl">React Meals</h1>
        <HeaderCartButton amount={totalCartAmount} />
      </div>
    </div>
  );
};

export default Header;
