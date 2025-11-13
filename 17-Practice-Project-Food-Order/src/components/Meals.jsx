import { useState, useEffect } from "react";

import MealItem from "./MealItem.jsx";

export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async function () {
      const response = await fetch("http://localhost:3000/meals");

      if (!response.ok) {

      }
      const mealsData = await response.json();

      setLoadedMeals(mealsData);
    }

    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}