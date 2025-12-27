import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';

const Title = ({ title, description, gradientText }) => {
  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >{title}<span className="gradient-primary pl-1 bg-clip-text text-transparent">{gradientText}</span></motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 , delay : 0.2}}
        viewport={{ once: true }}
        className='dark:text-light-text-dull text-dark-text/75 w-[85%] md:w-[70%] lg:w-[50%]'>{description}</motion.p>
    </>
  )
}

export default Title
