import React from 'react'
import Title from './Title'
import { ourWork } from '../assets/assets'
import WorkCard from './WorkCard'
// eslint-disable-next-line no-unused-vars
import { easeInOut, motion } from 'motion/react';

const OurWork = () => {
    return (
        <section id="OurWork">
            <motion.div
                initial="hidden"
                whileInView="visible"
                transition={{ staggerChildren: 0.2 }}
                viewport={{ once: true }}
                className="container flex flex-col text-center gap-3 items-center justify-center mx-auto px-6 py-12 mt-6 md:mt-8 lg:mt-12">
                <Title title="Our latest work" description="Real growth stories built through strategy, creativity, and data-driven advertising." />

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-x-8 lg:gap-10 w-[85%] lg:w-[70%] mx-auto items-start justify-center content-center'>
                    {ourWork.map((work, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: index * 0.2, ease:easeInOut }}
                            key={index} className="mt-8 md:mt-10 lg:mt-12 flex items-center justify-center">
                            <WorkCard image={work.image} index={index} title={work.title} description={work.description} />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

export default OurWork
