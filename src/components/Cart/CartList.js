import { useContext, useState } from "react";
import useFetch from "../../hooks/use-fetch";
import CartContext from "../../store/Cart-context";
import Modal from "../UI/Modal";
import Loading from "../UI/Loading";
import CartItem from "./CartItem";
import OrderForm from "./OrderForm";

const CartList = () => {
  console.log("cartlist is running");
  const cartCtx = useContext(CartContext);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [sendButtonHasTouched, setSendButtonHasTouched] = useState(0);

  console.log("cartlist is fetching");
  const { isLoading, error, sendRequest } = useFetch("cartlist");

  const orderButtonHandler = () => {
    setShowOrderForm(true);
  };

  const SendOrderHandler = (userInput) => {
    setSendButtonHasTouched(true);
    const requestConfig = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: userInput,
    };
    console.log("cartlist is posting data");
    sendRequest(
      "https://food-order-438b3-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
      requestConfig
    );
    setShowOrderForm(false);
  };

  const addItemAmountHandler = (id) => {
    const selectedItem = cartCtx.cartItems.find((item) => item.id === id);
    cartCtx.onAddToCart({ ...selectedItem, amount: 1 });
  };

  const decreaseItemAmountHandler = (id) => {
    cartCtx.onRemoveFromCart(id);
  };

  const cartItems = cartCtx.cartItems.map((item) => (
    <CartItem
      title={item.title}
      price={item.price}
      amount={item.amount}
      key={item.id}
      id={item.id}
      onIncreaseItemAmount={addItemAmountHandler}
      onDecreaseItemAmount={decreaseItemAmountHandler}
    />
  ));

  const totalPrice = cartCtx.cartItems.reduce((total, item) => {
    total = +total + +item.amount * +item.price;
    return total;
  }, 0);

  const onCloseHandler = () => {
    setShowOrderForm(false);
    cartCtx.onCloseModal();
  };

  const orderStatus = sendButtonHasTouched ? (
    isLoading ? (
      <div className="!border-y-0 flex flex-col items-center">
        <h1 className="font-black text-2xl">Loading...</h1>
        <Loading classes="w-10 h-10" />
      </div>
    ) : (
      <h1 className="!border-y-0">your order has been sent</h1>
    )
  ) : null;

  // console.log(orderStatus);

  const cartContent = (
    <Modal classes="divide-y-2 divide-orange-500" closeModal={onCloseHandler}>
      {cartItems.length === 0 ? (
        <h2 className="font-black text-2xl text-center">No Item In the Cart</h2>
      ) : (
        cartItems
      )}
      <div className="border-b-0">
        <div className="flex justify-between">
          <h2 className="font-black text-lg">Total Amount:</h2>
          <span className="font-black text-lg">{totalPrice.toFixed(2)}$</span>
        </div>
        <div className="flex justify-end gap-2">
          <button
            onClick={onCloseHandler}
            className="px-5 font-thin text-orange-400 rounded-xl border-[1px] border-orange-300 cursor-pointer"
          >
            close
          </button>
          <button
            onClick={orderButtonHandler}
            className="px-5 font-normal text-white bg-orange-900 rounded-xl border-[1px] border-orange-300"
          >
            order
          </button>
        </div>
      </div>
      {showOrderForm && (
        <OrderForm
          onOrder={SendOrderHandler}
          onCancelForm={() => setShowOrderForm(false)}
        />
      )}
      {orderStatus}
    </Modal>
  );

  return cartCtx.showCart ? cartContent : null;
};

export default CartList;
