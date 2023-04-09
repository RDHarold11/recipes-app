import React from 'react'
import { useGlobalContext } from "../context";

const Button = ({ item, text}) => {
    const { filterRecipes } = useGlobalContext();
  return (
    <button
        type="button"
        className="bg-[#F7941D] text-white px-3 rounded-lg py-2"
        onClick={() => filterRecipes(item)}
      >
        {text}
      </button>
  )
}

export default Button