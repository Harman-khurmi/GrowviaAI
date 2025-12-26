import React from 'react'

const WorkCard = ({ image, title, description }) => {
    return (
        <div className='flex flex-col items-start text-left mx-auto justify-center hover:scale-[1.02] transition-all duration-400   '>
            <img src={image} alt={title} className="size-full md:size-full rounded-lg shadow-lg hover:shadow-xl dark:hover:shadow-border-light/70 hover:shadow-border-light/20  " />

            <h3 className="text-base font-semibold mt-4">{title}</h3>
            <p className="text-sm ">{description}</p>

        </div>
    )
}

export default WorkCard
