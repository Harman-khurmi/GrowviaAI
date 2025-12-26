import React from 'react'
import assets from '../assets/assets';
const Hero = () => {
    return (
        <>
            <section id='Hero' className='relative '>
                <div className="container z-1 relative items-center flex flex-col mx-auto px-6 py-16 text-center gap-4 md:gap-5 lg:gap-7">
                    <img src={assets.greenGradientDark} alt="Green Gradient Dark" draggable="false" className='absolute top-28 -right-40 md:-top-15 md:-right-80 lg:-top-20 lg:-right-100  -z-1 ' />

                    <img src={assets.blueGradientDark} alt="Blue Gradient Dark" draggable="false" className='absolute top-90 -left-40 md:top-80 md:-left-60 lg:top-140 lg:-left-70 -z-1' />

                    <div className='flex items-center justify-center border border-border-light dark:border-border/80 gap-2 py-1 px-3 rounded-full'>
                        <img src={assets.trustedPeople} alt="Trusted People" />
                        <p>Trusted by 15k+ people</p>
                    </div>
                    <div className='flex flex-col gap-4 items-center justify-center text-center'>
                        <h1 className='md:max-w-180 lg:max-w-260'>Advertising that drives <span className='bg-clip-text text-transparent gradient-primary'>sustainable</span> business growth.</h1>
                        <h3 className='max-w-100 md:max-w-160 lg:max-w-200'>We help businesses grow faster through data-driven advertising and performance-focused strategies.</h3>
                    </div>
                    <div className='lg:w-[80%] md:h-100 lg:h-150 items-center justify-center'><img src={assets.heroImage} alt="Hero Image" className='flex lg:rounded-4xl rounded-xl object-cover size-full object-bottom' /></div>
                </div>
            </section>
        </>
    )
}

export default Hero
