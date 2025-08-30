import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import React from 'react'

const About = () => {

    useGSAP(()=>{
        const titlesplit = SplitText.create('#about h2' ,
            {
                type:'words',
            }
        )
        const scrolltl = gsap.timeline({
            scrollTrigger: {
                trigger: '#about',
                start: 'top center',
                end: 'bottom top',
                scrub: true
            }
        })

        scrolltl.from(titlesplit.words,{
        opacity:0,
        duration:1,
        yPercent:100,
        ease:'expo.out',
        stagger:0.02


    })
   .from('.top-grid div, .bottom-grid div', {
        opacity: 0,
        duration: 1,
        yPercent: 100,
        ease: 'power1.out',
        stagger: 0.04
    },'-=0.5')

    



    },[])


    return (
        <div id="about">
            <div className="mb-16 md:px- px-5 ">
                <div className="content">
                    <div className="md:col-span-8">
                        <h2>
                            Where every detail matters <span className="text-white">-</span>
                            from muddle to garnish
                        </h2>
                    </div>
                    <div className="sub-content">
                        <p>
                            We believe that the journey of a thousand miles begins with a single step, and we are here to guide you every step of the way.
                            Our team is dedicated to providing personalized support and expert advice, ensuring that your experience is smooth and enjoyable.
                        </p>
                        <div className="">
                            <p className="md:text-3xl text-xl font-bold">
                                <span>4.5 </span>/5

                            </p>
                            <p className="text-sm text-white-100">more then 12000+ customers served</p>
                        </div>
                    </div>
                </div>

                <div className="top-grid">
                    <div className="md:col-span-3">
                        <div className="noisy">
                            <img src="/images/abt5.png" alt="" />
                        </div>
                    </div>




                    <div className="md:col-span-6">
                        <div className="noisy">
                            <img src="/images/abt1.png" alt="" />
                        </div>
                    </div>
                    <div className="md:col-span-3">
                        <div className="noisy">
                            <img src="/images/abt5.png" alt="" />
                        </div>
                    </div>


                </div>

                <div className="bottom-grid">
                    <div className="md:col-span-8">
                        <div className="noisy">
                            <img src="/images/abt2.png" alt="" />
                        </div>
                    </div>

                    <div className="md:col-span-4">
                        <div className="noisy">
                            <img src="/images/abt3.png" alt="" />
                        </div>
                    </div>
                </div>








            </div>
        </div>
 )
}

export default About