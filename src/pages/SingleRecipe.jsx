import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleRecipe = () => {
  const { id } = useParams();
  const [singleRecipe, setSingleRecipe] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await response.json();
      if (data.meals) {
        const {
          idMeal: idRecipe,
          strMeal: name,
          strCategory: category,
          strArea: area,
          strIntructions: instructions,
          strMealThumb: img,
          strYoutube: video,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
          strIngredient6,
          strIngredient7,
        } = data.meals[0];
        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
          strIngredient6,
          strIngredient7,
        ];
        const newRecipe = {
          idRecipe,
          name,
          category,
          area,
          instructions,
          img,
          video,
          ingredients,
        };
        setSingleRecipe(newRecipe);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  if (!singleRecipe) {
    return <h2>Nothing to display</h2>;
  }

  const {
    idRecipe,
    name,
    category,
    area,
    instructions,
    img,
    video,
    ingredients,
  } = singleRecipe;
  return (
    <section className="pt-10 max-w-[1200px] mx-auto">
      <div className="grid md:grid-cols-2">
        <div>
          <img
            src={img}
            className="max-w-[500px] rounded max-h-[100%]"
            alt=""
          />
        </div>
        <header>
          <div className="grid grid-cols-3 gap-3 bg-[#FFFBF5]">
            <div className=" rounded-sm">
              <h2 className="">Name recipe</h2>
              {name}
            </div>
            <div className="rounded-sm">
              <h2 className="">Category</h2>
              {category}
            </div>
            <div className="rounded-sm">
              <h2 className="">Area</h2>
              {area}
            </div>
          </div>
        </header>
      </div>
    </section>
  );
};

export default SingleRecipe;
