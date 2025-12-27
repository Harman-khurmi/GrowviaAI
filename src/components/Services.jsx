import Title from './Title'
import {serviceDate} from '../assets/assets'
import ServiceCard from './ServiceCard'
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';

const Services = () => {
    return (
        <>
            <section id='Services'>
                <div
                    // initial="hidden"
                    // whileInView="visible"
                    // viewport={{ once: true }}
                    // transition={{staggerChildren:0.2}}
                    className="container flex flex-col text-center gap-3 items-center justify-center mx-auto px-6 py-12 mt-6 md:mt-8 lg:mt-12">
                    <Title title="How can we help you grow?" description="From strategy to execution, we design and scale advertising systems that turn visibility into revenue and growth." />
                    <motion.div
                        
                        className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 mt-6 md:mt-8 lg:mt-12 w-min-[90%] lg:w-[75%] '>
                        {serviceDate.map((service, index) => (
                            <ServiceCard key={index} index={index} title={service.title} description={service.description} icon={service.icon} />
                        ))}
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default Services
