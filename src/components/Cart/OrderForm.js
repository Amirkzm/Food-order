import { useRef } from "react";

const OrderForm = (props) => {
  const nameRef = useRef("");
  const streetRef = useRef("");
  const postRef = useRef("");
  const cityRef = useRef("");

  const orderSubmitHandler = (e) => {
    e.preventDefault();
    const userInput = {
      name: nameRef.current.value,
      street: streetRef.current.value,
      post: postRef.current.value,
      city: cityRef.current.value,
    };
    props.onOrder(userInput);
  };

  const cancelButtonHandler = () => {
    props.onCancelForm();
  };

  return (
    <form className="!border-y-0" onSubmit={orderSubmitHandler}>
      <div className="flex flex-col ">
        <label className="font-bold font-serif">Your Name</label>
        <input
          className="w-[40%] border-2 border-gray-200 rounded-md "
          type="text"
          ref={nameRef}
        ></input>
      </div>
      <div className="flex flex-col">
        <label className="font-bold font-serif">Street</label>
        <input
          className="w-[40%] border-2 border-gray-200 rounded-md "
          type="text"
          ref={streetRef}
        ></input>
      </div>
      <div className="flex flex-col">
        <label className="font-bold font-serif">Postal Code</label>
        <input
          className="w-[40%] border-2 border-gray-200 rounded-md "
          type="text"
          ref={postRef}
        ></input>
      </div>
      <div className="flex flex-col">
        <label className="font-bold font-serif">City</label>
        <input
          className="w-[40%] border-2 border-gray-200 rounded-md "
          type="text"
          ref={cityRef}
        ></input>
      </div>
      <div className="flex justify-end gap-4">
        <button
          onClick={cancelButtonHandler}
          className="px-5 font-thin text-orange-400 rounded-xl border-[1px] border-orange-300"
        >
          cancel
        </button>
        <button
          className="px-5 font-normal text-white bg-orange-900 rounded-xl border-[1px] border-orange-300"
          type="submit"
        >
          Send Order
        </button>
      </div>
    </form>
  );
};

export default OrderForm;
