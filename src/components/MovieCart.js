import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

function MovieCart({movie}) {
  
  return (
    <>
      <img className='w-36 px-2' src={IMG_CDN_URL+movie.poster_path} />
    </>
  )
}

export default MovieCart
