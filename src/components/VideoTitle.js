import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video absolute pt-[12%] pl-6 mt-20 text-white bg-gradient-to-r from-black'>
        <h1 className='text-6xl font-bold py-6'>{title}</h1>
        <h2 className='text-lg w-2/4'>{overview}</h2>
        <div className='m-3 my-4 ml-0'>
          <button className='border hover:bg-opacity-80 border-black p-2  bg-white px-14 text-lg text-black  rounded-lg'> 
            ▶ Play
            </button>
          <button className='border  border-black ml-3 p-2 bg-slate-500   px-14 text-lg text-white bg-opacity-70 rounded-lg'>More Info</button>
        </div>
        
    </div>
  )
}

export default VideoTitle