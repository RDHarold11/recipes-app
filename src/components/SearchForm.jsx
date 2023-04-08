import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setValue } = useGlobalContext();

  return (
    <div className="max-w-[700px] mx-auto pt-20">
      <form className="text-center">
        <div className="px-3">
          <label
            htmlFor="name"
            className="block text-xl text-[#DF4F5] font-bold"
          >
            Search a recipe
          </label>
          <input
            type="text"
            placeholder="ex. rice"
            id="name"
            onChange={(e) => setValue(e.target.value)}
            className="w-full px-3 py-2 mt-2 rounded-lg outline-none bg-[#FDF4F5]"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
