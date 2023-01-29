import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/Cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [beat, setBeat] = useState(false);

  const defaultClass =
    "w-64 h-16 m-4  py-4 bg-red-900 rounded-3xl text-white flex justify-center gap-4 cursor-pointer";

  const animateClass = defaultClass + " bump";

  const buttonClasses = beat ? animateClass : defaultClass;

  useEffect(() => {
    if (cartCtx.cartItems.length === 0) {
      return;
    }
    setBeat(true);

    setTimeout(() => {
      setBeat(false);
    }, 300);
  }, [cartCtx.cartItems]);

  const showCartContentHandler = () => {
    cartCtx.onOpenModal();
  };

  return (
    <div className={buttonClasses} onClick={showCartContentHandler}>
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 25 25"
        className="stroke-white"
      >
        <path
          id="Shopping_Cart"
          data-name="Shopping Cart"
          d="M20,24a2,2,0,1,1,2-2A2,2,0,0,1,20,24Zm0-3a1,1,0,1,0,1,1A1,1,0,0,0,20,21Zm-9,3a2,2,0,1,1,2-2A2,2,0,0,1,11,24Zm0-3a1,1,0,1,0,1,1A1,1,0,0,0,11,21Zm10.58-2h-12a1.25,1.25,0,0,1-1.21-.93L4.66,3.18A.25.25,0,0,0,4.42,3H0V2H4.42a1.25,1.25,0,0,1,1.21.93L6.4,6,23.74,6A1.25,1.25,0,0,1,25,7.55L22.8,18A1.23,1.23,0,0,1,21.58,19ZM6.64,7,9.34,17.82a.25.25,0,0,0,.24.18l12,0a.25.25,0,0,0,.24-.19L24,7.34a.25.25,0,0,0,0-.22.26.26,0,0,0-.2-.13Z"
        />
      </svg>
      <h3 className="font-black text-lg">Your Cart</h3>
      <div className="py-1 px-2 rounded-full bg-orange-600 ">
        {props.amount}
      </div>
    </div>
  );
};

export default HeaderCartButton;
