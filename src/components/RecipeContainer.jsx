import React from 'react'
import { useGlobalContext } from '../context'
import Loading from './Loading'
import Recipe from "./Recipe"

const RecipeContainer = () => {
  
  const {loading, recipes} = useGlobalContext()

  if(loading){
    return <Loading></Loading>
  }
   if(recipes.length < 1){
    return <h2 className='text-center text-2xl'>There's no recipes</h2>
  } 
  return (
    <section className='px-4 max-w-[1100px] mx-auto grid md:grid-cols-5 grid-cols-2 items-center justify-between gap-3 pt-[60px] pb-10'>
      {
        recipes.map((item) => {
          return <Recipe key={item.id} {...item}></Recipe>
        })
      }
    </section>
  )
}

export default RecipeContainer