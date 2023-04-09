import React from 'react'
import Hero from '../components/Hero'
import SearchForm from '../components/SearchForm'
import RecipeContainer from '../components/RecipeContainer'
import Categories from '../components/Categories'
import { useGlobalContext } from '../context'


const Home = () => {
  const {ToastContainer, isDark} = useGlobalContext()
  return (
    <div className={isDark ? "bg-[#333] text-white" : ""}>
      <ToastContainer position="top-center"></ToastContainer>
      <Hero></Hero>
      <SearchForm></SearchForm>
      <Categories></Categories>
      <RecipeContainer></RecipeContainer>
    </div>
  )
}

export default Home