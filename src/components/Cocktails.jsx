import React from 'react'
import {cocktailLists,mockTailLists} from '../constants/index.js'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Cocktails = () => {

    useGSAP(()=>{
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#cocktails',
                start: 'top 30%',
                end: 'bottom 80%',
                scrub: true
            }
        });
        tl.fromTo('#c-left-leaf',{x:-100 , y:100},{x:0 , y:0 , duration:1.5})
        tl.fromTo('#c-right-leaf',{x:100 , y:100},{x:0 , y:0 , duration:1.5})
    })




  return (
<section id='cocktails' className='noisy'>
    <img src="/images/cocktail-left-leaf.png" alt=""  id='c-left-leaf'/>
    <img src="/images/cocktail-right-leaf.png" alt=""  id='c-right-leaf'/>


    <div className="list">
        <div className="popular">
            <h2>Most popular Cocktails:</h2>

            <ul>
                {cocktailLists.map((cocktail, index) => (
                    <li key={index}>
                        <div className="md:me-28">
                            <h3>{cocktail.name}</h3>
                        <p>{cocktail.country} | {cocktail.detail}</p>
                        </div>
                        <span>{cocktail.price}</span>
                    </li>
                ))}
            </ul>
        </div>
         <div className="popular">
            <h2>Most popular mockTails:</h2>

            <ul>
                {mockTailLists.map((cocktail, index) => (
                    <li key={index}>
                        <div className="md:me-28">
                            <h3>{cocktail.name}</h3>
                        <p>{cocktail.country} | {cocktail.detail}</p>
                        </div>
                        <span>{cocktail.price}</span>
                    </li>
                ))}
            </ul>
        </div>
     
    </div>

</section>  )
}

export default Cocktails