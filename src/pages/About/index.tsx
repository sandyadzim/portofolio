import React from 'react'

import aboutIcon from '../../assets/img/about.png'

function About() {
  return (
    <div className="flex items-center justify-center md:space-x-5 h-[80vh] flex-col md:flex-row fade-in">
      <div className="hidden md:flex justify-center md:w-1/2">
        <img src={aboutIcon} alt="about" />
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="font-bold text-green-dark-pastel text-3xl md:text-5xl text-center">
          About
        </h2>
        <div className="font-bold text-navy-pastel text-xl text-justify mt-6 md:mt-12">
          <p>
            A Front End Developer with 2+ years of professional experience, who
            creates web applications with Javascript Framework such as VueJS,
            ReactJS, Angular JS, etc.
          </p>
          <p className="mt-4">
            I'm just a SMK graduate majoring in TKJ which is not really related
            to my current job. But after I graduated, I attended a Full Stack
            Developer Bootcamp in Jakarta and until finally I was able to become
            what I am now, which is to become a Front End Developer.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
