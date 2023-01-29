const CartItem = (props) => {
  const plusButtonHandler = () => {
    props.onIncreaseItemAmount(props.id);
  };

  const minusButtonHandler = () => {
    props.onDecreaseItemAmount(props.id);
  };

  return (
    <div className="flex justify-between mb-4 ">
      <div className="flex justify-between gap-4">
        <div className="flex flex-col w-[120px]">
          <h2 className="font-black text-lg">{props.title}</h2>
          <p className="font-bold text-orange-500">{props.price}$</p>
        </div>
        <div className="w-10 text-center rounded-xl border-2 self-end ">
          X{props.amount}
        </div>
      </div>

      <div className="flex gap-1 items-center self-center">
        <button
          onClick={plusButtonHandler}
          className="w-10 text-center rounded-xl border-2 border-orange-500"
        >
          +
        </button>
        <button
          onClick={minusButtonHandler}
          className="w-10 text-center rounded-xl border-2 border-orange-500"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default CartItem;
