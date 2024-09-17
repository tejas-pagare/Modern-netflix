import React from 'react'
import lang from '../utils/languageConstant'
import { useSelector } from 'react-redux'

function GptSearchBar() {
  const language = useSelector((store)=>store.config.language)
  console.log(language,lang)
  return (
    <div className='pt-20 flex justify-center'>
      <form className='text-center py-3 rounded-md flex gap-2 items-center justify-center bg-black w-[80%] sm:w-[60%]'>
        <input className='sx md:text-lg py-2 rounded-[10px] w-[80%]  text-center font-semibold outline-none' type="text" placeholder={lang[language].gptSearchPlaceholder}/>
        <button className='py-3 px-6  bg-red-600 text-white font-bold rounded-[10px] ' type="submit">{lang[language].search}</button>
      </form>

    </div>
  )
}

export default GptSearchBar
