import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Tutorial = () => {

    useGSAP(()=>{
      gsap.to('#blue',{
        x:250,
        repeat:-1,
        yoyo:true,
      })
    },[])



    const timeLine=gsap.timeline({
      repeat:-1,repeatDelay:1, yoy:true,
    });

    useGSAP(()=>{
      timeLine.to('#yellow',{
        x:250,
        rotation:360,
        borderRadius:'100%',
        duration:2,
        ease:'back.inOut'
      })

      timeLine.to('#yellow',{
        x:500,
        scale:1,
        rotation:360,
        borderRadius:'8px',
        duration:2,
        ease:'back.inOut'
        
      })



    },[])

    // gsapstagger


    useGSAP(()=>{
      gsap.to('#stagger',{
        y:250,
        rotation:360,
        borderRadius:'100%',
        repeat:-1,

        yoyo:true,

        stagger:{
          amount:1.5,
          grid:[2,1],
          axis:'y',
          
        }
      })
    })




  return (
<div className="min-h-screen">
      <div id='blue' className='bg-blue-500 h-20 w-20 rounded-lg'>
        
        
      </div>
      <div id='yellow' className='bg-yellow-500 h-20 w-20 rounded-lg'>
</div>


<div  className=" flex gap-3">
  <div id='stagger' className='bg-yellow-500 h-20 w-20 rounded-lg'>
</div>
<div id='stagger'  className='bg-yellow-500 h-20 w-20 rounded-lg'>
</div><div id='stagger'  className='bg-yellow-500 h-20 w-20 rounded-lg'>
</div><div  id='stagger'  className='bg-yellow-500 h-20 w-20 rounded-lg'>
</div>
  
</div>
</div>    
  )
}

export default Tutorial