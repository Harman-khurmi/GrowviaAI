import Title from './Title'
import {serviceDate} from '../assets/assets'
import ServiceCard from './ServiceCard'
const Services = () => {
    return (
        <>
            <section id='Services'>
                <div className="container flex flex-col text-center gap-3 items-center justify-center mx-auto px-6 py-12 mt-6 md:mt-8 lg:mt-12">
                    <Title title="How can we help you grow?" description="From strategy to execution, we design and scale advertising systems that turn visibility into revenue and growth." />
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 mt-6 md:mt-8 lg:mt-12 w-min-[90%] lg:w-[75%] '>
                        {serviceDate.map((service, index) => (
                            <ServiceCard key={index} title={service.title} description={service.description} icon={service.icon} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services
