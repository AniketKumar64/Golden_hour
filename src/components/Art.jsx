import React from 'react'
import { goodLists } from '../constants/index.js'
import { Features } from 'tailwindcss'

const Art = () => {
  return (
<div className="art">
    <div className="container mx-auto h-full pt-20">
        <h2 className='will-fade'>Art Section</h2>

        <div className="content">
            <ul className="space-y-4 will-fade">
                {goodLists.map((item, index) => (
                    <li key={index} className='flex items-center gap-2 '>
                        
                        <img src="/images/check.png" alt="" />
                        <p className='md:w-fit w-60'>{item}</p>
                    </li>
                ))}
            </ul>
            <div className="cocktail-img">
                <img src="/images/under-img.jpg" alt="" />
            </div>
        </div>
    </div>
</div>  )
}

export default Art