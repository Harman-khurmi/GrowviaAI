import React from 'react'
import { company_logos } from '../assets/assets'


const TrustedBy = () => {
    return (
        <>
            <section>
                <div className=" z-1 relative container items-center flex flex-col mx-auto px-6 text-center gap-3 mt-2 md:mt-8 lg:mt-12">
                    <h3 className=''>Trusted by forward-thinking companies and startups</h3>
                    <div className='grid gap-x-8 md:gap-x-10 lg:gap-x-12 grid-cols-2 md:grid-cols-3 lg:grid-cols-6'>
                        {/* Company logos */}
                        {company_logos.map((logo, index) => (
                            <div key={index} className='flex items-center justify-center '>
                                <img src={logo} alt={`Company Logo ${index + 1}`} className='max-w-20 md:max-w-22 lg:max-w-28' />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default TrustedBy
