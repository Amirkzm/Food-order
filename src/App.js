import CartList from "./components/Cart/CartList";
import Header from "./components/Layout/Header";
import MealSummary from "./components/Layout/MealSummary";
import AvailableMeals from "./components/Meal/AvailableMeals";

function App() {
  return (
    <div className="relative w-screen h-screen bg-neutral-700 overflow-scroll">
      <Header></Header>
      <MealSummary />
      <AvailableMeals />
      <CartList />
    </div>
  );
}

export default App;
