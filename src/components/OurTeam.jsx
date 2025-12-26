import React from 'react'
import Title from './Title'
import { teamData } from '../assets/assets'
const OurTeam = () => {
  return (
    <section id="OurTeam">
      <div className='container flex flex-col text-center gap-3 items-center justify-center mx-auto px-6 py-12 mt-6 md:mt-8 lg:mt-12'>

        <Title title={"Meet the team behind"} description={"A focused team of growth strategists, advertisers, and AI specialists dedicated to helping brands scale intelligently."} gradientText={"Growvia.ai"} />

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-stretch justify-center gap-4 md:gap-6 mt-6 md:mt-8 lg:mt-12 '>
          {teamData.map((member, index) => (

            <div key={index} className='team-card'>
              <img src={member.image} alt={member.name} className='size-12 md:size-14 lg:size-16  rounded-full shrink-0 object-cover object-top' />
              <div className='md:text-left '>
                <h3 className='text-xs shrink-0 md:text-base font-semibold '>{member.name}</h3>
                <p className='text-text-secondary dark:text-light-text-dull text-xs '>{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurTeam
