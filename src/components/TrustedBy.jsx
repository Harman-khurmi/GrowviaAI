import React from 'react'
import { company_logos } from '../assets/assets'
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';

const TrustedBy = () => {
    return (
        <>
            <section>
                <div className=" z-1 relative container items-center flex flex-col mx-auto px-6 text-center gap-3 mt-2 md:mt-8 lg:mt-12">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className=''>Trusted by forward-thinking companies and startups</motion.h3>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        transition={{ staggerChildren: 0.1, delay: 0.6 }}
                        viewport={{ once: true }}
                        className='grid gap-x-8 md:gap-x-10 lg:gap-x-12 grid-cols-2 md:grid-cols-3 lg:grid-cols-6'>
                        {/* Company logos */}
                        {company_logos.map((logo, index) => (
                            <motion.div
                                
                                key={index} className='flex items-center justify-center '>
                                <motion.img
                                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                                    transition={{ duration: 0.5  }}
                                    src={logo} alt={`Company Logo ${index + 1}`} className='max-w-20 md:max-w-22 lg:max-w-28' />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default TrustedBy
