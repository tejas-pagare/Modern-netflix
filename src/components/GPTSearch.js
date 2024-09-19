import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_URL } from '../utils/constants'

function GPTSearch() {
  return (
    <div className=' w-full min-h-screen'>
      <div className=''>
        <img className='w-full min-h-screen object-cover fixed inset-0' src={BG_URL} />
      </div>
      <div className=' absolute w-full min-h-full '>

      <GptSearchBar/>
      <GptMovieSuggestions/>
      </div>
    </div>
  )
}

export default GPTSearch
