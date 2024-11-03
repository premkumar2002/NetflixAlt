import React from 'react'
import {IMG_CDN} from "../utils/constants"

export const MovieCard = ({path}) => {
  return (
    <div className='w-40'>
        <img alt="movie card" src={IMG_CDN + path } />
    </div>
  )
}

export default MovieCard;
