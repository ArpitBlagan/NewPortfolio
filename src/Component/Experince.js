import React from 'react'

export const Experince = () => {
  return (
    <section id="experince" >
    <div className='text-center'><h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Experince
          </h1></div>
    <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col justify-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          React-JS Intern
          <br className="hidden lg:inline-block" />at Penthara Technologies.
        </h1>
        <p className="mb-8 leading-relaxed">
          In this internship I learn about sharepoint frame work and Power app.
        </p>
      
      </div>
       <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa1RatzOh3CZbrDj60CVI6vx-H1Ftt2WchABx5u2KYpg&s"
          />
        </div>
      </div>
    </section>
  )
}
