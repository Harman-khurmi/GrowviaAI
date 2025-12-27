import React from 'react'
// eslint-disable-next-line no-unused-vars
import { easeIn, motion } from 'motion/react';
const WorkCard = ({ image, title, description }) => {
    return (
        <motion.div
        // animate={{ opacity: 1, y: 0 }}
            // initial={{ opacity: 0, y: 30 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: true, amount: 0.3 }}
            // transition={{ duration: 0.5, delay: index * 0.2, ease:easeIn}}
            className='flex flex-col items-start text-left mx-auto justify-center hover:scale-[1.02] transition-all duration-400   '>
            <img src={image} alt={title} className="size-full md:size-full rounded-lg shadow-lg hover:shadow-xl dark:hover:shadow-border-light/70 hover:shadow-border-light/20  " />

            <h3 className="text-base font-semibold mt-4">{title}</h3>
            <p className="text-sm ">{description}</p>

        </motion.div>
    )
}

export default WorkCard
