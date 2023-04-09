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
          strInstructions: instructions,
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
      <div className="grid lg:grid-cols-2  grid-cols-1 items-center px-6">
        <div>
          <img
            src={img}
            className="md:max-w-[500px] max-w-[400px] rounded"
            alt=""
          />
        </div>
        <header className="my-4">
          <div className="grid md:grid-cols-1 gap-4">
            <div className="flex items-center gap-3">
              <span className="bg-[#F7941D] text-white px-3 py-1 rounded-sm">
                Name:
              </span>
              <p className="font-bold">{name}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-[#F7941D] text-white px-3 py-1 rounded-sm">
                category:
              </span>
              <p className="font-bold">{category}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-[#F7941D] text-white px-3 py-1 rounded-sm">
                Area:
              </span>
              <p className="font-bold">{area}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-[#F7941D] text-white px-3 py-1 rounded-sm">
                Video:
              </span>
              <p className="font-bold">
                <a href={video} className="underline">
                  Click to see on youtube
                </a>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-[#F7941D] text-white px-3 py-1 rounded-sm">
                Ingredients:
              </span>
              <p className="font-bold">{ingredients + " , "}</p>
            </div>
          </div>
        </header>
      </div>
      <footer className="grid items-center justify-center grid-cols-1 px-6">
        <span className="bg-[#F7941D] md:max-w-[300px] mt-4 text-white px-3 py-1 rounded-sm mb-3">
          Instructions
        </span>
        <p className="max-w-[540px] md:max-w-[100%] mx-auto text-justify">
          {instructions}
        </p>
      </footer>
    </section>
  );
};

export default SingleRecipe;
