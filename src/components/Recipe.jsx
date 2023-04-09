import React from 'react'
import {BsBookmark} from "react-icons/bs"
import { Link, useFetcher } from 'react-router-dom'
import { useGlobalContext } from '../context'

const Recipe = ({id, name, img}) => {
  const {addToFavorites} = useGlobalContext()
  return (
    <div className='w-[100%] relative'>
      <div className='pb-2'>
        <img className='w-[500px] rounded-lg' src={img} alt={name}/>
      </div>
      <div>
        <p className='font-bold'>{name}</p>
        <button className='underline'><Link to={`/recipe/${id}`}>details</Link></button>
      </div>
      <div 
      className='absolute cursor-pointer top-2 left-2 bg-[#fff] hover:bg-[#FF7043] duration-75 ease-out text-dark px-3 py-3 rounded-full pointer'
      onClick={() => addToFavorites(id)}
      >
        <BsBookmark size={25} color='#333'></BsBookmark>
      </div>

    </div>
  )
}

export default Recipe