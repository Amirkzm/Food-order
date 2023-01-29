import { useRef } from "react";
const InputOrder = (props) => {
  const amountInputRef = useRef();

  const addMealHandler = () => {
    props.onAddMeal(amountInputRef.current.value);
  };

  return (
    <div className="bg-white flex flex-col items-center justify-center">
      <div className="flex p-2 gap-2">
        <label htmlFor="mealAmount" className="font-black text-lg">
          Amount
        </label>
        <input
          id="mealAmount"
          type="number"
          min="0"
          className="w-12 border-[1px] border-red-800"
          // placeholder="0"
          defaultValue={"1"}
          ref={amountInputRef}
        />
      </div>
      <button
        className="py-2 px-9 bg-orange-900 rounded-2xl text-white text-lg font-sans font-black"
        onClick={addMealHandler}
      >
        +Add
      </button>
    </div>
  );
};

export default InputOrder;
