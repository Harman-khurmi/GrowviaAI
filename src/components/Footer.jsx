import React from 'react'
import assets, { icons, navItems, socialMedia } from '../assets/assets'
import Button from './Button'
// eslint-disable-next-line no-unused-vars
import { easeIn, motion } from 'motion/react';
const Footer = ({ theme }) => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className='bg-primary/6'>
            <div
                className='flex flex-col text-center gap-3 md:justify-around mx-auto px-6 py-12 mt-6 md:mt-8 lg:mt-12 md:w-[98%] lg:w-[85%]'>
                <div className='flex flex-col md:flex-row md:items-start justify-around gap-8'>

                    {/* logo + tagline + navitems */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        // animate={{ opacity: 1, x: 0 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.2, ease:easeIn }}
                        className='flex flex-col gap-3 w-full'>
                        {/* logo */}
                        <a href="#">
                            <img loading="lazy"
                                src={theme === "dark" ? assets.lightLogo : assets.darkLogo}
                                alt="logo"
                                draggable="false"
                                className="max-w-32 "
                            />
                        </a>
                        <p className='text-left lg:text-base w-[75%] md:w-[90%] lg:w-[50%]'>From strategy to execution, we craft digital solutions that move your business forward.</p>
                        <div className='flex gap-4 text-sm md:text-base mt-2'>
                            {navItems.map((item, index) => {
                                return (
                                    <a key={index} href={item.link} className="hover:text-primary active:text-primary">
                                        {item.name}
                                    </a>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Newsletter */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        // animate={{ opacity: 1, x: 0 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.3, ease:easeIn }}
                        className='items-start gap-3 flex flex-col'>
                        <div className='text-start flex flex-col items-start justify-center content-start'>
                            <h4 className='font-semibold'>Subscribe to our Newsletter</h4>
                            <p className='lg:text-sm'>The latest news, articles, and resources, sent to your inbox weekly.</p>
                        </div>
                        <div className='flex flex-1 gap-3'>
                            <input type="text" className='w-48 sm:w-50 md:w-60 lg:w-72 pl-2' placeholder='Enter your Email' />
                            <Button text={"Subscribe"} icon={icons.arrowRightIcon} />
                        </div>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    // animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.35 , ease:easeIn }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className='flex flex-col '>
                    <hr className='border-t-secondary/40 my-4 md:my-6' />
                    <div className='flex flex-col gap-3 md:gap-0 items-center md:flex-row md:justify-between'>
                        <div className='text-text-secondary/60 dark:text-light-text-dull text-sm'>Copyright 2025 © Growvia.ai  -  All Right Reserved.</div>
                        <div className='flex items-center gap-3'>
                            {socialMedia.map((item, index) => (
                                <a key={index} href={item.link}>
                                    <img loading="lazy" src={item.icon} alt={item.name} />
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    )
}

export default Footer
