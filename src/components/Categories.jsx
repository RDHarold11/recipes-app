import React from "react";
import { useGlobalContext } from "../context";

const Categories = () => {
  const { categories, filterRecipes } = useGlobalContext();
  return (
    <div className="max-w-[700px] pt-10 mx-auto px-3">
      {categories.map((item, index) => (
        <button
          type="button"
          key={index}
          className="bg-[#FDF4F5] px-4 rounded-sm py-2"
          onClick={() => filterRecipes(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Categories;

{
  /* {categories.map((item, index) => {
            return <button type='button' key={index} className='bg-[#FDF4F5] px-4 rounded-sm py-2' onClick={() => filterRecipes(item)}>{item}</button>
        })} */
}
