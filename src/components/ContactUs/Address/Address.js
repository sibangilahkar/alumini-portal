import React from 'react'
import Mapp from '../../../image/map.png';
import Adress from '../../../image/images.jpg'

function Address() {
  return (
    <div className='h-96 w-80 flex flex-col flex-nowrap shadow-xl shadow-slate-750'>
    <div className='h-36 w-80  '>
      
      <img
        src={Mapp}
        className=" h-36 w-80"
        alt="..."
      />
    </div>

    <div className=' h-60 w-80  '>
    <img src={Adress} 
        className=" h-60 w-80"
        alt="..."/>
    </div>
    
    </div>
    
  )
}

export default Address
