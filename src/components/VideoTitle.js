import React from 'react'
import { CiCircleInfo } from 'react-icons/ci'
import { FaPlay } from 'react-icons/fa'

function VideoTitle({ title, overview }) {
  return (
    <>
      <div className='w-screen aspect-video pt-[30%] sm:pt-[25%] px-4 absolute bg-gradient-to-t  from-black lg:-mt-20 '>

        <h1 className='text-2xl sm:text-5xl font-bold text-white'>
          {title}
        </h1>
        <p className='text-white text-sm hidden sm:block sm:w-[60%] lg:w-[40%] text-start sm-text-lg  font-semibold my-4'>
          {overview}
        </p>
        <div className='flex mt-4 items-center justify-start gap-2'>
          <div className='flex p-2 py-2 items-center justify-center bg-white text-black  rounded-md cursor-pointer'>
            <FaPlay className='text-xs ' />
            <button className='  bold  font-semibold '>
              Watch Now
            </button>
          </div>
          <div className='flex items-center justify-center gap-1  cursor-pointer bg-gray-500 bg-opacity-50 p-2 py-2  rounded-md '>
          <CiCircleInfo className='text-gray-100 ' />
          <button className='block text-white font-semibold '>
            More Info
          </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default VideoTitle


