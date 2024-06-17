import React from 'react'

function Forecast({title, data}) {

    // const data = [1,2,3,4,5]

  return (
    <div>
        <div className='flex items-center justify-start  mt-6'>
            <p className='text-white font-medium uppercase' >{title}</p>
        </div>
        <hr className='my-2 font-medium'/> 

        <div className='flex items-center justify-between'>
            {data.map((d, index) => (
                <div key={index} className='flex flex-col items-center justify-center text-white '>
                    <p className='font-light text-sm ' >
                        {d.title}
                    </p>
                    <img 
                        src={d.icon}
                        alt='waeather icon'
                        className='w-20 my-0'
                    />
                    <p className='font-light text-sm ' >
                        {`${d.temp.toFixed()}°`}
                    </p>
                </div>
            ))}
        </div>   
    </div>
  )
}

export default Forecast