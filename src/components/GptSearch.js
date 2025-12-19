import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'

const GptSearch = () => {
  return (
    <div>
      <div   style={{
        backgroundImage:
          "url('https://assets.nflxext.com/ffe/siteui/vlv3/c81956f1-5750-454c-9b3c-7a4d990d3d06/web/IN-en-20251208-TRIFECTA-perspective_d69f5f82-9a35-45d7-a7b6-9af6e0643bf5_large.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        
        height: "100vh",
      }} >
      <GptSearchBar/>
      <GptMovieSuggestion/>
    </div>
    </div>
  )
}

export default GptSearch