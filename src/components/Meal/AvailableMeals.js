import MealItem from "./MealItem";
import Card from "../UI/Card";
import Loading from "../UI/Loading";
import useFetch from "../../hooks/use-fetch";
import { useEffect } from "react";

const AvailableMeals = () => {
  console.log("available meals start and start fetching");
  const { isLoading, error, data: meals, sendRequest } = useFetch("meals");

  useEffect(() => {
    sendRequest(
      "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
    );
  }, [sendRequest]);

  const fetchedMeals = !isLoading && meals.meals

  const listOfMeals = !isLoading && fetchedMeals?.map((item) => (
    <MealItem
      key={item.idMeal}
      title={item.strMeal}
      description={item.strArea }
      price={Math.ceil(Math.random()*1000+1)}
      id={item.idMeal}
    />
    
  ));

  const content = isLoading ? (
    <div className="flex flex-col justify-center items-center">
      <h1 className="Font-black text-2xl">Loading meals</h1>
      <Loading classes="w-20 h-20" />
    </div>
  ) : (
    listOfMeals
  );
  return <Card classes="w-[80%] mx-auto divide-y mt-8">{content}</Card>;
};

export default AvailableMeals;
