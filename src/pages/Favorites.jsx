import React from 'react'
import { useGlobalContext } from '../context'
import FavoriteRecipe from '../components/FavoriteRecipe'

const Favorites = () => {
  const {favorites} = useGlobalContext()
  console.log(favorites)
  if(favorites.length < 1){
    return <h2 className='text-center'>Nothing to display</h2>
  }
  return (
    <article className='pt-20 px-5 max-w-[1100px] mx-auto gap-3 grid md:grid-cols-3 items-center justify-center'>
      {favorites.map((item) => {
      return <FavoriteRecipe key={item.id} {...item}></FavoriteRecipe>
      })}
    </article>
  )
}

export default Favorites