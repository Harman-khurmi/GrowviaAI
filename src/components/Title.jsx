import React from 'react'

const Title = ({ title, description, gradientText }) => {
  return (
    <>
      <h2>{title}<span className="gradient-primary pl-1 bg-clip-text text-transparent">{gradientText}</span></h2>
          <p className='dark:text-light-text-dull text-dark-text/75 w-[85%] md:w-[70%] lg:w-[50%]'>{description}</p>
    </>
  )
}

export default Title
