import React, { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AppContext = React.createContext();
const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

const getLocalStorage = () => {
  let favorite = localStorage.getItem("favorites");
  if (favorite) {
    return JSON.parse(localStorage.getItem("favorites"));
  } else {
    return [];
  }
};

const getModeFromLocalStorage = () => {
  let dark = localStorage.getItem("darkMode");
  if (dark) {
    return JSON.parse(localStorage.getItem("darkMode"));
  } else {
    return false;
  }
};

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState(getLocalStorage());
  const [value, setValue] = useState("");
  const [isDark, setIsDark] = useState(getModeFromLocalStorage());

  const addToFavorites = (id) => {
    recipes.find((item, index) => {
      if (item.id === id) {
        setFavorites([...favorites, item]);
        toast.success("Add to favorites");
      }
    });
  };

  const toggleDark = () => {
    setIsDark(!isDark);
  };

  const filterRecipes = (category) => {
    if (category == "all") {
      fetchData();
      return;
    }
    const newRecipes = recipes.filter((item) => item.area === category);
    setRecipes(newRecipes);
  };

  const deleteFromFavorites = (id) => {
    const newFavoriteRecipe = favorites.filter((item) => item.id !== id);
    setFavorites(newFavoriteRecipe);
    toast.success("Removed from favorites!");
  };

  const fetchData = async () => {
    const response = await fetch(`${url}${value}`);
    const data = await response.json();
    const { meals } = data;
    if (meals) {
      const newRecipe = meals.map((item) => {
        const { idMeal, strMeal, strMealThumb, strArea } = item;
        return {
          id: idMeal,
          name: strMeal,
          img: strMealThumb,
          area: strArea,
        };
      });
      setRecipes(newRecipe);
    }
  };

  useEffect(() => {
    fetchData();
  }, [value]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDark));
  }, [isDark]);

  return (
    <AppContext.Provider
      value={{
        loading,
        recipes,
        setValue,
        useGlobalContext,
        favorites,
        addToFavorites,
        ToastContainer,
        isDark,
        toggleDark,
        filterRecipes,
        deleteFromFavorites,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
