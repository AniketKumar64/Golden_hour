import React, { useRef, useState } from 'react'
import { sliderLists } from '../constants'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Menu = () => {

    const contentRef = useRef(null);
    
    const [currentIndex, setCurrentIndex] = useState(0)


    useGSAP(()=>{
        gsap.fromTo('#title',{
            opacity:0,
            
        },{duration:0.5, opacity:1}
    
    )
    gsap.fromTo('.cocktail img',{
        opacity:0,
        xPercent:-100,},{
            xPercent:0,
            opacity:1,
            duration:0.5,
            ease:"power2.inOut",
        }
    )

    gsap.fromTo('.details h2',{
        yPercent:100,
        opacity:0,
    },{ yPercent:0,
        opacity:1,
        duration:0.5,
        ease:"power2.inOut",
        delay:0.3,
    }
    )
    gsap.fromTo('.details p',{
        yPercent:100,
        opacity:0,

    },{ yPercent:0,
        opacity:1,
        duration:0.5,
        ease:"power2.inOut",
        delay:0.3,
    }
)
    },[currentIndex])




    const gotoslide = (index) =>{
        const newIIndex = (index + sliderLists.length) % sliderLists.length;
        setCurrentIndex(newIIndex);
    }



    const getCocktailAt =(index)=>{
        return sliderLists[(currentIndex + index + sliderLists.length) % sliderLists.length];
    }

    const currentCocktail = getCocktailAt(0);
    const nextCocktail = getCocktailAt(1);
    const prevCocktail = getCocktailAt(-1);

  return (
    <section id='menu' aria-labelledby='menu-heading' >
        <img src="/images/slider-left-leaf.png" id='m-left-leaf' alt="" />
        <img src="/images/slider-right-leaf.png" id='m-right-leaf' alt="" />

        <h2 id="menu-heading" className='sr-only'>Our Menu</h2>

        <nav className="cocktail-tabs" aria-label='Cocktail Navigation'>
            {sliderLists.map((item,idx)=>{
                const isActive = idx === currentIndex;

                return(
                    <button
                    key={item.id}
                    className={`${isActive ? 'text-white border-white' : 'text-white/50 border-white/50'}`}

                onClick={()=>gotoslide(idx)}
                >
                    {item.title}
                </button>
                )
            })}
        </nav>


<div className="content">
    <div className="arrows">
        <button className='text-left ' onClick={()=>gotoslide(currentIndex -1)}>
           <span>{prevCocktail.title}</span>
           <img src="/images/right-arrow.png" aria-hidden="true" alt="" />
        </button>
                <button className='text-left ' onClick={()=>gotoslide(currentIndex + 1)}>
           <span>{nextCocktail.title}</span>
           <img src="/images/left-arrow.png" aria-hidden="true" alt="" />
        </button>
    </div>

<div className="cocktail">
    <img src={sliderLists[currentIndex].image} className='object-contain' alt="" />
</div>

<div className="recipe">
    <div className="info" ref={contentRef}>
        <p>Recipe for:</p>
        <p id="title">{currentCocktail.title}</p>
    </div>
    <div className="details">
        <h2>{currentCocktail.title}</h2>
        <p>{currentCocktail.description}</p>
        <button className='uppercase'>view full menu</button>
    </div>

</div>


</div>


    </section>
  )
}

export default Menu