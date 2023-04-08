import React from "react";
import { Link } from "react-router-dom";
import { BsBookmark } from "react-icons/bs";
import { MdDeleteOutline } from "react-icons/md";
import { useGlobalContext } from "../context";

const FavoriteRecipe = ({ img, name, id }) => {
  const { deleteFromFavorites, ToastContainer } = useGlobalContext();
  return (
    <div className="w-[100%] relative">
      <ToastContainer position="top-center"></ToastContainer>
      <div className="pb-2">
        <img className="w-[500px] rounded-lg" src={img} alt={name} />
      </div>
      <div>
        <p className="font-bold">{name}</p>
        <button className="underline">
          <Link to={`/recipe/${id}`}>details</Link>
        </button>
      </div>
      <div
        className="absolute cursor-pointer top-2 left-2 bg-[#fff] hover:bg-[#FF7043] duration-75 ease-out text-dark px-3 py-3 rounded-full pointer"
        onClick={() => deleteFromFavorites(id)}
      >
        <MdDeleteOutline size={25}></MdDeleteOutline>
      </div>
    </div>
  );
};

export default FavoriteRecipe;
