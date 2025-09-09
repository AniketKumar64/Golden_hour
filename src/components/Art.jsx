import React from 'react'
import { featureLists, goodLists } from '../constants/index.js'
import { useMediaQuery } from 'react-responsive'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Art = () => {

    const isMobile = useMediaQuery({maxWidth: 768});


    useGSAP(()=>{
        const start = isMobile ? "top 20%" : "top top";


        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:"#art",
                start,
                end:"bottom center",
                scrub:1.5,
                pin:true,
            }

        })
        .to('.will-fade',
            {opacity:0, stagger:0.3, duration:1 ,ease:"power2.out"})
            .to('.masked-img',{
                scale:1.3,
                maskPosition:'center',
                maskSize:'400%',
                duration:3,
            })

            .to('#masked-content',{
                opacity:1,
                duration:2,
                ease:"power2.out",
            })

    })






  return (
<div id="art">
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
                <img src="/images/under-img.jpg" className='abs-center masked-img size-full object-contain' alt="" />
            </div> 
            
            <ul className="space-y-4 will-fade">
                {featureLists.map((item, index) => (
                    <li key={index} className='flex items-center gap-2 '>
                        
                        <img src="/images/check.png" alt="" />
                        <p className='md:w-fit w-60'>{item}</p>
                    </li>
                ))}
            </ul>
             </div>




            <div className="masked-container capitalize">
                <h2 className="will-fade">sip-worthy Perfection</h2>
                <div id='masked-content' className="  ">
                    <h3>made with craft poured with passion</h3>
                    <p className="">
                        Each cocktail is a masterpiece. Crafted with precision and poured with passion, 
                    </p>
                </div>

           

             </div>
    </div>
</div>  )
}

export default Art