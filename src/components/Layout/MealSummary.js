const MealSummary = () => {
  return (
    <div className="w-[50%] h-[20%] absolute top-[40%] left-[50%] p-2 translate-x-[-50%] translate-y-[-50%] text-center bg-slate-900 text-white rounded-2xl space-y-4" style={{minWidth:"350px"}}>
      <h2 className="text-3xl font-black">Delicious Food, Delivered To You</h2>
      <p className="text-center">
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p className="hidden lg:block">
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </div>
  );
};

export default MealSummary;
