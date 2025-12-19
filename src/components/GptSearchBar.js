import React, { useRef } from 'react'
import openAi from '../utils/openAIi';



const GptSearchBar = () => {
    const searchText=useRef();

    const handleGptSearchClick= async()=>{
      //Make an api call to openAI and get movie result
      const completion = await openAi.chat.completions.create({
  model: 'gpt-4o',
  messages: [
    { role: 'developer', content: 'Talk like a pirate.' },
    { role: 'user', content: searchText.current.value },
  ],
});

// console.log(completion.choices[0].message.content);
    }
  return (
    <div className='pt-[8%] flex justify-center'>
        <form className=' w-1/2 bg-black grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchText} type='text' className='p-4 m-4 col-span-9' placeholder='What would you like to search today?' />
            <button className='py-2 px-4 bg-red-700 text-white m-4 col-span-3' onClick={handleGptSearchClick}>Search</button>
        </form>
    </div>
  )
}

export default GptSearchBar