import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

function MovieCart({movie}) {
  
  return (
    <>
     {movie.backdrop_path&& <img className='w-48 h-36 object-cover object-center px-2' src={IMG_CDN_URL+movie.backdrop_path} />}
    </>
  )
}

export default MovieCart
