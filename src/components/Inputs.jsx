import React, { useState } from 'react'

import { BiCurrentLocation, BiSearch } from 'react-icons/bi'

function Inputs({setQuery, setUnits}) {

    const [city, setCity] = useState("")

    const handleSearchClick = () => {
        if(city !== "") setQuery({q: city})
    }

    const handleLocationClick = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const {latitude, longitude} = position.coords
                setQuery({lat: latitude, lon: longitude})
            })
        }
    }

  return (
    <div className='flex flex-row justify-center my-6'>

        <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
          <input 
              type='text'
              value={city}
              onChange={(e) => setCity(e.currentTarget.value)}
              placeholder='search for city...'
              className='text-xl rounded-md font-light p-2 w-full shadow-xl capitalize placeholder:lowercase focus:outline-none '
          />
          <BiSearch 
            size={40}
            onClick={handleSearchClick}
            className='text-white cursor-pointer transition ease-out hover:scale-125'  
          />
          <BiCurrentLocation
          onClick={handleLocationClick}
            size={40}
            className='text-white cursor-pointer transition ease-out hover:scale-125'
          />
        </div>

        <div className='flex flex-row w-1/4 items-center justify-center space-x-2' >
          <button name='metric' className='text-2xl text-white font-light hover:scale-125' onClick={() => setUnits("metric")}  >°C</button> 
          <p className='text-2xl text-white mx-1' >|</p>
          <button name='imperial' className='text-2xl text-white font-light hover:scale-125' onClick={() => setUnits("imperial")} >°F</button>      
        </div>

    </div>
  )
}

export default Inputs