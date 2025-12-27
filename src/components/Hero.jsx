import React from 'react'
import assets from '../assets/assets';
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';
const Hero = () => {
    return (
        <>
            <section id='Hero' className='relative '>
                <div className="container z-1 relative items-center flex flex-col mx-auto px-6 py-16 text-center gap-4 md:gap-5 lg:gap-7">

                    {/* gradient images */}
                    <motion.img
                        initial={{ opacity: 0 }}
                        // animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        src={assets.greenGradientDark} alt="Green Gradient Dark" draggable="false" className='green-gradient' />
                    <motion.img
                        initial={{ opacity: 0 }}
                        // animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        src={assets.blueGradientDark} alt="Blue Gradient Dark" draggable="false" className='blue-gradient' />

                    {/* main content */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        viewport={{ once: true }}
                        className='flex items-center justify-center border border-border-light dark:border-border/80 gap-2 py-1 px-3 rounded-full'>
                        <img src={assets.trustedPeople} alt="Trusted People" />
                        <p>Trusted by 15k+ people</p>
                    </motion.div>

                    <div
                        className='flex flex-col gap-4 items-center justify-center text-center'>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            viewport={{ once: true }}
                            className='md:max-w-180 lg:max-w-260'>Advertising that drives <span className='bg-clip-text text-transparent gradient-primary'>sustainable</span> business growth.</motion.h1>
                        <motion.h3
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.9 }}
                            viewport={{ once: true }}
                            className='max-w-100 md:max-w-160 lg:max-w-200'>We help businesses grow faster through data-driven advertising and performance-focused strategies.</motion.h3>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 1.1 }}
                        viewport={{ once: true }}
                        className='lg:w-[80%] md:h-100 lg:h-150 items-center justify-center'>
                        <img src={assets.heroImage} alt="Hero Image" className='flex lg:rounded-4xl rounded-xl object-cover size-full object-bottom' />
                    </motion.div>
                    {/* main content ends */}
                </div>
            </section>
        </>
    )
}

export default Hero
